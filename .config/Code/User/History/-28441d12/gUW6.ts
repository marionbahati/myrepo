import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  constructor(private router:Router,private translate:TranslateService){

  }
  textInputValue: string='';

  showTextInputValue(){
    alert(this.textInputValue);
  }
 
  switchLanguage(language:string){
    this.translate.use(language);
    
}
}

 
