import { NgClass, NgFor } from '@angular/common';
import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gesamtshow',
  templateUrl: './gesamtshow.component.html',
  styleUrl: './gesamtshow.component.scss'
})
export class GesamtshowComponent {
  [x: string]: any;
  @ViewChild('div')
  div!: ElementRef;


  isclicked: boolean = false;

  constructor(private router: Router, private renderer: Renderer2,private translate:TranslateService) {
  }
  switchLanguage(language:string){
    this.translate.use(language);
    
}

  goToWelcomepage() {

    this.router.navigate(['/welcome']);

  }
  gotoShowPage() {

    this.router.navigate(['/show']);

  }
  goToTHemen() {
    this.router.navigate(['/themen']);
  }

  goToSartedt() {
     
    this.isclicked = true;
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "SARSTEDT"
    p.className="FIRST"
    this.renderer.appendChild(this.div.nativeElement, p);
    
    if(this.div.nativeElement.className==="FIRST"){
       alert("its one")
    }else{
      alert("no id")
    }
    
  }

  goToWissenschaft() {

    this.isclicked = true;
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "Wissenschaft"
    this.renderer.appendChild(this.div.nativeElement, p);
    this.renderer.listen(p, 'click', () => this.goWtschf())

  }

  goToDiagnostik() {


    this.isclicked = true;
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "Diagnostik"
    this.renderer.appendChild(this.div.nativeElement, p);
    this.renderer.listen(p, 'click', () =>this.gotDianostik() )

  }


  ResetDiv() {
    this.isclicked = false;
  }

  goMarke() {
    this.router.navigate(['/marke']);
  }
  gotDianostik() {
    this.router.navigate(['/diagnostik']);
  }
 goWtschf(){
  this.router.navigate(['/wissenschaft']);
 }


}






