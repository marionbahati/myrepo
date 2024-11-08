import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrl: './translate-page.component.scss'
})
export class TranslatePageComponent {
  constructor(private translate:TranslateService, private router: Router){
    this.translate.setDefaultLang('de');
   

  }

  switchLanguage(language:string){
    this.translate.use(language);
   this.router.navigateByUrl('/welcome');
  }
}
