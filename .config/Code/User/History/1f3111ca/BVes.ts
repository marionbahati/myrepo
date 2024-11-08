import { Component } from '@angular/core';

@Component({
  selector: 'app-individuell',
  templateUrl: './individuell.component.html',
  styleUrl: './individuell.component.scss'
})
export class IndividuellComponent {
  objects: any[] = []; 

  addNewObject() {
    const newObj = { name: 'New Object', clickHandler: () => this.handleObjectClick(newObj) };
    this.objects.push(newObj);
  }

  handleObjectClick(object: any) {
    alert('Clicked on:');
  }
}
