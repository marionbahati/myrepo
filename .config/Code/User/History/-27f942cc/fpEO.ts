import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Page2Component } from '../page2/page2.component';
import { Resolve, Router } from '@angular/router';
import { delay } from 'rxjs';
import { resolve } from 'url';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component  {
frontpage: any;
  constructor(private router:Router){

  }

  goToTranslatePage(){
    setTimeout(() => {
      return this.router.navigateByUrl('/test')
    }
    , 200);
  }

}
