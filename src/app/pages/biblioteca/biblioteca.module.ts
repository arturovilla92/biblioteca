import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { AreasComponent } from './areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';
import { BibliotecaComponent } from './biblioteca.component';
import { AreasModule } from './areas/areas.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialModule } from './editorial/editorial.module';
import { ExistenciaModule } from './existencia/existencia.module';
import { LibroModule } from './libro/libro.module';
import { TipoModule } from './tipo/tipo.module';


@NgModule({
  declarations: [
    BibliotecaComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    AreasModule,
    AutoresModule,
    EditorialModule,
    ExistenciaModule,
    LibroModule,
    TipoModule
  ]
})
export class BibliotecaModule { }