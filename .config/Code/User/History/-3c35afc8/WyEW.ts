import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.component.html',
  styleUrl: './seite3.component.scss'
})
export class Seite3Component {

  constructor(private router:Router,private translate:TranslateService){

  }
  switchLanguage(language:string){
    this.translate.use(language);
   
     
   }
    setLanguage(language:string){
     this.translate.use(language);
   }

  
   goToWelcome(){
    if(this.translate.currentLang==='de'){
      this.router.navigateByUrl('/welcome')
    }else{
      this.router.navigateByUrl('/wissenschaft')
    }
   }
  
  
}
