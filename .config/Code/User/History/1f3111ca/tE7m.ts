import { Component } from '@angular/core';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent {
  objects: any[] = []; 

  addNewObject() {
    const newObj = { name: 'Marke', clickHandler: () => this.handleObjectClick(newObj) };
    this.objects.push(newObj);
  }


  handleObjectClick(object: any) {
    alert(object.name)
  }

  addNewObject2() {
    const newObj1 = { name: 'Diagnostik',
    Image:"",
    clickHandler: () => this.handleObjectClick(newObj1) };
    this.objects.push(newObj1);
  }

  // handleObjectClick1(object: any){
   

  // }

  
}
