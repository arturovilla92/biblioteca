import { Component, OnInit } from '@angular/core';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-table',
  templateUrl: './editorial-table.component.html',
  styleUrls: ['./editorial-table.component.css']
})
export class EditorialTableComponent implements OnInit {

  constructor(protected service:EditorialService) { }
  editoriales: any;
  ngOnInit() {
    this.service.getEditorial().subscribe(data=>{
      this.editoriales=data
    })
  }

}
