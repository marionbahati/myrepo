import { Component } from '@angular/core';
import { DialogueComponent } from './dialogue/dialogue.component';



import {
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test1';

  constructor(private dialog : MatDialog){

  }
  

 openDialog() {
  this.dialog.open(DialogueComponent, {
    width:'30%'
  });
 
}
}