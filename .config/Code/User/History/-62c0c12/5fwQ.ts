import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-wissenschaft',
  templateUrl: './wissenschaft.component.html',
  styleUrl: './wissenschaft.component.scss'
})
export class WissenschaftComponent {
  constructor(private router: Router, private translate: TranslateService) { }
  @ViewChild('volumeBar')
  volumeBar!: ElementRef;
  @ViewChild("videoPlayer", { static: false })
  videoplayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  setVolume(){
    this.videoplayer.nativeElement.volume = parseInt(this.volumeBar.nativeElement.value);
  }
  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

 

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
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


  

}
