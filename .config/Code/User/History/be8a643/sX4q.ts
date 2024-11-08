import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Keyboard from "simple-keyboard";
import KeyboardLayouts from "simple-keyboard-layouts";
import layout from "simple-keyboard-layouts/build/layouts/german";
import layout2 from "simple-keyboard-layouts/build/layouts/english";

@Component({
  selector: 'app-wissenschaft',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wissenschaft.component.html',
  styleUrl: './wissenschaft.component.scss'
})
export class WissenschaftComponent {

  constructor(private router: Router, private translate: TranslateService) {

  }
  detch: boolean = false;
  engo: boolean = false;

  value = "";
  keyboard: Keyboard;
  KeyboardLayouts: KeyboardLayouts;
  lgn: any;

  ngAfterViewInit() {
    this.keyboard = new Keyboard({

      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      theme: "hg-theme-default myTheme1",
      


    });
  }



  switchLanguage(language: string) {
    const lgn = this.translate.use(language);
    this.lgn = lgn;
    if (language === 'de') {
      this.keyboard.setOptions({ layout });
      this.detch = true;
      this.engo=false;
    } 
  }

  toogleLang() {
    this.keyboard.setOptions({ layout });

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


}
