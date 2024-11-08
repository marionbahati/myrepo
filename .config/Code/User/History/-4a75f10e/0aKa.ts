import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
title:string="javascript";

onEnroll(){
  const enrollService=new EnrollService();
  enrollService.onEnrollClicked(this.title);


}
}
