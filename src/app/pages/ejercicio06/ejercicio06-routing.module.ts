import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio06Page } from './ejercicio06.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio06PageRoutingModule {}
