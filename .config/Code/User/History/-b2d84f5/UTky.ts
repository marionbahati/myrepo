import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisrationFormComponent } from './components/regisration-form/regisration-form.component';
import { authGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[authGuardGuard]},
  {path:'register',component:RegisrationFormComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
