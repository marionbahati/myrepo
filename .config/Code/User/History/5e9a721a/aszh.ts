import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { TranslatePipe } from '@ngx-translate/core';
import { VideoService } from '../services/video.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',

})
export class ShowComponent {
  constructor(private router: Router, private translate: TranslateService, private _video: VideoService
  ) {
  }


  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;



  isClicked: boolean = false;
  startFilm: boolean = false;

  switchLanguage(language: string) {
    this.translate.use(language);

  }
  playBrand() {

    this._video.setVideoURL('https://cdn.pixabay.com/video/2023/09/24/182082-867762198_large.mp4');
    this._video.reset();


  }
  playDiangnostik() {
    this._video.setVideoURL('');
    this._video.reset();
  }
  playWissenschaft() {
    this._video.setVideoURL('');
    this._video.reset();
  }







}
