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
  @ViewChild('videoPlayer') videoPlayer: any;
  videoVolume: number = 1;
  chosenShows!: any[];
  
  setVolume() {
    this.videoPlayer.nativeElement.volume = this.videoVolume;
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
