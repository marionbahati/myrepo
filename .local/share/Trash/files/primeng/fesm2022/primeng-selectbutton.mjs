import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, ContentChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import * as i2 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import { ObjectUtils } from 'primeng/utils';

const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectButton),
    multi: true
};
/**
 * SelectButton is used to choose single or multiple items from a list using buttons.
 * @group Components
 */
class SelectButton {
    cd;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Name of the label field of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Name of the value field of an option.
     * @group Props
     */
    optionValue;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether selection can be cleared.
     * @group Props
     */
    unselectable = false;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * When specified, allows selecting multiple values.
     * @group Props
     */
    multiple;
    /**
     * Whether selection can not be cleared.
     * @group Props
     */
    allowEmpty = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Callback to invoke on input click.
     * @param {SelectButtonOptionClickEvent} event - Custom click event.
     * @group Emits
     */
    onOptionClick = new EventEmitter();
    /**
     * Callback to invoke on selection change.
     * @param {SelectButtonChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    container;
    itemTemplate;
    get selectButtonTemplate() {
        return this.itemTemplate?.template;
    }
    get equalityKey() {
        return this.optionValue ? null : this.dataKey;
    }
    value;
    onModelChange = () => { };
    onModelTouched = () => { };
    focusedIndex = 0;
    constructor(cd) {
        this.cd = cd;
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === undefined ? option : option.value;
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option.disabled !== undefined ? option.disabled : false;
    }
    writeValue(value) {
        this.value = value;
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
    onOptionSelect(event, option, index) {
        if (this.disabled || this.isOptionDisabled(option)) {
            return;
        }
        let selected = this.isSelected(option);
        if (selected && this.unselectable) {
            return;
        }
        let optionValue = this.getOptionValue(option);
        let newValue;
        if (this.multiple) {
            if (selected)
                newValue = this.value.filter((val) => !ObjectUtils.equals(val, optionValue, this.equalityKey));
            else
                newValue = this.value ? [...this.value, optionValue] : [optionValue];
        }
        else {
            if (selected && !this.allowEmpty) {
                return;
            }
            newValue = selected ? null : optionValue;
        }
        this.focusedIndex = index;
        this.value = newValue;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
    }
    onKeyDown(event, option, index) {
        switch (event.code) {
            case 'Space': {
                this.onOptionSelect(event, option, index);
                event.preventDefault();
                break;
            }
            case 'ArrowDown':
            case 'ArrowRight': {
                this.changeTabIndexes(event, 'next');
                event.preventDefault();
                break;
            }
            case 'ArrowUp':
            case 'ArrowLeft': {
                this.changeTabIndexes(event, 'prev');
                event.preventDefault();
                break;
            }
            default:
                //no op
                break;
        }
    }
    changeTabIndexes(event, direction) {
        let firstTabableChild, index;
        for (let i = 0; i <= this.container.nativeElement.children.length - 1; i++) {
            if (this.container.nativeElement.children[i].getAttribute('tabindex') === '0')
                firstTabableChild = { elem: this.container.nativeElement.children[i], index: i };
        }
        if (direction === 'prev') {
            if (firstTabableChild.index === 0)
                index = this.container.nativeElement.children.length - 1;
            else
                index = firstTabableChild.index - 1;
        }
        else {
            if (firstTabableChild.index === this.container.nativeElement.children.length - 1)
                index = 0;
            else
                index = firstTabableChild.index + 1;
        }
        this.focusedIndex = index;
        this.container.nativeElement.children[index].focus();
    }
    onFocus(event, index) {
        this.focusedIndex = index;
    }
    onBlur() {
        this.onModelTouched();
    }
    removeOption(option) {
        this.value = this.value.filter((val) => !ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
    }
    isSelected(option) {
        let selected = false;
        const optionValue = this.getOptionValue(option);
        if (this.multiple) {
            if (this.value && Array.isArray(this.value)) {
                for (let val of this.value) {
                    if (ObjectUtils.equals(val, optionValue, this.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.getOptionValue(option), this.value, this.equalityKey);
        }
        return selected;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SelectButton, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: SelectButton, selector: "p-selectButton", inputs: { options: "options", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", unselectable: "unselectable", tabindex: "tabindex", multiple: "multiple", allowEmpty: "allowEmpty", style: "style", styleClass: "styleClass", ariaLabelledBy: "ariaLabelledBy", disabled: "disabled", dataKey: "dataKey" }, outputs: { onOptionClick: "onOptionClick", onChange: "onChange" }, host: { classAttribute: "p-element" }, providers: [SELECTBUTTON_VALUE_ACCESSOR], queries: [{ propertyName: "itemTemplate", first: true, predicate: PrimeTemplate, descendants: true }], viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true }], ngImport: i0, template: `
        <div #container [ngClass]="'p-selectbutton p-buttonset p-component'" [ngStyle]="style" [class]="styleClass" role="group" [attr.aria-labelledby]="ariaLabelledBy" [attr.data-pc-name]="'selectbutton'" [attr.data-pc-section]="'root'">
            <div
                *ngFor="let option of options; let i = index"
                pRipple
                [attr.tabindex]="i === focusedIndex ? '0' : '-1'"
                [attr.aria-label]="option.label"
                [role]="multiple ? 'checkbox' : 'radio'"
                [attr.aria-checked]="isSelected(option)"
                [attr.aria-disabled]="optionDisabled"
                class="p-button p-component"
                [class]="option.styleClass"
                [ngClass]="{ 'p-highlight': isSelected(option), 'p-disabled': disabled || isOptionDisabled(option), 'p-button-icon-only': option.icon && !getOptionLabel(option) }"
                [attr.aria-pressed]="isSelected(option)"
                (click)="onOptionSelect($event, option, i)"
                (keydown)="onKeyDown($event, option, i)"
                [attr.title]="option.title"
                (focus)="onFocus($event, i)"
                (blur)="onBlur()"
                [attr.aria-labelledby]="this.getOptionLabel(option)"
                [attr.data-pc-section]="'button'"
            >
                <ng-container *ngIf="!itemTemplate; else customcontent">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="option.icon" *ngIf="option.icon" [attr.data-pc-section]="'icon'"></span>
                    <span class="p-button-label" [attr.data-pc-section]="'label'">{{ getOptionLabel(option) }}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="selectButtonTemplate; context: { $implicit: option, index: i }"></ng-container>
                </ng-template>
            </div>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default;pointer-events:none}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-button-group .p-button{margin:0}.p-button-group .p-button:focus,.p-button-group p-button:focus .p-button,.p-buttonset .p-button:focus,.p-buttonset p-button:focus .p-button{position:relative;z-index:1}.p-button-group .p-button:not(:last-child),.p-button-group .p-button:not(:last-child):hover,.p-button-group p-button:not(:last-child) .p-button,.p-button-group p-button:not(:last-child) .p-button:hover,.p-buttonset .p-button:not(:last-child),.p-buttonset .p-button:not(:last-child):hover,.p-buttonset p-button:not(:last-child) .p-button,.p-buttonset p-button:not(:last-child) .p-button:hover{border-right:0 none}.p-button-group .p-button:not(:first-of-type):not(:last-of-type),.p-button-group p-button:not(:first-of-type):not(:last-of-type) .p-button,.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button{border-radius:0}.p-button-group .p-button:first-of-type:not(:only-of-type),.p-button-group p-button:first-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:first-of-type:not(:only-of-type),.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group .p-button:last-of-type:not(:only-of-type),.p-button-group p-button:last-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:last-of-type:not(:only-of-type),.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right] spinnericon{order:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.Ripple, selector: "[pRipple]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SelectButton, decorators: [{
            type: Component,
            args: [{ selector: 'p-selectButton', template: `
        <div #container [ngClass]="'p-selectbutton p-buttonset p-component'" [ngStyle]="style" [class]="styleClass" role="group" [attr.aria-labelledby]="ariaLabelledBy" [attr.data-pc-name]="'selectbutton'" [attr.data-pc-section]="'root'">
            <div
                *ngFor="let option of options; let i = index"
                pRipple
                [attr.tabindex]="i === focusedIndex ? '0' : '-1'"
                [attr.aria-label]="option.label"
                [role]="multiple ? 'checkbox' : 'radio'"
                [attr.aria-checked]="isSelected(option)"
                [attr.aria-disabled]="optionDisabled"
                class="p-button p-component"
                [class]="option.styleClass"
                [ngClass]="{ 'p-highlight': isSelected(option), 'p-disabled': disabled || isOptionDisabled(option), 'p-button-icon-only': option.icon && !getOptionLabel(option) }"
                [attr.aria-pressed]="isSelected(option)"
                (click)="onOptionSelect($event, option, i)"
                (keydown)="onKeyDown($event, option, i)"
                [attr.title]="option.title"
                (focus)="onFocus($event, i)"
                (blur)="onBlur()"
                [attr.aria-labelledby]="this.getOptionLabel(option)"
                [attr.data-pc-section]="'button'"
            >
                <ng-container *ngIf="!itemTemplate; else customcontent">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="option.icon" *ngIf="option.icon" [attr.data-pc-section]="'icon'"></span>
                    <span class="p-button-label" [attr.data-pc-section]="'label'">{{ getOptionLabel(option) }}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="selectButtonTemplate; context: { $implicit: option, index: i }"></ng-container>
                </ng-template>
            </div>
        </div>
    `, providers: [SELECTBUTTON_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default;pointer-events:none}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-button-group .p-button{margin:0}.p-button-group .p-button:focus,.p-button-group p-button:focus .p-button,.p-buttonset .p-button:focus,.p-buttonset p-button:focus .p-button{position:relative;z-index:1}.p-button-group .p-button:not(:last-child),.p-button-group .p-button:not(:last-child):hover,.p-button-group p-button:not(:last-child) .p-button,.p-button-group p-button:not(:last-child) .p-button:hover,.p-buttonset .p-button:not(:last-child),.p-buttonset .p-button:not(:last-child):hover,.p-buttonset p-button:not(:last-child) .p-button,.p-buttonset p-button:not(:last-child) .p-button:hover{border-right:0 none}.p-button-group .p-button:not(:first-of-type):not(:last-of-type),.p-button-group p-button:not(:first-of-type):not(:last-of-type) .p-button,.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button{border-radius:0}.p-button-group .p-button:first-of-type:not(:only-of-type),.p-button-group p-button:first-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:first-of-type:not(:only-of-type),.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group .p-button:last-of-type:not(:only-of-type),.p-button-group p-button:last-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:last-of-type:not(:only-of-type),.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right] spinnericon{order:1}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { options: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], unselectable: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], multiple: [{
                type: Input
            }], allowEmpty: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], disabled: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], onOptionClick: [{
                type: Output
            }], onChange: [{
                type: Output
            }], container: [{
                type: ViewChild,
                args: ['container']
            }], itemTemplate: [{
                type: ContentChild,
                args: [PrimeTemplate]
            }] } });
class SelectButtonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SelectButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: SelectButtonModule, declarations: [SelectButton], imports: [CommonModule, RippleModule, SharedModule], exports: [SelectButton, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SelectButtonModule, imports: [CommonModule, RippleModule, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SelectButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RippleModule, SharedModule],
                    exports: [SelectButton, SharedModule],
                    declarations: [SelectButton]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule };
//# sourceMappingURL=primeng-selectbutton.mjs.map
