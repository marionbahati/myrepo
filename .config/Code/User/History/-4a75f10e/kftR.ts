import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
title:string="javascript";

enrolle(){
  alert('you are enrolled to javascript course');
}
}
