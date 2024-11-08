import { Component,Input, Output} from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  @Input() massage:string;

 constructor(private translate:TranslateService, private router: Router,private traslation:TranslateService){
  this.translate.setDefaultLang('de');
 }


  wilkommenSeite(){
    this.router.navigate(['/welcome']);
  }
}
