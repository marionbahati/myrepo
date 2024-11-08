import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import {
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogueComponent } from './dialog/dialogue.component';

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