import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {
  n: number = 0;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  increase(): void {
    this.n ++ ;
  }

  decrease(): void {
    this.n -- ;
  }

  reset(): void {
    this.n = 0;
  }

}
