import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, Injector, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PrimeTemplate } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';
import { InputNumberInputEvent } from './inputnumber.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/inputtext";
import * as i3 from "primeng/button";
import * as i4 from "primeng/icons/times";
import * as i5 from "primeng/icons/angleup";
import * as i6 from "primeng/icons/angledown";
import * as i7 from "primeng/api";
export declare const INPUTNUMBER_VALUE_ACCESSOR: any;
/**
 * InputNumber is an input component to provide numerical input.
 * @group Components
 */
export declare class InputNumber implements OnInit, AfterContentInit, OnChanges, ControlValueAccessor {
    private document;
    el: ElementRef;
    private cd;
    private readonly injector;
    /**
     * Displays spinner buttons.
     * @group Props
     */
    showButtons: boolean;
    /**
     * Whether to format the value.
     * @group Props
     */
    format: boolean;
    /**
     * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
     * @group Props
     */
    buttonLayout: string;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder: string | undefined;
    /**
     * Size of the input field.
     * @group Props
     */
    size: number | undefined;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength: number | undefined;
    /**
     * Specifies tab order of the element.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Title text of the input text.
     * @group Props
     */
    title: string | undefined;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Used to indicate that user input is required on an element before a form can be submitted.
     * @group Props
     */
    ariaRequired: boolean | undefined;
    /**
     * Name of the input field.
     * @group Props
     */
    name: string | undefined;
    /**
     * Indicates that whether the input field is required.
     * @group Props
     */
    required: boolean | undefined;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete: string | undefined;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min: number | undefined;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max: number | undefined;
    /**
     * Style class of the increment button.
     * @group Props
     */
    incrementButtonClass: string | undefined;
    /**
     * Style class of the decrement button.
     * @group Props
     */
    decrementButtonClass: string | undefined;
    /**
     * Style class of the increment button.
     * @group Props
     */
    incrementButtonIcon: string | undefined;
    /**
     * Style class of the decrement button.
     * @group Props
     */
    decrementButtonIcon: string | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    readonly: boolean;
    /**
     * Step factor to increment/decrement the value.
     * @group Props
     */
    step: number;
    /**
     * Determines whether the input field is empty.
     * @group Props
     */
    allowEmpty: boolean;
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    locale: string | undefined;
    /**
     * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
     * @group Props
     */
    localeMatcher: string | undefined;
    /**
     * Defines the behavior of the component, valid values are "decimal" and "currency".
     * @group Props
     */
    mode: string;
    /**
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
     * @group Props
     */
    currency: string | undefined;
    /**
     * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
     * @group Props
     */
    currencyDisplay: string | undefined;
    /**
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
     * @group Props
     */
    useGrouping: boolean;
    /**
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
     * @group Props
     */
    minFractionDigits: number | undefined;
    /**
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
     * @group Props
     */
    maxFractionDigits: number | undefined;
    /**
     * Text to display before the value.
     * @group Props
     */
    prefix: string | undefined;
    /**
     * Text to display after the value.
     * @group Props
     */
    suffix: string | undefined;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle: any;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass: string | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear: boolean;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    get disabled(): boolean | undefined;
    set disabled(disabled: boolean | undefined);
    /**
     * Callback to invoke on input.
     * @param {InputNumberInputEvent} event - Custom input event.
     * @group Emits
     */
    onInput: EventEmitter<InputNumberInputEvent>;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus: EventEmitter<Event>;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur: EventEmitter<Event>;
    /**
     * Callback to invoke on input key press.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    onKeyDown: EventEmitter<KeyboardEvent>;
    /**
     * Callback to invoke when clear token is clicked.
     * @group Emits
     */
    onClear: EventEmitter<void>;
    input: ElementRef<HTMLInputElement>;
    templates: QueryList<PrimeTemplate>;
    clearIconTemplate: Nullable<TemplateRef<any>>;
    incrementButtonIconTemplate: Nullable<TemplateRef<any>>;
    decrementButtonIconTemplate: Nullable<TemplateRef<any>>;
    value: Nullable<number>;
    onModelChange: Function;
    onModelTouched: Function;
    focused: Nullable<boolean>;
    initialized: Nullable<boolean>;
    groupChar: string;
    prefixChar: string;
    suffixChar: string;
    isSpecialChar: Nullable<boolean>;
    timer: any;
    lastValue: Nullable<string>;
    _numeral: any;
    numberFormat: any;
    _decimal: any;
    _decimalChar: string;
    _group: any;
    _minusSign: any;
    _currency: Nullable<RegExp | string>;
    _prefix: Nullable<RegExp>;
    _suffix: Nullable<RegExp>;
    _index: number | any;
    _disabled: boolean | undefined;
    private ngControl;
    constructor(document: Document, el: ElementRef, cd: ChangeDetectorRef, injector: Injector);
    ngOnChanges(simpleChange: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    getOptions(): {
        localeMatcher: string;
        style: string;
        currency: string;
        currencyDisplay: string;
        useGrouping: boolean;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
    };
    constructParser(): void;
    updateConstructParser(): void;
    escapeRegExp(text: string): string;
    getDecimalExpression(): RegExp;
    getDecimalChar(): string;
    getGroupingExpression(): RegExp;
    getMinusSignExpression(): RegExp;
    getCurrencyExpression(): RegExp;
    getPrefixExpression(): RegExp;
    getSuffixExpression(): RegExp;
    formatValue(value: any): any;
    parseValue(text: any): any;
    repeat(event: Event, interval: number | null, dir: number): void;
    spin(event: Event, dir: number): void;
    clear(): void;
    onUpButtonMouseDown(event: MouseEvent): void;
    onUpButtonMouseUp(): void;
    onUpButtonMouseLeave(): void;
    onUpButtonKeyDown(event: KeyboardEvent): void;
    onUpButtonKeyUp(): void;
    onDownButtonMouseDown(event: MouseEvent): void;
    onDownButtonMouseUp(): void;
    onDownButtonMouseLeave(): void;
    onDownButtonKeyUp(): void;
    onDownButtonKeyDown(event: KeyboardEvent): void;
    onUserInput(event: Event): void;
    onInputKeyDown(event: KeyboardEvent): void;
    onInputKeyPress(event: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
    allowMinusSign(): boolean;
    isMinusSign(char: string): boolean;
    isDecimalSign(char: string): boolean;
    isDecimalMode(): boolean;
    getDecimalCharIndexes(val: string): {
        decimalCharIndex: number;
        decimalCharIndexWithoutPrefix: number;
    };
    getCharIndexes(val: string): {
        decimalCharIndex: number;
        minusCharIndex: number;
        suffixCharIndex: number;
        currencyCharIndex: number;
    };
    insert(event: Event, text: string, sign?: {
        isDecimalSign: boolean;
        isMinusSign: boolean;
    }): void;
    insertText(value: string, text: string, start: number, end: number): any;
    deleteRange(value: string, start: number, end: number): any;
    initCursor(): any;
    onInputClick(): void;
    isNumeralChar(char: string): boolean;
    resetRegex(): void;
    updateValue(event: Event, valueStr: Nullable<string>, insertedValueStr: Nullable<string>, operation: Nullable<string>): void;
    handleOnInput(event: Event, currentValue: string, newValue: any): void;
    isValueChanged(currentValue: string, newValue: string): boolean;
    validateValue(value: number | string): string | number;
    updateInput(value: any, insertedValueStr: Nullable<string>, operation: Nullable<string>, valueStr: Nullable<string>): void;
    concatValues(val1: string, val2: string): string;
    getDecimalLength(value: string): number;
    onInputFocus(event: Event): void;
    onInputBlur(event: Event): void;
    formattedValue(): any;
    updateModel(event: Event, value: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    get filled(): boolean;
    clearTimer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputNumber, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputNumber, "p-inputNumber", never, { "showButtons": { "alias": "showButtons"; "required": false; }; "format": { "alias": "format"; "required": false; }; "buttonLayout": { "alias": "buttonLayout"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "size": { "alias": "size"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "title": { "alias": "title"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaRequired": { "alias": "ariaRequired"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "incrementButtonClass": { "alias": "incrementButtonClass"; "required": false; }; "decrementButtonClass": { "alias": "decrementButtonClass"; "required": false; }; "incrementButtonIcon": { "alias": "incrementButtonIcon"; "required": false; }; "decrementButtonIcon": { "alias": "decrementButtonIcon"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "step": { "alias": "step"; "required": false; }; "allowEmpty": { "alias": "allowEmpty"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "localeMatcher": { "alias": "localeMatcher"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "currencyDisplay": { "alias": "currencyDisplay"; "required": false; }; "useGrouping": { "alias": "useGrouping"; "required": false; }; "minFractionDigits": { "alias": "minFractionDigits"; "required": false; }; "maxFractionDigits": { "alias": "maxFractionDigits"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "inputStyle": { "alias": "inputStyle"; "required": false; }; "inputStyleClass": { "alias": "inputStyleClass"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onInput": "onInput"; "onFocus": "onFocus"; "onBlur": "onBlur"; "onKeyDown": "onKeyDown"; "onClear": "onClear"; }, ["templates"], never, false, never>;
}
export declare class InputNumberModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputNumberModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputNumberModule, [typeof InputNumber], [typeof i1.CommonModule, typeof i2.InputTextModule, typeof i3.ButtonModule, typeof i4.TimesIcon, typeof i5.AngleUpIcon, typeof i6.AngleDownIcon], [typeof InputNumber, typeof i7.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputNumberModule>;
}
