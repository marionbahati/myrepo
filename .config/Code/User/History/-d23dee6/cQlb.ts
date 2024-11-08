import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project4';


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AboutUsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
