import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private builder:FormBuilder){}

registerform=this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.required),
  gender:this.builder.control('',Validators.required),
  isactive:this.builder.control('',Validators.required),

}); 
}
