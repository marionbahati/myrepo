import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisrationFormComponent } from './components/regisration-form/regisration-form.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisrationFormComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormControl,
    FormGroup,
    Validators
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
