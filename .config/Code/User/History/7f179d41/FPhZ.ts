import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryComponent } from './try/try.component';

const routes: Routes = [
  {path:'try',component:TryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
