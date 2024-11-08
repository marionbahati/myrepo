import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pageLayouts';
  constructor(public dialog: MatDialog,private route:Router) {}

  
  
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    profile(){
      
    }

}}
