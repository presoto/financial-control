import { Component, OnInit } from '@angular/core';
import { AtivosService } from '../Services/ativos.service';
import { PassivosService } from '../Services/passivos.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(
    private AtivosService: AtivosService,
    private PassivosService: PassivosService,
    public snackBar: MatSnackBar
  ) { }

  public teste: any;
  public adicionarPut: Object = { origem: 'Ex:Salario', valor: 0, data: "11/12/2018", tipo: "ativo", codigo: 5 }

  ngOnInit() {
    
  }

  adicionar() { 
    if (this.adicionarPut['tipo'] == "ativo") {
      this.AtivosService.adicionar(this.adicionarPut).subscribe(
        dados => {
          this.AtivosService.listar().subscribe(
            dados => {
              this.teste = dados;
              this.openSnackBar()
              // console.log(this.ativos);
            },
            erro => console.error(erro)
          );
          // alert("cadastrado com sucesso")
          // console.log("deu certo ativo", dados);
        },
        erro => console.error(erro)
      );
    } else {
      this.PassivosService.adicionar(this.adicionarPut).subscribe(
        dados => {
          this.AtivosService.listar().subscribe(
            dados => {
              this.teste = dados;
              this.openSnackBar()
              // console.log(this.ativos);
            },
            erro => console.error(erro)
          );
          // alert("cadastrado com sucesso")
          // console.log("deu certo passivo", dados);
        },
        erro => console.error(erro)
      );
    }
  }
  openSnackBar() {
    this.snackBar.open('error.message', 'this.action',
      { duration: 1000
      });
  }

}
