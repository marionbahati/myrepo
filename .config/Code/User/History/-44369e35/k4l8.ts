import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Page1Component } from './page1/page1.component';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FootComponent } from './foot/foot.component';

const appRoute:Routes=[
  {path:'',redirectTo:'card',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'pages',component:PagesComponent},
  {path:'foot',component:FootComponent},
  {path:'page1',component:Page1Component},
  {path:'card',component:CardComponent}


]







@NgModule({
  declarations: [
    AppComponent,
  
    Page1Component,
    CardComponent,
    PagesComponent,
    NavbarComponent,
    HomeComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)


   
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
