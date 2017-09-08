import { FormsModule } from '@angular/forms/';
import { AuthService } from './../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router'
import { AuthNavComponent } from './authNav/authNav.component';
import { AuthComponent } from './authComponent/auth.component';

const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: '', component: AuthNavComponent, canActivate: [AuthService] },      
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthNavComponent,
    AuthComponent
],
providers: [
  AuthService,
]
})
export class AuthModule { }
