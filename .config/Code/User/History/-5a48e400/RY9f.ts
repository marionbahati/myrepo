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
  clickedElements:any[]=[];

  switchLanguage(language:string){
    this.translate.use(language);
    
}
goToDiagnostik(){
this.diagnostikIsClicked=true;
this.clickedElements.length=0;
const getDiagnostik=document.getElementById("1");
this.clickedElements.push(getDiagnostik);

}
goToWissenschaft(){
this.wissenschaftIsClicked=true;
this.clickedElements.length=0;
const getWissenschaft=document.getElementById("2");
this.clickedElements.push(getWissenschaft);
}
startFilm(){
  this.clickedElements.forEach(item => {
    
    if (item.id == 1) {
      this.diagnostikIsClicked=false;
      alert("Diagnostik show starts shortly");
      
    } if (item.id == 2) {
     this.wissenschaftIsClicked=false;
      alert("Wissenschaft show starts shortly");
    } 

  })
}
}
