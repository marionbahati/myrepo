import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private router:Router){
    this.us=[{
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
 us:object[];
  
  roleForm=this.fb.group({
    name:['',Validators.required],
    pswd:['',Validators.required]
  },{
    Validators
  })

  submitDetails(){
   
   

  }



}
