import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.component.html',
  styleUrl: './seite3.component.scss'
})
export class Seite3Component {

  constructor(private router:Router){

  }

  goToWelcomepage(){
    this.router.navigate(['/welcome']);
  }

  goToTHemen(){
    this.router.navigate(['/themen']);
  }

  goToTest(){
    this.router.navigate(['/test']);
  }


  goToGeamtshow(){
    this.router.navigate(['/gesamtshow']);
  }
  
}
