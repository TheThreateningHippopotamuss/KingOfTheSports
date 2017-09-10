import { Competition } from './../../../models/competitions';
import { CompetitionsService } from './../../services/api/competitions.service';
import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  public competitions: Competition[];
  public loading: boolean;

  constructor(private service: CompetitionsService, public toastr: ToastsManager) { }

  ngOnInit() {
    this.loading = true;

    this.service.getAll().subscribe(
      (c) => {
        this.competitions = c;
        this.loading = false;

      }, (err) => {
        this.loading = false;
        this.toastr.success('Please tye again!');
      }
    );
  }
}
