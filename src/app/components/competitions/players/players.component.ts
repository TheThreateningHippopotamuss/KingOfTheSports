import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PlayersServices } from './../../../services/api/players.service';
import { Player } from './../../../../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  public listPlayers: Player[];
  private sub: any;
  public id: number;
  public loading: boolean;
  private hasPlayers: boolean;

  constructor(private service: PlayersServices, private activatedRoute: ActivatedRoute, public toastr: ToastsManager) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];

      this.loading = true;

      this.service.get(this.id).subscribe(
        (players) => {
          this.listPlayers = players;
          if (this.listPlayers.length === 0) {
            this.hasPlayers = false;
          } else {
            this.hasPlayers = true;
          }

          this.loading = false;

          // if no data for players ?? pipe
        }, (err) => {
          this.loading = false;
          this.hasPlayers = false;
          this.toastr.error(`Please try again later! ${err.message}`);
        }
      );
    });
  }

  goBack() {
    history.go(-1);
  }
}
