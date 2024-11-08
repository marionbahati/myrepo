import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { product } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'commerce';
  @ViewChild('carty') carty: any;

  cart: any = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  addtoCart() {
    this.cart++;
  }

  removeFromCart() {
    if (this.cart > 1) {
      this.cart--;
    }

  }
  openCart() {

  }
}
