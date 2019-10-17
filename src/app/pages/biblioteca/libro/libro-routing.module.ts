import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LibroTableComponent } from './libro-table/libro-table.component';


const routes: Routes = [
  {
    path:'libro-form',
    component: LibroFormComponent
  },
  {
    path:'libro-table',
    component: LibroTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
