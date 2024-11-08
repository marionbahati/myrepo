import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  User=[{
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
  

   constructor(private fb:FormBuilder,private router:Router){}



}
