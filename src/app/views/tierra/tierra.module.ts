import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TierraPageRoutingModule } from './tierra-routing.module';

import { TierraPage } from './tierra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TierraPageRoutingModule
  ],
  declarations: [TierraPage]
})
export class TierraPageModule {}
