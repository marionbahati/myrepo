import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MAT_KEYBOARD_DEADKEYS } from '../../configs/keyboard-deadkey.config';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
export const VALUE_NEWLINE = '\n\r';
export const VALUE_SPACE = ' ';
export const VALUE_TAB = '\t';
const REPEAT_TIMEOUT = 500;
const REPEAT_INTERVAL = 100;
export class MatKeyboardKeyComponent {
    // Inject dependencies
    constructor(_deadkeys) {
        this._deadkeys = _deadkeys;
        this._deadkeyKeys = [];
        this._repeatState = false; // true if repeating, false if waiting
        this.active$ = new BehaviorSubject(false);
        this.pressed$ = new BehaviorSubject(false);
        this.genericClick = new EventEmitter();
        this.enterClick = new EventEmitter();
        this.bkspClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
        this.spaceClick = new EventEmitter();
        this.tabClick = new EventEmitter();
        this.keyClick = new EventEmitter();
    }
    set active(active) {
        this.active$.next(active);
    }
    get active() {
        return this.active$.getValue();
    }
    set pressed(pressed) {
        this.pressed$.next(pressed);
    }
    get pressed() {
        return this.pressed$.getValue();
    }
    get lowerKey() {
        return `${this.key}`.toLowerCase();
    }
    get charCode() {
        return `${this.key}`.charCodeAt(0);
    }
    get isClassKey() {
        return this.key in KeyboardClassKey;
    }
    get isDeadKey() {
        return this._deadkeyKeys.some((deadKey) => deadKey === `${this.key}`);
    }
    get hasIcon() {
        return this.icon !== undefined && this.icon !== null;
    }
    get iconName() {
        return this.icon.name || '';
    }
    get fontSet() {
        return this.icon.fontSet || '';
    }
    get fontIcon() {
        return this.icon.fontIcon || '';
    }
    get svgIcon() {
        return this.icon.svgIcon || '';
    }
    get cssClass() {
        const classes = [];
        if (this.hasIcon) {
            classes.push('mat-keyboard-key-modifier');
            classes.push(`mat-keyboard-key-${this.lowerKey}`);
        }
        if (this.isDeadKey) {
            classes.push('mat-keyboard-key-deadkey');
        }
        return classes.join(' ');
    }
    get inputValue() {
        if (this.control) {
            return this.control.value;
        }
        else if (this.input && this.input.nativeElement && this.input.nativeElement.value) {
            return this.input.nativeElement.value;
        }
        else {
            return '';
        }
    }
    set inputValue(inputValue) {
        if (this.control) {
            this.control.setValue(inputValue);
        }
        else if (this.input && this.input.nativeElement) {
            this.input.nativeElement.value = inputValue;
        }
    }
    ngOnInit() {
        // read the deadkeys
        this._deadkeyKeys = Object.keys(this._deadkeys);
    }
    ngOnDestroy() {
        this.cancelRepeat();
    }
    onClick(event) {
        // Trigger generic click event
        this.genericClick.emit(event);
        // Do not execute keypress if key is currently repeating
        if (this._repeatState) {
            return;
        }
        // Trigger a global key event. TODO: investigate
        // this._triggerKeyEvent();
        // Manipulate the focused input / textarea value
        const caret = this.input ? this._getCursorPosition() : 0;
        let char;
        switch (this.key) {
            // this keys have no actions yet
            // TODO: add deadkeys and modifiers
            case KeyboardClassKey.Alt:
            case KeyboardClassKey.AltGr:
            case KeyboardClassKey.AltLk:
                this.altClick.emit(event);
                break;
            case KeyboardClassKey.Bksp:
                this.deleteSelectedText();
                this.bkspClick.emit(event);
                break;
            case KeyboardClassKey.Caps:
                this.capsClick.emit(event);
                break;
            case KeyboardClassKey.Enter:
                if (this._isTextarea()) {
                    char = VALUE_NEWLINE;
                }
                else {
                    this.enterClick.emit(event);
                    // TODO: trigger submit / onSubmit / ngSubmit properly (for the time being this has to be handled by the user himself)
                    // console.log(this.control.ngControl.control.root)
                    // this.input.nativeElement.form.submit();
                }
                break;
            case KeyboardClassKey.Shift:
                this.shiftClick.emit(event);
                break;
            case KeyboardClassKey.Space:
                char = VALUE_SPACE;
                this.spaceClick.emit(event);
                break;
            case KeyboardClassKey.Tab:
                char = VALUE_TAB;
                this.tabClick.emit(event);
                break;
            default:
                // the key is not mapped or a string
                char = `${this.key}`;
                this.keyClick.emit(event);
                break;
        }
        if (char && this.input) {
            this.replaceSelectedText(char);
            this._setCursorPosition(caret + 1);
        }
        // Dispatch Input Event for Angular to register a change
        if (this.input && this.input.nativeElement) {
            setTimeout(() => {
                this.input.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
            });
        }
    }
    // Handle repeating keys. Keypress logic derived from onClick()
    onPointerDown() {
        this.cancelRepeat();
        this._repeatState = false;
        this._repeatTimeoutHandler = setTimeout(() => {
            // Initialize keypress variables
            let char;
            let keyFn;
            switch (this.key) {
                // Ignore non-repeating keys
                case KeyboardClassKey.Alt:
                case KeyboardClassKey.AltGr:
                case KeyboardClassKey.AltLk:
                case KeyboardClassKey.Caps:
                case KeyboardClassKey.Enter:
                case KeyboardClassKey.Shift:
                    return;
                case KeyboardClassKey.Bksp:
                    keyFn = () => {
                        this.deleteSelectedText();
                        this.bkspClick.emit();
                    };
                    break;
                case KeyboardClassKey.Space:
                    char = VALUE_SPACE;
                    keyFn = () => this.spaceClick.emit();
                    break;
                case KeyboardClassKey.Tab:
                    char = VALUE_TAB;
                    keyFn = () => this.tabClick.emit();
                    break;
                default:
                    char = `${this.key}`;
                    keyFn = () => this.keyClick.emit();
                    break;
            }
            // Execute repeating keypress
            this._repeatIntervalHandler = setInterval(() => {
                const caret = this.input ? this._getCursorPosition() : 0;
                this._repeatState = true;
                if (keyFn) {
                    keyFn();
                }
                if (char && this.input) {
                    this.replaceSelectedText(char);
                    this._setCursorPosition(caret + 1);
                }
                if (this.input && this.input.nativeElement) {
                    setTimeout(() => this.input.nativeElement.dispatchEvent(new Event('input', { bubbles: true })));
                }
            }, REPEAT_INTERVAL);
        }, REPEAT_TIMEOUT);
    }
    cancelRepeat() {
        if (this._repeatTimeoutHandler) {
            clearTimeout(this._repeatTimeoutHandler);
            this._repeatTimeoutHandler = null;
        }
        if (this._repeatIntervalHandler) {
            clearInterval(this._repeatIntervalHandler);
            this._repeatIntervalHandler = null;
        }
    }
    deleteSelectedText() {
        const value = this.inputValue ? this.inputValue.toString() : '';
        let caret = this.input ? this._getCursorPosition() : 0;
        let selectionLength = this._getSelectionLength();
        if (selectionLength === 0) {
            if (caret === 0) {
                return;
            }
            caret--;
            selectionLength = 1;
        }
        const headPart = value.slice(0, caret);
        const endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, endPart].join('');
        this._setCursorPosition(caret);
    }
    replaceSelectedText(char) {
        const value = this.inputValue ? this.inputValue.toString() : '';
        const caret = this.input ? this._getCursorPosition() : 0;
        const selectionLength = this._getSelectionLength();
        const headPart = value.slice(0, caret);
        const endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, char, endPart].join('');
    }
    // TODO: Include for repeating keys as well (if this gets implemented)
    // private _triggerKeyEvent(): Event {
    //   const keyboardEvent = new KeyboardEvent('keydown');
    //   //
    //   // keyboardEvent[initMethod](
    //   //   true, // bubbles
    //   //   true, // cancelable
    //   //   window, // viewArg: should be window
    //   //   false, // ctrlKeyArg
    //   //   false, // altKeyArg
    //   //   false, // shiftKeyArg
    //   //   false, // metaKeyArg
    //   //   this.charCode, // keyCodeArg : unsigned long - the virtual key code, else 0
    //   //   0 // charCodeArgs : unsigned long - the Unicode character associated with the depressed key, else 0
    //   // );
    //   //
    //   // window.document.dispatchEvent(keyboardEvent);
    //   return keyboardEvent;
    // }
    // inspired by:
    // ref https://stackoverflow.com/a/2897510/1146207
    _getCursorPosition() {
        if (!this.input) {
            return;
        }
        if ('selectionStart' in this.input.nativeElement) {
            // Standard-compliant browsers
            return this.input.nativeElement.selectionStart;
        }
        else if ('selection' in window.document) {
            // IE
            this.input.nativeElement.focus();
            const selection = window.document['selection'];
            const sel = selection.createRange();
            const selLen = selection.createRange().text.length;
            sel.moveStart('character', -this.control.value.length);
            return sel.text.length - selLen;
        }
    }
    _getSelectionLength() {
        if (!this.input) {
            return;
        }
        if ('selectionEnd' in this.input.nativeElement) {
            // Standard-compliant browsers
            return this.input.nativeElement.selectionEnd - this.input.nativeElement.selectionStart;
        }
        if ('selection' in window.document) {
            // IE
            this.input.nativeElement.focus();
            const selection = window.document['selection'];
            return selection.createRange().text.length;
        }
    }
    // inspired by:
    // ref https://stackoverflow.com/a/12518737/1146207
    // tslint:disable one-line
    _setCursorPosition(position) {
        if (!this.input) {
            return;
        }
        this.inputValue = this.control.value;
        // ^ this is used to not only get "focus", but
        // to make sure we don't have it everything -selected-
        // (it causes an issue in chrome, and having it doesn't hurt any other browser)
        if ('createTextRange' in this.input.nativeElement) {
            const range = this.input.nativeElement.createTextRange();
            range.move('character', position);
            range.select();
            return true;
        }
        else {
            // (el.selectionStart === 0 added for Firefox bug)
            if (this.input.nativeElement.selectionStart || this.input.nativeElement.selectionStart === 0) {
                this.input.nativeElement.focus();
                this.input.nativeElement.setSelectionRange(position, position);
                return true;
            }
            // fail city, fortunately this never happens (as far as I've tested) :)
            else {
                this.input.nativeElement.focus();
                return false;
            }
        }
    }
    _isTextarea() {
        return this.input && this.input.nativeElement && this.input.nativeElement.tagName === 'TEXTAREA';
    }
}
MatKeyboardKeyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-keyboard-key',
                template: "<button mat-raised-button\n        class=\"mat-keyboard-key\"\n        tabindex=\"-1\"\n        [class.mat-keyboard-key-active]=\"active$ | async\"\n        [class.mat-keyboard-key-pressed]=\"pressed$ | async\"\n        [ngClass]=\"cssClass\"\n        (click)=\"onClick($event)\"\n        (pointerdown)=\"onPointerDown()\"\n        (pointerleave)=\"cancelRepeat()\"\n        (pointerup)=\"cancelRepeat()\"\n>\n  <mat-icon *ngIf=\"hasIcon; else noIcon\" [fontSet]=\"fontSet\" [fontIcon]=\"fontIcon\" [svgIcon]=\"svgIcon\">{{ iconName }}</mat-icon>\n  <ng-template #noIcon>{{ key }}</ng-template>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: ["@charset \"UTF-8\";:host{display:flex;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;justify-content:space-between;line-height:20px}.mat-keyboard-key{min-width:0;width:100%}.mat-keyboard-key-active{background-color:#e0e0e0}.mat-keyboard-key-pressed{background-color:#bdbdbd}.mat-keyboard-key-capslock{background-color:#fff}.mat-keyboard-key-capslock:before{background-color:#bdbdbd;border-radius:100%;content:\"\";display:inline-block;height:3px;left:5px;position:absolute;top:5px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow;width:3px}.mat-keyboard-key-capslock.mat-keyboard-key-active:before{background-color:#0f0;box-shadow:0 0 \u00A7px #adff2f}:host-context(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host-context(.dark-theme) .mat-keyboard-key-active{background-color:#9e9e9e}:host-context(.dark-theme) .mat-keyboard-key-pressed{background-color:#757575}:host-context(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#6fa8aa}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#7fb1b3}:host-context(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#9fd}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b2ffe5}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey{background-color:#639}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#7339ac}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#8040bf}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier{background-color:#9370db}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#a284e0}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b299e5}"]
            },] }
];
MatKeyboardKeyComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_KEYBOARD_DEADKEYS,] }] }
];
MatKeyboardKeyComponent.propDecorators = {
    key: [{ type: Input }],
    icon: [{ type: Input }],
    active: [{ type: Input }],
    pressed: [{ type: Input }],
    input: [{ type: Input }],
    control: [{ type: Input }],
    genericClick: [{ type: Output }],
    enterClick: [{ type: Output }],
    bkspClick: [{ type: Output }],
    capsClick: [{ type: Output }],
    altClick: [{ type: Output }],
    shiftClick: [{ type: Output }],
    spaceClick: [{ type: Output }],
    tabClick: [{ type: Output }],
    keyClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQta2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLWtleS9rZXlib2FyZC1rZXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBSXZFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDcEMsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUMvQixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzlCLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztBQUMzQixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFTNUIsTUFBTSxPQUFPLHVCQUF1QjtJQXlJbEMsc0JBQXNCO0lBQ3RCLFlBQW1ELFNBQTRCO1FBQTVCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBeEl2RSxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUc1QixpQkFBWSxHQUFZLEtBQUssQ0FBQyxDQUFDLHNDQUFzQztRQUU3RSxZQUFPLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9ELGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFpQ2hFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUc5QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMs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dGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1BVF9LRVlCT0FSRF9ERUFES0VZUyB9IGZyb20gJy4uLy4uL2NvbmZpZ3Mva2V5Ym9hcmQtZGVhZGtleS5jb25maWcnO1xuaW1wb3J0IHsgS2V5Ym9hcmRDbGFzc0tleSB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLWNsYXNzLWtleS5lbnVtJztcbmltcG9ydCB7IElLZXlib2FyZERlYWRrZXlzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1kZWFka2V5cy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1hdEljb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2tleWJvYXJkLWljb25zLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBWQUxVRV9ORVdMSU5FID0gJ1xcblxccic7XG5leHBvcnQgY29uc3QgVkFMVUVfU1BBQ0UgPSAnICc7XG5leHBvcnQgY29uc3QgVkFMVUVfVEFCID0gJ1xcdCc7XG5jb25zdCBSRVBFQVRfVElNRU9VVCA9IDUwMDtcbmNvbnN0IFJFUEVBVF9JTlRFUlZBTCA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWtleWJvYXJkLWtleScsXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlib2FyZC1rZXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9rZXlib2FyZC1rZXkuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkS2V5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2RlYWRrZXlLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIF9yZXBlYXRUaW1lb3V0SGFuZGxlcjogYW55O1xuICBwcml2YXRlIF9yZXBlYXRJbnRlcnZhbEhhbmRsZXI6IGFueTtcbiAgcHJpdmF0ZSBfcmVwZWF0U3RhdGU6IGJvb2xlYW4gPSBmYWxzZTsgLy8gdHJ1ZSBpZiByZXBlYXRpbmcsIGZhbHNlIGlmIHdhaXRpbmdcblxuICBhY3RpdmUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBwcmVzc2VkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgQElucHV0KClcbiAga2V5OiBzdHJpbmcgfCBLZXlib2FyZENsYXNzS2V5O1xuXG4gIEBJbnB1dCgpXG4gIGljb246IElNYXRJY29uO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgdGhpcy5hY3RpdmUkLm5leHQoYWN0aXZlKTtcbiAgfVxuXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHByZXNzZWQocHJlc3NlZDogYm9vbGVhbikge1xuICAgIHRoaXMucHJlc3NlZCQubmV4dChwcmVzc2VkKTtcbiAgfVxuXG4gIGdldCBwcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZWQkLmdldFZhbHVlKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBpbnB1dD86IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgY29udHJvbD86IEZvcm1Db250cm9sO1xuXG4gIEBPdXRwdXQoKVxuICBnZW5lcmljQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGVudGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGJrc3BDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgY2Fwc0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBhbHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgc2hpZnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgc3BhY2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgdGFiQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGtleUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIGdldCBsb3dlcktleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmtleX1gLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBnZXQgY2hhckNvZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYCR7dGhpcy5rZXl9YC5jaGFyQ29kZUF0KDApO1xuICB9XG5cbiAgZ2V0IGlzQ2xhc3NLZXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMua2V5IGluIEtleWJvYXJkQ2xhc3NLZXk7XG4gIH1cblxuICBnZXQgaXNEZWFkS2V5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWFka2V5S2V5cy5zb21lKChkZWFkS2V5OiBzdHJpbmcpID0+IGRlYWRLZXkgPT09IGAke3RoaXMua2V5fWApO1xuICB9XG5cbiAgZ2V0IGhhc0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaWNvbiAhPT0gbnVsbDtcbiAgfVxuXG4gIGdldCBpY29uTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb24ubmFtZSB8fCAnJztcbiAgfVxuXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbi5mb250U2V0IHx8ICcnO1xuICB9XG5cbiAgZ2V0IGZvbnRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbi5mb250SWNvbiB8fCAnJztcbiAgfVxuXG4gIGdldCBzdmdJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbi5zdmdJY29uIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuaGFzSWNvbikge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdtYXQta2V5Ym9hcmQta2V5LW1vZGlmaWVyJyk7XG4gICAgICBjbGFzc2VzLnB1c2goYG1hdC1rZXlib2FyZC1rZXktJHt0aGlzLmxvd2VyS2V5fWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRGVhZEtleSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdtYXQta2V5Ym9hcmQta2V5LWRlYWRrZXknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJbmplY3QgZGVwZW5kZW5jaWVzXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0tFWUJPQVJEX0RFQURLRVlTKSBwcml2YXRlIF9kZWFka2V5czogSUtleWJvYXJkRGVhZGtleXMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHJlYWQgdGhlIGRlYWRrZXlzXG4gICAgdGhpcy5fZGVhZGtleUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9kZWFka2V5cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNhbmNlbFJlcGVhdCgpO1xuICB9XG5cbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIC8vIFRyaWdnZXIgZ2VuZXJpYyBjbGljayBldmVudFxuICAgIHRoaXMuZ2VuZXJpY0NsaWNrLmVtaXQoZXZlbnQpO1xuXG4gICAgLy8gRG8gbm90IGV4ZWN1dGUga2V5cHJlc3MgaWYga2V5IGlzIGN1cnJlbnRseSByZXBlYXRpbmdcbiAgICBpZiAodGhpcy5fcmVwZWF0U3RhdGUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBUcmlnZ2VyIGEgZ2xvYmFsIGtleSBldmVudC4gVE9ETzogaW52ZXN0aWdhdGVcbiAgICAvLyB0aGlzLl90cmlnZ2VyS2V5RXZlbnQoKTtcblxuICAgIC8vIE1hbmlwdWxhdGUgdGhlIGZvY3VzZWQgaW5wdXQgLyB0ZXh0YXJlYSB2YWx1ZVxuICAgIGNvbnN0IGNhcmV0ID0gdGhpcy5pbnB1dCA/IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCkgOiAwO1xuXG4gICAgbGV0IGNoYXI6IHN0cmluZztcbiAgICBzd2l0Y2ggKHRoaXMua2V5KSB7XG4gICAgICAvLyB0aGlzIGtleXMgaGF2ZSBubyBhY3Rpb25zIHlldFxuICAgICAgLy8gVE9ETzogYWRkIGRlYWRrZXlzIGFuZCBtb2RpZmllcnNcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5BbHQ6XG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3I6XG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGs6XG4gICAgICAgIHRoaXMuYWx0Q2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQmtzcDpcbiAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZFRleHQoKTtcbiAgICAgICAgdGhpcy5ia3NwQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQ2FwczpcbiAgICAgICAgdGhpcy5jYXBzQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXI6XG4gICAgICAgIGlmICh0aGlzLl9pc1RleHRhcmVhKCkpIHtcbiAgICAgICAgICBjaGFyID0gVkFMVUVfTkVXTElORTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVudGVyQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgICAgLy8gVE9ETzogdHJpZ2dlciBzdWJtaXQgLyBvblN1Ym1pdCAvIG5nU3VibWl0IHByb3Blcmx5IChmb3IgdGhlIHRpbWUgYmVpbmcgdGhpcyBoYXMgdG8gYmUgaGFuZGxlZCBieSB0aGUgdXNlciBoaW1zZWxmKVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC5uZ0NvbnRyb2wuY29udHJvbC5yb290KVxuICAgICAgICAgIC8vIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb3JtLnN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQ6XG4gICAgICAgIHRoaXMuc2hpZnRDbGljay5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZTpcbiAgICAgICAgY2hhciA9IFZBTFVFX1NQQUNFO1xuICAgICAgICB0aGlzLnNwYWNlQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuVGFiOlxuICAgICAgICBjaGFyID0gVkFMVUVfVEFCO1xuICAgICAgICB0aGlzLnRhYkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdGhlIGtleSBpcyBub3QgbWFwcGVkIG9yIGEgc3RyaW5nXG4gICAgICAgIGNoYXIgPSBgJHt0aGlzLmtleX1gO1xuICAgICAgICB0aGlzLmtleUNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhciAmJiB0aGlzLmlucHV0KSB7XG4gICAgICB0aGlzLnJlcGxhY2VTZWxlY3RlZFRleHQoY2hhcik7XG4gICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjYXJldCArIDEpO1xuICAgIH1cblxuICAgIC8vIERpc3BhdGNoIElucHV0IEV2ZW50IGZvciBBbmd1bGFyIHRvIHJlZ2lzdGVyIGEgY2hhbmdlXG4gICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgcmVwZWF0aW5nIGtleXMuIEtleXByZXNzIGxvZ2ljIGRlcml2ZWQgZnJvbSBvbkNsaWNrKClcbiAgb25Qb2ludGVyRG93bigpIHtcbiAgICB0aGlzLmNhbmNlbFJlcGVhdCgpO1xuICAgIHRoaXMuX3JlcGVhdFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fcmVwZWF0VGltZW91dEhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIEluaXRpYWxpemUga2V5cHJlc3MgdmFyaWFibGVzXG4gICAgICBsZXQgY2hhcjogc3RyaW5nO1xuICAgICAgbGV0IGtleUZuOiAoKSA9PiB2b2lkO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMua2V5KSB7XG4gICAgICAgIC8vIElnbm9yZSBub24tcmVwZWF0aW5nIGtleXNcbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkFsdDpcbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkFsdEdyOlxuICAgICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGs6XG4gICAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5DYXBzOlxuICAgICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXI6XG4gICAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdDpcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkJrc3A6XG4gICAgICAgICAga2V5Rm4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVNlbGVjdGVkVGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5ia3NwQ2xpY2suZW1pdCgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LlNwYWNlOlxuICAgICAgICAgIGNoYXIgPSBWQUxVRV9TUEFDRTtcbiAgICAgICAgICBrZXlGbiA9ICgpID0+IHRoaXMuc3BhY2VDbGljay5lbWl0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LlRhYjpcbiAgICAgICAgICBjaGFyID0gVkFMVUVfVEFCO1xuICAgICAgICAgIGtleUZuID0gKCkgPT4gdGhpcy50YWJDbGljay5lbWl0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjaGFyID0gYCR7dGhpcy5rZXl9YDtcbiAgICAgICAgICBrZXlGbiA9ICgpID0+IHRoaXMua2V5Q2xpY2suZW1pdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBFeGVjdXRlIHJlcGVhdGluZyBrZXlwcmVzc1xuICAgICAgdGhpcy5fcmVwZWF0SW50ZXJ2YWxIYW5kbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXJldCA9IHRoaXMuaW5wdXQgPyB0aGlzLl9nZXRDdXJzb3JQb3NpdGlvbigpIDogMDtcbiAgICAgICAgdGhpcy5fcmVwZWF0U3RhdGUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChrZXlGbikgeyBrZXlGbigpOyB9XG5cbiAgICAgICAgaWYgKGNoYXIgJiYgdGhpcy5pbnB1dCkge1xuICAgICAgICAgIHRoaXMucmVwbGFjZVNlbGVjdGVkVGV4dChjaGFyKTtcbiAgICAgICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjYXJldCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFJFUEVBVF9JTlRFUlZBTCk7XG4gICAgfSwgUkVQRUFUX1RJTUVPVVQpO1xuICB9XG5cbiAgY2FuY2VsUmVwZWF0KCkge1xuICAgIGlmICh0aGlzLl9yZXBlYXRUaW1lb3V0SGFuZGxlcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlcGVhdFRpbWVvdXRIYW5kbGVyKTtcbiAgICAgIHRoaXMuX3JlcGVhdFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVwZWF0SW50ZXJ2YWxIYW5kbGVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3JlcGVhdEludGVydmFsSGFuZGxlcik7XG4gICAgICB0aGlzLl9yZXBlYXRJbnRlcnZhbEhhbmRsZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlU2VsZWN0ZWRUZXh0KCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dFZhbHVlID8gdGhpcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgOiAnJztcbiAgICBsZXQgY2FyZXQgPSB0aGlzLmlucHV0ID8gdGhpcy5fZ2V0Q3Vyc29yUG9zaXRpb24oKSA6IDA7XG4gICAgbGV0IHNlbGVjdGlvbkxlbmd0aCA9IHRoaXMuX2dldFNlbGVjdGlvbkxlbmd0aCgpO1xuICAgIGlmIChzZWxlY3Rpb25MZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChjYXJldCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNhcmV0LS07XG4gICAgICBzZWxlY3Rpb25MZW5ndGggPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRQYXJ0ID0gdmFsdWUuc2xpY2UoMCwgY2FyZXQpO1xuICAgIGNvbnN0IGVuZFBhcnQgPSB2YWx1ZS5zbGljZShjYXJldCArIHNlbGVjdGlvbkxlbmd0aCk7XG5cbiAgICB0aGlzLmlucHV0VmFsdWUgPSBbaGVhZFBhcnQsIGVuZFBhcnRdLmpvaW4oJycpO1xuICAgIHRoaXMuX3NldEN1cnNvclBvc2l0aW9uKGNhcmV0KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwbGFjZVNlbGVjdGVkVGV4dChjaGFyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZSA/IHRoaXMuaW5wdXRWYWx1ZS50b1N0cmluZygpIDogJyc7XG4gICAgY29uc3QgY2FyZXQgPSB0aGlzLmlucHV0ID8gdGhpcy5fZ2V0Q3Vyc29yUG9zaXRpb24oKSA6IDA7XG4gICAgY29uc3Qgc2VsZWN0aW9uTGVuZ3RoID0gdGhpcy5fZ2V0U2VsZWN0aW9uTGVuZ3RoKCk7XG4gICAgY29uc3QgaGVhZFBhcnQgPSB2YWx1ZS5zbGljZSgwLCBjYXJldCk7XG4gICAgY29uc3QgZW5kUGFydCA9IHZhbHVlLnNsaWNlKGNhcmV0ICsgc2VsZWN0aW9uTGVuZ3RoKTtcblxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFtoZWFkUGFydCwgY2hhciwgZW5kUGFydF0uam9pbignJyk7XG4gIH1cblxuICAvLyBUT0RPOiBJbmNsdWRlIGZvciByZXBlYXRpbmcga2V5cyBhcyB3ZWxsIChpZiB0aGlzIGdldHMgaW1wbGVtZW50ZWQpXG4gIC8vIHByaXZhdGUgX3RyaWdnZXJLZXlFdmVudCgpOiBFdmVudCB7XG4gIC8vICAgY29uc3Qga2V5Ym9hcmRFdmVudCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJyk7XG4gIC8vICAgLy9cbiAgLy8gICAvLyBrZXlib2FyZEV2ZW50W2luaXRNZXRob2RdKFxuICAvLyAgIC8vICAgdHJ1ZSwgLy8gYnViYmxlc1xuICAvLyAgIC8vICAgdHJ1ZSwgLy8gY2FuY2VsYWJsZVxuICAvLyAgIC8vICAgd2luZG93LCAvLyB2aWV3QXJnOiBzaG91bGQgYmUgd2luZG93XG4gIC8vICAgLy8gICBmYWxzZSwgLy8gY3RybEtleUFyZ1xuICAvLyAgIC8vICAgZmFsc2UsIC8vIGFsdEtleUFyZ1xuICAvLyAgIC8vICAgZmFsc2UsIC8vIHNoaWZ0S2V5QXJnXG4gIC8vICAgLy8gICBmYWxzZSwgLy8gbWV0YUtleUFyZ1xuICAvLyAgIC8vICAgdGhpcy5jaGFyQ29kZSwgLy8ga2V5Q29kZUFyZyA6IHVuc2lnbmVkIGxvbmcgLSB0aGUgdmlydHVhbCBrZXkgY29kZSwgZWxzZSAwXG4gIC8vICAgLy8gICAwIC8vIGNoYXJDb2RlQXJncyA6IHVuc2lnbmVkIGxvbmcgLSB0aGUgVW5pY29kZSBjaGFyYWN0ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBkZXByZXNzZWQga2V5LCBlbHNlIDBcbiAgLy8gICAvLyApO1xuICAvLyAgIC8vXG4gIC8vICAgLy8gd2luZG93LmRvY3VtZW50LmRpc3BhdGNoRXZlbnQoa2V5Ym9hcmRFdmVudCk7XG5cbiAgLy8gICByZXR1cm4ga2V5Ym9hcmRFdmVudDtcbiAgLy8gfVxuXG4gIC8vIGluc3BpcmVkIGJ5OlxuICAvLyByZWYgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4OTc1MTAvMTE0NjIwN1xuICBwcml2YXRlIF9nZXRDdXJzb3JQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgLy8gU3RhbmRhcmQtY29tcGxpYW50IGJyb3dzZXJzXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgIH0gZWxzZSBpZiAoJ3NlbGVjdGlvbicgaW4gd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAvLyBJRVxuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBjb25zdCBzZWxlY3Rpb246IGFueSA9IHdpbmRvdy5kb2N1bWVudFsnc2VsZWN0aW9uJ107XG4gICAgICBjb25zdCBzZWwgPSBzZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgIGNvbnN0IHNlbExlbiA9IHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQubGVuZ3RoO1xuICAgICAgc2VsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXRoaXMuY29udHJvbC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICByZXR1cm4gc2VsLnRleHQubGVuZ3RoIC0gc2VsTGVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFNlbGVjdGlvbkxlbmd0aCgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgnc2VsZWN0aW9uRW5kJyBpbiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIC8vIFN0YW5kYXJkLWNvbXBsaWFudCBicm93c2Vyc1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgLSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuXG4gICAgaWYgKCdzZWxlY3Rpb24nIGluIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgLy8gSUVcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uOiBhbnkgPSB3aW5kb3cuZG9jdW1lbnRbJ3NlbGVjdGlvbiddO1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3BpcmVkIGJ5OlxuICAvLyByZWYgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEyNTE4NzM3LzExNDYyMDdcbiAgLy8gdHNsaW50OmRpc2FibGUgb25lLWxpbmVcbiAgcHJpdmF0ZSBfc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuY29udHJvbC52YWx1ZTtcbiAgICAvLyBeIHRoaXMgaXMgdXNlZCB0byBub3Qgb25seSBnZXQgXCJmb2N1c1wiLCBidXRcbiAgICAvLyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZSBpdCBldmVyeXRoaW5nIC1zZWxlY3RlZC1cbiAgICAvLyAoaXQgY2F1c2VzIGFuIGlzc3VlIGluIGNocm9tZSwgYW5kIGhhdmluZyBpdCBkb2Vzbid0IGh1cnQgYW55IG90aGVyIGJyb3dzZXIpXG5cbiAgICBpZiAoJ2NyZWF0ZVRleHRSYW5nZScgaW4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLm1vdmUoJ2NoYXJhY3RlcicsIHBvc2l0aW9uKTtcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIChlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCBhZGRlZCBmb3IgRmlyZWZveCBidWcpXG4gICAgICBpZiAodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uLCBwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gZmFpbCBjaXR5LCBmb3J0dW5hdGVseSB0aGlzIG5ldmVyIGhhcHBlbnMgKGFzIGZhciBhcyBJJ3ZlIHRlc3RlZCkgOilcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzVGV4dGFyZWEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnO1xuICB9XG5cbn1cbiJdfQ==