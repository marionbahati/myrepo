import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

@Component({
  selector: 'app-diagnostik',
  templateUrl: './diagnostik.component.html',
  styleUrl: './diagnostik.component.scss'
})
export class DiagnostikComponent {
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
