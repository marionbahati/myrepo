import { Component, OnInit,
  OnDestroy,
  ViewEncapsulation,
  HostListener,
  HostBinding,
  ElementRef,
  Injectable, } from '@angular/core';
  import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import Keyboard from "simple-keyboard";
import { KeyboardService } from '../keyboard.service';
import { Subscription } from 'rxjs';
import KeyboardLayouts from 'simple-keyboard-layouts';

@Component({
  selector: 'app-keayboard',
  templateUrl: './keayboard.component.html',
  styleUrl: './keayboard.component.css'
})
export class KeayboardComponent implements OnInit{
[x: string]: any;
  @HostBinding('class.shown')
  private shown!: boolean;
  keyboard!: Keyboard;
  keyboardLayouts: any;
  layouts: Array<object>;
  layoutsObj: any;
  selectedLayout: string = 'english';
  inputName!: string;
  shiftActive!: boolean;

  private keyboardSubscription!: Subscription;

  constructor(
    private el: ElementRef,
    private keyboardService: KeyboardService
  ) {
    this.keyboardLayouts = new KeyboardLayouts();
    this.layoutsObj = this.keyboardLayouts.get();
    this.layouts = Object.keys(this.layoutsObj).map((layoutName) => ({
      name: layoutName,
      value: this.layoutsObj[layoutName],
    }));
  }

  ngOnInit() {
    if (this.keyboard == null) {
      this.initialiseKeyboard();
    }

    this.keyboardSubscription =
      this.keyboardService.keyboardRequested.subscribe((show) => {
        if (show) {
          this.shown = true;
        } else {
          this.shown = false;
        }
      });
  }

  ngOnDestroy() {
    this.keyboardSubscription.unsubscribe();
  }

  public initialiseKeyboard() {
    this.selectedLayout = 'english';

    this.keyboard = new Keyboard({
      debug: true,
      inputName: this.inputName,
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      preventMouseDownDefault: true, // If you want to keep focus on input
      disableCaretPositioning: true,
      newLineOnEnter: false,
      layout: {
        default: [this.layoutsObj[this.selectedLayout].layout.default][0],
        shift: [this.layoutsObj[this.selectedLayout].layout.shift][0],
        numeric: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}'],
        decimal: ['1 2 3', '4 5 6', '7 8 9', '.00 0 .', '{bksp} {enter}'],
      },
      buttonTheme: [
        {
          class: 'hg-enter',
          buttons: '{enter}',
        },
      ],
      display: {
        '{enter}': '↩',
        '{bksp}': '⌫',
        '{space}': ' ',
        '{shift}': '⇪',
        '{lock}': '🄰',
        '{tab}': '⇄',
      },
    });

    this.shown = false;
    /**
     * Since we have default values for our inputs,
     * we must sync them with simple-keyboard
     */
    /*    this.keyboard.replaceInput(this.inputs);*/
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target: Node | null) {
    var keyboard = document.getElementsByClassName('simple-keyboard')[0];
    if (keyboard) {
     if(!target.classList.contains('form-control')||
     target.tagName === 'SELECT'){
      this.closeKeyboard();
     }
    }
  }
  onInputFocus = (event: any) => {
    if (!this.keyboard) {
      this.initialiseKeyboard();
    }

    this.inputName = event.target.id;

    var layout = 'default';
    if (event.target.classList.contains('numeric')) {
      layout = 'numeric';
    }
    if (event.target.classList.contains('decimal')) {
      layout = 'decimal';
    }

    this.keyboard.setOptions({
      inputName: event.target.id,
      layoutName: layout,
    });

    //if (!this.showKeyboard) {
    setTimeout(() => {
      this.shown = true;
    }, 100);
    //}

    this.keyboard.setInput(event.target.value);
  };

  setInputCaretPosition = (elem: any, pos: number) => {
    if (elem.setSelectionRange) {
      elem.focus();
      elem.setSelectionRange(pos, pos);
    }
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value, event.target.id);
  };

  onChange = (input: any) => {
    this.keyboardService.fireKeyPressed(input);

    //this.systemParametersForm.controls[this.inputName].setValue(input);

    /**
     * Synchronizing input caret position
     * This part is optional and only relevant if using the option "preventMouseDownDefault: true"
     */
    let caretPosition = this.keyboard.caretPosition;

    if (caretPosition !== null)
      this.setInputCaretPosition(
        document.querySelector(`#${this.inputName}`),
        caretPosition
      );
  };

  onKeyPress = (button: string) => {
    if (this.shiftActive) {
      this.shiftActive = false;
      this.handleShift(button);
    }

    if (button === '{enter}') {
      this.closeKeyboard();
    }

    if (button === '{clr}') {
      this.keyboard.clearInput(this.inputName);
    }

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') this.handleShift(button);
  };

  handleShift = (button: string) => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    if (button === '{shift}') {
      this.shiftActive = true;
    } else {
      this.shiftActive = false;
    }

    this.keyboard.setOptions({
      layoutName: shiftToggle,
    });
  };

  closeKeyboard() {
    //this.shown = false;
    //this.showKeyboard.next(false);
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('click', ['$event'])
  onMouseEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}
