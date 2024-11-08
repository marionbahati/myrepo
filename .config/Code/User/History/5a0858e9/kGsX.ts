import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
products=[
  {name:'product 1',price:100},
  {name:'product 2',price:1200},
  {name:'product 3',price:300},
  {name:'product 4',price:500},
  {name:'product 5',price:600},
  {name:'product 6',price:160},
  {name:'product 7',price:170},
  {name:'product 8',price:270}

]
}
