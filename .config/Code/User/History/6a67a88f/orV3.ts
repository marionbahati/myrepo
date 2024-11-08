import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  baseUrl="https://dummyjson.com/products";


  getProducts(){
    
    return this.http.get<products[]>(this.baseUrl);
  }
}
