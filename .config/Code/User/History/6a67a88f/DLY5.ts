import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  baseUrl="https://dummyjson.com/products";


  getProducts():Observable<products[]>{
    
    return this.http.get<products[]>(this.baseUrl);
  }
}
