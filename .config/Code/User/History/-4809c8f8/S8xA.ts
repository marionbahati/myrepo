import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-test-show',
  templateUrl: './test-show.component.html',
  styleUrl: './test-show.component.scss'
})
export class TestShowComponent {
  constructor(private router: Router, private translate: TranslateService, private _video: VideoService) { }

  @ViewChild("videoPlayer", { static: false }) _videoplayer: ElementRef;
  // videosource: any = "https://cdn.pixabay.com/video/2023/09/24/182082-867762198_large.mp4";
  videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
  isPlaying: boolean = false;

  ismuted: boolean = false;

  @ViewChild('brand') brand: any;
  @ViewChild('diagnostik') diagnostik: any;
  @ViewChild('wissenschaft') wissenschaft: any;

  videoURL: string = '';
  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  themenAuswahl: any[] = [];

  isClicked: boolean = false;
  startFilm: boolean = false;


  switchLanguage(language: string) {
    this.translate.use(language);

  }
  brandClicked() {
    this._video.setVideoURL('https://cdn.pixabay.com/video/2023/09/24/182082-867762198_large.mp4');

  }

  clickedTrue() {
    this.isLoading = true;
    this.themenAuswahl.length = 0;
    const them = this.brand.nativeElement;
    this.themenAuswahl.push(them);

  }
  playDiangnostik() {
    this.diagnosIsLoadiang = true;
    this.themenAuswahl.length = 0;

    const them = this.diagnostik.nativeElement;
    this.themenAuswahl.push(them);
  }
  playWissenschaft() {
    this.scienceIsLoading = true;
    this.themenAuswahl.length = 0;
    const them = this.wissenschaft.nativeElement;
    this.themenAuswahl.push(them);
  }



}
