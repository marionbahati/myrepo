import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private translate:TranslateService, private router:Router ){
    this.translate.setDefaultLang('de');
    this.router.navigate(['/page2']);

  }

  switchLanguage(language:string){
    this.translate.use(language);
    this.router.navigate(['/page2']);
  }
}
