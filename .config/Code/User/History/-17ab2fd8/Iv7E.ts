import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Page2Component } from '../page2/page2.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component  {
  constructor(private router:Router){

  }
  
  
 
  
    goToTranslatePage(){
  
      this.router.navigateByUrl('/translate');
}



}
