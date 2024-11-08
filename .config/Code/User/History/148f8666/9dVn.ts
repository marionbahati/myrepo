import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';

import { PackageComponent } from './package/package.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ClientPackagesComponent } from './client-packages/client-packages.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  
  {path:'',
  component:AdminLayoutComponent,
  children:[
    {path:'Clients',component:ClientComponent},
    {path:'package',component:PackageComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'Booking',component:BookingComponent},
    {path:'Rooms',component:RoomsComponent},
    {path:'ClientPackage',component:ClientPackagesComponent},
    {path:'User',component:UsersComponent}
  ]
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
