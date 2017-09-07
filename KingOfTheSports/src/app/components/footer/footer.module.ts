import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent,
    HomeComponent
],
})
export class FooterModule { }
