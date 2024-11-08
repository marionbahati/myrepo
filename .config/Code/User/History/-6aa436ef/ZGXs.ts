import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  _volume: number = 1;
  _mute: boolean = false;
  _videoPlayer: any;


  constructor() { }

  togglePlayPause() {
    if (this._videoPlayer.paused) {
      this._videoPlayer.play();
    } else {
      this._videoPlayer.pause();
    }

  }


  reset() {
    this._videoPlayer.currentTime = 0;
  }
  setVolumeFromEvent(evt: Event) {
    this._volume = (evt.target as any).value;
  }
  setVolume(v: number) {
    this._volume = v;
  }
  getVolume(): number {
    return this._mute ? 0 : this._volume;
  }
  toggleMute() {
    this._mute = !this._mute;
  }
  isMuted() {
    return this._mute;
  }

}
// playPause() {
//   if (this.videoPlayer.nativeElement.paused) {
//     this.videoPlayer.nativeElement.play();
//     this.isPlaying = true;
//   } else {
//     this.videoPlayer.nativeElement.pause();
//     this.isPlaying = false;
//   }
// }
// startVideo() {
//   this.videoPlayer.nativeElement.play();
//   this.isPlaying = true;
// }
// restart() {
//   this.videoPlayer.nativeElement.currentTime = 0;
//   this.videoPlayer.nativeElement.play();
//   this.isPlaying = true;

// }

// toggleMute() {

//   this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;

//   this.isMuted = this.videoPlayer.nativeElement.muted;
//   this.isMuted = true;
// }
