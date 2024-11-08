import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    Result: false,
    Message:''
  };
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient){
  }

  ngOnInit(): void {
  
  }
  
  roleForm=this.fb.group({
    Username:['',Validators.required],
    password:['',Validators.required]
  },{
    Validators
  })

  submitDetails(){
    debugger;
    this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/Login", this.roleForm.value).subscribe((response: any)=>{
      debugger;
      if(response){
        localStorage.setItem('localUserData',JSON.stringify(response.data));
        this.router.navigateByUrl("Dashboard");
      }else{
        alert(response.Message);
      }
     
      
    })
  }
    //way 1
    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('admin-dash');
    // }
    //way 2

    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('way2user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('way2admin-dash');
    // }
} 
  
  

  
