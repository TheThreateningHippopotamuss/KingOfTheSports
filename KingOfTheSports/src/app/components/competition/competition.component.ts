import { Competition } from './../../../models/competitions';
import { CompetitionsService } from './../../services/api/competitions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
  export class CompetitionComponent implements OnInit {
    
   public list:Competition[];

  constructor(private service:CompetitionsService) { }

  ngOnInit() {
   this.service.getAll().subscribe(
     competetions=>{       
       this.list=competetions;
     },(err)=>console.log(err)
   )   
  }

}
