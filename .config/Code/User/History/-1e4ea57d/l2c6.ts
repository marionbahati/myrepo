import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private builder:FormBuilder,private service:AuthService){}

registerform=this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  gender:this.builder.control('male'),
  isactive:this.builder.control(false),

}); 
proceedRegistration(){
  if(this.registerform.valid){
this.service.proceedregistration(this.registerform.value).subscribe(res=>{
  alert("please contact admin for access, Registered successfully");
});
  }else{
    alert("please enter valid data");
  }
}

}
