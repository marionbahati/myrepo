import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
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

  }
  constructor(private router: Router) {
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
