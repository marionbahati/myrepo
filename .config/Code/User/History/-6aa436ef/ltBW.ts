import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  _volume:number=1;
  _mute:boolean = false;
  togglePlayPause(){
    
  }
  play(){

  }
  pause(){
    
  }
  mute(){

  }
  reset(){

  }
  setVolumeFromEvent(evt: InputEvent){
    this._volume = evt.target?.value;
  }
  setVolume(v:number){
    this._volume = v;
  }
  getVolume():number{
    return this._mute ? 0 : this._volume;
  }
  toggleMute(){
    this._mute = !this._mute;
  }
  isMuted(){
    return this._mute;
  }
  constructor() { }
}
