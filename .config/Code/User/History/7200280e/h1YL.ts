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
