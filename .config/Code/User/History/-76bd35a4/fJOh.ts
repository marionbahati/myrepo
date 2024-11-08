import { Component, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-cube-only-individuell',
  templateUrl: './cube-only-individuell.component.html',
  styleUrl: './cube-only-individuell.component.scss'
})
export class CubeOnlyIndividuellComponent {
  constructor(private router: Router, private translate: TranslateService) {
   
  }
//video functions
@ViewChild('videoPlayer') videoPlayer: any;
videoVolume: number = 1;
chosenShows!: any[];
isMuted: boolean = false;
isPlaying: boolean = false;

@ViewChild('marke') marke:any;
@ViewChild('diagnostik') diagnostik:any;
@ViewChild('wissenschaft') wissenschaft:any;

  isLoading: boolean = false;
  diagnosIsLoadiang:boolean=false;
  scienceIsLoading:boolean=false;

  themenAuswahl: any[] = [];

  isClicked: boolean = false;
  startFilm: boolean = false;

  switchLanguage(language: string) {
    this.translate.use(language);

  }

  clickedTrue() {
    this.isLoading = true;
    this.themenAuswahl.length = 0;
    const them = this.marke.nativeElement;
    this.themenAuswahl.push(them);
  
  }
  playDiangnostik() {
    this.diagnosIsLoadiang = true;
    this.themenAuswahl.length = 0;
    const them = this.diagnostik.nativeElement;
    this.themenAuswahl.push(them);
  }
  playWissenschaft() {
    this.scienceIsLoading= true;
    this.themenAuswahl.length = 0;
    const them = this.wissenschaft.nativeElement;
    this.themenAuswahl.push(them);
  }

// when you click Themenauswahl and then the start button  :
  abspielen() {
    this.themenAuswahl.forEach(item => {
    
      if (item.id == 1) {
        this.isLoading=false;
        // this.playPause();
        alert("Marke show starts shortly");
        
      } if (item.id == 2) {
       this.diagnosIsLoadiang=false;
       // this.playPause();
        alert("Diagnostik show starts shortly");
      } if (item.id == 3) {
       this.scienceIsLoading=false;
       // this.playPause();
        alert("Wissenschaft show starts shortly");
      }

    })

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

toggleMute() {
  this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
  this.isMuted = this.videoPlayer.nativeElement.muted;
}
}



