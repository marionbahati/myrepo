import { Component } from '@angular/core';

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
    this.cart--;
  }
}
