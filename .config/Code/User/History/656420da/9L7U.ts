import { Component, OnChanges, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';


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
  reduceVolume(){
    this.videoPlayer.nativeElement.volume.reduceVolume();
    this.reduceVolume();
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
