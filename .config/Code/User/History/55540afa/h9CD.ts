import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Keyboard from "simple-keyboard";
import KeyboardLayouts from "simple-keyboard-layouts/build/layouts/german";
import 'simple-keyboard/build/css/index.css';
import layout from "simple-keyboard-layouts/build/layouts/german";
import layout2 from "simple-keyboard-layouts/build/layouts/english";
import { keyboardLayouts } from '@ngx-material-keyboard/core';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  SimpleKeyboardLayouts: any;
  @ViewChild('container', {static: true}) container: ElementRef;
  @ViewChild('container2', {static: true}) container2: ElementRef;
  constructor(private router: Router, private translate: TranslateService,private renderer:Renderer2) {

  }

  textInputValue: string = '';
  isEnglisch: boolean = false;
  isDetsch: boolean = false;

  value: any;
  keyboard: Keyboard;

  lng: any;
  
  switchLanguage(language: string) {
   let lng=this.translate.use(language);
   if(this.lng==='en'){
    this.isEnglisch===true;
    this.keyboard.setOptions(layout2);
    this.creatediv();
    
   }if(this.lng==='de'){
    this.isDetsch===true;

    this.keyboard.setOptions(layout);

   }
     

  }
creatediv(){
  const div = this.renderer.createElement('div');
    const text = this.renderer.createText('This is a dynamically added div');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.container.nativeElement, div);
}

 setEng(){
 
  this.keyboard = new Keyboard({
    onChange: input => this.onChange(input),
    onKeyPress: button => this.onKeyPress(button),
   
  });
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
// });

//  if(this.translate.currentLang==='en'){
//   this.SimpleKeyboardLayouts.english
//  }else{
//   this.SimpleKeyboardLayouts.german
//  }