import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  route: string = '';

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

  // goToWelcome() {
  //   if (this.translate.currentLang === 'de') {
  //     this.router.navigateByUrl('/welcome')
  //   } else {
  //     this.router.navigateByUrl('/wissenschaft')
  //   }
  // }
}
