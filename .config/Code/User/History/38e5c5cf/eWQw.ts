import { Component } from '@angular/core';
import { SubjectServiveService } from '../subject-servive.service';

@Component({
  selector: 'app-cpm1',
  templateUrl: './cpm1.component.html',
  styleUrl: './cpm1.component.css'
})
export class Cpm1Component {
 constructor( private dataservice:SubjectServiveService){}
 
 typedValue:string='';

 sendInfo(){

alert(this.typedValue)
 }
}
