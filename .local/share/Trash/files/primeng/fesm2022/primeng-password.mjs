import { trigger, transition, style, animate } from '@angular/animations';
import * as i2 from '@angular/common';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { PLATFORM_ID, Directive, Inject, Input, HostListener, Pipe, forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Output, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from 'primeng/api';
import { TranslationKeys, PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { EyeIcon } from 'primeng/icons/eye';
import { EyeSlashIcon } from 'primeng/icons/eyeslash';
import { TimesIcon } from 'primeng/icons/times';
import * as i3 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { ZIndexUtils } from 'primeng/utils';

/**
 * Password directive.
 * @group Components
 */
class PasswordDirective {
    document;
    platformId;
    renderer;
    el;
    zone;
    /**
     * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    promptLabel = 'Enter a password';
    /**
     * Text for a weak password. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    weakLabel = 'Weak';
    /**
     * Text for a medium password. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    mediumLabel = 'Medium';
    /**
     * Text for a strong password. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    strongLabel = 'Strong';
    /**
     * Whether to show the strength indicator or not.
     * @group Props
     */
    feedback = true;
    /**
     * Sets the visibility of the password field.
     * @group Props
     */
    set showPassword(show) {
        this.el.nativeElement.type = show ? 'text' : 'password';
    }
    panel;
    meter;
    info;
    filled;
    scrollHandler;
    documentResizeListener;
    constructor(document, platformId, renderer, el, zone) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.zone = zone;
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    createPanel() {
        if (isPlatformBrowser(this.platformId)) {
            this.panel = this.renderer.createElement('div');
            this.renderer.addClass(this.panel, 'p-password-panel');
            this.renderer.addClass(this.panel, 'p-component');
            this.renderer.addClass(this.panel, 'p-password-panel-overlay');
            this.renderer.addClass(this.panel, 'p-connected-overlay');
            this.meter = this.renderer.createElement('div');
            this.renderer.addClass(this.meter, 'p-password-meter');
            this.renderer.appendChild(this.panel, this.meter);
            this.info = this.renderer.createElement('div');
            this.renderer.addClass(this.info, 'p-password-info');
            this.renderer.setProperty(this.info, 'textContent', this.promptLabel);
            this.renderer.appendChild(this.panel, this.info);
            this.renderer.setStyle(this.panel, 'minWidth', `${this.el.nativeElement.offsetWidth}px`);
            this.renderer.appendChild(document.body, this.panel);
        }
    }
    showOverlay() {
        if (this.feedback) {
            if (!this.panel) {
                this.createPanel();
            }
            this.renderer.setStyle(this.panel, 'zIndex', String(++DomHandler.zindex));
            this.renderer.setStyle(this.panel, 'display', 'block');
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    DomHandler.addClass(this.panel, 'p-connected-overlay-visible');
                    this.bindScrollListener();
                    this.bindDocumentResizeListener();
                }, 1);
            });
            DomHandler.absolutePosition(this.panel, this.el.nativeElement);
        }
    }
    hideOverlay() {
        if (this.feedback && this.panel) {
            DomHandler.addClass(this.panel, 'p-connected-overlay-hidden');
            DomHandler.removeClass(this.panel, 'p-connected-overlay-visible');
            this.unbindScrollListener();
            this.unbindDocumentResizeListener();
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.ngOnDestroy();
                }, 150);
            });
        }
    }
    onFocus() {
        this.showOverlay();
    }
    onBlur() {
        this.hideOverlay();
    }
    onKeyup(e) {
        if (this.feedback) {
            let value = e.target.value, label = null, meterPos = null;
            if (value.length === 0) {
                label = this.promptLabel;
                meterPos = '0px 0px';
            }
            else {
                var score = this.testStrength(value);
                if (score < 30) {
                    label = this.weakLabel;
                    meterPos = '0px -10px';
                }
                else if (score >= 30 && score < 80) {
                    label = this.mediumLabel;
                    meterPos = '0px -20px';
                }
                else if (score >= 80) {
                    label = this.strongLabel;
                    meterPos = '0px -30px';
                }
            }
            if (!this.panel || !DomHandler.hasClass(this.panel, 'p-connected-overlay-visible')) {
                this.showOverlay();
            }
            this.renderer.setStyle(this.meter, 'backgroundPosition', meterPos);
            this.info.textContent = label;
        }
    }
    testStrength(str) {
        let grade = 0;
        let val;
        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
        grade *= str.length / 8;
        return grade > 100 ? 100 : grade;
    }
    normalize(x, y) {
        let diff = x - y;
        if (diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y / 4));
    }
    get disabled() {
        return this.el.nativeElement.disabled;
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
                if (DomHandler.hasClass(this.panel, 'p-connected-overlay-visible')) {
                    this.hideOverlay();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    bindDocumentResizeListener() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.documentResizeListener) {
                const window = this.document.defaultView;
                this.documentResizeListener = this.renderer.listen(window, 'resize', this.onWindowResize.bind(this));
            }
        }
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            this.documentResizeListener();
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        if (!DomHandler.isTouchDevice()) {
            this.hideOverlay();
        }
    }
    ngOnDestroy() {
        if (this.panel) {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.unbindDocumentResizeListener();
            this.renderer.removeChild(this.document.body, this.panel);
            this.panel = null;
            this.meter = null;
            this.info = null;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: PasswordDirective, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: PasswordDirective, selector: "[pPassword]", inputs: { promptLabel: "promptLabel", weakLabel: "weakLabel", mediumLabel: "mediumLabel", strongLabel: "strongLabel", feedback: "feedback", showPassword: "showPassword" }, host: { listeners: { "input": "onInput($event)", "focus": "onFocus()", "blur": "onBlur()", "keyup": "onKeyup($event)" }, properties: { "class.p-filled": "filled" }, classAttribute: "p-inputtext p-component p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: PasswordDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[pPassword]',
                    host: {
                        class: 'p-inputtext p-component p-element',
                        '[class.p-filled]': 'filled'
                    }
                }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { promptLabel: [{
                type: Input
            }], weakLabel: [{
                type: Input
            }], mediumLabel: [{
                type: Input
            }], strongLabel: [{
                type: Input
            }], feedback: [{
                type: Input
            }], showPassword: [{
                type: Input
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onKeyup: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
class MapperPipe {
    transform(value, mapper, ...args) {
        return mapper(value, ...args);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MapperPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: MapperPipe, name: "mapper" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MapperPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'mapper',
                    pure: true
                }]
        }] });
const Password_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Password),
    multi: true
};
/**
 * Password displays strength indicator for password fields.
 * @group Components
 */
