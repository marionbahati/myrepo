import { Component } from '@angular/core';
import { ProductServiceService } from './Service/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'searchFilterSort';


  public products=[];

  constructor(private produsctservice:ProductServiceService){}

  ngOnInit(){
    this.produsctservice.getProducts().subscribe(data => this.products==data);
  }

}
