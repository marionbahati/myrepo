import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent  implements OnInit{
  products:any;

  constructor( private prodservive:ProductServiceService){}

  ngOnInit() {
    this.products=this.prodservive.getProducts().subscribe({next:(res)=>{
      console.log(res);
    }
    });
    
  
  }
}
