import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-themenfilme',
  templateUrl: './themenfilme.component.html',
  styleUrl: './themenfilme.component.scss'
})
export class ThemenfilmeComponent {
  constructor(private router:Router,private translate:TranslateService){
  }
  diagnostikIsClicked:boolean=false;
  wissenschaftIsClicked:boolean=false;

  switchLanguage(language:string){
    this.translate.use(language);
    
}
goToDiagnostik(){
this.diagnostikIsClicked=true;
}
goToWissenschaft(){
this.wissenschaftIsClicked=true;
}

}
