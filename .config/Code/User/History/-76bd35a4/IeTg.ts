import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cube-only-individuell',
  templateUrl: './cube-only-individuell.component.html',
  styleUrl: './cube-only-individuell.component.scss'
})
export class CubeOnlyIndividuellComponent {
  constructor(private router:Router,private translate:TranslateService){
  }

isclicked: boolean = false;

themenAuswahl:any[]=[];

  isClicked:boolean=false;
  startFilm:boolean=false;

  switchLanguage(language:string){
    this.translate.use(language);
    
}

clickedTrue(){
this.isClicked=true;
this.themenAuswahl.length=0;
const them=document.getElementById("1");
this.themenAuswahl.push(them);

}
abspielen(){
  // this.startFilm=true;
  this.themenAuswahl.forEach(item=>{
    if(item.id==1){
      alert("item 1 is there");
    }if(item.id==2){
      alert("item 2 is there");
    }else{
     alert("imem 3 to play next")
    }
  })
    
  }
  playDiangnostik(){
    this.isClicked=true;
    this.themenAuswahl.length=0;
    const them=document.getElementById("2");
    this.themenAuswahl.push(them);
  }
  playWissenschaft(){
    this.isClicked=true;
    this.themenAuswahl.length=0;
    const them=document.getElementById("3");
    this.themenAuswahl.push(them);
  }
  
}



