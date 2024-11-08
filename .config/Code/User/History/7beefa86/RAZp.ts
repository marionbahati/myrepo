import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageBgComponent } from './image-bg/image-bg.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'imagebg',component:ImageBgComponent},
  {path:'header',component:HeaderComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
