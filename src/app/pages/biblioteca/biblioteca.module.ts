import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { AreasComponent } from './areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';
import { LibroFormComponent } from './libro/libro-form/libro-form.component';
import { LibroTableComponent } from './libro/libro-table/libro-table.component';
import { AreasFormComponent } from './areas/areas-form/areas-form.component';
import { AreasTableComponent } from './areas/areas-table/areas-table.component';
import { AutoresFormComponent } from './autores/autores-form/autores-form.component';
import { AutoresTableComponent } from './autores/autores-table/autores-table.component';
import { EditorialFormComponent } from './editorial/editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial/editorial-table/editorial-table.component';
import { ExistenciaTableComponent } from './existencia/existencia-table/existencia-table.component';
import { ExistenciaFormComponent } from './existencia/existencia-form/existencia-form.component';
import { TipoFormComponent } from './tipo/tipo-form/tipo-form.component';
import { TipoTableComponent } from './tipo/tipo-table/tipo-table.component';


@NgModule({
  declarations: [
    AreasComponent, 
    AutoresComponent, 
    EditorialComponent, 
    ExistenciaComponent, 
    LibroComponent,
    TipoComponent,
    LibroFormComponent,
    LibroTableComponent,
    AreasFormComponent,
    AreasTableComponent,
    AutoresFormComponent,
    AutoresTableComponent,
    EditorialFormComponent,
    EditorialTableComponent,
    ExistenciaFormComponent,
    ExistenciaTableComponent,
    TipoFormComponent,
    TipoTableComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
  ]
})
export class BibliotecaModule { }