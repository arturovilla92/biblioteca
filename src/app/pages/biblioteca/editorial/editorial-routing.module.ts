import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial-table/editorial-table.component';


const routes: Routes = [
  {
    path:'editorial-form',
    component: EditorialFormComponent
  },
  {
    path:'editorial-table',
    component: EditorialTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
