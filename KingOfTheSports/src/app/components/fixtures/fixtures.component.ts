import { FixturesServices } from './../../services/api/fixtures.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})

export class FixturesComponent implements OnInit {
  private fixtures: any;

  constructor(private fixturesService: FixturesServices) { }

  ngOnInit() {
    this.fixturesService.get()
      .subscribe(f => {
        this.fixtures = f.fixtures;
      });
  }

}
