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
    console.log(this.theUser);
    console.log(this.authService);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
