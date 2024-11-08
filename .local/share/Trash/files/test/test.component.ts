import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  constructor(private router: Router, private translate: TranslateService) {

  }

  switchLanguage(language: string) {
    this.translate.use(language);

  }
 
  goToWissenschaft() {
    this.router.navigate(['/wissenschaft']);
  }


  goToDiagnostik() {
    this.router.navigate(['/diagnostik']);
  }
  goToMarke() {
    this.router.navigate(['/marke']);
  }

  gotestShowSeite() {
    this.router.navigate(['/testShow']);
  }


}
