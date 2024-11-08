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
  setVolume(v:number){
    this._volume = v;
  }
  getVolume():number{
    return this._volume;
  }
  toggleMute(){
    this._mute = !this._mute;
  }
  constructor() { }
}
