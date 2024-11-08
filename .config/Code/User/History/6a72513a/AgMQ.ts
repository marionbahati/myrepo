import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrl: './translate-page.component.scss'
})
export class TranslatePageComponent {
  constructor(private translate:TranslateService, private router: Router,private traslation:TranslateService){
    this.translate.setDefaultLang('de');
  }

  showSete3:boolean=true;

  switchLanguage(language:string){
   this.translate.use(language);
    
    setTimeout(()=>{
      this.showSete3=false;
    },1000);
   
   
  }
   setLanguage(language:string){
    this.translate.use(language);
  }

  goToWelcomepage(){
    this.router.navigate(['/welcome']);
  }

  goToTHemen(){
    this.router.navigate(['/themen']);
  }

  goToTest(){
    this.router.navigate(['/test']);
  }
  goToShow(){
    this.router.navigate(['/show']);
  }

  goToGeamtshow(){
    this.router.navigate(['/gesamtshow']);
  }
}
