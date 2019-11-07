import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.css']
})
export class AreasFormComponent implements OnInit {

  public areasformForm: FormGroup;
  public titulo="formulario de Areas";

  constructor(protected fb: FormBuilder ) { }

  ngOnInit() {
  }
  createForm(){
    this.areasformForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
      }) 
    }
  }

