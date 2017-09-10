import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionComponent } from './competition/competition.component';
import { PlayersComponent } from './players/players.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  imports: [   
    CompetitionsRoutingModule,
    SharedModule,

  ],
  declarations: [
    CompetitionComponent,
    PlayersComponent,
    TablesComponent
  ]
})
export class CompetitionsModule { }
