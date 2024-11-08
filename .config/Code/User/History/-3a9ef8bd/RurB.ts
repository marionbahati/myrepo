import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './Service/product-service.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'searchFilterSort';


  

  constructor(private produsctservice:ProductServiceService,private http:HttpClient){}

   ngOnInit(){
 this.produsctservice.getProducts().pipe(map((res)=>{
  const products=[];
  
  for(const key in res){
    products.push({...res})

    if(res.hasOwnProperty(key)){
      products.push({...res[key],id:key})
    }
  }
return products;
 }))
 .subscribe((res)=>{
    
      console.log(res);
     
    });
     }

}
