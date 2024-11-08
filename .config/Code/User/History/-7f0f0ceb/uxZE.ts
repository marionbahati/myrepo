import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent  implements OnInit{

  constructor( private prodservive:ProductServiceService){}

  ngOnInit() {
    
  }
}
