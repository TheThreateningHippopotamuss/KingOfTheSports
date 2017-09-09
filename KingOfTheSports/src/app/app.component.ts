import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from './services/auth.service';
import { CompetitionsService } from './services/api/competitions.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  competitions: any;
  constructor(private competitionsService: CompetitionsService, public toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
   }

  ngOnInit(): void {
    this.competitionsService.getAll().subscribe(c => this.competitions = c);
    this.title = '"King of the sports"';
  }

  a() {
    console.log(this.competitions);
  }
}
