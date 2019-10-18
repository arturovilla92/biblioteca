import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoFormComponent } from './tipo-form/tipo-form.component';
import { TipoTableComponent } from './tipo-table/tipo-table.component';
import { TipoComponent } from './tipo.component';


const routes: Routes = [
  {
    path:'tipo',
    component: TipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRoutingModule { }
