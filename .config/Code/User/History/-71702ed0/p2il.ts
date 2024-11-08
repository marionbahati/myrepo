import { Component } from '@angular/core';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrl: './topheader.component.css'
})
export class TopheaderComponent {
  isFixedNavbar;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(
  ) { }
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
    toggleNavbar() {
      this.navbarOpened = !this.navbarOpened;
    }
}
