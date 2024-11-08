import { Component } from '@angular/core';
import { BookingConstant } from '../constants/bookingConstant';
import { response } from 'express';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  menus: any = [];
  role: string = '';
  filteredMenu:any=[];

  constructor() {
    this.menus = BookingConstant.menus;
    const userData = localStorage.getItem('localUserData');
    if (userData != null) {
      const parseObj = JSON.parse(userData);
      this.role=parseObj.role;
    }
  this.menus.forEach((element :any)=> {
    const isRolePresent=element.role.find((role:any)=>role == this.role);
    if(isRolePresent!=undefined){
      this.filteredMenu.push(element);


    }


      
    });
  }

}
