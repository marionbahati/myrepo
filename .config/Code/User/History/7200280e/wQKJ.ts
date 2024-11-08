import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themen',
  templateUrl: './themen.component.html',
  styleUrl: './themen.component.scss'
})
export class ThemenComponent {
  constructor(private router:Router){

  }
  goToWissenschaft(){
    this.router.navigate(['/wissenschaft']);
  }

  goToMainmenu(){
    this.router.navigate(['/seite3']);
  }
  goToDiagnostik(){
    this.router.navigate(['/diagnostik']);
  }
  goToWikommePage(){
    this.router.navigate(['/welcome']);
  }
  goToShowPage(){
    this.router.navigate(['/show']);
  }
  goToThemenPage(){
    this.router.navigate(['/themen']);
  }
}
