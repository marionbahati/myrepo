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
export class AppComponent implements OnInit {
  title = 'searchFilterSort';
 
 



  constructor(private produsctservice: ProductServiceService, private http: HttpClient) { }

  ngOnInit() {
    
  }

}
