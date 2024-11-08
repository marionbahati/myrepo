import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Page2Component } from '../page2/page2.component';
import { Resolve, Router } from '@angular/router';
import { delay } from 'rxjs';
import { resolve } from 'url';




@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component  {
  constructor(private router:Router){

  }
  
  displaydelay(){
    return new Promise((resolve) => {
      setTimeout(resolve,3000)
      
    })
  }
 
  
  async goToTranslatePage(){
  this.displaydelay();
      this.router.navigateByUrl('/translate');
}



}
