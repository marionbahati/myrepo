import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrl: './topheader.component.css'
})
export class TopheaderComponent {
  isFixedNavbar:any;
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
    toggleNavbar(){
      this.navbarOpened = !this.navbarOpened;
    }
  }
}
