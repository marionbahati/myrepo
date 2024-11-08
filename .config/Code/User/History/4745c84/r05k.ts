import { Component } from '@angular/core';

@Component({
  selector: 'app-keayboard',
  templateUrl: './keayboard.component.html',
  styleUrl: './keayboard.component.scss'
})
export class KeayboardComponent {
 feature1='sartstedt';
 feature2='diagnostik'
 feature3='wissenschaft';

 selectedFeatures: any = [];

 add1(){
  this.selectedFeatures.push(this.feature1);
 }

add2(){
  this.selectedFeatures.push(this.feature1);
 }

 add3(){
  this.selectedFeatures.push(this.feature1);
 }
}
