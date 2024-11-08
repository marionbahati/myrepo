import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseGuardServiceService } from './course-guard-service.service';
import { AuthServiceService } from './auth.service.service';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component'; 




const appRoutes:Routes=[
  {path: '',component:HomeComponent},  //default route is the same as this one below but below is a better approach
   //{path:'',redirectTo:'Home',pathMatch:'full'}, // this is a second way to make default root as above,u use either way
   {path:'Home',component:HomeComponent},
   {path:'About',component:AboutComponent},
   {path:'About',children:[
    {path:'company',component:CompanyComponent}
   
   ]},
   {path:'Login',component:LoginComponent},
   {path:'Employees',component:EmployeesComponent},
   {path:'Contacts',component:ContactsComponent},
   {path:'Courses',component:CoursesComponent,canActivate:[CourseGuardServiceService]},
   {path:'**',component:ErrorComponent}  //its an exemption route when it doesnt match any other route
  ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactsComponent,
    ErrorComponent,
    SearchComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule ,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    
  
  
    RouterModule.forChild(appRoutes),
       BrowserAnimationsModule,
  
    
  ],
  providers: [
    provideClientHydration(),
    CourseGuardServiceService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
