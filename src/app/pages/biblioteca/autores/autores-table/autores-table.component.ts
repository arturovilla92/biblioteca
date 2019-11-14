import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autores-table',
  templateUrl: './autores-table.component.html',
  styleUrls: ['./autores-table.component.css']
})
export class AutoresTableComponent implements OnInit {

  constructor(protected service:AuthorService) { }
  authors : any;
  ngOnInit() {
    this.service.getAuthors().subscribe( data => {
      this.authors=data
      
      });
  }

}
