import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  adicionar(adicionar){
    let carteira = "5bad54e83518a82099f8032e"
    return this.http.put("http://localhost:3000/usuario",{nome:adicionar.nome,cpf:adicionar.cpf,datanascimento:adicionar.data,endereco:adicionar.endereco,carteira})
  }
}
