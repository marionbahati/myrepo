import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrl: './translate-page.component.scss'
})
export class TranslatePageComponent {
  constructor(private translate:TranslateService, private router: Router,private traslation:TranslateService){
    this.translate.setDefaultLang('de');
  }

  showSete3:boolean=false;

  switchLanguage(language:string){
   
    this.showSete3=true;
   
   
   
  }
   setLanguage(language:string){
    this.translate.use(language);
  }
}
