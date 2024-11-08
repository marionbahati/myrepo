import { Component } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  video():VideoService{
    return this._video;
  }
  constructor(private _video:VideoService,private translate: TranslateService){

  }

  switchLanguage(language: string) {
    this.translate.use(language);

  }
}
