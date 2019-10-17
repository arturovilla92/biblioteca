import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasFormComponent } from './areas-form/areas-form.component';
import { AreasTableComponent } from './areas-table/areas-table.component';


@NgModule({
  declarations: [AreasFormComponent, AreasTableComponent],
  imports: [
    CommonModule,
    AreasRoutingModule
  ]
})
export class AreasModule { }
