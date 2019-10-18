import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LibroTableComponent } from './libro-table/libro-table.component';
import { LibroComponent } from './libro.component';


@NgModule({
  declarations: [
   LibroFormComponent,
   LibroTableComponent, 
   LibroComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule
  ]
})
export class LibroModule { }
