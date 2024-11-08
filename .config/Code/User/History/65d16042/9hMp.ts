import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   users:User=[{
    name:'marion',
    password:'123',
    role:'admin'
     },
    {
      name:'nick',
      password:'234',
      role:'user'
    },
    {
      name:'Dan',
      password:'234',
      role:'client'
    }]
  ;
   
}
