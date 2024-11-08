import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent  {
  start:boolean=false;
  objects: any[] = []; 
  clicked:boolean=false

  @ViewChild('targetDiv') targetDiv: ElementRef;
  


  constructor(private router: Router,private renderer: Renderer2){}


  addNewObject() {
    const newObj = { name: 'Marke', clickHandler: () => this.handleObjectClick(newObj) };
    this.objects.push(newObj);
  }
  

  
// fiststuff
  handleObjectClick(object: any) {
    this.start=true;
    if(object.name=== 'Marke'){
    // this.router.navigate(['/marke']);
    alert("marke")
    }
  }

  addNewObject2() {
    this.start=true;
    const newObj1 = { name: 'Diagnostik',
    Image:"",
    clickHandler: () => this.handleObjectClick(newObj1) };
    this.objects.push(newObj1);
  }

   handleObjectClick1(object: any){
     alert(object.name)

   }
 
   

  
}
