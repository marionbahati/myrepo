import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  constructor(private router: Router, private translate: TranslateService) {

  }
  switchLanguage(language: string) {
    this.translate.use(language);

  }
}
