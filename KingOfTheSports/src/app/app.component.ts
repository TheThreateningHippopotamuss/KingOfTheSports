import { CompetitionsService } from './services/competitions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  competitions: any;
  constructor(private competitionsService: CompetitionsService) { }

  ngOnInit(): void {
    this.competitionsService.getAll().subscribe(c => this.competitions = c);
    this.title = '"King of the sports"';
  }

  a() {
    console.log(this.competitions);
  }
}
