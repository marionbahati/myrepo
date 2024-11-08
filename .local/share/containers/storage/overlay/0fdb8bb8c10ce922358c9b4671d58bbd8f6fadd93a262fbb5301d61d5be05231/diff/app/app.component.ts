import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productLanding';
  conting:string='0';
  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogueComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}

