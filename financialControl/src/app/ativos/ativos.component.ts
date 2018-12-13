import { Component, OnInit } from '@angular/core';
import { AtivosService } from '../Services/ativos.service';



@Component({
  selector: 'ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {

  constructor(
    private AtivosService: AtivosService,
  ) { }
  public ativos: any = []; // Vetor vazio

  ngOnInit() {
    this.AtivosService.listar().subscribe(
      dados => {
        this.ativos = dados;
        // console.log(this.ativos);
      },
      erro => console.error(erro)
    );
  
  }

  deletar(codigo){
    this.AtivosService.deletar(codigo).subscribe(
      dados => {
        this.AtivosService.listar().subscribe(
          dados => {
            location.reload();
            this.ativos = dados;
            // console.log(this.ativos);
          },
          erro => console.error(erro)
        );
      },
      erro => console.error(erro)
    )
}
editar(editar) {
  this.AtivosService.editar(editar).subscribe(
    dados => {
      this.AtivosService.listar().subscribe(
        dados => {
          location.reload();
          this.ativos = dados;
          // console.log(this.ativos);
        },
        erro => console.error(erro)
      );
      console.log("deu certo editar", dados);
    },
    erro => console.error(erro)
  );
}

}
