import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { CardComponent } from './card/card.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';

const routes: Routes = [
  {path:'',component:Page1Component},
  {path:'web',component:WebsiteHomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'card',component:CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
