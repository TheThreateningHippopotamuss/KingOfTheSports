import { Http, HttpModule } from '@angular/http';
import { CompetitionsService } from './services/competitions.service';
import { ContactModule } from './components/contact/contact.module';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AuthModule,
    ContactModule,
    HttpModule
  ],
  providers: [CompetitionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
