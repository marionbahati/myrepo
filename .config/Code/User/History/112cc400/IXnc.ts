import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  
  

  constructor(private translate:TranslationService) { 

  }
 
  switchLanguage(language:string){
    // this.translate.use(language);
    
    
    
     
   }
    setLanguage(language:string){
   
   }
}
