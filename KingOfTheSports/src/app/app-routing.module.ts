import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
      imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
