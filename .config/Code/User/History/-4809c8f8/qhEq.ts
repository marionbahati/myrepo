import { Component, ViewChild } from '@angular/core';
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

  videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
  isPlaying: boolean = false;

  ismuted: boolean = false;

  @ViewChild('brand') brand: any;
  @ViewChild('diagnostik') diagnostik: any;
  @ViewChild('wissenschaft') wissenschaft: any;


  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  themenAuswahl: any[] = [];

  isClicked: boolean = false;
  startFilm: boolean = false;


  switchLanguage(language: string) {
    this.translate.use(language);

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

  // when you click Themenauswahl and then the start button  :
  abspielen() {
    this.themenAuswahl.forEach(item => {

      if (item.id == "1") {
        this.isLoading = false;

        this._video.togglePlayPause();

      } if (item.id == "2") {
        this.diagnosIsLoadiang = false;
        this._video.togglePlayPause();


      } if (item.id == "3") {
        this.scienceIsLoading = false;
        this._video.togglePlayPause();



      }

    })

  }



}
