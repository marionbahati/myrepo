import { Component ,Renderer2, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gesamtshow',
  templateUrl: './gesamtshow.component.html',
  styleUrl: './gesamtshow.component.scss'
})
export class GesamtshowComponent {
  @ViewChild('div')
  div!: ElementRef;
 
  isclicked:boolean=false;

  constructor(private router: Router,private renderer:Renderer2) {
  }
 

  goToWelcomepage() {
    
    this.router.navigate(['/welcome']);
   
  }
  gotoShowPage(){
    
    this.router.navigate(['/show']);

  }
  goToTHemen() {
    this.router.navigate(['/themen']);
  }
  
  goToWissenschaft() {
    
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "Wissenschaft"
    this.renderer.appendChild(this.div.nativeElement, p);
    this.isclicked=true;
  }


  goToDiagnostik() {
    
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "Diagnostik"
    this.renderer.appendChild(this.div.nativeElement, p);
    this.isclicked=true;
  }
  goToSartedt() {
    
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "SARSTEDT"
    this.renderer.appendChild(this.div.nativeElement, p);
    this.isclicked=true;
  }

  ResetDiv(){
   this.isclicked=false;
  }
 
}
