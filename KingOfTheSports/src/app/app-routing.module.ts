import { UnauthGuard } from './services/unauth.guard';
import { AuthService } from './services/auth.service';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'fixtures', component: FixturesComponent, canActivate: [AuthGuard] },
      { path: 'competition', loadChildren: './components/competitions/competitions.module#CompetitionsModule', canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [UnauthGuard] },
      { path: '**', component: NotFoundComponent },

];

@NgModule({
      imports: [RouterModule.forRoot(
            routes,
            { useHash: true })],
      exports: [RouterModule]
})

export class AppRoutingModule { }
