import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { AutoresTableComponent } from './autores-table/autores-table.component';


@NgModule({
  declarations: [AutoresFormComponent, AutoresTableComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
