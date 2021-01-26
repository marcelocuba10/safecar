import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailWorkshopPageRoutingModule } from './detail-workshop-routing.module';

import { DetailWorkshopPage } from './detail-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailWorkshopPageRoutingModule
  ],
  declarations: [DetailWorkshopPage]
})
export class DetailWorkshopPageModule {}
