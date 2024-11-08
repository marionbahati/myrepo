import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { NavComponent } from './nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgsComponent } from './svgs/svgs.component'; 
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:AppComponent},
  {path:'nav',component:NavComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    NavComponent,
    SvgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,

    RouterModule.forChild(appRoutes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
