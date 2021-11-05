import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  nombre: string;
  constructor() { }

  ngOnInit() {
  }

  mostrarNombre() {
    this.nombre = "Ander De Abrisqueta Rangel";
  }

  lipiarPantall() {
    this.nombre = "";
  }

}
