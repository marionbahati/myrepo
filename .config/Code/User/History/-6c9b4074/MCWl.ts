import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {
title:string='angular';

onEnroll(){
  const enrollService=new EnrollService();
  enrollService.onEnrollClicked(this.title);
}
}
