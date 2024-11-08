import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',

})
export class ShowComponent {
  constructor(private router: Router,private translate:TranslateService
   ) {
  }

  switchLanguage(language:string){
    this.translate.use(language);
    
}
  
  goToWelcomepage() {
    this.router.navigate(['/welcome']);
  }

  goToIndividuell() {
    this.router.navigate(['/individuell']);
  }
  goToWissenschaft() {
    this.router.navigate(['/wissenschaft']);
  }


  goToDiagnostik() {
    this.router.navigate(['/diagnostik']);
  }
  goToSartedt() {
    this.router.navigate(['/marke']);
  }
}
