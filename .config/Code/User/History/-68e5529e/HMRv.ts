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
    var myVideo: any = document.getElementById("videoPlayer");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

 

 

  restart() {
    let video: any = document.getElementById("videoPlayer");
    video.currentTime = 0;
  }
}
