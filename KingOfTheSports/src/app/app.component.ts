import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
}
