import { Component, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-cube-only-individuell',
  templateUrl: './cube-only-individuell.component.html',
  styleUrl: './cube-only-individuell.component.scss'
})
export class CubeOnlyIndividuellComponent {
  constructor(private router: Router, private translate: TranslateService, private _video: VideoService) {

  }

  @ViewChild('marke') marke: any;
  @ViewChild('diagnostik') diagnostik: any;
  @ViewChild('wissenschaft') wissenschaft: any;

  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  switchLanguage(language: string) {
    this.translate.use(language);

  }

  brandClicked() {

    this._video.setVideoURL('');
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



