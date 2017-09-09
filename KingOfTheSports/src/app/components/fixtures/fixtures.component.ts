import { FixturesServices } from './../../services/api/fixtures.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})

export class FixturesComponent implements OnInit {
  public fixtures: any;
  public loading: boolean;

  constructor(private fixturesService: FixturesServices) { }

  ngOnInit() {
    this.loading = true;

    this.fixturesService.get()
      .subscribe((f) => {
        this.fixtures = f.fixtures;
        this.loading = false;
      },
      () => this.loading = false);
  }

}
