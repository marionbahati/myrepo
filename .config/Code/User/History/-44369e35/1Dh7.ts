import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
import { Page1Component } from './page1/page1.component';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';








@NgModule({
  declarations: [
    AppComponent,
    WebsiteHomeComponent,
    Page1Component,
    CardComponent,
    PagesComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
   
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
