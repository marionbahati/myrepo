import { Component } from '@angular/core';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

@Component({
  selector: 'app-diagnostik',
  templateUrl: './diagnostik.component.html',
  styleUrl: './diagnostik.component.scss'
})
export class DiagnostikComponent {
private _text:string='';

public get text():string{
  return this._text;
}

public set text(value:string){
   this._text=value;
  
}



}
