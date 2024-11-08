import { Component, ViewChild } from '@angular/core';
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
//video functions
@ViewChild('videoPlayer') videoPlayer: any;
videoVolume: number = 1;
chosenShows!: any[];
isMuted: boolean = false;
isPlaying: boolean = false;


  isLoading: boolean = false;
  diagnosIsLoadiang:boolean=false;
  scienceIsLoading:boolean=false;

  themenAuswahl: any[] = [];

  

  

  switchLanguage(language:string){
    this.translate.use(language);
    
}
playDiangnostik() {
  this.diagnosIsLoadiang = true;
  this.themenAuswahl.length = 0;

  const them = document.getElementById("2");
  this.themenAuswahl.push(them);
}
playWissenschaft() {
  this.scienceIsLoading= true;
  this.themenAuswahl.length = 0;
  const them = document.getElementById("3");
  this.themenAuswahl.push(them);
}

// when you click Themenauswahl and then the start button  :
abspielen() {
  this.themenAuswahl.forEach(item => {
  
    if (item.id == 1) {
      this.isLoading=false;
      alert("Marke show starts shortly");
      
    } if (item.id == 2) {
     this.diagnosIsLoadiang=false;
      alert("Diagnostik show starts shortly");
    } if (item.id == 3) {
     this.scienceIsLoading=false;
      alert("Wissenschaft show starts shortly");
    }

  })

}
resetFunction(){
this.themenAuswahl.length=0;
}
 


setVolume() {
  this.videoPlayer.nativeElement.volume = this.videoVolume;
}
}
