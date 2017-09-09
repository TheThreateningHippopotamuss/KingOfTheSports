import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './authNav.component.html',
  styleUrls: ['./authNav.component.css']
})
export class AuthNavComponent implements OnInit {

  theUser: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.theUser = localStorage.getItem('email');
  }

  logOut() {
    // this.toastr.success('Successfully logged out!');
    this.authService.logout();
    this.router.navigate(['']);
  }
}
