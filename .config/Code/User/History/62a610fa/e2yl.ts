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
  items = [
    { id: 1, name: 'Item 1', icon: 'assets/images/wysiwyg_FILL0_wght400_GRAD0_opsz24(2).png' },
    { id: 2, name: 'Item 2', icon: 'Sarstedt/src/assets/images/wysiwyg_FILL0_wght400_GRAD0_opsz24(1).png' },
    { id: 3, name: 'Item 3', icon: 'Sarstedt/src/assets/images/wysiwyg_FILL0_wght400_GRAD0_opsz24.png' }
  ];




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
