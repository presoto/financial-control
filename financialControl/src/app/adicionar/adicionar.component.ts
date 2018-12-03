import { Component, OnInit } from '@angular/core';
import { AtivosService } from '../Services/ativos.service';
@Component({
  selector: 'adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(
    private AtivosService: AtivosService,

  ) { }
public origem = "teste";
public valor = 12312;
public data = "11/12/2018";
public tipo =  "ativo";
public codigo =  5;

  ngOnInit() {

  }

  adicionar(){
    this.AtivosService.adicionar(this.codigo,this.valor,this.origem,this.data).subscribe(
      dados => {
        console.log("deu certo",dados);
      },
      erro => console.error(erro)
    );
  }

}
