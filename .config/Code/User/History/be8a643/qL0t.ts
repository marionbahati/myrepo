import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Keyboard from "simple-keyboard";
import KeyboardLayouts from "simple-keyboard-layouts";
// import KeyboardLayouts from "simple-keyboard-layouts";
// import layout from "simple-keyboard-layouts/build/layouts/german";
// import layout2 from "simple-keyboard-layouts/build/layouts/english";



@Component({
  selector: 'app-wissenschaft',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wissenschaft.component.html',
  styleUrl: './wissenschaft.component.scss'
})
export class WissenschaftComponent {
  // SimpleKeyboardLayouts: any;
  // show: boolean = true;


  value = "";
  keyboard: Keyboard;
  keyboardLayouts: any;
  layouts: Array<object>;
  layoutsObj: object;
  selectedLayout: string = "english";

  constructor(private router: Router, private translate: TranslateService) {
    this.keyboardLayouts = new KeyboardLayouts();

    /**
     * Getting all layouts
     * ( To get only one, e.g: this.keyboardLayouts.get("japanese") )
     */

    this.layoutsObj = this.keyboardLayouts.get();
    this.layouts = Object.keys(this.layoutsObj).map(layoutName => ({
      name: layoutName,
      value: this.layoutsObj[layoutName]
    }));

  }

  // textInputValue: string = '';
  // isEnglisch: boolean = false;
  // isDetsch: boolean = false;

  // value: any;
  // keyboard: Keyboard;

  // lng: any;

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: this.layoutsObj[this.selectedLayout]
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

  onSelectChange = (event: any) => {
    let value = event.target.value;
    console.log("onSelectChange", event, value);
    this.selectedLayout = value;
    this.keyboard.setOptions({
      layout: this.layoutsObj[this.selectedLayout]
    });
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };





  // ngAfterViewInit() {

  //   // this.keyboard = new Keyboard({
  //   //   onChange: input => this.onChange(input),
  //   //   onKeyPress: button => this.onKeyPress(button),

  //   // });
  // }


  // onChange = (input: string) => {
  //   this.value = input;
  //   console.log("Input changed", input);
  // };

  // onKeyPress = (button: string) => {
  //   console.log("Button pressed", button);


  //   //  If you want to handle the shift and caps lock buttons

  //   if (button === "{shift}" || button === "{lock}") this.handleShift();
  // };

  // onInputChange = (event: any) => {
  //   this.keyboard.setInput(event.target.value);

  // };

  // handleShift = () => {
  //   let currentLayout = this.keyboard.options.layoutName;
  //   let shiftToggle = currentLayout === "default" ? "shift" : "default";

  //   this.keyboard.setOptions({
  //     layoutName: shiftToggle
  //   });
  // };


  // showTextInputValue() {
  //   setTimeout(() => {
  //     alert(this.value);
  //     this.value = '';
  //     return this.router.navigateByUrl('/seite3')
  //   }
  //     , 200);

  // }
  // goToWelcome() {
  //   if (this.translate.currentLang === 'de') {
  //     this.router.navigateByUrl('/welcome')
  //   } else {
  //     this.router.navigateByUrl('/wissenschaft')
  //   }
  // }

}
