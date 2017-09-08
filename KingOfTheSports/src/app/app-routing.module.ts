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
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      { path: '**', redirectTo: 'home' },
];
@NgModule({
      imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
