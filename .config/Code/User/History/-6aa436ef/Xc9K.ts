import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  _volume:number=1;
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
  constructor() { }
}
