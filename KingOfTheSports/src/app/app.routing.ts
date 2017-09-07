import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
];
export const AppRouting = RouterModule.forChild(routes);
