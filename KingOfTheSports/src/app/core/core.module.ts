import { UnauthGuard } from './../services/unauth.guard';
import { AuthGuard } from './../services/auth.guard';
import { AuthService } from './../services/auth.service';

import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [AuthService, AuthGuard, UnauthGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error ('Core module is already provided');
    }
  }
}
