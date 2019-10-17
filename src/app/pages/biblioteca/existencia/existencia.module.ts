import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExistenciaRoutingModule } from './existencia-routing.module';
import { ExistenciaFormComponent } from './existencia-form/existencia-form.component';
import { ExistenciaTableComponent } from './existencia-table/existencia-table.component';


@NgModule({
  declarations: [ExistenciaFormComponent, ExistenciaTableComponent],
  imports: [
    CommonModule,
    ExistenciaRoutingModule
  ]
})
export class ExistenciaModule { }
