import { AuthComponent } from './components/auth/authComponent/auth.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'admin', loadChildren: './components/auth/auth.module.ts#AuthModule'},
      // {path: 'admin/login', component: LoginComponent},
      // {path: 'admin/register', component: RegisterComponent},
      { path: '**', redirectTo: 'home' },
];
@NgModule({
      imports: [RouterModule.forRoot(
            routes, 
            {useHash: true})],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
