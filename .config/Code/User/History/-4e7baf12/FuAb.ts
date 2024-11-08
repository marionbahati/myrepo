import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  constructor(private router:Router,private translate:TranslateService){

  }
 

 
  switchLanguage(language:string){
    this.translate.use(language);
    
}
}
