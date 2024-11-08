import { Component } from '@angular/core';
import { SubjectServiveService } from '../subject-servive.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {

  constructor( private dataservice:SubjectServiveService){}

  ngOnInit(): void {  
    this.dataservice.dataEmiter.subscribe((value)=> {

      this.entered=value;

    })    
  }

entered:string='';


}
