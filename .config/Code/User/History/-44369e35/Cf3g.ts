import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
import { Page1Component } from './page1/page1.component';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteHomeComponent,
    Page1Component,
    CardComponent,
    PagesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
