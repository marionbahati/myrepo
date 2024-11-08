import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-individuelle-zusammenstellung',
  templateUrl: './individuelle-zusammenstellung.component.html',
  styleUrl: './individuelle-zusammenstellung.component.scss'
})
export class IndividuelleZusammenstellungComponent {

//video functions
@ViewChild('videoPlayer') videoPlayer: any;
 videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
 isPlaying: boolean = false;

  @ViewChild('clickedElement') clickedElement: ElementRef;
  @ViewChild('science') science: ElementRef;
  @ViewChild('brand') brand: ElementRef;
  @ViewChild('diagnostik') diagnostik: ElementRef;

  isclicked: boolean = false;
  newArray: any[] = [];
  items = [
    { id: 1, name: 'brand', icon: 'assets/images/looks_5_FILL0_wght400_GRAD0_opsz24.png' },
    { id: 2, name: 'diagnosis', icon: 'assets/images/icons8-tropfen-blut-24.png' },
    { id: 3, name: 'science', icon: 'assets/images/svgviewer-png-output.png' }
  ];


  constructor(private router: Router, private renderer: Renderer2, private elementRef: ElementRef, private translate: TranslateService) {
  }

  nextToStart: boolean = false;
  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  themenAuswahl: any[] = [];

  isClicked: boolean = false;
  startFilm: boolean = false;

  switchLanguage(language: string) {
    this.translate.use(language);

  }
  markAsClicked(auswahl: any) {
    auswahl.clicked = true;

  }


  pushtoThemAuswahl(item: any) {

    this.themenAuswahl.push(item);

  }

  abspielen() {

    this.themenAuswahl.forEach(item => {
      if (item.clicked && item.name==='brand') {
        
        setTimeout(() => {
         
          item.clicked = false;
         alert('Marke')
        }, 200)

      }if (item.clicked && item.name==='diagnosis') {
        
        setTimeout(() => {
          alert('Diagnostik')
          item.clicked = false;
         
        }, 200)

      }if (item.clicked && item.name==='science') {
        
        setTimeout(() => {
          alert('Wissenschaft')
          item.clicked = false;
         
        }, 200)

      }
    })

  }


  resetFunction() {
    
    this.themenAuswahl.length = 0;
  }

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

  goToWelcome(){
    if(this.translate.currentLang==='de'){
      this.router.navigateByUrl('/welcome')
    }else{
      this.router.navigateByUrl('/wissenschaft')
    }
   }

}
//  video player functions
// @ViewChild('videoPlayer') videoPlayer: any;
//   videoVolume: number = 1;
//   chosenShows!: any[];
//   isMuted: boolean = false;
  
//   isPlaying: boolean = false;
//   setVolume() {
//     this.videoPlayer.nativeElement.volume = this.videoVolume;
//   }
 
//   toggleMute() {
//     this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
//     this.isMuted = this.videoPlayer.nativeElement.muted;
//   }












