import { Component ,OnInit} from '@angular/core';
import { SubjectServiveService } from '../subject-servive.service';

@Component({
  selector: 'app-cpm1',
  templateUrl: './cpm1.component.html',
  styleUrl: './cpm1.component.css'
})
export class Cpm1Component {

 constructor( private dataservice:SubjectServiveService){}

  ngOnInit(): void {       
     }

 typedValue: string='';
   
     sendInfo(){
      //console.log(this.typedValue);
      this.dataservice.raisedDataEmitter(this.typedValue);
     }
}
//this is about Rxjs observables n passing data from component to
// component using service,observables und subscribe