import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [

  {path:'',component:AppComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'page1',component:Page1Component},
  {path:'card',component:CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
