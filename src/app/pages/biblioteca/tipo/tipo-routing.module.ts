import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoFormComponent } from './tipo-form/tipo-form.component';
import { TipoTableComponent } from './tipo-table/tipo-table.component';


const routes: Routes = [
  {
    path:'tipo-form',
    component: TipoFormComponent
  },
  {
    path:'tipo-table',
    component: TipoTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRoutingModule { }
