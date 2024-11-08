import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ImageBgComponent } from './image-bg/image-bg.component';
import { HeaderComponent } from './header/header.component';
import { PlacesComponent } from './places/places.component';

const appRoutes:Routes=[
  {path:'',component:PlacesComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'imagebg',component:ImageBgComponent},
  {path:'header',component:HeaderComponent},
  {path:'places',component:PlacesComponent}
 
  

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    ImageBgComponent,
    HeaderComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
