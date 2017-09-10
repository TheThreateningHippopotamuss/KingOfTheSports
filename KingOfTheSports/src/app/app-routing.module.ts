import { AuthService } from './services/auth.service';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { TablesComponent } from './components/tables/tables.component';
import { PlayersComponent } from './components/players/players.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'fixtures', component: FixturesComponent, canActivate: [AuthGuard]},
      { path: 'competition', component: CompetitionComponent, canActivate: [AuthGuard]},
      { path: 'competition/:id', component: TablesComponent, canActivate: [AuthGuard] },
      { path: 'team/:id', component: PlayersComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'home' },
];

@NgModule({
      imports: [RouterModule.forRoot(
            routes,
            { useHash: true })],
      exports: [RouterModule]
})

export class AppRoutingModule { }
