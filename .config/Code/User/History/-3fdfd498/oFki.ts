import { Component } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';


import {
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


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
  this.dialog.open(DialogComponent, {
    width:'50%'
  });
 
}


}