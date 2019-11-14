import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.css']
})
export class EditorialFormComponent implements OnInit {

  constructor(protected fb: FormBuilder, protected service:EditorialService) {
    this.createForm()
   }


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

    Saveform(){
      this.service.postEditorial(this.editorialformForm.value).subscribe(data => alert('listo'))
  }

}
