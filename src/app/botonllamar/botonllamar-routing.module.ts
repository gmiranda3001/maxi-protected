import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonllamarPage } from './botonllamar.page';

const routes: Routes = [
  {
    path: '',
    component: BotonllamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonllamarPageRoutingModule {}
