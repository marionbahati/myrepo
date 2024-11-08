import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent implements AfterViewInit {
  start:boolean=false;
  objects: any[] = []; 

  @ViewChild('targetDiv') targetDiv: ElementRef; //second stuff

  constructor(private router: Router){}
  addNewObject() {
    const newObj = { name: 'Marke', clickHandler: () => this.handleObjectClick(newObj) };
    this.objects.push(newObj);
  }
  // seconsstuff
  ngAfterViewInit() {
    const childElements = this.targetDiv.nativeElement.children;
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].addEventListener('click', (event) => {
        this.elementClicked(event);
      });
    }
  }
  findClickedElement(){
    alert("Find Clicked Element button clicked!")
  }
  elementClicked(event: MouseEvent){
    const clickedElement = event.target as HTMLElement;
  
    
    clickedElement.classList.add('clicked');
  }
// fiststuff
  handleObjectClick(object: any) {
    this.start=true;
  //  if(object.name=== 'Marke'){
  //   this.router.navigate(['/marke']);
  //  }
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

  startshow(){
    if(this.start===true){
      const name:any=this.objects.find.name;
      alert(name)
    }
  }
}
