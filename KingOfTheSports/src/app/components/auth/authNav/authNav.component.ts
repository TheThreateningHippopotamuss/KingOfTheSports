import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './authNav.component.html',
  styleUrls: ['./authNav.component.css']
})
export class AuthNavComponent implements OnInit {

  theUser: any;

  authService: AuthService;
  constructor(authService: AuthService, private router: Router, public toastr: ToastsManager) {
    this.authService = authService;
   }

  ngOnInit() {
    this.theUser = localStorage.getItem('email');
  }

  logOut() {
    this.authService.logout()
      .then(() => {
        localStorage.removeItem('email');
        this.toastr.success('Successful logged out!');
      }, (err) => {
        this.toastr.error(`${err.message} Unable to logout. Try again!`);
      });
    this.router.navigate(['']);
  }
}
