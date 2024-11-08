import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-individuelle-zusammenstellung',
  templateUrl: './individuelle-zusammenstellung.component.html',
  styleUrl: './individuelle-zusammenstellung.component.scss'
})
export class IndividuelleZusammenstellungComponent {
  video(): VideoService {
    return this._video;
  }


  //video functions
  @ViewChild('videoPlayer') videoPlayer: any;
  videoVolume: number = 1;
  chosenShows!: any[];
  isMuted: boolean = false;
  isPlaying: boolean = false;

  @ViewChild('clickedElement') clickedElement: ElementRef;
  @ViewChild('science') science: ElementRef;
  @ViewChild('brand') brand: ElementRef;
  @ViewChild('diagnostik') diagnostik: ElementRef;
  show: boolean = true;
  isclicked: boolean = false;
  newArray: any[] = [];
  items = [
    { id: 1, name: 'Brand', icon: 'assets/icons/sarsedt.png' },
    { id: 2, name: 'Diagnosis', icon: 'assets/icons/diagnosisIcon.png' },
    { id: 3, name: 'Science', icon: 'assets/icons/wissenschaftIcon.png' }
  ];


  constructor(private router: Router, private renderer: Renderer2,
    private elementRef: ElementRef, private translate: TranslateService, private _video: VideoService) {
  }

  nextToStart: boolean = false;
  isLoading: boolean = false;
  diagnosIsLoadiang: boolean = false;
  scienceIsLoading: boolean = false;

  themenAuswahl: any[] = [];

  isClicked: boolean = false;
  startFilm: boolean = false;

  switchLanguage(language: string) {
    this.translate.use(language);

  }
  markAsClicked(auswahl: any) {
    auswahl.clicked = true;

  }


  pushtoThemAuswahl(item: any) {

    this.themenAuswahl.push(item);
    this.abspielen();

  }

  abspielen() {

    this.themenAuswahl.forEach(item => {
      if (item.clicked && item.name === 'Brand') {
        item.clicked = false;
        alert("witschaft");
        this._video.togglePlayPause();



      } if (item.clicked && item.name === 'Diagnosis') {
        item.clicked = false;

        this._video.togglePlayPause();

      } if (item.clicked && item.name === 'Science') {
        item.clicked = false;

        this._video.togglePlayPause();

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












