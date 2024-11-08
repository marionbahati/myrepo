import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Inject, LOCALE_ID, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KEYBOARD_ICONS } from '../../configs/keyboard-icons.config';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
import { KeyboardModifier } from '../../enums/keyboard-modifier.enum';
import { MatKeyboardService } from '../../services/keyboard.service';
import { MatKeyboardKeyComponent } from '../keyboard-key/keyboard-key.component';
/**
 * A component used to open as the default keyboard, matching material spec.
 * This should only be used internally by the keyboard service.
 */
export class MatKeyboardComponent {
    // inject dependencies
    constructor(_locale, _keyboardService) {
        this._locale = _locale;
        this._keyboardService = _keyboardService;
        this._darkTheme = new BehaviorSubject(false);
        this._isDebug = new BehaviorSubject(false);
        this._inputInstance$ = new BehaviorSubject(null);
        this._modifier = KeyboardModifier.None;
        this._capsLocked = false;
        this._icons = KEYBOARD_ICONS;
        this.cssClass = true;
        this.enterClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
    }
    // returns an observable of the input instance
    get inputInstance() {
        return this._inputInstance$.asObservable();
    }
    set icons(icons) {
        Object.assign(this._icons, icons);
    }
    set darkTheme(darkTheme) {
        if (this._darkTheme.getValue() !== darkTheme) {
            this._darkTheme.next(darkTheme);
        }
    }
    set isDebug(isDebug) {
        if (this._isDebug.getValue() !== isDebug) {
            this._isDebug.next(isDebug);
        }
    }
    get darkTheme$() {
        return this._darkTheme.asObservable();
    }
    get isDebug$() {
        return this._isDebug.asObservable();
    }
    setInputInstance(inputInstance) {
        this._inputInstance$.next(inputInstance);
    }
    attachControl(control) {
        this.control = control;
    }
    ngOnInit() {
        // set a fallback using the locale
        if (!this.layout) {
            this.locale = this._keyboardService.mapLocale(this._locale) ? this._locale : 'en-US';
            this.layout = this._keyboardService.getLayoutForLocale(this.locale);
        }
    }
    /**
     * dismisses the keyboard
     */
    dismiss() {
        this.keyboardRef.dismiss();
    }
    /**
     * checks if a given key is currently pressed
     * @param key
     * @param
     */
    isActive(key) {
        const modifiedKey = this.getModifiedKey(key);
        const isActiveCapsLock = modifiedKey === KeyboardClassKey.Caps && this._capsLocked;
        const isActiveModifier = modifiedKey === KeyboardModifier[this._modifier];
        return isActiveCapsLock || isActiveModifier;
    }
    // retrieves modified key
    getModifiedKey(key) {
        let modifier = this._modifier;
        // `CapsLock` inverts the meaning of `Shift`
        if (this._capsLocked) {
            modifier = this._invertShiftModifier(this._modifier);
        }
        return key[modifier];
    }
    // retrieves icon for given key
    getKeyIcon(key) {
        return this._icons[key[KeyboardModifier.None]];
    }
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    onKeyDown(event) {
        // 'activate' corresponding key
        this._keys
            .filter((key) => key.key === event.key)
            .forEach((key) => {
            key.pressed = true;
        });
        // simulate modifier press
        if (event.key === KeyboardClassKey.Caps) {
            this.onCapsClick(event.getModifierState(KeyboardClassKey.Caps));
        }
        if (event.key === KeyboardClassKey.Alt && this._modifier !== KeyboardModifier.Alt && this._modifier !== KeyboardModifier.ShiftAlt) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && this._modifier !== KeyboardModifier.Shift && this._modifier !== KeyboardModifier.ShiftAlt) {
            this.onShiftClick();
        }
    }
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    onKeyUp(event) {
        // 'deactivate' corresponding key
        this._keys
            .filter((key) => key.key === event.key)
            .forEach((key) => {
            key.pressed = false;
        });
        // simulate modifier release
        if (event.key === KeyboardClassKey.Alt && (this._modifier === KeyboardModifier.Alt || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && (this._modifier === KeyboardModifier.Shift || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onShiftClick();
        }
    }
    /**
     * bubbles event if submit is potentially triggered
     */
    onEnterClick() {
        // notify subscribers
        this.enterClick.next();
    }
    /**
     * simulates clicking `CapsLock` key
     * @param targetState
     */
    onCapsClick(targetState = !this._capsLocked) {
        // not implemented
        this._capsLocked = targetState;
        // notify subscribers
        this.capsClick.next();
    }
    /*
     * non-modifier keys are clicked
     */
    onKeyClick() {
        if (this._modifier === KeyboardModifier.Shift || this._modifier === KeyboardModifier.ShiftAlt) {
            this._modifier = this._invertShiftModifier(this._modifier);
        }
        if (this._modifier === KeyboardModifier.Alt || this._modifier === KeyboardModifier.ShiftAlt) {
            this._modifier = this._invertAltModifier(this._modifier);
        }
    }
    /**
     * simulates clicking `Alt` key
     */
    onAltClick() {
        // invert modifier meaning
        this._modifier = this._invertAltModifier(this._modifier);
        // notify subscribers
        this.altClick.next();
    }
    /**
     * simulates clicking `Shift` key
     */
    onShiftClick() {
        // invert modifier meaning
        this._modifier = this._invertShiftModifier(this._modifier);
        // notify subscribers
        this.shiftClick.next();
    }
    _invertAltModifier(modifier) {
        switch (modifier) {
            case KeyboardModifier.None:
                return KeyboardModifier.Alt;
            case KeyboardModifier.Shift:
                return KeyboardModifier.ShiftAlt;
            case KeyboardModifier.ShiftAlt:
                return KeyboardModifier.Shift;
            case KeyboardModifier.Alt:
                return KeyboardModifier.None;
        }
    }
    _invertShiftModifier(modifier) {
        switch (modifier) {
            case KeyboardModifier.None:
                return KeyboardModifier.Shift;
            case KeyboardModifier.Alt:
                return KeyboardModifier.ShiftAlt;
            case KeyboardModifier.ShiftAlt:
                return KeyboardModifier.Alt;
            case KeyboardModifier.Shift:
                return KeyboardModifier.None;
        }
    }
}
MatKeyboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-keyboard',
                template: "<div class=\"mat-keyboard-wrapper\"\n     [class.dark-theme]=\"darkTheme$ | async\"\n     [class.debug]=\"isDebug$ | async\"\n>\n  <nav class=\"mat-keyboard-layout\">\n    <div class=\"mat-keyboard-row\"\n         *ngFor=\"let row of layout.keys\"\n    >\n      <ng-container *ngFor=\"let key of row\">\n        <mat-keyboard-key class=\"mat-keyboard-col\"\n                          *ngIf=\"getModifiedKey(key)\"\n                          [key]=\"getModifiedKey(key)\"\n                          [icon]=\"getKeyIcon(key)\"\n                          [active]=\"isActive(key)\"\n                          [input]=\"inputInstance | async\"\n                          [control]=\"control\"\n                          (enterClick)=\"onEnterClick()\"\n                          (capsClick)=\"onCapsClick()\"\n                          (altClick)=\"onAltClick()\"\n                          (shiftClick)=\"onShiftClick()\"\n                          (keyClick)=\"onKeyClick()\"\n        ></mat-keyboard-key>\n      </ng-container>\n    </div>\n  </nav>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [".mat-keyboard-wrapper{background-color:#f5f5f5;border-radius:2px;display:flex;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;justify-content:space-between;line-height:20px;padding:14px 24px}.mat-keyboard-wrapper.dark-theme{background-color:#424242}.mat-keyboard-action{background:none;color:inherit;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600;line-height:1;margin-left:8px;text-transform:uppercase}:host(.dark-theme) .mat-keyboard-action{color:#f5f5f5}.mat-keyboard-layout{width:100%}.mat-keyboard-row{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap}.mat-keyboard-col{box-sizing:border-box;flex:1 1 auto;padding:4px}.mat-keyboard-key{min-width:0;width:100%}:host(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host(.debug.dark-theme) .mat-keyboard-key-deadkey{background-color:#639}:host(.debug.dark-theme) .mat-keyboard-key-modifier{background-color:#9370db}"]
            },] }
];
MatKeyboardComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: MatKeyboardService }
];
MatKeyboardComponent.propDecorators = {
    _keys: [{ type: ViewChildren, args: [MatKeyboardKeyComponent,] }],
    cssClass: [{ type: HostBinding, args: ['class.mat-keyboard',] }],
    onKeyDown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2NvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVLLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGOzs7R0FHRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7SUFtRS9CLHNCQUFzQjtJQUN0QixZQUF1QyxPQUFlLEVBQ2xDLGdCQUFvQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFuRWhELGVBQVUsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEUsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRSxvQkFBZSxHQUF1QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUtoRixjQUFTLEdBQXFCLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUVwRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixXQUFN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WUFFbkMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRO2dCQUM1QixPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUVoQyxLQUFLLGdCQUFnQixDQUFDLEdBQUc7Z0JBQ3ZCLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFFBQTBCO1FBQ3JELFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssZ0JBQWdCLENBQUMsSUFBSTtnQkFDeEIsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFFaEMsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO2dCQUN2QixPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUVuQyxLQUFLLGdCQUFnQixDQUFDLFFBQVE7Z0JBQzVCLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBRTlCLEtBQUssZ0JBQWdCLENBQUMsS0FBSztnQkFDekIsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7WUF0UUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4aUNBQXdDO2dCQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzs7YUFDM0I7Ozt5Q0FxRWMsTUFBTSxTQUFDLFNBQVM7WUFsRnRCLGtCQUFrQjs7O29CQXNCeEIsWUFBWSxTQUFDLHVCQUF1Qjt1QkFtQnBDLFdBQVcsU0FBQyxvQkFBb0I7d0JBb0doQyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBeUIzQyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgTE9DQUxFX0lELCBPbkluaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hdEtleWJvYXJkUmVmIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9rZXlib2FyZC1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgS0VZQk9BUkRfSUNPTlMgfSBmcm9tICcuLi8uLi9jb25maWdzL2tleWJvYXJkLWljb25zLmNvbmZpZyc7XG5pbXBvcnQgeyBLZXlib2FyZENsYXNzS2V5IH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQtY2xhc3Mta2V5LmVudW0nO1xuaW1wb3J0IHsgS2V5Ym9hcmRNb2RpZmllciB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLW1vZGlmaWVyLmVudW0nO1xuaW1wb3J0IHsgSUtleWJvYXJkSWNvbnMsIElNYXRJY29uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1pY29ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUtleWJvYXJkTGF5b3V0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXQuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1hdEtleWJvYXJkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2tleWJvYXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQgfSBmcm9tICcuLi9rZXlib2FyZC1rZXkva2V5Ym9hcmQta2V5LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdXNlZCB0byBvcGVuIGFzIHRoZSBkZWZhdWx0IGtleWJvYXJkLCBtYXRjaGluZyBtYXRlcmlhbCBzcGVjLlxuICogVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGludGVybmFsbHkgYnkgdGhlIGtleWJvYXJkIHNlcnZpY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1rZXlib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tleWJvYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfZGFya1RoZW1lOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBwcml2YXRlIF9pc0RlYnVnOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBwcml2YXRlIF9pbnB1dEluc3RhbmNlJDogQmVoYXZpb3JTdWJqZWN0PEVsZW1lbnRSZWYgfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgQFZpZXdDaGlsZHJlbihNYXRLZXlib2FyZEtleUNvbXBvbmVudClcbiAgcHJpdmF0ZSBfa2V5czogUXVlcnlMaXN0PE1hdEtleWJvYXJkS2V5Q29tcG9uZW50PjtcblxuICBwcml2YXRlIF9tb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllciA9IEtleWJvYXJkTW9kaWZpZXIuTm9uZTtcblxuICBwcml2YXRlIF9jYXBzTG9ja2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaWNvbnM6IElLZXlib2FyZEljb25zID0gS0VZQk9BUkRfSUNPTlM7XG5cbiAgLy8gdGhlIHNlcnZpY2UgcHJvdmlkZXMgYSBsb2NhbGUgb3IgbGF5b3V0IG9wdGlvbmFsbHlcbiAgbG9jYWxlPzogc3RyaW5nO1xuXG4gIGxheW91dDogSUtleWJvYXJkTGF5b3V0O1xuXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAvLyB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBtYWtpbmcgdXAgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkXG4gIGtleWJvYXJkUmVmOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQta2V5Ym9hcmQnKVxuICBjc3NDbGFzcyA9IHRydWU7XG5cbiAgZW50ZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNhcHNDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGFsdENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgc2hpZnRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8vIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBvZiB0aGUgaW5wdXQgaW5zdGFuY2VcbiAgZ2V0IGlucHV0SW5zdGFuY2UoKTogT2JzZXJ2YWJsZTxFbGVtZW50UmVmIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dEluc3RhbmNlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldCBpY29ucyhpY29uczogSUtleWJvYXJkSWNvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ljb25zLCBpY29ucyk7XG4gIH1cblxuICBzZXQgZGFya1RoZW1lKGRhcmtUaGVtZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9kYXJrVGhlbWUuZ2V0VmFsdWUoKSAhPT0gZGFya1RoZW1lKSB7XG4gICAgICB0aGlzLl9kYXJrVGhlbWUubmV4dChkYXJrVGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBpc0RlYnVnKGlzRGVidWc6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5faXNEZWJ1Zy5nZXRWYWx1ZSgpICE9PSBpc0RlYnVnKSB7XG4gICAgICB0aGlzLl9pc0RlYnVnLm5leHQoaXNEZWJ1Zyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRhcmtUaGVtZSQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhcmtUaGVtZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBpc0RlYnVnJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5faXNEZWJ1Zy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8vIGluamVjdCBkZXBlbmRlbmNpZXNcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcml2YXRlIF9rZXlib2FyZFNlcnZpY2U6IE1hdEtleWJvYXJkU2VydmljZSkgeyB9XG5cbiAgc2V0SW5wdXRJbnN0YW5jZShpbnB1dEluc3RhbmNlOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5faW5wdXRJbnN0YW5jZSQubmV4dChpbnB1dEluc3RhbmNlKTtcbiAgfVxuXG4gIGF0dGFjaENvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHNldCBhIGZhbGxiYWNrIHVzaW5nIHRoZSBsb2NhbGVcbiAgICBpZiAoIXRoaXMubGF5b3V0KSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuX2tleWJvYXJkU2VydmljZS5tYXBMb2NhbGUodGhpcy5fbG9jYWxlKSA/IHRoaXMuX2xvY2FsZSA6ICdlbi1VUyc7XG4gICAgICB0aGlzLmxheW91dCA9IHRoaXMuX2tleWJvYXJkU2VydmljZS5nZXRMYXlvdXRGb3JMb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBkaXNtaXNzZXMgdGhlIGtleWJvYXJkXG4gICAqL1xuICBkaXNtaXNzKCkge1xuICAgIHRoaXMua2V5Ym9hcmRSZWYuZGlzbWlzcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrcyBpZiBhIGdpdmVuIGtleSBpcyBjdXJyZW50bHkgcHJlc3NlZFxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbVxuICAgKi9cbiAgaXNBY3RpdmUoa2V5OiAoc3RyaW5nIHwgS2V5Ym9hcmRDbGFzc0tleSlbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1vZGlmaWVkS2V5OiBzdHJpbmcgPSB0aGlzLmdldE1vZGlmaWVkS2V5KGtleSk7XG4gICAgY29uc3QgaXNBY3RpdmVDYXBzTG9jazogYm9vbGVhbiA9IG1vZGlmaWVkS2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkNhcHMgJiYgdGhpcy5fY2Fwc0xvY2tlZDtcbiAgICBjb25zdCBpc0FjdGl2ZU1vZGlmaWVyOiBib29sZWFuID0gbW9kaWZpZWRLZXkgPT09IEtleWJvYXJkTW9kaWZpZXJbdGhpcy5fbW9kaWZpZXJdO1xuICAgIHJldHVybiBpc0FjdGl2ZUNhcHNMb2NrIHx8IGlzQWN0aXZlTW9kaWZpZXI7XG4gIH1cblxuICAvLyByZXRyaWV2ZXMgbW9kaWZpZWQga2V5XG4gIGdldE1vZGlmaWVkS2V5KGtleTogKHN0cmluZyB8IEtleWJvYXJkQ2xhc3NLZXkpW10pOiBzdHJpbmcge1xuICAgIGxldCBtb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllciA9IHRoaXMuX21vZGlmaWVyO1xuXG4gICAgLy8gYENhcHNMb2NrYCBpbnZlcnRzIHRoZSBtZWFuaW5nIG9mIGBTaGlmdGBcbiAgICBpZiAodGhpcy5fY2Fwc0xvY2tlZCkge1xuICAgICAgbW9kaWZpZXIgPSB0aGlzLl9pbnZlcnRTaGlmdE1vZGlmaWVyKHRoaXMuX21vZGlmaWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5W21vZGlmaWVyXTtcbiAgfVxuXG4gIC8vIHJldHJpZXZlcyBpY29uIGZvciBnaXZlbiBrZXlcbiAgZ2V0S2V5SWNvbihrZXk6IChzdHJpbmcgfCBLZXlib2FyZENsYXNzS2V5KVtdKTogSU1hdEljb24ge1xuICAgIHJldHVybiB0aGlzLl9pY29uc1trZXlbS2V5Ym9hcmRNb2RpZmllci5Ob25lXV07XG4gIH1cblxuICAvKipcbiAgICogbGlzdGVucyB0byB1c2VycyBrZXlib2FyZCBpbnB1dHMgdG8gc2ltdWxhdGUgb24gdmlydHVhbCBrZXlib2FyZCwgdG9vXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vICdhY3RpdmF0ZScgY29ycmVzcG9uZGluZyBrZXlcbiAgICB0aGlzLl9rZXlzXG4gICAgICAuZmlsdGVyKChrZXk6IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50KSA9PiBrZXkua2V5ID09PSBldmVudC5rZXkpXG4gICAgICAuZm9yRWFjaCgoa2V5OiBNYXRLZXlib2FyZEtleUNvbXBvbmVudCkgPT4ge1xuICAgICAgICBrZXkucHJlc3NlZCA9IHRydWU7XG4gICAgICB9KTtcblxuICAgIC8vIHNpbXVsYXRlIG1vZGlmaWVyIHByZXNzXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS2V5Ym9hcmRDbGFzc0tleS5DYXBzKSB7XG4gICAgICB0aGlzLm9uQ2Fwc0NsaWNrKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoS2V5Ym9hcmRDbGFzc0tleS5DYXBzKSk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuQWx0ICYmIHRoaXMuX21vZGlmaWVyICE9PSBLZXlib2FyZE1vZGlmaWVyLkFsdCAmJiB0aGlzLl9tb2RpZmllciAhPT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdCkge1xuICAgICAgdGhpcy5vbkFsdENsaWNrKCk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQgJiYgdGhpcy5fbW9kaWZpZXIgIT09IEtleWJvYXJkTW9kaWZpZXIuU2hpZnQgJiYgdGhpcy5fbW9kaWZpZXIgIT09IEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQpIHtcbiAgICAgIHRoaXMub25TaGlmdENsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGxpc3RlbnMgdG8gdXNlcnMga2V5Ym9hcmQgaW5wdXRzIHRvIHNpbXVsYXRlIG9uIHZpcnR1YWwga2V5Ym9hcmQsIHRvb1xuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSlcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vICdkZWFjdGl2YXRlJyBjb3JyZXNwb25kaW5nIGtleVxuICAgIHRoaXMuX2tleXNcbiAgICAgIC5maWx0ZXIoKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IGtleS5rZXkgPT09IGV2ZW50LmtleSlcbiAgICAgIC5mb3JFYWNoKChrZXk6IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50KSA9PiB7XG4gICAgICAgIGtleS5wcmVzc2VkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIC8vIHNpbXVsYXRlIG1vZGlmaWVyIHJlbGVhc2VcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkFsdCAmJiAodGhpcy5fbW9kaWZpZXIgPT09IEtleWJvYXJkTW9kaWZpZXIuQWx0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSkge1xuICAgICAgdGhpcy5vbkFsdENsaWNrKCk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQgJiYgKHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSkge1xuICAgICAgdGhpcy5vblNoaWZ0Q2xpY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnViYmxlcyBldmVudCBpZiBzdWJtaXQgaXMgcG90ZW50aWFsbHkgdHJpZ2dlcmVkXG4gICAqL1xuICBvbkVudGVyQ2xpY2soKSB7XG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXG4gICAgdGhpcy5lbnRlckNsaWNrLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaW11bGF0ZXMgY2xpY2tpbmcgYENhcHNMb2NrYCBrZXlcbiAgICogQHBhcmFtIHRhcmdldFN0YXRlXG4gICAqL1xuICBvbkNhcHNDbGljayh0YXJnZXRTdGF0ZSA9ICF0aGlzLl9jYXBzTG9ja2VkKSB7XG4gICAgLy8gbm90IGltcGxlbWVudGVkXG4gICAgdGhpcy5fY2Fwc0xvY2tlZCA9IHRhcmdldFN0YXRlO1xuXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXG4gICAgdGhpcy5jYXBzQ2xpY2submV4dCgpO1xuICB9XG5cbiAgLypcbiAgICogbm9uLW1vZGlmaWVyIGtleXMgYXJlIGNsaWNrZWRcbiAgICovXG4gIG9uS2V5Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSB7XG4gICAgICB0aGlzLl9tb2RpZmllciA9IHRoaXMuX2ludmVydFNoaWZ0TW9kaWZpZXIodGhpcy5fbW9kaWZpZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5BbHQgfHwgdGhpcy5fbW9kaWZpZXIgPT09IEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQpIHtcbiAgICAgIHRoaXMuX21vZGlmaWVyID0gdGhpcy5faW52ZXJ0QWx0TW9kaWZpZXIodGhpcy5fbW9kaWZpZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzaW11bGF0ZXMgY2xpY2tpbmcgYEFsdGAga2V5XG4gICAqL1xuICBvbkFsdENsaWNrKCkge1xuICAgIC8vIGludmVydCBtb2RpZmllciBtZWFuaW5nXG4gICAgdGhpcy5fbW9kaWZpZXIgPSB0aGlzLl9pbnZlcnRBbHRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XG5cbiAgICAvLyBub3RpZnkgc3Vic2NyaWJlcnNcbiAgICB0aGlzLmFsdENsaWNrLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaW11bGF0ZXMgY2xpY2tpbmcgYFNoaWZ0YCBrZXlcbiAgICovXG4gIG9uU2hpZnRDbGljaygpIHtcbiAgICAvLyBpbnZlcnQgbW9kaWZpZXIgbWVhbmluZ1xuICAgIHRoaXMuX21vZGlmaWVyID0gdGhpcy5faW52ZXJ0U2hpZnRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XG5cbiAgICAvLyBub3RpZnkgc3Vic2NyaWJlcnNcbiAgICB0aGlzLnNoaWZ0Q2xpY2submV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW52ZXJ0QWx0TW9kaWZpZXIobW9kaWZpZXI6IEtleWJvYXJkTW9kaWZpZXIpOiBLZXlib2FyZE1vZGlmaWVyIHtcbiAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuTm9uZTpcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuQWx0O1xuXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuU2hpZnQ6XG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0O1xuXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQ6XG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0O1xuXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuQWx0OlxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5Ob25lO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ludmVydFNoaWZ0TW9kaWZpZXIobW9kaWZpZXI6IEtleWJvYXJkTW9kaWZpZXIpOiBLZXlib2FyZE1vZGlmaWVyIHtcbiAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuTm9uZTpcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuU2hpZnQ7XG5cbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5BbHQ6XG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0O1xuXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQ6XG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLkFsdDtcblxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0OlxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5Ob25lO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=