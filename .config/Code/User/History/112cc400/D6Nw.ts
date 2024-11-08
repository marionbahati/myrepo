import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  setDefaultLang: any;
  use: any;

  constructor(private router:Router,private translate:TranslationService) { 
    this.translate.setDefaultLang('de');
  }
 

  pageTRanslation(language:string){
    this.translate.use(language);
  }
}
