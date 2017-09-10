import { UnauthGuard } from './../services/unauth.guard';
import { AuthGuard } from './../services/auth.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TablesService } from './../services/api/tables.service';
import { PlayersServices } from './../services/api/players.service';
import { FixturesServices } from './../services/api/fixtures.service';
import { AuthService } from './../services/auth.service';
import { CompetitionsService } from './../services/api/competitions.service';

@NgModule({
  providers: [AuthService, CompetitionsService, FixturesServices, TablesService, PlayersServices, AuthGuard, UnauthGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error ('Core module is already provided');
    }
  }
}
