import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get("http://localhost:3000/carteira")
    
  }
}

