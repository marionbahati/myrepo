import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatKeyboardService } from '../services/keyboard.service';
export class MatKeyboardDirective {
    constructor(_elementRef, _keyboardService, _control) {
        this._elementRef = _elementRef;
        this._keyboardService = _keyboardService;
        this._control = _control;
        this.enterClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
    }
    ngOnDestroy() {
        this.hideKeyboard();
    }
    showKeyboard() {
        this._keyboardRef = this._keyboardService.open(this.matKeyboard, {
            darkTheme: this.darkTheme,
            duration: this.duration,
            isDebug: this.isDebug
        });
        // reference the input element
        this._keyboardRef.instance.setInputInstance(this._elementRef);
        // set control if given, cast to smth. non-abstract
        if (this._control) {
            this._keyboardRef.instance.attachControl(this._control.control);
        }
        // connect outputs
        this._keyboardRef.instance.enterClick.subscribe(() => this.enterClick.next());
        this._keyboardRef.instance.capsClick.subscribe(() => this.capsClick.next());
        this._keyboardRef.instance.altClick.subscribe(() => this.altClick.next());
        this._keyboardRef.instance.shiftClick.subscribe(() => this.shiftClick.next());
    }
    hideKeyboard() {
        if (this._keyboardRef) {
            this._keyboardRef.dismiss();
        }
    }
}
MatKeyboardDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[matKeyboard], textarea[matKeyboard]'
            },] }
];
MatKeyboardDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: MatKeyboardService },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
MatKeyboardDirective.propDecorators = {
    matKeyboard: [{ type: Input }],
    darkTheme: [{ type: Input }],
    duration: [{ type: Input }],
    isDebug: [{ type: Input }],
    enterClick: [{ type: Output }],
    capsClick: [{ type: Output }],
    altClick: [{ type: Output }],
    shiftClick: [{ type: Output }],
    showKeyboard: [{ type: HostListener, args: ['focus', ['$event'],] }],
    hideKeyboard: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2RpcmVjdGl2ZXMva2V5Ym9hcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUtsRSxNQUFNLE9BQU8sb0JBQW9CO0lBb0IvQixZQUFvQixXQUF1QixFQUN2QixnQkFBb0MsRUFDaEIsUUFBb0I7UUFGeEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBVmxELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxRCxjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXhELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUlMLENBQUM7SUFFaEUsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR00sWUFBWTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7UUFFSCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlELG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUdNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7YUFDdEQ7OztZQVRtQixVQUFVO1lBS3JCLGtCQUFrQjtZQUpsQixTQUFTLHVCQStCSCxRQUFRLFlBQUksSUFBSTs7OzBCQWxCNUIsS0FBSzt3QkFFTCxLQUFLO3VCQUVMLEtBQUs7c0JBRUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFFTixNQUFNOzJCQVVOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBdUJoQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0S2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMva2V5Ym9hcmQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W21hdEtleWJvYXJkXSwgdGV4dGFyZWFbbWF0S2V5Ym9hcmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfa2V5Ym9hcmRSZWY6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBtYXRLZXlib2FyZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGRhcmtUaGVtZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGlzRGVidWc6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGVudGVyQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KCkgY2Fwc0NsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpIGFsdENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpIHNoaWZ0Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9rZXlib2FyZFNlcnZpY2U6IE1hdEtleWJvYXJkU2VydmljZSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwcml2YXRlIF9jb250cm9sPzogTmdDb250cm9sKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZUtleWJvYXJkKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBzaG93S2V5Ym9hcmQoKSB7XG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYgPSB0aGlzLl9rZXlib2FyZFNlcnZpY2Uub3Blbih0aGlzLm1hdEtleWJvYXJkLCB7XG4gICAgICBkYXJrVGhlbWU6IHRoaXMuZGFya1RoZW1lLFxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXG4gICAgICBpc0RlYnVnOiB0aGlzLmlzRGVidWdcbiAgICB9KTtcblxuICAgIC8vIHJlZmVyZW5jZSB0aGUgaW5wdXQgZWxlbWVudFxuICAgIHRoaXMuX2tleWJvYXJkUmVmLmluc3RhbmNlLnNldElucHV0SW5zdGFuY2UodGhpcy5fZWxlbWVudFJlZik7XG5cbiAgICAvLyBzZXQgY29udHJvbCBpZiBnaXZlbiwgY2FzdCB0byBzbXRoLiBub24tYWJzdHJhY3RcbiAgICBpZiAodGhpcy5fY29udHJvbCkge1xuICAgICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuYXR0YWNoQ29udHJvbCh0aGlzLl9jb250cm9sLmNvbnRyb2wpO1xuICAgIH1cblxuICAgIC8vIGNvbm5lY3Qgb3V0cHV0c1xuICAgIHRoaXMuX2tleWJvYXJkUmVmLmluc3RhbmNlLmVudGVyQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuZW50ZXJDbGljay5uZXh0KCkpO1xuICAgIHRoaXMuX2tleWJvYXJkUmVmLmluc3RhbmNlLmNhcHNDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jYXBzQ2xpY2submV4dCgpKTtcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5hbHRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hbHRDbGljay5uZXh0KCkpO1xuICAgIHRoaXMuX2tleWJvYXJkUmVmLmluc3RhbmNlLnNoaWZ0Q2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hpZnRDbGljay5uZXh0KCkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBoaWRlS2V5Ym9hcmQoKSB7XG4gICAgaWYgKHRoaXMuX2tleWJvYXJkUmVmKSB7XG4gICAgICB0aGlzLl9rZXlib2FyZFJlZi5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==