import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.css']
})
export class AreasFormComponent implements OnInit {

  Area: any;
  public areasformForm: FormGroup;
  public titulo="formulario de Areas";

  constructor(protected fb: FormBuilder, protected service:AreasService) {
    this.createForm()
   }



  ngOnInit() {
    this.service.getAreas().subscribe(data=>{
      this.Area=data
    })
  }

  createForm(){
    this.areasformForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
      }) 
    }

    Saveform(){
      this.service.postAreas(this.areasformForm.value).subscribe(data => alert('listo'))
  }

  }


