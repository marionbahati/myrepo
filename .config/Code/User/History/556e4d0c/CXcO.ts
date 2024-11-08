import { Component } from '@angular/core';
import { product } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'commerce';

  cart: any = 0;


  addtoCart() {
    this.cart++;
  }

  removeFromCart() {
    if (this.cart > 1) {
      this.cart--;
    }

  }
}
