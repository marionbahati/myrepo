import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vkeayboard';
  @ViewChild("videoPlayer", { static: false })
  videoplayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
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
}
