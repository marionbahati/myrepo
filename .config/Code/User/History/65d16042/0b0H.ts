import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    Result: false,
    Message:''
  };
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient){
  }

  
  roleForm=this.fb.group({
    name:['',Validators.required],
    pswd:['',Validators.required]
  },{
    Validators
  })

  submitDetails(){
    debugger;
    this.http.post("http://localhost:61334/api/Registration/Login", this.loginObj).subscribe((response: any)=>{
      debugger;
      if(response.result) {
        alert(response.message)
        this.router.navigateByUrl('adminlayout');
      } else {
        alert(response.message)
      }

  }

  }

}
