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
  isMuted: boolean = false;
  
  isPlaying: boolean = false;
  setVolume() {
    this.videoPlayer.nativeElement.volume = this.videoVolume;
  }
  playPause() {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }
  startVideo() {
    this.videoPlayer.nativeElement.play();
    this.isPlaying = true;
  }
  restart() {
    this.videoPlayer.nativeElement.currentTime = 0;
    this.videoPlayer.nativeElement.play();
    this.isPlaying = true;
  }

 
  // toggleMute() {
  //   if (this.videoPlayer.nativeElement.muted) {
  //     this.videoPlayer.nativeElement.muted = false;
  //     this.isMuted = false;
  //   } else {
  //     this.videoPlayer.nativeElement.muted = true;
  //     this.isMuted = true;
  //   }}



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
