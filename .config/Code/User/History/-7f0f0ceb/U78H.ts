import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';
import { product } from '../product';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent  implements OnInit{

  prod:product[]=[]

  constructor( private prodservive:ProductServiceService){}

  ngOnInit() {
   this.prodservive.getProducts().subscribe({next:(res)=>{
      this.prod=res;
      this.populateArray(res)
     
    },
    error:(error)=>{
      console.log(error.massage);
    },
    complete:()=>{
      
      console.log('API call completed')
    
    }
  });
  }
populateArray(res:any){
  res.results.array.forEach(element => {
    let prod=new product();
    
  });

}

}
