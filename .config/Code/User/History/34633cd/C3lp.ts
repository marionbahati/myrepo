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
import { OpenComponent } from './open/open.component';
import { FooterComponent } from './footer/footer.component';
import { TopheaderComponent } from './topheader/topheader.component';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import {MatToolbarModule} from '@angular/material/toolbar'; //sidebar use
import {MatSidenavModule} from '@angular/material/sidenav'; //sidebar use
import {MatDividerModule} from '@angular/material/divider'; //sidebar use
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { DesignComponent } from './design/design.component';


const appRoutes:Routes=[
  {path:'',component:PlacesComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'imagebg',component:ImageBgComponent},
  {path:'header',component:HeaderComponent},
  {path:'places',component:PlacesComponent},
  {path:'design',component:DesignComponent}
 
  

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    ImageBgComponent,
    HeaderComponent,
    PlacesComponent,
    OpenComponent,
    FooterComponent,
    TopheaderComponent,
    SidebarComponent,
    MenuComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,

    RouterModule.forRoot(appRoutes)
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
