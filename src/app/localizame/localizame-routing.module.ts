import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizamePage } from './localizame.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizamePageRoutingModule {}
