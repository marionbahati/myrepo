import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnDestroy, AfterViewInit {
  @ViewChild("videoPlayer", { static: false }) _videoplayer: ElementRef;

  url?: string;
  constructor(private _video: VideoService) { }


  setURL(str: string) {
    this.url = str;
  }

  getVideoPlayerElement(): HTMLVideoElement {
    return this._videoplayer.nativeElement as HTMLVideoElement;
  }
  ngAfterViewInit() {
    this._video.registerPlayer(this);

  }
  ngOnDestroy() {
    this._video.unregisterPlayer(this);
  }
}
