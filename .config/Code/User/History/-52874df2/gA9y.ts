import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',

})
export class ShowComponent {
  constructor(private router:Router){

  }

  goToWelcomepage(){
    this.router.navigate(['/welcome']);
  }

  goToTHemen(){
    this.router.navigate(['/themen']);
  }
  goToWissenschaft(){
    this.router.navigate(['/wissenschaft']);
  }


  goToDiagnostik(){
    this.router.navigate(['/diagnostik']);
  }

}
