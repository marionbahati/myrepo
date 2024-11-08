import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projcet1';
  constructor(private translate:TranslateService){
    this.translate.setDefaultLang('de');
  }

  switchLanguage(language:string){
    this.translate.use(language);

  }
}
