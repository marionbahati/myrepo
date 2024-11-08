import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-regisration-form',
  templateUrl: './regisration-form.component.html',
  styleUrl: './regisration-form.component.css'
})
export class RegisrationFormComponent {
  registerForm=this.fb.group({
    fullname:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmpassword:['',[Validators.required]]

  });
  constructor(private fb:FormBuilder){}

}
