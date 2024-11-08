import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',

})
export class ShowComponent {
  constructor(private router: Router) {
  }
  imageUrl1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJoqVAlOzcvnF-dMZMc6VDF3d5UBr6GL_C0-lfADutJwR6Mr7bc_4uwaFokWWq4P-J5Q&usqp=CAU";
  imageUrl2="https://cdn-icons-png.freepik.com/256/5291/5291032.png";
  imageUrl3="https://cdn-icons-png.freepik.com/256/3222/3222498.png";
  diagnonis:string="blue";
  life:string="life";
  shows:any [] = [

  ];
  
  goToWelcomepage() {
    this.router.navigate(['/welcome']);
  }

  goToTHemen() {
    this.router.navigate(['/themen']);
  }
  goToWissenschaft() {
    this.shows.push(this.imageUrl3);
  }


  goToDiagnostik() {
    this.shows.push(this.imageUrl1);
  }
  goToSartedt() {
    this.shows.push(this.imageUrl2);
  }
}
