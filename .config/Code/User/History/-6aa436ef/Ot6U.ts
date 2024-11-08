import { Injectable } from '@angular/core';
import { PlayerComponent } from '../components/player/player.component';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  _volume: number = 1;
  _mute: boolean = false;

  _videoUrl: string = '';
  _player?: PlayerComponent;
  _playerElement?: HTMLVideoElement;
  reset() {
    if (this._player) {
      this._player?.setURL(this._videoUrl);
      if (this._player.getVideoPlayerElement()) {
        this._player.getVideoPlayerElement().currentTime = 0;
      }
    }
  }
  registerPlayer(player: PlayerComponent) {
    this._player = player;
    this._playerElement = this._player.getVideoPlayerElement();
  }
  unregisterPlayer(player: PlayerComponent) {
    if (this._player == player) {
      this._player = undefined;
    }
  }
  setVideoURL(url: string): void {

    this._videoUrl = url;
    if (this._player) {
      this._player.url = url;
    }
  }
  constructor() { }

  togglePlayPause() {

    if (this._playerElement?.paused) {
      this._playerElement?.play();
      console.log("playing video!");
    } else {
      console.log("pausing video!");
      this._playerElement?.pause();
    }

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



