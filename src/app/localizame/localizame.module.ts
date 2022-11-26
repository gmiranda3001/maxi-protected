import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizamePageRoutingModule } from './localizame-routing.module';

import { LocalizamePage } from './localizame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizamePageRoutingModule
  ],
  declarations: [LocalizamePage]
})
export class LocalizamePageModule {}
