import { AtivosService } from './../Services/ativos.service';
import { PassivosService } from './../Services/passivos.service';
import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../Services/carteira.service';

@Component({
  selector: 'carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  constructor(

    public AtivosService: AtivosService,
    public PassivosService: PassivosService,
    private CarteiraService: CarteiraService
  ) { }

  public carteira: any = []; // Vetor vazio
  public passivos: any = []; // Vetor vazio
  public ativos: any = []; // Vetor vazio

  public carteiraFalse: any = 0;

  ngOnInit() {
    this.CarteiraService.listar().subscribe(
      dados => {
        this.carteira = dados;
        // console.log(this.carteira[0].valor);
      },
      erro => console.error(erro)
    );
    this.PassivosService.listar().subscribe(
      dados => {
        this.passivos = dados;
        var passivos = this.passivos;
        var totalPassivos = 0;

        for (let index = 0; index < passivos.length; index++) {
          totalPassivos += passivos[index]['valor'];
        }
        this.carteiraFalse -= totalPassivos;
        console.log(totalPassivos)
      },
      erro => console.error(erro)
    );
    this.AtivosService.listar().subscribe(
      dados => {
        this.ativos = dados;
        var ativos = this.ativos;
        var totalAtivos = 0;

        for (let index = 0; index < ativos.length; index++) {
          totalAtivos += ativos[index]['valor'];
        }
        this.carteiraFalse = this.carteiraFalse + totalAtivos;
        console.log(totalAtivos)
      },
      erro => console.error(erro)
    );
  }
}
