import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TierraPage } from './tierra.page';

const routes: Routes = [
  {
    path: '',
    component: TierraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TierraPageRoutingModule {}
