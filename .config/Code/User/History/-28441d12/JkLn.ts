import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  constructor(private router:Router){

  }
  textInputValue: string='';

  showTextInputValue(){
    alert( '${this.textInputValue}');
  }

  
}
