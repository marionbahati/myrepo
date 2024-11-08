import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{

  public products=[];

  constructor(private produsctservice:ProductServiceService){}

  ngOnInit(){
    this.produsctservice.getProducts().subscribe(data => this.products==data);
  }

}
