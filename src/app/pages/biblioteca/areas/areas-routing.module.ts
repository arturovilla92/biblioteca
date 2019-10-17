import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasFormComponent } from './areas-form/areas-form.component';
import { AreasTableComponent } from './areas-table/areas-table.component';


const routes: Routes = [
  {
    path:'areas-form',
    component: AreasFormComponent
  },
  {
    path:'areas-table',
    component: AreasTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
