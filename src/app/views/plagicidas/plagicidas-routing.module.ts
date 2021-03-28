import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlagicidasPage } from './plagicidas.page';

const routes: Routes = [
  {
    path: '',
    component: PlagicidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlagicidasPageRoutingModule {}
