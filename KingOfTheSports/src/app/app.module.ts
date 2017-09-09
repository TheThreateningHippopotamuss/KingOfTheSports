import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TablesService } from './services/api/tables.service';
import { PlayersServices } from './services/api/players.service';
import { SharedModule } from './shared/shared.module';
import { FixturesServices } from './services/api/fixtures.service';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { CompetitionsService } from './services/api/competitions.service';
import { CompetitionComponent } from './components/competition/competition.component';
import { AuthService } from './services/auth.service';
import { Http, HttpModule } from '@angular/http';
import { ContactModule } from './components/contact/contact.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{TablesComponent}from './components/tables/tables.component'
import { PlayersComponent } from './components/players/players.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { FormsModule } from '@angular/forms/';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CompetitionComponent,
    FixturesComponent,
    TablesComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AuthModule,
    ContactModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, CompetitionsService, FixturesServices, TablesService, PlayersServices, ToastsManager, ToastOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
