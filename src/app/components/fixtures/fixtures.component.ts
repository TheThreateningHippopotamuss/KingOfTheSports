import { Component, OnInit } from '@angular/core';

import { FixturesServices } from './../../services/api/fixtures.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
  providers: [FixturesServices]
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
      },
      (err) => {
        this.loading = false;
        this.toastr.error(`Please try again later! ${err.message}`);
      });

  }
}
