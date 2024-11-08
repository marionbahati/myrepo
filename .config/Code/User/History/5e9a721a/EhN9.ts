import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',

})
export class ShowComponent {
  constructor(private router: Router, private translate: TranslateService
  ) {
  }


  //video functions
  @ViewChild('videoPlayer') videoPlayer: any;
  videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
  isPlaying: boolean = false;

  show:boolean=true;
   
  videosource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  ismuted: boolean = false;

  @ViewChild('brand') brand: any;
  @ViewChild('diagnostik') diagnostik: any;
  @ViewChild('wisenschaft') wisenschaft: any;

  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  themenAuswahl: any[] = [];

  isClicked: boolean = false;
  startFilm: boolean = false;

  switchLanguage(language: string) {
    this.translate.use(language);

  }
  clickedTrue() {
    this.isLoading = true;
    this.themenAuswahl.length = 0;
    const them=this.brand.nativeElement;
   
    this.themenAuswahl.push(them);

  }
  playDiangnostik() {
    this.diagnosIsLoadiang = true;
    this.themenAuswahl.length = 0;
    const them=this.diagnostik.nativeElement;
   
    this.themenAuswahl.push(them);
  }
  playWissenschaft() {
    this.scienceIsLoading = true;
    this.themenAuswahl.length = 0;
    const them=this.wisenschaft.nativeElement;
   
    this.themenAuswahl.push(them);
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
  restart() {
    this.videoPlayer.nativeElement.currentTime = 0;
    this.videoPlayer.nativeElement.play();
    this.isPlaying = true;

  }

  // when you click Themenauswahl and then the start button  :
  abspielen() {
    this.themenAuswahl.forEach(item => {

      if (item.id == 1) {
        this.isLoading = false;
        this.playPause();
        

      } if (item.id == 2) {
        this.diagnosIsLoadiang = false;
        this.playPause();
        // alert("Diagnostik show starts shortly");
      } if (item.id == 3) {
        this.scienceIsLoading = false;
        this.playPause();
        // alert("Wissenschaft show starts shortly");
      }

    })

  }
  resetFunction() {
    this.themenAuswahl.length = 0;
  }

  setVolume() {
    this.videoPlayer.nativeElement.volume = this.videoVolume;
  }

  goToWelcome(){
    if(this.translate.currentLang==='de'){
      this.router.navigateByUrl('/welcome')
    }else{
      this.router.navigateByUrl('/wissenschaft')
    }
   }
  
   toggleMute() {

    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;

    this.isMuted = this.videoPlayer.nativeElement.muted;
    this.isMuted = true;
  }
  hideit() {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
    this.isMuted = false;

  }

}
