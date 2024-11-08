import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { product } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'commerce';

  @ViewChild('carty', { static: false })
  carty!: ElementRef;
  cart: any = 0;
  show: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  addtoCart() {
    this.cart++;
  }

  removeFromCart() {
    if (this.cart > 0) {
      this.cart--;
    }

  }
  openCart() {

    this.renderer.setStyle(this.carty.nativeElement, 'visibility', 'visible');






  }
  closeCart() {
    this.renderer.setStyle(this.carty.nativeElement, 'visibility', 'hidden');

  }
}
