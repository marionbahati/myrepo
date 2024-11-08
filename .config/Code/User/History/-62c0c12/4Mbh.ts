import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-wissenschaft',
  templateUrl: './wissenschaft.component.html',
  styleUrl: './wissenschaft.component.scss'
})
export class WissenschaftComponent {
  constructor(private router: Router, private translate: TranslateService) { }

  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJoqVAlOzcvnF-dMZMc6VDF3d5UBr6GL_C0-lfADutJwR6Mr7bc_4uwaFokWWq4P-J5Q&usqp=CAU";
  simage = "assets/images/caret-right-square.svg"
  chosenShows!: any[];

  goToWelcomepage() {
    this.router.navigate(['/welcome']);
  }

  goToTHemen() {
    this.router.navigate(['/themen']);
  }
  goToWissenschaft() {
    this.router.navigate(['/wissenschaft']);
  }
  goToShow() {
    this.router.navigate(['/show']);
  }

  goToDiagnostik() {
    this.router.navigate(['/diagnostik']);
  }

  switchLanguage(language: string) {
    this.translate.use(language);

  }
  goToMainmenu() {
    this.router.navigate(['/seite3']);
  }


  addedShow() {
    this.chosenShows.push(Object);
  }

}
