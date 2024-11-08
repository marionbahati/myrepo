import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchComponent } from './lunch/lunch.component';
import { MenuComponent } from './menu/menu.component';
import { DinnerComponent } from './dinner/dinner.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'dinner', component: DinnerComponent },
  { path: 'breakfast', component: BreakfastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
