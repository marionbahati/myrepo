import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() url: string = '';
  @ViewChild("videoPlayer", { static: false }) _videoplayer: ElementRef;
  constructor(private _video: VideoService) { }
  ngOnInit() {
    this._video.registerPlayer(this);
  }
  ngOnDestroy() {
    this._video.unregisterPlayer(this);
  }
}
