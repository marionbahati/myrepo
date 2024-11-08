import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../shared/password-match.directive';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from '../../interfaces/auth';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-regisration-form',
  templateUrl: './regisration-form.component.html',
  styleUrl: './regisration-form.component.css'
})
export class RegisrationFormComponent {
  registerForm=this.fb.group({
    fullname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    confirmpassword:['',Validators.required]

  },{
    Validators:passwordMatchValidator
  })
  constructor(private fb:FormBuilder,private authservive:AuthServiceService){}



  get fullname(){
    return this.registerForm.controls['fullname'];
  
  }

  get email(){
    return this.registerForm.controls['email'];
  }

  get password(){
    return this.registerForm.controls['password'];
   }


   get confirmpassword(){
    return this.registerForm.controls['confirmpassword'];
   }

   submitDetails(){
    const postData={...this.registerForm.value};
    delete postData.confirmpassword;
    this.authservive.registerUser(postData as User).subscribe(
      response=>console.log(response),
    error => console.log(error)

   )}

}
