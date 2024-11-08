import { Component, Inject, LOCALE_ID } from '@angular/core';
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
  languageToggle = this.locale === "de" ? "EN" : "DE"
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
  constructor(private router: Router, private translate: TranslateService, @Inject(LOCALE_ID) public locale: string) {
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


  changeLocale() {
    // Saving selected locale to local storage and reloading page
    localStorage.setItem("locale", this.languageToggle.toLowerCase())
    window.location.reload()
  }


}



