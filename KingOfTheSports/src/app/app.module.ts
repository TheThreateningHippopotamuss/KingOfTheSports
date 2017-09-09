import { SharedModule } from './shared/shared.module';
import { FixturesServices } from './services/api/fixtures.service';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { AuthService } from './services/auth.service';
import { Http, HttpModule } from '@angular/http';
import { CompetitionsService } from './services/api/competitions.service';
import { ContactModule } from './components/contact/contact.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { FormsModule } from '@angular/forms/';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    FixturesComponent,
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
    SharedModule
  ],
  providers: [AuthService, CompetitionsService, FixturesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
