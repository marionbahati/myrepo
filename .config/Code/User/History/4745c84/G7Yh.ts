import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { json } from 'express';

@Component({
  selector: 'app-keayboard',
  templateUrl: './keayboard.component.html',
  styleUrl: './keayboard.component.scss'
})
export class KeayboardComponent {
 feature1='sartstedt';
 feature2='diagnostik'
 feature3='wissenschaft';

 selectedFeatures: string[]=[];

 array = [
  {
    guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
    age: 32,
    name: 'Powers Schneider',
  },
  {
    guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
    age: 25,
    name: 'Adrian Lawrence',
  },
  {
    guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
    age: 32,
    name: 'Boyer Stanley',
  },
];



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
