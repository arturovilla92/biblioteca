import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutoresFormComponent implements OnInit {

  constructor(protected fb: FormBuilder,protected service:AuthorService) {
    this.createForm()
   }

  authors : any;
  public autoresformForm: FormGroup;
  public titulo="formulario de autores";
  
  ngOnInit() {
    this.service.getAuthors().subscribe( data => {
      this.authors=data
      
      });

  }
 createForm(){
    this.autoresformForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      bd_year: ['', Validators.required],
      death_year: ['', Validators.required],
      bd_place: ['', Validators.required]
      }) 
    }

  Saveform(){
    this.service.postAuthor(this.autoresformForm.value).subscribe(data => alert('listo'))
}



}




