import { Competition } from './../../../models/competitions';
import { CompetitionsService } from './../../services/api/competitions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  public competitions: Competition[];
  public loading: boolean;
  
  constructor(private service: CompetitionsService) { }

  ngOnInit() {
    this.loading = true;

    this.service.getAll().subscribe(
      (c) => {
      this.competitions = c;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      console.log(err);
    }
    );
  }
}
