import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {
  pesetas: number;
  euros: number;

  constructor() { }

  ngOnInit() {
  }

  conversorPesetasEuros() {
    this.euros = Math.round(+this.pesetas * 0.0060);
  }

  conversorEurosPesetas() {
    this.pesetas = +(this.euros * 166.3860).toFixed(2);
  }

}
