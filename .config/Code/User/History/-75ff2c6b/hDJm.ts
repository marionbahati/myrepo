import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
 name:string='';
 constructor(private prodservice:ProductServiceService){}

 ngOnInit() {
   this.name="MARION";
   this.prodservice.setName(this.name);
 }
 
}
