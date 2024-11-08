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
 
  chosenShows!: any[];

  goToWelcomepage(){
    this.router.navigate(['/welcome']);
  }

  goToTHemen(){
    this.router.navigate(['/themen']);
  }
  goToWissenschaft(){
    this.router.navigate(['/wissenschaft']);
  }
  goToShow(){
    this.router.navigate(['/show']);
  }

  goToDiagnostik(){
    this.router.navigate(['/diagnostik']);
  }
 
  switchLanguage(language:string){
    this.translate.use(language);
    
}
goToMainmenu(){
  this.router.navigate(['/seite3']);
}


addedShow(){
  this.chosenShows.push(Object);
}

}
