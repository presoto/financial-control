import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../Services/carteira.service';

@Component({
  selector: 'carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  constructor(
    private CarteiraService: CarteiraService,
  ) { }

  public carteira: any = []; // Vetor vazio

  ngOnInit() {
    this.CarteiraService.listar().subscribe(
      dados => {
        this.carteira = dados;
        // console.log(this.carteira[0].valor);
      },
      erro => console.error(erro)
    );
  }

}
