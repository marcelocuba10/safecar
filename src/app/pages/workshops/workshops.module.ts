import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkshopsPageRoutingModule } from './workshops-routing.module';

import { WorkshopsPage } from './workshops.page';
import { RouterModule } from '@angular/router';
import { MiAcordionComponent  } from 'src/app/components/mi-acordion/mi-acordion.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'',
        component: WorkshopsPage
      }
    ]),
    WorkshopsPageRoutingModule
  ],
  declarations: [WorkshopsPage,MiAcordionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkshopsPageModule {}
