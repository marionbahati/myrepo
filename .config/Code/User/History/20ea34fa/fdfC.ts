import { NgClass, NgFor } from '@angular/common';
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
  
  goToSartedt() {
    this.isclicked=true;
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "SARSTEDT"
    p.id="1"
    this.renderer.appendChild(this.div.nativeElement, p);
   
  }

  goToWissenschaft() {
    this.isclicked=true;
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "Wissenschaft"
    p.id="2"
    this.renderer.appendChild(this.div.nativeElement, p);
   
    
  }


  goToDiagnostik() {
    this.isclicked=true;
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "Diagnostik"
    p.id="3"
    this.renderer.appendChild(this.div.nativeElement, p);
    
  }
 

  ResetDiv(){
   this.isclicked=false;
  }
   
 navigation(){
  
 }
}
