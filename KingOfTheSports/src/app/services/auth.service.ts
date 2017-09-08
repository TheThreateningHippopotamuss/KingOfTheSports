import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AuthService {

private token: any;

constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
  } 
  login() {
    this.token = this.afAuth.auth.signInWithEmailAndPassword("simeon_nakov@hotmail.com", "12345678");
    console.log(this.token);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
