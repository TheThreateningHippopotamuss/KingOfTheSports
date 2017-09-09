import { FixturesServices } from './../../services/api/fixtures.service';
import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})

export class FixturesComponent implements OnInit {

  public fixtures: any;
  public loading: boolean;

  constructor(private fixturesService: FixturesServices, public toastr: ToastsManager) { }

  ngOnInit() {
    this.loading = true;

    this.fixturesService.get()
      .subscribe((f) => {
        this.fixtures = f.fixtures;
        this.loading = false;
        this.toastr.success('In fixture component!');
      },
      (err) => {
        this.loading = false;
        this.toastr.error('fixture service - Please try again!');
      });

  }
}
