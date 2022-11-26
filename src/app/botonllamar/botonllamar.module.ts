import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonllamarPageRoutingModule } from './botonllamar-routing.module';

import { BotonllamarPage } from './botonllamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonllamarPageRoutingModule
  ],
  declarations: [BotonllamarPage]
})
export class BotonllamarPageModule {}
