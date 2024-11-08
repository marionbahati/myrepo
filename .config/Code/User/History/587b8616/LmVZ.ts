import { Component } from '@angular/core';
import { BookingConstant } from '../constants/bookingConstant';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  menus:any=[];

  constructor(){
    this.menus=BookingConstant.menus;
  }

}
