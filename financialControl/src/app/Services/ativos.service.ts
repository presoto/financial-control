import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get("http://localhost:3000/ativos")
    
  }

  deletar(codigo){
    return this.http.delete(`http://localhost:3000/ativos/${codigo}`)
  }
  
  adicionar(codigo,valor,origem,data){
    return this.http.put("http://localhost:3000/ativos",{codigo:codigo,valor:valor,origem:origem,data:data})
  }
}
