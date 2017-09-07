import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent}
];
@NgModule({
      imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
