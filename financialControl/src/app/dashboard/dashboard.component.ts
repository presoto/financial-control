import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Carteira', cols: 2, rows: 1, colunas: ["Saldo"], dados:[{saldo: 1000}] },
    { title: 'Receitas', cols: 1, rows: 1 , colunas: [], dados:[]},
    { title: 'Histórico', cols: 1, rows: 2, colunas:[], dados:[]},
    { title: 'Despesas', cols: 1, rows: 1 , colunas: ["Descrição", "Valor", "Tipo"], 
    dados:[["Agua","R$ 100","Dinheiro"],["Almoço","R$ 15,50", "Picpay"]]}
  ];

  


  nome = "Gabriel";
}
