import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio06PageRoutingModule } from './ejercicio06-routing.module';

import { Ejercicio06Page } from './ejercicio06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio06PageRoutingModule
  ],
  declarations: [Ejercicio06Page]
})
export class Ejercicio06PageModule {}
