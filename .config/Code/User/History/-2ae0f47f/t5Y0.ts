import { Component } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 myDate:number=Date.now();
}
