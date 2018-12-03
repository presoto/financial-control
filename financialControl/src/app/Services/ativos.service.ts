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
}
