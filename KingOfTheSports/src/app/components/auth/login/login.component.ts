import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  logIn() {
    this.authService.login(this.email, this.password);
    this.authService.verifyUser();
  }

  signUp() {
    this.router.navigate(['/admin/register'])
  }
}
