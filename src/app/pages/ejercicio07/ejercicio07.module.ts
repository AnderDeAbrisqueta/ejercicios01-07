import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio07PageRoutingModule } from './ejercicio07-routing.module';

import { Ejercicio07Page } from './ejercicio07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio07PageRoutingModule
  ],
  declarations: [Ejercicio07Page]
})
export class Ejercicio07PageModule {}
