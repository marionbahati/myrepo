import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnDestroy, AfterViewInit {
  @Input() url: string = '';
  @ViewChild("videoPlayer", { static: false }) _videoplayer: ElementRef;
  getVideoPlayerElement(): HTMLVideoElement {
    return this._videoplayer.nativeElement as HTMLVideoElement;
  }
  constructor(private _video: VideoService) { }
  ngAfterViewInit() {
    this._video.registerPlayer(this);
  }
  ngOnDestroy() {
    this._video.unregisterPlayer(this);
  }
}
