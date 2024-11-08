import { Component } from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
 constructor(private router:Router){

 }
  wilkommenSeite(){
    this.router.navigateByUrl('/wilkommen');
  }
}
