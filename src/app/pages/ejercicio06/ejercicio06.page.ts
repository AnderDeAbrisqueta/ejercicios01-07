import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio06',
  templateUrl: './ejercicio06.page.html',
  styleUrls: ['./ejercicio06.page.scss'],
})
export class Ejercicio06Page implements OnInit {
  mensaje: string;
  tablero: number[][];
  i: number = 0;
  j: number = 1;

  constructor() {}

  ngOnInit() {
    this.tablero = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    ];
  }

  catMovement() {
    if(this.j < 12) {
      this.tablero[this.i][this.j] = 1;
      this.tablero[this.i][this.j - 1] = 0;
      this.j++;
    } else if (this.j >= 12 && this.j < 24) {
      this.tablero[this.i][11] = 0;
      this.tablero[this.i + 1][this.j - 12] = 1;
      this.tablero[this.i + 1][this.j - 13] = 0;
      this.j++;
    } else if (this.j >= 24 && this.j < 35) {
      this.tablero[this.i + 1][11] = 0;
      this.tablero[this.i + 2][this.j - 24] = 1;
      this.tablero[this.i + 2][this.j - 25] = 0;
      this.j++;
    } else if(this.j == 35) {
      this.tablero[this.i + 2][11] = 2;
      this.tablero[this.i + 2][10] = 0;
      this.mensaje = 'El pulpogato se ha marchado';
    }

  }
}
