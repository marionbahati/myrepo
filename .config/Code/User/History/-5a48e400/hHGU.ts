import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-themenfilme',
  templateUrl: './themenfilme.component.html',
  styleUrl: './themenfilme.component.scss'
})
export class ThemenfilmeComponent {
  constructor(private router: Router, private translate: TranslateService, private _video: VideoService) {
  }


  @ViewChild('diagnostik') diagnostik: any;
  @ViewChild('wissenschaft') wissenschaft: any;

  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;




  switchLanguage(language: string) {
    this.translate.use(language);

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
