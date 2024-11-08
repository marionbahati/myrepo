import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  constructor(private router:Router){}

  goback(){
    this.router.navigate(['courses']); //U CAN USE NAVIGAE OR THE BELOW MEHOD both are the same
    //this.route.navigateByUrl('home');//U CAN USE NAVIGAE OR THE BELOW MEHOD both are the same
  }
}