class Password {
    document;
    platformId;
    renderer;
    cd;
    config;
    el;
    overlayService;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    label;
    /**
     * Indicates whether the component is disabled or not.
     * @group Props
     */
    disabled;
    /**
     * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    promptLabel;
    /**
     * Regex value for medium regex.
     * @group Props
     */
    mediumRegex = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';
    /**
     * Regex value for strong regex.
     * @group Props
     */
    strongRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';
    /**
     * Text for a weak password. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    weakLabel;
    /**
     * Text for a medium password. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    mediumLabel;
    /**
     * specifies the maximum number of characters allowed in the input element.
     * @group Props
     */
    maxLength;
    /**
     * Text for a strong password. Defaults to PrimeNG I18N API configuration.
     * @group Props
     */
    strongLabel;
    /**
     * Identifier of the accessible input element.
     * @group Props
     */
    inputId;
    /**
     * Whether to show the strength indicator or not.
     * @group Props
     */
    feedback = true;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo;
    /**
     * Whether to show an icon to display the password as plain text.
     * @group Props
     */
    toggleMask;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * Specify automated assistance in filling out password by browser.
     * @group Props
     */
    autocomplete;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    /**
     * Callback to invoke when clear button is clicked.
     * @group Emits
     */
    onClear = new EventEmitter();
    input;
    contentTemplate;
    footerTemplate;
    headerTemplate;
    clearIconTemplate;
    hideIconTemplate;
    showIconTemplate;
    templates;
    overlayVisible = false;
    meter;
    infoText;
    focused = false;
    unmasked = false;
    mediumCheckRegExp;
    strongCheckRegExp;
    resizeListener;
    scrollHandler;
    overlay;
    value = null;
    onModelChange = () => { };
    onModelTouched = () => { };
    translationSubscription;
    constructor(document, platformId, renderer, cd, config, el, overlayService) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.cd = cd;
        this.config = config;
        this.el = el;
        this.overlayService = overlayService;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'clearicon':
                    this.clearIconTemplate = item.template;
                    break;
                case 'hideicon':
                    this.hideIconTemplate = item.template;
                    break;
                case 'showicon':
                    this.showIconTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    ngOnInit() {
        this.infoText = this.promptText();
        this.mediumCheckRegExp = new RegExp(this.mediumRegex);
        this.strongCheckRegExp = new RegExp(this.strongRegex);
        this.translationSubscription = this.config.translationObserver.subscribe(() => {
            this.updateUI(this.value || '');
        });
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
                this.appendContainer();
                this.alignOverlay();
                this.bindScrollListener();
                this.bindResizeListener();
                break;
            case 'void':
                this.unbindScrollListener();
                this.unbindResizeListener();
                this.overlay = null;
                break;
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                ZIndexUtils.clear(event.element);
                break;
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                this.renderer.appendChild(this.document.body, this.overlay);
            else
                this.document.getElementById(this.appendTo).appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.appendTo) {
            this.overlay.style.minWidth = DomHandler.getOuterWidth(this.input.nativeElement) + 'px';
            DomHandler.absolutePosition(this.overlay, this.input.nativeElement);
        }
        else {
            DomHandler.relativePosition(this.overlay, this.input.nativeElement);
        }
    }
    onInput(event) {
        this.value = event.target.value;
        this.onModelChange(this.value);
    }
    onInputFocus(event) {
        this.focused = true;
        if (this.feedback) {
            this.overlayVisible = true;
        }
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        if (this.feedback) {
            this.overlayVisible = false;
        }
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onKeyUp(event) {
        if (this.feedback) {
            let value = event.target.value;
            this.updateUI(value);
            if (event.code === 'Escape') {
                this.overlayVisible && (this.overlayVisible = false);
                return;
            }
            if (!this.overlayVisible) {
                this.overlayVisible = true;
            }
        }
    }
    updateUI(value) {
        let label = null;
        let meter = null;
        switch (this.testStrength(value)) {
            case 1:
                label = this.weakText();
                meter = {
                    strength: 'weak',
                    width: '33.33%'
                };
                break;
            case 2:
                label = this.mediumText();
                meter = {
                    strength: 'medium',
                    width: '66.66%'
                };
                break;
            case 3:
                label = this.strongText();
                meter = {
                    strength: 'strong',
                    width: '100%'
                };
                break;
            default:
                label = this.promptText();
                meter = null;
                break;
        }
        this.meter = meter;
        this.infoText = label;
    }
    onMaskToggle() {
        this.unmasked = !this.unmasked;
    }
    onOverlayClick(event) {
        this.overlayService.add({
            originalEvent: event,
            target: this.el.nativeElement
        });
    }
    testStrength(str) {
        let level = 0;
        if (this.strongCheckRegExp.test(str))
            level = 3;
        else if (this.mediumCheckRegExp.test(str))
            level = 2;
        else if (str.length)
            level = 1;
        return level;
    }
    writeValue(value) {
        if (value === undefined)
            this.value = null;
        else
            this.value = value;
        if (this.feedback)
            this.updateUI(this.value || '');
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    bindScrollListener() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
                    if (this.overlayVisible) {
                        this.overlayVisible = false;
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        }
    }
    bindResizeListener() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.resizeListener) {
                const window = this.document.defaultView;
                this.resizeListener = this.renderer.listen(window, 'resize', () => {
                    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
                        this.overlayVisible = false;
                    }
                });
            }
        }
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    unbindResizeListener() {
        if (this.resizeListener) {
            this.resizeListener();
            this.resizeListener = null;
        }
    }
    containerClass(toggleMask) {
        return { 'p-password p-component p-inputwrapper': true, 'p-input-icon-right': toggleMask };
    }
    inputFieldClass(disabled) {
        return { 'p-password-input': true, 'p-disabled': disabled };
    }
    strengthClass(meter) {
        return `p-password-strength ${meter ? meter.strength : ''}`;
    }
    filled() {
        return this.value != null && this.value.toString().length > 0;
    }
    promptText() {
        return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
    }
    weakText() {
        return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
    }
    mediumText() {
        return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
    }
    strongText() {
        return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
    }
    restoreAppend() {
        if (this.overlay && this.appendTo) {
            if (this.appendTo === 'body')
                this.renderer.removeChild(this.document.body, this.overlay);
            else
                this.document.getElementById(this.appendTo).removeChild(this.overlay);
        }
    }
    inputType(unmasked) {
        return unmasked ? 'text' : 'password';
    }
    getTranslation(option) {
        return this.config.getTranslation(option);
    }
    clear() {
        this.value = null;
        this.onModelChange(this.value);
        this.writeValue(this.value);
        this.onClear.emit();
    }
    ngOnDestroy() {
        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
        this.restoreAppend();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        if (this.translationSubscription) {
            this.translationSubscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: Password, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }, { token: i0.ElementRef }, { token: i1.OverlayService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: Password, selector: "p-password", inputs: { ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", label: "label", disabled: "disabled", promptLabel: "promptLabel", mediumRegex: "mediumRegex", strongRegex: "strongRegex", weakLabel: "weakLabel", mediumLabel: "mediumLabel", maxLength: "maxLength", strongLabel: "strongLabel", inputId: "inputId", feedback: "feedback", appendTo: "appendTo", toggleMask: "toggleMask", inputStyleClass: "inputStyleClass", styleClass: "styleClass", style: "style", inputStyle: "inputStyle", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autocomplete: "autocomplete", placeholder: "placeholder", showClear: "showClear" }, outputs: { onFocus: "onFocus", onBlur: "onBlur", onClear: "onClear" }, host: { properties: { "class.p-inputwrapper-filled": "filled()", "class.p-inputwrapper-focus": "focused", "class.p-password-clearable": "showClear", "class.p-password-mask": "toggleMask" }, classAttribute: "p-element p-inputwrapper" }, providers: [Password_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: `
        <div [ngClass]="toggleMask | mapper : containerClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                pInputText
                [ngClass]="disabled | mapper : inputFieldClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper : inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-password-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon *ngIf="!hideIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                [ngClass]="'p-password-panel p-component'"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                        <div [ngClass]="meter | mapper : strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                    </div>
                    <div class="p-password-info" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password .p-icon{cursor:pointer}.p-password-clearable.p-password-mask .p-password-clear-icon{margin-top:unset}.p-password-clearable{position:relative}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i3.InputText), selector: "[pInputText]" }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }, { kind: "component", type: i0.forwardRef(() => EyeSlashIcon), selector: "EyeSlashIcon" }, { kind: "component", type: i0.forwardRef(() => EyeIcon), selector: "EyeIcon" }, { kind: "pipe", type: i0.forwardRef(() => MapperPipe), name: "mapper" }], animations: [trigger('overlayAnimation', [transition(':enter', [style({ opacity: 0, transform: 'scaleY(0.8)' }), animate('{{showTransitionParams}}')]), transition(':leave', [animate('{{hideTransitionParams}}', style({ opacity: 0 }))])])], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: Password, decorators: [{
            type: Component,
            args: [{ selector: 'p-password', template: `
        <div [ngClass]="toggleMask | mapper : containerClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                pInputText
                [ngClass]="disabled | mapper : inputFieldClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper : inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-password-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon *ngIf="!hideIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                [ngClass]="'p-password-panel p-component'"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                        <div [ngClass]="meter | mapper : strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                    </div>
                    <div class="p-password-info" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `, animations: [trigger('overlayAnimation', [transition(':enter', [style({ opacity: 0, transform: 'scaleY(0.8)' }), animate('{{showTransitionParams}}')]), transition(':leave', [animate('{{hideTransitionParams}}', style({ opacity: 0 }))])])], host: {
                        class: 'p-element p-inputwrapper',
                        '[class.p-inputwrapper-filled]': 'filled()',
                        '[class.p-inputwrapper-focus]': 'focused',
                        '[class.p-password-clearable]': 'showClear',
                        '[class.p-password-mask]': 'toggleMask'
                    }, providers: [Password_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["@layer primeng{.p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password .p-icon{cursor:pointer}.p-password-clearable.p-password-mask .p-password-clear-icon{margin-top:unset}.p-password-clearable{position:relative}}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }, { type: i0.ElementRef }, { type: i1.OverlayService }], propDecorators: { ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], promptLabel: [{
                type: Input
            }], mediumRegex: [{
                type: Input
            }], strongRegex: [{
                type: Input
            }], weakLabel: [{
                type: Input
            }], mediumLabel: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], strongLabel: [{
                type: Input
            }], inputId: [{
                type: Input
            }], feedback: [{
                type: Input
            }], appendTo: [{
                type: Input
            }], toggleMask: [{
                type: Input
            }], inputStyleClass: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], inputStyle: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], showClear: [{
                type: Input
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onClear: [{
                type: Output
            }], input: [{
                type: ViewChild,
                args: ['input']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class PasswordModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: PasswordModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: PasswordModule, declarations: [PasswordDirective, Password, MapperPipe], imports: [CommonModule, InputTextModule, TimesIcon, EyeSlashIcon, EyeIcon], exports: [PasswordDirective, Password, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: PasswordModule, imports: [CommonModule, InputTextModule, TimesIcon, EyeSlashIcon, EyeIcon, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: PasswordModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, InputTextModule, TimesIcon, EyeSlashIcon, EyeIcon],
                    exports: [PasswordDirective, Password, SharedModule],
                    declarations: [PasswordDirective, Password, MapperPipe]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MapperPipe, Password, PasswordDirective, PasswordModule, Password_VALUE_ACCESSOR };
//# sourceMappingURL=primeng-password.mjs.map
