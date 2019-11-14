import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/app/services/areas.service';


@Component({
  selector: 'app-areas-table',
  templateUrl: './areas-table.component.html',
  styleUrls: ['./areas-table.component.css']
})
export class AreasTableComponent implements OnInit {

  constructor(protected service:AreasService) { }
  area: any;
  ngOnInit() {

    this.service.getAreas().subscribe(data=>{
      this.area=data
    })

  }

}
