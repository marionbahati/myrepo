import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {
title:string='angular';

enroll(){
  alert('you are enrolled to '+ this.title + 'course' );
}
}
