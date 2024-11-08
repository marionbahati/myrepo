import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Keyboard from "simple-keyboard";
import KeyboardLayouts from "simple-keyboard-layouts/build/layouts/german";
import 'simple-keyboard/build/css/index.css';
import layout from "simple-keyboard-layouts/build/layouts/german";
import layout2 from "simple-keyboard-layouts/build/layouts/english";



@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  SimpleKeyboardLayouts: any;
  show: boolean = true;

  constructor(private router: Router, private translate: TranslateService) {

  }

  textInputValue: string = '';
  isEnglisch: boolean = false;
  isDetsch: boolean = false;

  value: any;
  keyboard: Keyboard;

  lng: any;

  switchLanguage(language: string) {
    this.translate.use(language);

  }

ngAfterViewInit() {

  this.keyboard = new Keyboard({
    onChange: input => this.onChange(input),
    onKeyPress: button => this.onKeyPress(button),
    ...layout
  });
}


onChange = (input: string) => {
  this.value = input;
  console.log("Input changed", input);
};

onKeyPress = (button: string) => {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") this.handleShift();
};

onInputChange = (event: any) => {
  this.keyboard.setInput(event.target.value);

};

handleShift = () => {
  let currentLayout = this.keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  this.keyboard.setOptions({
    layoutName: shiftToggle
  });
};


showTextInputValue() {
  setTimeout(() => {
    alert(this.value);
    this.value = '';
    return this.router.navigateByUrl('/seite3')
  }
    , 200);

}
 
}


// let keyboard1 = new Keyboard(".keyboard1", {
//   ...options
// });

// let keyboard2 = new Keyboard(".keyboard2", {
//   ...options
// }); this.videoVolume-=0.1;

//  if(this.translate.currentLang==='en'){
//   this.SimpleKeyboardLayouts.english
//  }else{
//   this.SimpleKeyboardLayouts.german
//  }