import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;

  password: string;

  passwordConfirm: string;

  passwordFail = false;

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    if (this.password !== this.passwordConfirm) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.authService.register(this.email, this.password);
      this.authService.verifyUser();
    }
  }
}
