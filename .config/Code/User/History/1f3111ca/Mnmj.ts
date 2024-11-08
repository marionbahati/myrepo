import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent  {
  startmarke:boolean=false;
  startdiagnostik:boolean=false;
  startwissenschaft:boolean=false;
  objects: any[] = []; 
  clicked:boolean=false
  clickedObject:any=[];

  //second
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  clickedItems: string[] = [];  
  @ViewChild('targetDiv') targetDiv: ElementRef;
  object: any;
  


  constructor(private router: Router,private renderer: Renderer2){}


  addNewObject() {
    const newObj = { name: 'Marke', clickHandler: () => this.handleObjectClick(newObj) };
    this.objects.push(newObj);
  }
  //secondstuff

itemClicked(item: string): void {
    this.clickedItems.push(item);
  }

  showClickedItems(): void {
    console.log('Clicked items:', this.clickedItems);
  }  
// fiststuff
  handleObjectClick(object: any) {
    this.startmarke=true;
    if(object.name=== 'Marke'){
    // this.router.navigate(['/marke']);
   // alert("marke")
    this.object.push(this.clickedObject);
    }
  }

  addNewObject2() {
    
    const newObj1 = { name: 'Diagnostik',
    Image:"",
    clickHandler: () => this.handleObjectClick(newObj1) };
    this.objects.push(newObj1);

  }

   handleObjectClick1(object: any){
    this.startdiagnostik=true;
     alert(object.name)

   }
 
   startshow(){
   alert(this.clickedObject.name);
   }

  
}
