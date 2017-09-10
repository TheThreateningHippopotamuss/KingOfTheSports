import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { PlayersServices } from './../../services/api/players.service';
import { TablesService } from './../../services/api/tables.service';
import { CompetitionsService } from './../../services/api/competitions.service';
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
    TablesComponent,
  ],
  providers: [
    CompetitionsService,
    TablesService,
    PlayersServices
  ]

})
export class CompetitionsModule { }
