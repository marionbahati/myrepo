import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 loginForm =this.fb.group({

  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]
 });
 
 constructor(private fb:FormBuilder,
  private authservice:AuthServiceService,
  private router:Router){}

  get email(){
    return this.loginForm.controls['email'];
  }
  get password(){
    return this.loginForm.controls['password'];
  }

  loginUser(){
    const {email,password}=this.loginForm.value;
    
    this.authservice.getUserByEmail(email as string).subscribe(
      response=>{

        if(response.password.length >0 &&  response.password==password){
          sessionStorage.setItem('email',email as string);
          this.router.navigate(['/home']);


        }else{
          alert("invalid password");
        }
      }
    )

  }

}
