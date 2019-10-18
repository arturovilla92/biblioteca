import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoRoutingModule } from './tipo-routing.module';
import { TipoFormComponent } from './tipo-form/tipo-form.component';
import { TipoTableComponent } from './tipo-table/tipo-table.component';
import { TipoComponent } from './tipo.component';


@NgModule({
  declarations: [
    TipoFormComponent, 
    TipoTableComponent, 
    TipoComponent
  ],
  imports: [
    CommonModule,
    TipoRoutingModule
  ]
})
export class TipoModule { }
