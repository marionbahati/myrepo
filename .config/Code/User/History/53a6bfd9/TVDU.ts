import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
route:string='';
constructor(private router:Router){

}
}
