import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio07Page } from './ejercicio07.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio07PageRoutingModule {}
