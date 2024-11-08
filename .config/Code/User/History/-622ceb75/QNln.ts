import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() sharedMassage: string = "";

  @Output() massageEvent = new EventEmitter<string>();

  sendMassage() {
    this.massageEvent.emit("We are trying out on output");
  }

}
