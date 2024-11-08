import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { FormGroup, FormControl } from '@angular/forms';
import { KeayboardComponent } from './keayboard/keayboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  keyboardValue!: number | string;

  decimalInput!: number;
  textInput!: string;
  numericInput!: number;
  system!: FormGroup;
  currentField: any;
  title = 'vkeayboard';
  constructor(public keyboard:KeayboardComponent) {}

  ngOnInit() {
    this.setupFormControl();
  }

  setupFormControl() {
    this.system = new FormGroup({
      decimalInput: new FormControl(),
      numericInput: new FormControl(),
      textInput: new FormControl(),
    });


 
 
}}
