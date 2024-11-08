import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{ 

users=[{
  name:'lucy',
  gender:'female'
},
{name:'john',
gender:'male'},
{
  name:'Dan',
  gender:'male'
},
{name:'Marion',
gender:'female'}


]


ngOnInit(): void {
  
}
}

