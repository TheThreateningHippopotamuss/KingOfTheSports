import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

private authState: Observable<firebase.User>
private currentUser: firebase.User = null;     

constructor(private afAuth: AngularFireAuth) {
  }     
  login() {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        console.log(user);
        this.currentUser = user;
      } else {
          console.log('no user')
        this.currentUser = null;
      }
    });
  }

  getUser() {
      return this.currentUser;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
