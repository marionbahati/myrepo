import { Component } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { TranslateService } from '@ngx-translate/core';

import { filter } from 'rxjs';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private _video: VideoService;
  video(): VideoService {
    return this._video;
  }


  switchLanguage(language: string) {
    this.translate.use(language);

  }

  route: string = '';

  getClasses(): Object {
    let classes: Object = {};
    let classname = this.sanitizeRouteForCssClass(this.route);
    classes[classname] = true;
    return classes;
  }
  sanitizeRouteForCssClass(r: string): string {
    return r.replace(/[/\s-#]/g, '').toLocaleLowerCase();
  }
  constructor(private router: Router, private translate: TranslateService) {
    this.router
      .events
      .pipe(
        filter(
          (e: Event | RouterEvent): e is RouterEvent => e instanceof NavigationEnd
        )
      ).subscribe(
        {
          next: (r: NavigationEnd) => {
            this.route = r.url;
          }
        }
      )

  }


}
