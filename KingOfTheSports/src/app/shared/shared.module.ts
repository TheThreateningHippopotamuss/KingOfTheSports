import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavComponent } from "./authNav/authNav.component";
import { FormsModule } from '@angular/forms/';

@NgModule({
  imports: [
    CommonModule,  FormsModule,
  ],
  declarations: [LoaderComponent,AuthNavComponent,FooterComponent,NotFoundComponent],
  exports: [LoaderComponent, CommonModule,AuthNavComponent,FooterComponent,NotFoundComponent]
})
export class SharedModule { }
