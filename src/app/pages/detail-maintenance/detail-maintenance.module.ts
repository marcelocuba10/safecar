import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMaintenancePageRoutingModule } from './detail-maintenance-routing.module';

import { DetailMaintenancePage } from './detail-maintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMaintenancePageRoutingModule
  ],
  declarations: [DetailMaintenancePage]
})
export class DetailMaintenancePageModule {}
