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
  registerPlayer(player: PlayerComponent) {
    this._player = player;
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
    if (this._player?.paused) {
      this._player?.play();
    } else {
      this._player?.pause();
    }

  }

  reset() {
    if (this._player?.currentTime !== undefined) {
      this._player.currentTime = 0;
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



