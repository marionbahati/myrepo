import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
  constructor(private produsctservice:ProductServiceService){}

  ngOnInit(){
    
  }

}
