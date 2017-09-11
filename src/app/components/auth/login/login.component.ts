import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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

  constructor(private authService: AuthService, private router: Router, public toastr: ToastsManager) {
  }

  logIn() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.authService.verifyUser();
        this.toastr.success('Successful logged in!');
      },
      (err) => {
        this.toastr.error('Please check your email and password!');
      });
  }

  signUp() {
    this.router.navigate(['/register']);
  }
}
