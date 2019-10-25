import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.css']
})
export class ExistenciaComponent implements OnInit {

  public existenciaForm: FormGroup;
  public titulo="formulario de Existencia";

  constructor(protected fb: FormBuilder ) { }

  ngOnInit() {
  }
  createForm(){
    this.existenciaForm= this.fb.group({
      codigo:'',
      nombre:'',
      fec_nac:''

    });
  }
}
