import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlagicidasPageRoutingModule } from './plagicidas-routing.module';

import { PlagicidasPage } from './plagicidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlagicidasPageRoutingModule
  ],
  declarations: [PlagicidasPage]
})
export class PlagicidasPageModule {}
