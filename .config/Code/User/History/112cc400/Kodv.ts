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
    // You would typically load language files here based on the selected language
    // For simplicity, let's just update the current language
    this.currentLanguageSubject.next(language);
  }

  // Method to get the localized string
  getLocalizedString(key: string): string {
    // Implement logic to fetch localized string based on the current language
    // For simplicity, let's assume we have language files loaded already
    // and we directly return the translated string for the given key
    return key; // Return the key itself if not translated
  }
}
