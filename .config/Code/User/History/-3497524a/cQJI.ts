import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

 const appRoutes:Routes=[
 {path: '',component:HomeComponent},  //default route is the same as this one below but below is a better approach
  //{path:'',redirectTo:'Home',pathMatch:'full'}, // this is a second way to make default root as above,u use either way
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contacts',component:ContactsComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'**',component:ErrorComponent}  //its an exemption route when it doesnt match any other route
 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)   //IMPORT THIS WEN DOING ROUTING AND PAS IN THE ABOVE ROUTE NAME
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
