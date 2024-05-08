import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight{
      background-color: yellow;
      font-weight: bold;
  }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.curso.com.br';
  valorAtual: string = "";
  valorSalvo: string = '';
  isMouseOver: boolean = false;
 
  getValor() {
    return 1;
  }
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com.br/400/200';

  getCursoAngular() {
    return true;
  }
  botaoClicado() {
    alert("botão clicado!");
  };
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }
  constructor() { }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  ngOnInit() {

  }

}
