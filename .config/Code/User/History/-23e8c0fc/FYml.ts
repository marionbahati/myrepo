import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pageLayouts';
  constructor(public dialog: MatDialog) {}

  
  
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    

}}
