import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { Routes } from '@angular/router';
import { ImageBgComponent } from './image-bg/image-bg.component';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes=[
  {path:'',component:AppComponent},
  {path:'app',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'imagebg',component:ImageBgComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    ImageBgComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
