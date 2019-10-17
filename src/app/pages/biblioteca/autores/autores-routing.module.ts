import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { AutoresTableComponent } from './autores-table/autores-table.component';


const routes: Routes = [
  {
    path:'autores-form',
    component: AutoresFormComponent
  },
  {
    path:'autores-table',
    component: AutoresTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
