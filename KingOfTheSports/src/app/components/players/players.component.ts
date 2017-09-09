import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { PlayersServices } from './../../services/api/players.service';
import { Player } from './../../../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  public listPlayers:Player[];
  private sub: any;
  public id:number;


  constructor(private service:PlayersServices,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
     
   
    this.service.get(this.id).subscribe(     
        players=>{       
          this.listPlayers=players.players;
         //if no data for players ?? pipe 
        },(err)=>console.log(err)
    );   
  })
}

}
