import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
products=[
  {name:'product 1',price:100,id:1},
  {name:'product 2',price:1200,id:2},
  {name:'product 3',price:300,id:3},
  {name:'product 4',price:500,id:4},
  {name:'product 5',price:600,id:5},
  {name:'product 6',price:160,id:6},
  {name:'product 7',price:170,id:7},
  {name:'product 8',price:270,id:8}

]
}
