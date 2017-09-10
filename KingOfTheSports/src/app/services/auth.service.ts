import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    isUserLoggedIn = false;

    userEmail: string;

    authUser: any;


    constructor(private router: Router) {
        firebase.initializeApp({
            apiKey: 'AIzaSyB27Mt_ANgN-VWTAP1fLbDY70UfNesFWto',
            authDomain: 'king-of-the-sports.firebaseapp.com',
            databaseURL: 'https://king-of-the-sports.firebaseio.com',
            projectId: 'king-of-the-sports',
            storageBucket: 'king-of-the-sports.appspot.com',
            messagingSenderId: '724985830867'
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.verifyLogin(state.url);
    }

    verifyLogin(url: string): boolean {
        if (this.isUserLoggedIn) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    register(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    get authenticated(): boolean {
        return this.isUserLoggedIn;
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            this.userEmail = this.authUser.email;
            localStorage.setItem('email', this.authUser.email);
            this.isUserLoggedIn = true;
            this.router.navigate(['/competition']);
        }
    }

    login(loginEmail: string, loginPassword: string) {
        return firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword);
    }

    logout() {
        this.isUserLoggedIn = false;
        return firebase.auth().signOut();
    }
}
