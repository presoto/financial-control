import { Component, OnInit } from '@angular/core';
import { PassivosService } from '../Services/passivos.service';



@Component({
  selector: 'passivos',
  templateUrl: './passivos.component.html',
  styleUrls: ['./passivos.component.css']
})
export class PassivosComponent implements OnInit {

  constructor(
    private PassivosService: PassivosService,
  ) { }
  public passivos: any = []; // Vetor vazio

  ngOnInit() {
    this.PassivosService.listar().subscribe(
      dados => {
        this.passivos = dados;
        // console.log(this.passivos);
      },
      erro => console.error(erro)
    );
  }
  deletar(codigo) {
    this.PassivosService.deletar(codigo).subscribe(
      dados => {
        this.PassivosService.listar().subscribe(
          dados => {
            location.reload();
            this.passivos = dados;
            console.log(this.passivos);
          },
          erro => console.error(erro)
        );
      },
      erro => console.error(erro)
    )

  }

  editar(editar) {
    this.PassivosService.editar(editar).subscribe(
      dados => {
        location.reload();
        this.PassivosService.listar().subscribe(
          dados => {
            this.passivos = dados;
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
