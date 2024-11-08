import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gesamtshow',
  templateUrl: './gesamtshow.component.html',
  styleUrl: './gesamtshow.component.scss'
})
export class GesamtshowComponent {

  constructor(private router: Router) {
  }
 


  
  goToWelcomepage() {
    this.router.navigate(['/welcome']);
  }

  goToTHemen() {
    this.router.navigate(['/themen']);
  }
  goToWissenschaft() {
    this.router.navigate(['/wissenschaft']);
  }


  goToDiagnostik() {
    this.router.navigate(['/diagnostik']);
  }
  goToSartedt() {
    this.router.navigate(['/marke']);
  }
}
