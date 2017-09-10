import { StyleTableTitlesDirective } from './../directives/styleTableTitles.directive';
import { HoverTableRowDirective } from './../directives/hoverTableRow.directive';
import { SortPlayersByNumberPipe } from './../pipes/sortPlayersByNumber.pipe';
import { FilterLeaguesPipe } from './../pipes/filterLeagues.pipe';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthNavComponent } from './authNav/authNav.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms/';

@NgModule({
  imports: [
    CommonModule, FormsModule,
  ],
  declarations: [
    LoaderComponent,
    AuthNavComponent,
    FooterComponent,
    NotFoundComponent,
    FilterLeaguesPipe,
    SortPlayersByNumberPipe,
    HoverTableRowDirective,
    StyleTableTitlesDirective
  ],
  exports: [
    LoaderComponent,
    CommonModule,
    AuthNavComponent,
    FooterComponent,
    NotFoundComponent,
    FilterLeaguesPipe,
    SortPlayersByNumberPipe,
    HoverTableRowDirective,
    StyleTableTitlesDirective
  ]
})
export class SharedModule { }
