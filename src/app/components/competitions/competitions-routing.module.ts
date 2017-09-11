import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionComponent } from './competition/competition.component';
import { TablesComponent } from './tables/tables.component';
import { PlayersComponent } from './players/players.component';
import { NotFoundComponent } from './../../shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'competition', pathMatch: 'full' },
  { path: 'competition', component: CompetitionComponent },
  { path: ':id', component: TablesComponent, },
  { path: ':id/:id', component: PlayersComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule { }

