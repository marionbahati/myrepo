import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  _volume: number = 1;
  _mute: boolean = false;
  _videoPlayer: any;

  _videoUrl: string = '';
  setVideoURL(url: string): void {
    this._videoUrl = url;
  }
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



