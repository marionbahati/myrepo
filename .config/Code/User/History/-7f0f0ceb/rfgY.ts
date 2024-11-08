import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';

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
      this.products=res;
      return this.products;
    },
    error:(error)=>{
      console.log(error.massage);
    },
    complete:()=>{
      console.log('API call completed')
      return this.products;
    }
  });
    
  
  }
}
