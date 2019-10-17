import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExistenciaFormComponent } from './existencia-form/existencia-form.component';
import { ExistenciaTableComponent } from './existencia-table/existencia-table.component';


const routes: Routes = [
  {
    path:'existencia-form',
    component: ExistenciaFormComponent
  },
  {
    path:'exitencia-table',
    component: ExistenciaTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExistenciaRoutingModule { }
