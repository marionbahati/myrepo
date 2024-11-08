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
  video(): VideoService {
    return this._video;
  }


  route: string = '';

  switchLanguage(language: string) {
    this.translate.use(language);

  }

  getClasses(): Object {
    let classes: Object = {};
    let classname = this.sanitizeRouteForCssClass(this.route);
    classes[classname] = true;
    return classes;
  }
  sanitizeRouteForCssClass(r: string): string {
    if (r == '/') {
      return 'frontpage';
    }
    return r.replace(/[/\s-#]/g, '').toLocaleLowerCase();
  }
  constructor(private router: Router, private translate: TranslateService, private _video: VideoService) {
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

  goBack() {
    if (this.route == "/individuelleZusammenstellung") {
      this.router.navigateByUrl('/individuell');

    }
  }




}
