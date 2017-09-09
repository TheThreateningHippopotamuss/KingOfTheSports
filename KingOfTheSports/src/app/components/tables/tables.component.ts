import { Team } from './../../../models/team';
import { Component, OnInit } from '@angular/core';
import { TablesService } from './../../services/api/tables.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  public list:Team[];
  public id:number;
  private sub: any;
  

  constructor(private service:TablesService,private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
     
   
    this.service.get(this.id).subscribe(
      table=>{       
        this.list=table;
      },(err)=>console.log(err)  
    );   
  })
}
}
