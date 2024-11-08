import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  baseUrl="https://dummyjson.com/carts";


  getProducts(){
    
  }
}
