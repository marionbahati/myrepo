import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositioningComponent } from './positioning/positioning.component';

const routes: Routes = [
  {path:'position',component:PositioningComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
