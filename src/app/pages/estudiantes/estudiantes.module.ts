import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { EstudentFormComponent } from './estudent-form/estudent-form.component';
import { EstudentTableComponent } from './estudent-table/estudent-table.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    EstudentFormComponent,
    EstudentTableComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EstudiantesModule { }
