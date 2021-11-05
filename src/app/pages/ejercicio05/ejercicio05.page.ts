import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {
  min: number;
  max: number;
  n: number;
  
  constructor() { }

  ngOnInit() {

  }

  generaAleatorio() {
    this.n = Math.floor(Math.random() * (+this.max - this.min + 1) + +this.min);
    
  }

}
