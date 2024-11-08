import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent implements AfterViewInit {
  start:boolean=false;
  objects: any[] = []; 
  clicked:boolean=false

  @ViewChild('targetDiv') targetDiv: ElementRef;
  


  constructor(private router: Router,private renderer: Renderer2){}
  ngAfterViewInit() {
    const childElements = this.targetDiv.nativeElement.children;
    for (let i = 0; i < childElements.length; i++) {
      this.renderer.listen(childElements[i], 'click', (event) => {
        this.elementClicked(event);
      });
    }
  }

  elementClicked(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    console.log("Clicked element:", clickedElement.textContent);
    clickedElement.classList.add('clicked');
    this.clicked=true;
    
   
  }

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
 
   

  // startshow(){
  // for(let i:any=0; i <  this.objects.length;  i++){
  //   if(i.name === "Marke" || this.start=== true){
  //     alert("marke")

  //   }if(i.name === "iagnostik"){
  //     alert("Diagnostik")

  //   }else{
  //     alert("nothing")
  //   }
  // }
  // }
}
