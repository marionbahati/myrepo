import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent  {
  constructor(private router:Router,private translate:TranslateService){

  }
  @ViewChild('videoPlayer') videoPlayer: any;
  videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
  isPlaying: boolean = false;
  switchLanguage(language:string){
    this.translate.use(language);
    
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
