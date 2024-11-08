import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'translating';
  url: any = "(https://stackblitz.com/~/github.com/TheSlimvReal/angular-runtime-translations)";

  languageToggle = this.locale === "en" ? "DE" : "EN"

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

  changeLocale() {
    // Saving selected locale to local storage and reloading page
    localStorage.setItem("locale", this.languageToggle.toLowerCase())
    window.location.reload()
  }
  setLanguage(locale: string) {
    this.locale === "en";

  }

  setLanguagede(locale: string) {
    this.locale === "de";

  }
}

