import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() url: string = '';
  constructor(private _video: VideoService) { }
  ngOnInit() {
    this._video.registerPlayer(this);
  }
  ngOnDestroy() {
    this._video.unregisterPlayer(this);
  }
}
