import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailWorkshopPage } from './detail-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: DetailWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailWorkshopPageRoutingModule {}
