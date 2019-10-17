import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial-table/editorial-table.component';


@NgModule({
  declarations: [EditorialFormComponent, EditorialTableComponent],
  imports: [
    CommonModule,
    EditorialRoutingModule
  ]
})
export class EditorialModule { }
