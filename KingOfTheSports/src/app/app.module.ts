import { FooterModule } from './components/footer/footer.module';

import { FixturesComponent } from './components/fixtures/fixtures.component';

import { ContactModule } from './components/contact/contact.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


import { Http, HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './components/auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms/';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgModule } from '@angular/core';
import { CompetitionsModule } from './components/competitions/competitions.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    HomeComponent
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
    FooterModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),

    CoreModule,
    CompetitionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
