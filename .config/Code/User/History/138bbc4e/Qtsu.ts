import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

@Component({
  selector: 'app-diagnostik',
  templateUrl: './diagnostik.component.html',
  styleUrl: './diagnostik.component.scss'
})
export class DiagnostikComponent  {
videoPlayer:any;

 



  playVideao() {
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
    video.play();
  }

  pauseVideo() {
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
    video.pause();
  }

  stopVideo() {
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
    
  }
}
