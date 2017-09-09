import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class AuthService implements CanActivate {

    isUserLoggedIn = false;

    userEmail: string;

    authUser: any;

    toastr: ToastsManager;

    constructor(private router: Router, public t: ToastsManager) {
        firebase.initializeApp({
            apiKey: 'AIzaSyB27Mt_ANgN-VWTAP1fLbDY70UfNesFWto',
            authDomain: 'king-of-the-sports.firebaseapp.com',
            databaseURL: 'https://king-of-the-sports.firebaseio.com',
            projectId: 'king-of-the-sports',
            storageBucket: 'king-of-the-sports.appspot.com',
            messagingSenderId: '724985830867'
        });

        this.toastr = t;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.verifyLogin(state.url);
    }

   verifyLogin(url: string): boolean {
        if (this.isUserLoggedIn) { return true; }

        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                this.toastr.error(`${error.message} Please Try Again!`);
            });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            this.userEmail = this.authUser.email;
            localStorage.setItem('email', this.authUser.email);
            this.isUserLoggedIn = true;
            this.router.navigate(['']);
            window.location.reload();
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function (error) {
                this.toastr.error(`${error.message} Unable to login. Try again!`);
            });
    }

    logout() {
        this.isUserLoggedIn = false;
        firebase.auth().signOut().then(function () {
            localStorage.removeItem('email');
            this.toastr.info('Logging you out. Please wait!');
        }, function (error) {
            this.toastr.error('There was an error with logging you out!');
        });
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}
