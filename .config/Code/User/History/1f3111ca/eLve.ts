import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent {
  start:boolean=false;
  objects: any[] = []; 
  constructor(private router: Router){}
  addNewObject() {
    const newObj = { name: 'Marke', clickHandler: () => this.handleObjectClick(newObj) };
    this.objects.push(newObj);
  }
  // second method
  @ViewChild('elementContainer') elementContainer: ElementRef;

  storedElement: HTMLElement; // To store the reference of the clicked element

  

  storeElement(elementId: string) {
    // Find the element in the DOM using ViewChild
    const element: HTMLElement = this.elementContainer.nativeElement.querySelector(`#${elementId}`);
    
    // Store the reference to the clicked element
    this.storedElement = element;
    
    // Call the function you want to add to the clicked element
    this.addFunctionToElement();
  }

  addFunctionToElement() {
    if (this.storedElement) {
      // Add your desired function to the stored element
      this.storedElement.addEventListener('click', this.someFunction);
    }
  }

  someFunction() {
    console.log('Clicked on stored element');
    // Perform actions when the stored element is clicked
  }
// fiststuff
  handleObjectClick(object: any) {
    this.start=true;
   if(object.name=== 'Marke'){
    this.router.navigate(['/marke']);
   }
  }

  addNewObject2() {
    const newObj1 = { name: 'Diagnostik',
    Image:"",
    clickHandler: () => this.handleObjectClick(newObj1) };
    this.objects.push(newObj1);
  }

  // handleObjectClick1(object: any){
    // alert(object.name)

  // }

  
}
