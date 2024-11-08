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
  //video functions
  @ViewChild('videoPlayer') videoPlayer: any;
  videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
  isPlaying: boolean = false;

  @ViewChild('diagnostik') diagnostik: any;
  @ViewChild('wissenschaft') wissenschaft: any;

  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  themenAuswahl: any[] = [];


  switchLanguage(language: string) {
    this.translate.use(language);

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

      if (item.id == "2") {
        this.diagnosIsLoadiang = false;
        this._video.togglePlayPause();
        alert("Diagnostik show starts shortly");
      } if (item.id == "3") {
        this.scienceIsLoading = false;
        this._video.togglePlayPause();
        alert("Wissenschaft show starts shortly");
      }

    })

  }

  goToWelcome() {
    if (this.translate.currentLang === 'de') {
      this.router.navigateByUrl('/welcome')
    } else {
      this.router.navigateByUrl('/wissenschaft')
    }
  }



}
