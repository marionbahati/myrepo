import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DesignComponent } from '../design/design.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent {
  constructor(public dialog: MatDialog,private route:Router) {
    
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height:'500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
  goprofile(){
    this.route.navigateByUrl('profile');
  }
  goImage(){
    this.route.navigateByUrl('imagebg')
  }



  

  openDialog2() {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }}
