import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Page2Component } from '../page2/page2.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  constructor(private translate:TranslateService){
    this.translate.setDefaultLang('de');
  }

  switchLanguage(language:string){
    this.translate.use(language);

  }
}
