import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule, FormsModule
  ],
  exports: [
    RouterModule,
     ],
  declarations: [
    LoginComponent,
    RegisterComponent,
]
})

export class AuthModule { }
