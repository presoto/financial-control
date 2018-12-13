import { UsuarioService } from './../Services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novousuario',
  templateUrl: './novousuario.component.html',
  styleUrls: ['./novousuario.component.css']
})
export class NovousuarioComponent implements OnInit {

  constructor(
    private UsuarioService: UsuarioService,
  ) { }
  public adicionarPut: Object = { nome: 'Gabriel', cpf: 4242331234, data: "11/12/2018", endereco: 'Rua das oliveiras' }
  ngOnInit() {
  }

  cadastrar(){
    this.UsuarioService.adicionar(this.adicionarPut).subscribe(
      dados => {
        alert("cadastrado com sucesso")
        console.log("deu certo ativo", dados);
      },
      erro => console.error(erro)
    );
  }

}
