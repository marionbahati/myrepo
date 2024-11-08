import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor(private productservice:ProductServiceService){}

  name:string='';

  ngOnInit() {
    
  }
}
