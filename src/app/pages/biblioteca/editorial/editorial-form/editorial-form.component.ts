import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.css']
})
export class EditorialFormComponent implements OnInit {

  constructor(protected fb: FormBuilder ) { }

  public editorialformForm: FormGroup;
  public titulo="formulario de Editorial";

  ngOnInit() {
  }
  createForm(){
    this.editorialformForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required]
      }) 
    }
}
