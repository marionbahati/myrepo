import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrl: './translate-page.component.scss'
})
export class TranslatePageComponent {
  constructor(private translate:TranslateService,
     private router: Router,
     private traslation:TranslateService){
      
    this.translate.setDefaultLang('de');
  }

 

  switchLanguage(language:string){
   this.translate.use(language);
   setTimeout(()=>{
    this.router.navigateByUrl('/seite3');
   },100)
   
   
    
  }
   setLanguage(language:string){
    this.translate.use(language);
  }

  
}
