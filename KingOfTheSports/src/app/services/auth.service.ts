import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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

    constructor(private router: Router, private toastr: ToastsManager) {
        firebase.initializeApp({
            apiKey: 'AIzaSyB27Mt_ANgN-VWTAP1fLbDY70UfNesFWto',
            authDomain: 'king-of-the-sports.firebaseapp.com',
            databaseURL: 'https://king-of-the-sports.firebaseio.com',
            projectId: 'king-of-the-sports',
            storageBucket: 'king-of-the-sports.appspot.com',
            messagingSenderId: '724985830867'
        });

        this.toastr.success('In auth service');
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
            .then(() => {
                this.verifyUser();
            });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            // this.toastr.success(`Welcome ${this.authUser.email}`);
            this.userEmail = this.authUser.email;
            localStorage.setItem('email', this.authUser.email);
            this.isUserLoggedIn = true;
            this.router.navigate(['/competition']);
            window.location.reload();
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function (error) {
                console.log('error login');
                // this.toastr.error('Please check your email and password!');
            })
            .then(() => {
                console.log('Successful logged');
                // this.toastr.success('Successful logged in!');
                this.verifyUser();
            });
    }

    logout() {
        this.isUserLoggedIn = false;
        firebase.auth().signOut().then(function () {
            localStorage.removeItem('email');
            // this.toastr.success('Successful logged out!');
            window.location.reload();
        }, function (error) {
            // this.toastr.success(`${error.message} Unable to logout. Try again!`);
        });
    }
}
