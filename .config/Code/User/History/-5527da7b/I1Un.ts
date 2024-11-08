import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  massage: string = "Hallo my child";
  receivedmasage: string = "";

  receivingMassage(massage2: string) {
    this.receivedmasage = massage2;
  }
}
