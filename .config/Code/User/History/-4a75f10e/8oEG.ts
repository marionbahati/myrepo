import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss',
  providers:[EnrollService]                   // use this for dependancy ijection to indicate wat ur service is
})
export class JavascriptComponent {
title:string="javascript";

constructor(private enrollServive:EnrollService){      //use constructor for dependancy injection

}

//i used this commented method while using service,the next method is dependancy 
  //injection,where you need to create a constructor as above instead of this,
//onEnroll(){
  //   const enrollService=new EnrollService();
  //enrollService.onEnrollClicked(this.title);
//}

//dependancy injection
onEnroll(){
  this.enrollServive.onEnrollClicked(this.title);

}
}
