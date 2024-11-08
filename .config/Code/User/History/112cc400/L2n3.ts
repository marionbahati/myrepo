import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('de');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() { }

  // Method to change the current language
  changeLanguage(language: string) {
    
    this.currentLanguageSubject.next(language);
  }

  
  getLocalizedString(key: string): string {
   
    return key; 
  }
}
