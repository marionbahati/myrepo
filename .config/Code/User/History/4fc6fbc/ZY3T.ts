import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgsComponent } from './svgs/svgs.component';

const routes: Routes = [
  {path:'svgs',component:SvgsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
