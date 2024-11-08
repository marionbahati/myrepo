import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tourGuide';
  slides = [
    { color: '#007bff', text: 'Slider 1' },
    { color: '#6c757d', text: 'Slider 2' },
    { color: '#17a2b8', text: 'Slider 3' }
  ]
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
