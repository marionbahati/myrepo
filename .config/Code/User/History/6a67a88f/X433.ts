import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  baseUrl="https://dummyjson.com/products";


  getProducts():Observable<product[]>{
    
    return this.http.get<product[]>(this.baseUrl);
  }
}
