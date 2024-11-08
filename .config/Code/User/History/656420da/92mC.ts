import { Component, OnChanges, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sarstedt-marke',
  templateUrl: './sarstedt-marke.component.html',
  styleUrl: './sarstedt-marke.component.scss'
})
export class SarstedtMarkeComponent {

  constructor(private router: Router, private translate: TranslateService) { }
  @ViewChild('player') cllicked: ElementRef;

  chosenShows!: any[];
  identify: any;
  divisions = [
    {
      content: 'SARTEDT',
      id: "1",
    
    },
    {
      content: 'DIAGNOSTIK',
      id: "2",
     
    },
    {
      content: 'WISSENSCHAFT',
      id: "3",
      
    },

  ];

  goTo() {
    this.identify = this.cllicked.nativeElement;
    if (this.identify.getElementById === "1") {
      this.router.navigate(['marke']);
    }if (this.identify.getElementById === "2") {
      this.router.navigate(['/diagnostik']);
     
    } else {
      this.router.navigate(['/wissenschaft']);
    }


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
