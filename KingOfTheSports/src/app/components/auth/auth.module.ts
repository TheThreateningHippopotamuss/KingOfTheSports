import { FormsModule } from '@angular/forms/';
import { AuthService } from './../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthNavComponent } from './authNav/authNav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    AuthNavComponent,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthNavComponent,

    
],
providers: [
  AuthService,
]
})
export class AuthModule { }
