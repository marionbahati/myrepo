import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChild, ContentChildren, effect, EventEmitter, forwardRef, Input, NgModule, Output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Footer, Header, PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { OverlayModule } from 'primeng/overlay';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { TooltipModule } from 'primeng/tooltip';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { CheckIcon } from 'primeng/icons/check';
import { SearchIcon } from 'primeng/icons/search';
import { TimesCircleIcon } from 'primeng/icons/timescircle';
import { TimesIcon } from 'primeng/icons/times';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
import * as i3 from "primeng/api";
import * as i4 from "primeng/overlay";
import * as i5 from "primeng/tooltip";
import * as i6 from "primeng/scroller";
export const MULTISELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelect),
    multi: true
};
export class MultiSelectItem {
    id;
    option;
    selected;
    label;
    disabled;
    itemSize;
    focused;
    ariaPosInset;
    ariaSetSize;
    template;
    checkIconTemplate;
    onClick = new EventEmitter();
    onMouseEnter = new EventEmitter();
    onOptionClick(event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option,
            selected: this.selected
        });
        event.stopPropagation();
    }
    onOptionMouseEnter(event) {
        this.onMouseEnter.emit({
            originalEvent: event,
            option: this.option,
            selected: this.selected
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelectItem, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: MultiSelectItem, selector: "p-multiSelectItem", inputs: { id: "id", option: "option", selected: "selected", label: "label", disabled: "disabled", itemSize: "itemSize", focused: "focused", ariaPosInset: "ariaPosInset", ariaSetSize: "ariaSetSize", template: "template", checkIconTemplate: "checkIconTemplate" }, outputs: { onClick: "onClick", onMouseEnter: "onMouseEnter" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <li
            pRipple
            [ngStyle]="{ height: itemSize + 'px' }"
            class="p-multiselect-item"
            [ngClass]="{ 'p-multiselect-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
            [id]="id"
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
        >
            <div class="p-checkbox p-component">
                <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': selected }" [attr.aria-checked]="selected">
                    <ng-container *ngIf="selected">
                        <CheckIcon *ngIf="!checkIconTemplate" [styleClass]="'p-checkbox-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i1.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i2.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelectItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-multiSelectItem',
                    template: `
        <li
            pRipple
            [ngStyle]="{ height: itemSize + 'px' }"
            class="p-multiselect-item"
            [ngClass]="{ 'p-multiselect-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
            [id]="id"
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
        >
            <div class="p-checkbox p-component">
                <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': selected }" [attr.aria-checked]="selected">
                    <ng-container *ngIf="selected">
                        <CheckIcon *ngIf="!checkIconTemplate" [styleClass]="'p-checkbox-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], propDecorators: { id: [{
                type: Input
            }], option: [{
                type: Input
            }], selected: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], focused: [{
                type: Input
            }], ariaPosInset: [{
                type: Input
            }], ariaSetSize: [{
                type: Input
            }], template: [{
                type: Input
            }], checkIconTemplate: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onMouseEnter: [{
                type: Output
            }] } });
/**
 * MultiSelect is used to select multiple items from a collection.
 * @group Components
 */
export class MultiSelect {
    el;
    renderer;
    cd;
    zone;
    filterService;
    config;
    overlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * When specified, displays an input field to filter the items on keyup.
     * @group Props
     */
    filter = true;
    /**
     * Defines placeholder of the filter input.
     * @group Props
     */
    filterPlaceHolder;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Specifies the visibility of the options panel.
     * @group Props
     */
    overlayVisible;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Whether to show labels of selected item labels or use default label.
     * @group Props
     * @defaultValue true
     */
    set displaySelectedLabel(val) {
        this._displaySelectedLabel = val;
    }
    get displaySelectedLabel() {
        return this._displaySelectedLabel;
    }
    /**
     * Decides how many selected item labels to show at most.
     * @group Props
     * @defaultValue 3
     */
    set maxSelectedLabels(val) {
        this._maxSelectedLabels = val;
    }
    get maxSelectedLabels() {
        return this._maxSelectedLabels;
    }
    /**
     * Decides how many selected item labels to show at most.
     * @group Props
     */
    selectionLimit;
    /**
     * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
     * @group Props
     */
    selectedItemsLabel;
    /**
     * Whether to show the checkbox at header to toggle all items at once.
     * @group Props
     */
    showToggleAll = true;
    /**
     * Text to display when filtering does not return any results.
     * @group Props
     */
    emptyFilterMessage = '';
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage = '';
    /**
     * Clears the filter value when hiding the dropdown.
     * @group Props
     */
    resetFilterOnHide = false;
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    dropdownIcon;
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
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Whether to show the header.
     * @group Props
     */
    showHeader = true;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy;
    /**
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    scrollHeight = '200px';
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    ariaFilterLabel;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode = 'contains';
    /**
     * Advisory information to display in a tooltip on hover.
     * @group Props
     */
    tooltip = '';
    /**
     * Position of the tooltip.
     * @group Props
     */
    tooltipPosition = 'right';
    /**
     * Type of CSS position.
     * @group Props
     */
    tooltipPositionStyle = 'absolute';
    /**
     * Style class of the tooltip.
     * @group Props
     */
    tooltipStyleClass;
    /**
     * Applies focus to the filter element when the overlay is shown.
     * @group Props
     */
    autofocusFilter = true;
    /**
     * Defines how the selected items are displayed.
     * @group Props
     */
    display = 'comma';
    /**
     * Defines the autocomplete is active.
     * @group Props
     */
    autocomplete = 'off';
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * @deprecated since v14.2.0, use overlayOptions property instead.
     * Whether to automatically manage layering.
     * @group Props
     */
    get autoZIndex() {
        return this._autoZIndex;
    }
    set autoZIndex(val) {
        this._autoZIndex = val;
        console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * @deprecated since v14.2.0, use overlayOptions property instead.
     * Base zIndex value to use in layering.
     * @group Props
     */
    get baseZIndex() {
        return this._baseZIndex;
    }
    set baseZIndex(val) {
        this._baseZIndex = val;
        console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions() {
        return this._showTransitionOptions;
    }
    set showTransitionOptions(val) {
        this._showTransitionOptions = val;
        console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
        return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
        this._hideTransitionOptions = val;
        console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Label to display when there are no selections.
     * @group Props
     * @deprecated Use placeholder instead.
     */
    set defaultLabel(val) {
        this._defaultLabel = val;
        console.warn('defaultLabel property is deprecated since 16.6.0, use placeholder instead');
    }
    get defaultLabel() {
        return this._defaultLabel;
    }
    /**
     * Label to display when there are no selections.
     * @group Props
     */
    set placeholder(val) {
        this._placeholder.set(val);
    }
    get placeholder() {
        return this._placeholder.asReadonly();
    }
    /**
     * An array of objects to display as the available options.
     * @group Props
     */
    get options() {
        const options = this._options();
        return options;
    }
    set options(val) {
        if (!ObjectUtils.deepEquals(this._options(), val)) {
            this._options.set(val);
        }
    }
    /**
     * When specified, filter displays with this value.
     * @group Props
     */
    get filterValue() {
        return this._filterValue();
    }
    set filterValue(val) {
        this._filterValue.set(val);
    }
    /**
     * Item size of item to be virtual scrolled.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get itemSize() {
        return this._itemSize;
    }
    set itemSize(val) {
        this._itemSize = val;
        console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
    }
    /**
     * Whether all data is selected.
     * @group Props
     */
    get selectAll() {
        return this._selectAll;
    }
    set selectAll(value) {
        this._selectAll = value;
    }
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    focusOnHover = false;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    filterFields;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * Callback to invoke when value changes.
     * @param {MultiSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {MultiSelectFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter = new EventEmitter();
    /**
     * Callback to invoke when multiselect receives focus.
     * @param {MultiSelectFocusEvent} event - Custom focus event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when multiselect loses focus.
     * @param {MultiSelectBlurEvent} event - Custom blur event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    /**
     * Callback to invoke when component is clicked.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClick = new EventEmitter();
    /**
     * Callback to invoke when input field is cleared.
     * @group Emits
     */
    onClear = new EventEmitter();
    /**
     * Callback to invoke when overlay panel becomes visible.
     * @group Emits
     */
    onPanelShow = new EventEmitter();
    /**
     * Callback to invoke when overlay panel becomes hidden.
     * @group Emits
     */
    onPanelHide = new EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {MultiSelectRemoveEvent} event - Remove event.
     * @group Emits
     */
    onRemove = new EventEmitter();
    /**
     * Callback to invoke when all data is selected.
     * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
     * @group Emits
     */
    onSelectAllChange = new EventEmitter();
    containerViewChild;
    overlayViewChild;
    filterInputChild;
    focusInputViewChild;
    itemsViewChild;
    scroller;
    lastHiddenFocusableElementOnOverlay;
    firstHiddenFocusableElementOnOverlay;
    headerCheckboxViewChild;
    footerFacet;
    headerFacet;
    templates;
    searchValue;
    searchTimeout;
    _selectAll = null;
    _autoZIndex;
    _baseZIndex;
    _showTransitionOptions;
    _hideTransitionOptions;
    _defaultLabel;
    _placeholder = signal(undefined);
    _itemSize;
    _selectionLimit;
    value;
    _filteredOptions;
    onModelChange = () => { };
    onModelTouched = () => { };
    valuesAsString;
    focus;
    filtered;
    itemTemplate;
    groupTemplate;
    loaderTemplate;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    emptyFilterTemplate;
    emptyTemplate;
    selectedItemsTemplate;
    checkIconTemplate;
    filterIconTemplate;
    removeTokenIconTemplate;
    closeIconTemplate;
    clearIconTemplate;
    dropdownIconTemplate;
    headerCheckboxFocus;
    filterOptions;
    preventModelTouched;
    preventDocumentDefault;
    focused = false;
    itemsWrapper;
    _displaySelectedLabel = true;
    _maxSelectedLabels = 3;
    modelValue = signal(null);
    _filterValue = signal(null);
    _options = signal(null);
    startRangeIndex = signal(-1);
    focusedOptionIndex = signal(-1);
    selectedOptions;
    clickInProgress = false;
    get containerClass() {
        return {
            'p-multiselect p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-multiselect-clearable': this.showClear && !this.disabled,
            'p-multiselect-chip': this.display === 'chip',
            'p-focus': this.focused
        };
    }
    get inputClass() {
        return {
            'p-multiselect-label p-inputtext': true,
            'p-placeholder': (this.placeholder() || this.defaultLabel) && (this.label() === this.placeholder() || this.label() === this.defaultLabel),
            'p-multiselect-label-empty': !this.selectedItemsTemplate && (this.label() === 'p-emptylabel' || this.label().length === 0)
        };
    }
    get panelClass() {
        return {
            'p-multiselect-panel p-component': true,
            'p-input-filled': this.config.inputStyle === 'filled',
            'p-ripple-disabled': this.config.ripple === false
        };
    }
    get labelClass() {
        return {
            'p-multiselect-label': true,
            'p-placeholder': this.label() === this.placeholder() || this.label() === this.defaultLabel,
            'p-multiselect-label-empty': !this.placeholder() && !this.defaultLabel && (!this.modelValue() || this.modelValue().length === 0)
        };
    }
    get emptyMessageLabel() {
        return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
    }
    get emptyFilterMessageLabel() {
        return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
    }
    get filled() {
        if (typeof this.modelValue() === 'string')
            return !!this.modelValue();
        return ObjectUtils.isNotEmpty(this.modelValue());
    }
    get isVisibleClearIcon() {
        return this.modelValue() != null && this.modelValue() !== '' && ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear && !this.disabled && this.filled;
    }
    get toggleAllAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? 'selectAll' : 'unselectAll'] : undefined;
    }
    get closeAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    get listLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)['listLabel'];
    }
    getAllVisibleAndNonVisibleOptions() {
        return this.group ? this.flatOptions(this.options) : this.options || [];
    }
    visibleOptions = computed(() => {
        const options = this.getAllVisibleAndNonVisibleOptions();
        const isArrayOfObjects = ObjectUtils.isArray(options) && ObjectUtils.isObject(options[0]);
        if (this._filterValue()) {
            let filteredOptions;
            if (isArrayOfObjects) {
                filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
            }
            else {
                filteredOptions = options.filter((option) => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
            }
            if (this.group) {
                const optionGroups = this.options || [];
                const filtered = [];
                optionGroups.forEach((group) => {
                    const groupChildren = this.getOptionGroupChildren(group);
                    const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
                    if (filteredItems.length > 0)
                        filtered.push({ ...group, [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems] });
                });
                return this.flatOptions(filtered);
            }
            return filteredOptions;
        }
        return options;
    });
    label = computed(() => {
        let label;
        const modelValue = this.modelValue();
        if (modelValue && modelValue.length && this.displaySelectedLabel) {
            if (ObjectUtils.isNotEmpty(this.maxSelectedLabels) && modelValue.length > this.maxSelectedLabels) {
                return this.getSelectedItemsLabel();
            }
            else {
                label = '';
                for (let i = 0; i < modelValue.length; i++) {
                    if (i !== 0) {
                        label += ', ';
                    }
                    label += this.getLabelByValue(modelValue[i]);
                }
            }
        }
        else {
            label = this.placeholder() || this.defaultLabel || '';
        }
        return label;
    });
    chipSelectedItems = computed(() => {
        return ObjectUtils.isNotEmpty(this.maxSelectedLabels) && this.modelValue() && this.modelValue().length > this.maxSelectedLabels ? this.modelValue().slice(0, this.maxSelectedLabels) : this.modelValue();
    });
    constructor(el, renderer, cd, zone, filterService, config, overlayService) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.filterService = filterService;
        this.config = config;
        this.overlayService = overlayService;
        effect(() => {
            const modelValue = this.modelValue();
            const visibleOptions = this.visibleOptions();
            if (visibleOptions && ObjectUtils.isNotEmpty(visibleOptions)) {
                if (this.optionValue && this.optionLabel && modelValue) {
                    this.selectedOptions = visibleOptions.filter((option) => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
                }
                else {
                    this.selectedOptions = modelValue;
                }
                this.cd.markForCheck();
            }
        });
    }
    ngOnInit() {
        this.id = this.id || UniqueComponentId();
        this.autoUpdateModel();
        if (this.filterBy) {
            this.filterOptions = {
                filter: (value) => this.onFilterInputChange(value),
                reset: () => this.resetFilter()
            };
        }
    }
    maxSelectionLimitReached() {
        return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                case 'selectedItems':
                    this.selectedItemsTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'filter':
                    this.filterTemplate = item.template;
                    break;
                case 'emptyfilter':
                    this.emptyFilterTemplate = item.template;
                    break;
                case 'empty':
                    this.emptyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'loader':
                    this.loaderTemplate = item.template;
                    break;
                case 'checkicon':
                    this.checkIconTemplate = item.template;
                    break;
                case 'filtericon':
                    this.filterIconTemplate = item.template;
                    break;
                case 'removetokenicon':
                    this.removeTokenIconTemplate = item.template;
                    break;
                case 'closeicon':
                    this.closeIconTemplate = item.template;
                    break;
                case 'clearicon':
                    this.clearIconTemplate = item.template;
                    break;
                case 'dropdownicon':
                    this.dropdownIconTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.overlayVisible) {
            this.show();
        }
    }
    ngAfterViewChecked() {
        if (this.filtered) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.overlayViewChild?.alignOverlay();
                }, 1);
            });
            this.filtered = false;
        }
    }
    flatOptions(options) {
        return (options || []).reduce((result, option, index) => {
            result.push({ optionGroup: option, group: true, index });
            const optionGroupChildren = this.getOptionGroupChildren(option);
            optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
            return result;
        }, []);
    }
    autoUpdateModel() {
        if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
            this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
            const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
            this.onOptionSelect({ originalEvent: null, option: [value] });
        }
    }
    /**
     * Updates the model value.
     * @group Method
     */
    updateModel(value, event) {
        this.value = value;
        this.onModelChange(value);
        this.modelValue.set(value);
    }
    onInputClick(event) {
        event.stopPropagation();
        event.preventDefault();
        this.focusedOptionIndex.set(-1);
    }
    onOptionSelect(event, isFocus = false, index = -1) {
        const { originalEvent, option } = event;
        if (this.disabled || this.isOptionDisabled(option)) {
            return;
        }
        let selected = this.isSelected(option);
        let value = null;
        if (selected) {
            value = this.modelValue().filter((val) => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
        }
        else {
            value = [...(this.modelValue() || []), this.getOptionValue(option)];
        }
        this.updateModel(value, originalEvent);
        index !== -1 && this.focusedOptionIndex.set(index);
        isFocus && DomHandler.focus(this.focusInputViewChild?.nativeElement);
        this.onChange.emit({
            originalEvent: event,
            value: value,
            itemValue: option
        });
    }
    findSelectedOptionIndex() {
        return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
    }
    onOptionSelectRange(event, start = -1, end = -1) {
        start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
        end === -1 && (end = this.findNearestSelectedOptionIndex(start));
        if (start !== -1 && end !== -1) {
            const rangeStart = Math.min(start, end);
            const rangeEnd = Math.max(start, end);
            const value = this.visibleOptions()
                .slice(rangeStart, rangeEnd + 1)
                .filter((option) => this.isValidOption(option))
                .map((option) => this.getOptionValue(option));
            this.updateModel(value, event);
        }
    }
    searchFields() {
        return (this.filterBy || this.optionLabel || 'label').split(',');
    }
    findNearestSelectedOptionIndex(index, firstCheckUp = false) {
        let matchedOptionIndex = -1;
        if (this.hasSelectedOption()) {
            if (firstCheckUp) {
                matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
                matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
            }
            else {
                matchedOptionIndex = this.findNextSelectedOptionIndex(index);
                matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
            }
        }
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findPrevSelectedOptionIndex(index) {
        const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    }
    findFirstFocusedOptionIndex() {
        const selectedIndex = this.findFirstSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findFirstOptionIndex() {
        return this.visibleOptions().findIndex((option) => this.isValidOption(option));
    }
    findFirstSelectedOptionIndex() {
        return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
    }
    findNextSelectedOptionIndex(index) {
        const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((option) => this.isValidSelectedOption(option))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    }
    equalityKey() {
        return this.optionValue ? null : this.dataKey;
    }
    hasSelectedOption() {
        return ObjectUtils.isNotEmpty(this.modelValue());
    }
    isValidSelectedOption(option) {
        return this.isValidOption(option) && this.isSelected(option);
    }
    isOptionGroup(option) {
        return (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
    }
    isValidOption(option) {
        return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionDisabled(option) {
        if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
            return true;
        }
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
    }
    isSelected(option) {
        const optionValue = this.getOptionValue(option);
        return (this.modelValue() || []).some((value) => ObjectUtils.equals(value, optionValue, this.equalityKey()));
    }
    isOptionMatched(option) {
        return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    }
    isEmpty() {
        return !this._options() || (this.visibleOptions() && this.visibleOptions().length === 0);
    }
    getOptionIndex(index, scrollerOptions) {
        return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getAriaPosInset(index) {
        return ((this.optionGroupLabel
            ? index -
                this.visibleOptions()
                    .slice(0, index)
                    .filter((option) => this.isOptionGroup(option)).length
            : index) + 1);
    }
    get ariaSetSize() {
        return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
    }
    getLabelByValue(value) {
        const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
        const matchedOption = options.find((option) => !this.isOptionGroup(option) && ObjectUtils.equals(this.getOptionValue(option), value, this.equalityKey()));
        return matchedOption ? this.getOptionLabel(matchedOption) : null;
    }
    getSelectedItemsLabel() {
        let pattern = /{(.*?)}/;
        let message = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(TranslationKeys.SELECTION_MESSAGE);
        if (pattern.test(message)) {
            return message.replace(message.match(pattern)[0], this.modelValue().length + '');
        }
        return message;
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    onKeyDown(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        const metaKey = event.metaKey || event.ctrlKey;
        switch (event.code) {
            case 'ArrowDown':
                this.onArrowDownKey(event);
                break;
            case 'ArrowUp':
                this.onArrowUpKey(event);
                break;
            case 'Home':
                this.onHomeKey(event);
                break;
            case 'End':
                this.onEndKey(event);
                break;
            case 'PageDown':
                this.onPageDownKey(event);
                break;
            case 'PageUp':
                this.onPageUpKey(event);
                break;
            case 'Enter':
            case 'Space':
                this.onEnterKey(event);
                break;
            case 'Escape':
                this.onEscapeKey(event);
                break;
            case 'Tab':
                this.onTabKey(event);
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.onShiftKey();
                break;
            default:
                if (event.code === 'KeyA' && metaKey) {
                    const value = this.visibleOptions()
                        .filter((option) => this.isValidOption(option))
                        .map((option) => this.getOptionValue(option));
                    this.updateModel(value, event);
                    event.preventDefault();
                    break;
                }
                if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                    !this.overlayVisible && this.show();
                    this.searchOptions(event, event.key);
                    event.preventDefault();
                }
                break;
        }
    }
    onFilterKeyDown(event) {
        switch (event.code) {
            case 'ArrowDown':
                this.onArrowDownKey(event);
                break;
            case 'ArrowUp':
                this.onArrowUpKey(event, true);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                this.onArrowLeftKey(event, true);
                break;
            case 'Home':
                this.onHomeKey(event, true);
                break;
            case 'End':
                this.onEndKey(event, true);
                break;
            case 'Enter':
            case 'NumpadEnter':
                this.onEnterKey(event);
                break;
            case 'Escape':
                this.onEscapeKey(event);
                break;
            case 'Tab':
                this.onTabKey(event, true);
                break;
            default:
                break;
        }
    }
    onArrowLeftKey(event, pressedInInputText = false) {
        pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onArrowDownKey(event) {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
        if (event.shiftKey) {
            this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
        event.stopPropagation();
    }
    onArrowUpKey(event, pressedInInputText = false) {
        if (event.altKey && !pressedInInputText) {
            if (this.focusedOptionIndex() !== -1) {
                this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
            }
            this.overlayVisible && this.hide();
            event.preventDefault();
        }
        else {
            const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
            if (event.shiftKey) {
                this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
            }
            this.changeFocusedOptionIndex(event, optionIndex);
            !this.overlayVisible && this.show();
            event.preventDefault();
        }
        event.stopPropagation();
    }
    onHomeKey(event, pressedInInputText = false) {
        const { currentTarget } = event;
        if (pressedInInputText) {
            const len = currentTarget.value.length;
            currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
            this.focusedOptionIndex.set(-1);
        }
        else {
            let metaKey = event.metaKey || event.ctrlKey;
            let optionIndex = this.findFirstOptionIndex();
            if (event.shiftKey && metaKey) {
                this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
            }
            this.changeFocusedOptionIndex(event, optionIndex);
            !this.overlayVisible && this.show();
        }
        event.preventDefault();
    }
    onEndKey(event, pressedInInputText = false) {
        const { currentTarget } = event;
        if (pressedInInputText) {
            const len = currentTarget.value.length;
            currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
            this.focusedOptionIndex.set(-1);
        }
        else {
            let metaKey = event.metaKey || event.ctrlKey;
            let optionIndex = this.findLastFocusedOptionIndex();
            if (event.shiftKey && metaKey) {
                this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
            }
            this.changeFocusedOptionIndex(event, optionIndex);
            !this.overlayVisible && this.show();
        }
        event.preventDefault();
    }
    onPageDownKey(event) {
        this.scrollInView(this.visibleOptions().length - 1);
        event.preventDefault();
    }
    onPageUpKey(event) {
        this.scrollInView(0);
        event.preventDefault();
    }
    onEnterKey(event) {
        if (!this.overlayVisible) {
            this.onArrowDownKey(event);
        }
        else {
            if (this.focusedOptionIndex() !== -1) {
                if (event.shiftKey) {
                    this.onOptionSelectRange(event, this.focusedOptionIndex());
                }
                else {
                    this.onOptionSelect({ originalEvent: event, option: this.visibleOptions()[this.focusedOptionIndex()] });
                }
            }
        }
        event.preventDefault();
    }
    onEscapeKey(event) {
        this.overlayVisible && this.hide(true);
        event.preventDefault();
    }
    onDeleteKey(event) {
        if (this.showClear) {
            this.clear(event);
            event.preventDefault();
        }
    }
    onTabKey(event, pressedInInputText = false) {
        if (!pressedInInputText) {
            if (this.overlayVisible && this.hasFocusableElements()) {
                DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
                event.preventDefault();
            }
            else {
                if (this.focusedOptionIndex() !== -1) {
                    this.onOptionSelect({ originalEvent: event, option: this.visibleOptions()[this.focusedOptionIndex()] });
                }
                this.overlayVisible && this.hide(this.filter);
            }
        }
    }
    onShiftKey() {
        this.startRangeIndex.set(this.focusedOptionIndex());
    }
    onContainerClick(event) {
        if (this.disabled || this.readonly || event.target.isSameNode(this.focusInputViewChild?.nativeElement)) {
            return;
        }
        if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
            event.preventDefault();
            return;
        }
        else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
            if (this.clickInProgress) {
                return;
            }
            this.clickInProgress = true;
            setTimeout(() => {
                this.clickInProgress = false;
            }, 150);
            this.overlayVisible ? this.hide(true) : this.show(true);
        }
        this.focusInputViewChild?.nativeElement.focus({ preventScroll: true });
        this.onClick.emit(event);
        this.cd.detectChanges();
    }
    onFirstHiddenFocus(event) {
        const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement
            ? DomHandler.getFirstFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])')
            : this.focusInputViewChild?.nativeElement;
        DomHandler.focus(focusableEl);
    }
    onInputFocus(event) {
        this.focused = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
        this.onFocus.emit({ originalEvent: event });
    }
    onInputBlur(event) {
        this.focused = false;
        this.onBlur.emit({ originalEvent: event });
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    onFilterInputChange(event) {
        let value = event.target.value;
        this._filterValue.set(value);
        this.focusedOptionIndex.set(-1);
        this.onFilter.emit({ originalEvent: event, filter: this._filterValue() });
        !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
        setTimeout(() => {
            this.overlayViewChild.alignOverlay();
        });
    }
    onLastHiddenFocus(event) {
        const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement
            ? DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])')
            : this.focusInputViewChild?.nativeElement;
        DomHandler.focus(focusableEl);
    }
    onOptionMouseEnter(event, index) {
        if (this.focusOnHover) {
            this.changeFocusedOptionIndex(event, index);
        }
    }
    onHeaderCheckboxKeyDown(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        switch (event.code) {
            case 'Space':
                this.onToggleAll(event);
                break;
            case 'Enter':
                this.onToggleAll(event);
                break;
            default:
                break;
        }
    }
    onFilterBlur(event) {
        this.focusedOptionIndex.set(-1);
    }
    onHeaderCheckboxFocus() {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
    }
    onToggleAll(event) {
        if (this.disabled || this.readonly) {
            return;
        }
        if (this.selectAll != null) {
            this.onSelectAllChange.emit({
                originalEvent: event,
                checked: !this.allSelected()
            });
        }
        else {
            const value = this.allSelected()
                ? this.visibleOptions()
                    .filter((option) => !this.isValidOption(option) && this.isSelected(option))
                    .map((option) => this.getOptionValue(option))
                : this.visibleOptions()
                    .filter((option) => this.isSelected(option) || this.isValidOption(option))
                    .map((option) => this.getOptionValue(option));
            this.updateModel(value, event);
            // because onToggleAll could have been called during filtering,  this additional test needs to be performed before calling onSelectAllChange.emit
            if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
                this.onSelectAllChange.emit({
                    originalEvent: event,
                    checked: !!value.length
                });
            }
        }
        this.onChange.emit({ originalEvent: event, value: this.value });
        DomHandler.focus(this.headerCheckboxViewChild?.nativeElement);
        this.headerCheckboxFocus = true;
        event.preventDefault();
        event.stopPropagation();
    }
    changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionIndex() !== index) {
            this.focusedOptionIndex.set(index);
            this.scrollInView();
        }
    }
    get virtualScrollerDisabled() {
        return !this.virtualScroll;
    }
    scrollInView(index = -1) {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
        if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
            const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }
            else if (!this.virtualScrollerDisabled) {
                setTimeout(() => {
                    this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
                }, 0);
            }
        }
    }
    get focusedOptionId() {
        return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    writeValue(value) {
        this.value = value;
        this.modelValue.set(this.value);
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
    allSelected() {
        return this.selectAll !== null ? this.selectAll : ObjectUtils.isNotEmpty(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
    }
    /**
     * Displays the panel.
     * @group Method
     */
    show(isFocus) {
        this.overlayVisible = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        if (isFocus) {
            DomHandler.focus(this.focusInputViewChild?.nativeElement);
        }
        this.cd.markForCheck();
    }
    /**
     * Hides the panel.
     * @group Method
     */
    hide(isFocus) {
        this.overlayVisible = false;
        this.focusedOptionIndex.set(-1);
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        isFocus && DomHandler.focus(this.focusInputViewChild?.nativeElement);
        this.onPanelHide.emit();
        this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-multiselect-items-wrapper');
                this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
                if (this._options() && this._options().length) {
                    if (this.virtualScroll) {
                        const selectedIndex = ObjectUtils.isNotEmpty(this.modelValue()) ? this.focusedOptionIndex() : -1;
                        if (selectedIndex !== -1) {
                            this.scroller?.scrollToIndex(selectedIndex);
                        }
                    }
                    else {
                        let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.p-multiselect-item.p-highlight');
                        if (selectedListItem) {
                            selectedListItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                        }
                    }
                }
                if (this.filterInputChild && this.filterInputChild.nativeElement) {
                    this.preventModelTouched = true;
                    if (this.autofocusFilter) {
                        this.filterInputChild.nativeElement.focus();
                    }
                }
                this.onPanelShow.emit();
            case 'void':
                this.itemsWrapper = null;
                this.onModelTouched();
                break;
        }
    }
    resetFilter() {
        if (this.filterInputChild && this.filterInputChild.nativeElement) {
            this.filterInputChild.nativeElement.value = '';
        }
        this._filterValue.set(null);
        this._filteredOptions = null;
    }
    close(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }
    clear(event) {
        this.value = null;
        this.updateModel(null, event);
        this.selectedOptions = null;
        this.onClear.emit();
        event.stopPropagation();
    }
    removeOption(optionValue, event) {
        let value = this.modelValue().filter((val) => !ObjectUtils.equals(val, optionValue, this.equalityKey()));
        this.updateModel(value, event);
        this.onChange.emit({
            originalEvent: event,
            value: value,
            itemValue: optionValue
        });
        event && event.stopPropagation();
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return DomHandler.hasClass(nextItem.children[0], 'p-disabled') || DomHandler.isHidden(nextItem.children[0]) || DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return DomHandler.hasClass(prevItem.children[0], 'p-disabled') || DomHandler.isHidden(prevItem.children[0]) || DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];
        else
            return null;
    }
    findNextOptionIndex(index) {
        const matchedOptionIndex = index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((option) => this.isValidOption(option))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
        const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findLastSelectedOptionIndex() {
        return this.hasSelectedOption() ? ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
    }
    findLastFocusedOptionIndex() {
        const selectedIndex = this.findLastSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findLastOptionIndex() {
        return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
    }
    searchOptions(event, char) {
        this.searchValue = (this.searchValue || '') + char;
        let optionIndex = -1;
        let matched = false;
        if (this.focusedOptionIndex() !== -1) {
            optionIndex = this.visibleOptions()
                .slice(this.focusedOptionIndex())
                .findIndex((option) => this.isOptionMatched(option));
            optionIndex =
                optionIndex === -1
                    ? this.visibleOptions()
                        .slice(0, this.focusedOptionIndex())
                        .findIndex((option) => this.isOptionMatched(option))
                    : optionIndex + this.focusedOptionIndex();
        }
        else {
            optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
        }
        if (optionIndex !== -1) {
            matched = true;
        }
        if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
            optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
            this.changeFocusedOptionIndex(event, optionIndex);
        }
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
            this.searchValue = '';
            this.searchTimeout = null;
        }, 500);
        return matched;
    }
    activateFilter() {
        if (this.hasFilter() && this._options) {
            if (this.group) {
                let filteredGroups = [];
                for (let optgroup of this.options) {
                    let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push({ ...optgroup, ...{ [this.optionGroupChildren]: filteredSubOptions } });
                    }
                }
                this._filteredOptions = filteredGroups;
            }
            else {
                this._filteredOptions = this.filterService.filter(this.options, this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
            }
        }
        else {
            this._filteredOptions = null;
        }
    }
    hasFocusableElements() {
        return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
    }
    hasFilter() {
        return this._filterValue() && this._filterValue().trim().length > 0;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelect, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i3.FilterService }, { token: i3.PrimeNGConfig }, { token: i3.OverlayService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: MultiSelect, selector: "p-multiSelect", inputs: { id: "id", ariaLabel: "ariaLabel", style: "style", styleClass: "styleClass", panelStyle: "panelStyle", panelStyleClass: "panelStyleClass", inputId: "inputId", disabled: "disabled", readonly: "readonly", group: "group", filter: "filter", filterPlaceHolder: "filterPlaceHolder", filterLocale: "filterLocale", overlayVisible: "overlayVisible", tabindex: "tabindex", appendTo: "appendTo", dataKey: "dataKey", name: "name", ariaLabelledBy: "ariaLabelledBy", displaySelectedLabel: "displaySelectedLabel", maxSelectedLabels: "maxSelectedLabels", selectionLimit: "selectionLimit", selectedItemsLabel: "selectedItemsLabel", showToggleAll: "showToggleAll", emptyFilterMessage: "emptyFilterMessage", emptyMessage: "emptyMessage", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", showHeader: "showHeader", filterBy: "filterBy", scrollHeight: "scrollHeight", lazy: "lazy", virtualScroll: "virtualScroll", virtualScrollItemSize: "virtualScrollItemSize", virtualScrollOptions: "virtualScrollOptions", overlayOptions: "overlayOptions", ariaFilterLabel: "ariaFilterLabel", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", tooltipStyleClass: "tooltipStyleClass", autofocusFilter: "autofocusFilter", display: "display", autocomplete: "autocomplete", showClear: "showClear", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", defaultLabel: "defaultLabel", placeholder: "placeholder", options: "options", filterValue: "filterValue", itemSize: "itemSize", selectAll: "selectAll", focusOnHover: "focusOnHover", filterFields: "filterFields", selectOnFocus: "selectOnFocus", autoOptionFocus: "autoOptionFocus" }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onClear: "onClear", onPanelShow: "onPanelShow", onPanelHide: "onPanelHide", onLazyLoad: "onLazyLoad", onRemove: "onRemove", onSelectAllChange: "onSelectAllChange" }, host: { properties: { "class.p-inputwrapper-focus": "focused || overlayVisible", "class.p-inputwrapper-filled": "filled" }, classAttribute: "p-element p-inputwrapper" }, providers: [MULTISELECT_VALUE_ACCESSOR], queries: [{ propertyName: "footerFacet", first: true, predicate: Footer, descendants: true }, { propertyName: "headerFacet", first: true, predicate: Header, descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "containerViewChild", first: true, predicate: ["container"], descendants: true }, { propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }, { propertyName: "filterInputChild", first: true, predicate: ["filterInput"], descendants: true }, { propertyName: "focusInputViewChild", first: true, predicate: ["focusInput"], descendants: true }, { propertyName: "itemsViewChild", first: true, predicate: ["items"], descendants: true }, { propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }, { propertyName: "lastHiddenFocusableElementOnOverlay", first: true, predicate: ["lastHiddenFocusableEl"], descendants: true }, { propertyName: "firstHiddenFocusableElementOnOverlay", first: true, predicate: ["firstHiddenFocusableEl"], descendants: true }, { propertyName: "headerCheckboxViewChild", first: true, predicate: ["headerCheckbox"], descendants: true }], ngImport: i0, template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                <input
                    #focusInput
                    [pTooltip]="tooltip"
                    [tooltipPosition]="tooltipPosition"
                    [positionStyle]="tooltipPositionStyle"
                    [tooltipStyleClass]="tooltipStyleClass"
                    [attr.aria-disabled]="disabled"
                    [attr.id]="inputId"
                    role="combobox"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-haspopup]="'listbox'"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                    [attr.tabindex]="!disabled ? tabindex : -1"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (keydown)="onKeyDown($event)"
                />
            </div>
            <div class="p-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <div [ngClass]="labelClass">
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{ getLabelByValue(item) }}</span>
                                <ng-container *ngIf="!disabled">
                                    <TimesCircleIcon *ngIf="!removeTokenIconTemplate" [styleClass]="'p-multiselect-token-icon'" (click)="removeOption(item, event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                                    <span *ngIf="removeTokenIconTemplate" class="p-multiselect-token-icon" (click)="removeOption(item, event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                                        <ng-container *ngTemplateOutlet="removeTokenIconTemplate"></ng-container>
                                    </span>
                                </ng-container>
                            </div>
                            <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                </div>
                <ng-container *ngIf="isVisibleClearIcon">
                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-multiselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                    <span *ngIf="clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div class="p-multiselect-trigger">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span *ngIf="dropdownIcon" class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-multiselect-trigger-icon'" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-multiselect-trigger-icon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </span>
            </div>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-multiselect-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="'true'"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <div class="p-multiselect-header" *ngIf="showHeader">
                            <ng-content select="p-header"></ng-content>
                            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div
                                    class="p-checkbox p-component"
                                    *ngIf="showToggleAll && !selectionLimit"
                                    [ngClass]="{ 'p-checkbox-disabled': disabled || toggleAllDisabled }"
                                    (click)="onToggleAll($event)"
                                    (keydown)="onHeaderCheckboxKeyDown($event)"
                                >
                                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                                        <input
                                            #headerCheckbox
                                            type="checkbox"
                                            [readonly]="readonly"
                                            [attr.checked]="allSelected()"
                                            (focus)="onHeaderCheckboxFocus()"
                                            (blur)="onHeaderCheckboxBlur()"
                                            [disabled]="disabled || toggleAllDisabled"
                                            [attr.aria-label]="toggleAllAriaLabel"
                                        />
                                    </div>
                                    <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allSelected()" [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }">
                                        <ng-container *ngIf="allSelected()">
                                            <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                <ng-template *ngTemplateOutlet="checkIconTemplate; context: { $implicit: allSelected() }"></ng-template>
                                            </span>
                                        </ng-container>
                                    </div>
                                </div>
                                <div class="p-multiselect-filter-container" *ngIf="filter">
                                    <input
                                        #filterInput
                                        type="text"
                                        [attr.autocomplete]="autocomplete"
                                        [attr.placeholder]="filterPlaceHolder"
                                        role="searchbox"
                                        [attr.aria-owns]="id + '_list'"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        [value]="_filterValue() || ''"
                                        (input)="onFilterInputChange($event)"
                                        (keydown)="onFilterKeyDown($event)"
                                        (click)="onInputClick($event)"
                                        (blur)="onFilterBlur($event)"
                                        class="p-multiselect-filter p-inputtext p-component"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <SearchIcon [styleClass]="'p-multiselect-filter-icon'" *ngIf="!filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate" class="p-multiselect-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>

                                <button class="p-multiselect-close p-link p-button-icon-only" type="button" (click)="close($event)" pRipple [attr.aria-label]="closeAriaLabel">
                                    <TimesIcon [styleClass]="'p-multiselect-close-icon'" *ngIf="!closeIconTemplate" />
                                    <span *ngIf="closeIconTemplate" class="p-multiselect-close-icon">
                                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                                    </span>
                                </button>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [tabindex]="-1"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items class="p-multiselect-items p-component" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-multiselect-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-multiSelectItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [checkIconTemplate]="checkIconTemplate"
                                                [itemSize]="scrollerOptions.itemSize"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-multiSelectItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                            <ng-content select="p-footer"></ng-content>
                            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        </div>

                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i1.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i4.Overlay), selector: "p-overlay", inputs: ["visible", "mode", "style", "styleClass", "contentStyle", "contentStyleClass", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "listener", "responsive", "options"], outputs: ["visibleChange", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "onAnimationStart", "onAnimationDone"] }, { kind: "directive", type: i0.forwardRef(() => i3.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i5.Tooltip), selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "directive", type: i0.forwardRef(() => i2.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => i6.Scroller), selector: "p-scroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }, { kind: "component", type: i0.forwardRef(() => SearchIcon), selector: "SearchIcon" }, { kind: "component", type: i0.forwardRef(() => TimesCircleIcon), selector: "TimesCircleIcon" }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }, { kind: "component", type: i0.forwardRef(() => ChevronDownIcon), selector: "ChevronDownIcon" }, { kind: "component", type: i0.forwardRef(() => MultiSelectItem), selector: "p-multiSelectItem", inputs: ["id", "option", "selected", "label", "disabled", "itemSize", "focused", "ariaPosInset", "ariaSetSize", "template", "checkIconTemplate"], outputs: ["onClick", "onMouseEnter"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelect, decorators: [{
            type: Component,
            args: [{ selector: 'p-multiSelect', template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                <input
                    #focusInput
                    [pTooltip]="tooltip"
                    [tooltipPosition]="tooltipPosition"
                    [positionStyle]="tooltipPositionStyle"
                    [tooltipStyleClass]="tooltipStyleClass"
                    [attr.aria-disabled]="disabled"
                    [attr.id]="inputId"
                    role="combobox"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-haspopup]="'listbox'"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                    [attr.tabindex]="!disabled ? tabindex : -1"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (keydown)="onKeyDown($event)"
                />
            </div>
            <div class="p-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <div [ngClass]="labelClass">
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{ getLabelByValue(item) }}</span>
                                <ng-container *ngIf="!disabled">
                                    <TimesCircleIcon *ngIf="!removeTokenIconTemplate" [styleClass]="'p-multiselect-token-icon'" (click)="removeOption(item, event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                                    <span *ngIf="removeTokenIconTemplate" class="p-multiselect-token-icon" (click)="removeOption(item, event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                                        <ng-container *ngTemplateOutlet="removeTokenIconTemplate"></ng-container>
                                    </span>
                                </ng-container>
                            </div>
                            <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                </div>
                <ng-container *ngIf="isVisibleClearIcon">
                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-multiselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                    <span *ngIf="clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div class="p-multiselect-trigger">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span *ngIf="dropdownIcon" class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-multiselect-trigger-icon'" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-multiselect-trigger-icon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </span>
            </div>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-multiselect-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="'true'"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <div class="p-multiselect-header" *ngIf="showHeader">
                            <ng-content select="p-header"></ng-content>
                            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div
                                    class="p-checkbox p-component"
                                    *ngIf="showToggleAll && !selectionLimit"
                                    [ngClass]="{ 'p-checkbox-disabled': disabled || toggleAllDisabled }"
                                    (click)="onToggleAll($event)"
                                    (keydown)="onHeaderCheckboxKeyDown($event)"
                                >
                                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                                        <input
                                            #headerCheckbox
                                            type="checkbox"
                                            [readonly]="readonly"
                                            [attr.checked]="allSelected()"
                                            (focus)="onHeaderCheckboxFocus()"
                                            (blur)="onHeaderCheckboxBlur()"
                                            [disabled]="disabled || toggleAllDisabled"
                                            [attr.aria-label]="toggleAllAriaLabel"
                                        />
                                    </div>
                                    <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allSelected()" [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }">
                                        <ng-container *ngIf="allSelected()">
                                            <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                <ng-template *ngTemplateOutlet="checkIconTemplate; context: { $implicit: allSelected() }"></ng-template>
                                            </span>
                                        </ng-container>
                                    </div>
                                </div>
                                <div class="p-multiselect-filter-container" *ngIf="filter">
                                    <input
                                        #filterInput
                                        type="text"
                                        [attr.autocomplete]="autocomplete"
                                        [attr.placeholder]="filterPlaceHolder"
                                        role="searchbox"
                                        [attr.aria-owns]="id + '_list'"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        [value]="_filterValue() || ''"
                                        (input)="onFilterInputChange($event)"
                                        (keydown)="onFilterKeyDown($event)"
                                        (click)="onInputClick($event)"
                                        (blur)="onFilterBlur($event)"
                                        class="p-multiselect-filter p-inputtext p-component"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <SearchIcon [styleClass]="'p-multiselect-filter-icon'" *ngIf="!filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate" class="p-multiselect-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>

                                <button class="p-multiselect-close p-link p-button-icon-only" type="button" (click)="close($event)" pRipple [attr.aria-label]="closeAriaLabel">
                                    <TimesIcon [styleClass]="'p-multiselect-close-icon'" *ngIf="!closeIconTemplate" />
                                    <span *ngIf="closeIconTemplate" class="p-multiselect-close-icon">
                                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                                    </span>
                                </button>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [tabindex]="-1"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items class="p-multiselect-items p-component" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-multiselect-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-multiSelectItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [checkIconTemplate]="checkIconTemplate"
                                                [itemSize]="scrollerOptions.itemSize"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-multiSelectItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                            <ng-content select="p-footer"></ng-content>
                            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        </div>

                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `, host: {
                        class: 'p-element p-inputwrapper',
                        '[class.p-inputwrapper-focus]': 'focused || overlayVisible',
                        '[class.p-inputwrapper-filled]': 'filled'
                    }, providers: [MULTISELECT_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i3.FilterService }, { type: i3.PrimeNGConfig }, { type: i3.OverlayService }], propDecorators: { id: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], panelStyle: [{
                type: Input
            }], panelStyleClass: [{
                type: Input
            }], inputId: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], group: [{
                type: Input
            }], filter: [{
                type: Input
            }], filterPlaceHolder: [{
                type: Input
            }], filterLocale: [{
                type: Input
            }], overlayVisible: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], appendTo: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], name: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], displaySelectedLabel: [{
                type: Input
            }], maxSelectedLabels: [{
                type: Input
            }], selectionLimit: [{
                type: Input
            }], selectedItemsLabel: [{
                type: Input
            }], showToggleAll: [{
                type: Input
            }], emptyFilterMessage: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], resetFilterOnHide: [{
                type: Input
            }], dropdownIcon: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], showHeader: [{
                type: Input
            }], filterBy: [{
                type: Input
            }], scrollHeight: [{
                type: Input
            }], lazy: [{
                type: Input
            }], virtualScroll: [{
                type: Input
            }], virtualScrollItemSize: [{
                type: Input
            }], virtualScrollOptions: [{
                type: Input
            }], overlayOptions: [{
                type: Input
            }], ariaFilterLabel: [{
                type: Input
            }], filterMatchMode: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], tooltipPosition: [{
                type: Input
            }], tooltipPositionStyle: [{
                type: Input
            }], tooltipStyleClass: [{
                type: Input
            }], autofocusFilter: [{
                type: Input
            }], display: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], showClear: [{
                type: Input
            }], autoZIndex: [{
                type: Input
            }], baseZIndex: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], defaultLabel: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], options: [{
                type: Input
            }], filterValue: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], selectAll: [{
                type: Input
            }], focusOnHover: [{
                type: Input
            }], filterFields: [{
                type: Input
            }], selectOnFocus: [{
                type: Input
            }], autoOptionFocus: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onClick: [{
                type: Output
            }], onClear: [{
                type: Output
            }], onPanelShow: [{
                type: Output
            }], onPanelHide: [{
                type: Output
            }], onLazyLoad: [{
                type: Output
            }], onRemove: [{
                type: Output
            }], onSelectAllChange: [{
                type: Output
            }], containerViewChild: [{
                type: ViewChild,
                args: ['container']
            }], overlayViewChild: [{
                type: ViewChild,
                args: ['overlay']
            }], filterInputChild: [{
                type: ViewChild,
                args: ['filterInput']
            }], focusInputViewChild: [{
                type: ViewChild,
                args: ['focusInput']
            }], itemsViewChild: [{
                type: ViewChild,
                args: ['items']
            }], scroller: [{
                type: ViewChild,
                args: ['scroller']
            }], lastHiddenFocusableElementOnOverlay: [{
                type: ViewChild,
                args: ['lastHiddenFocusableEl']
            }], firstHiddenFocusableElementOnOverlay: [{
                type: ViewChild,
                args: ['firstHiddenFocusableEl']
            }], headerCheckboxViewChild: [{
                type: ViewChild,
                args: ['headerCheckbox']
            }], footerFacet: [{
                type: ContentChild,
                args: [Footer]
            }], headerFacet: [{
                type: ContentChild,
                args: [Header]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class MultiSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: MultiSelectModule, declarations: [MultiSelect, MultiSelectItem], imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, CheckIcon, SearchIcon, TimesCircleIcon, TimesIcon, ChevronDownIcon, CheckIcon], exports: [MultiSelect, OverlayModule, SharedModule, ScrollerModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelectModule, imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, CheckIcon, SearchIcon, TimesCircleIcon, TimesIcon, ChevronDownIcon, CheckIcon, OverlayModule, SharedModule, ScrollerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MultiSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, CheckIcon, SearchIcon, TimesCircleIcon, TimesIcon, ChevronDownIcon, CheckIcon],
                    exports: [MultiSelect, OverlayModule, SharedModule, ScrollerModule],
                    declarations: [MultiSelect, MultiSelectItem]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFJSCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ1osZUFBZSxFQUNmLE1BQU0sRUFFTixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBR1IsTUFBTSxFQUlOLE1BQU0sRUFHTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLE1BQU0sRUFBRSxNQUFNLEVBQWlELGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFXLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxF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QUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLGFBanREdEssV0FBVyxFQWt0REcsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjO3dHQUd6RCxpQkFBaUIsWUFKaEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQ3hKLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYzs7MkZBR3pELGlCQUFpQjtrQkFMN0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQztvQkFDaEwsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUNuRSxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2lCQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIEFmdGVyVmlld0NoZWNrZWQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgY29tcHV0ZWQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBlZmZlY3QsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBOZ1pvbmUsXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgUmVuZGVyZXIyLFxuICAgIFNpZ25hbCxcbiAgICBzaWduYWwsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlLCBGb290ZXIsIEhlYWRlciwgT3ZlcmxheU9wdGlvbnMsIE92ZXJsYXlTZXJ2aWNlLCBQcmltZU5HQ29uZmlnLCBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUsIFRyYW5zbGF0aW9uS2V5cyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9vdmVybGF5JztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7IFNjcm9sbGVyLCBTY3JvbGxlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc2Nyb2xsZXInO1xuaW1wb3J0IHsgU2Nyb2xsZXJPcHRpb25zIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9vbHRpcCc7XG5pbXBvcnQgeyBPYmplY3RVdGlscywgVW5pcXVlQ29tcG9uZW50SWQgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IENoZWNrSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvY2hlY2snO1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvc2VhcmNoJztcbmltcG9ydCB7IFRpbWVzQ2lyY2xlSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvdGltZXNjaXJjbGUnO1xuaW1wb3J0IHsgVGltZXNJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy90aW1lcyc7XG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZXZyb25kb3duJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IE11bHRpU2VsZWN0UmVtb3ZlRXZlbnQsIE11bHRpU2VsZWN0RmlsdGVyT3B0aW9ucywgTXVsdGlTZWxlY3RGaWx0ZXJFdmVudCwgTXVsdGlTZWxlY3RCbHVyRXZlbnQsIE11bHRpU2VsZWN0Q2hhbmdlRXZlbnQsIE11bHRpU2VsZWN0Rm9jdXNFdmVudCwgTXVsdGlTZWxlY3RMYXp5TG9hZEV2ZW50LCBNdWx0aVNlbGVjdFNlbGVjdEFsbENoYW5nZUV2ZW50IH0gZnJvbSAnLi9tdWx0aXNlbGVjdC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgTVVMVElTRUxFQ1RfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNdWx0aVNlbGVjdCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1tdWx0aVNlbGVjdEl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgcFJpcHBsZVxuICAgICAgICAgICAgW25nU3R5bGVdPVwieyBoZWlnaHQ6IGl0ZW1TaXplICsgJ3B4JyB9XCJcbiAgICAgICAgICAgIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1pdGVtXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3AtbXVsdGlzZWxlY3QtaXRlbSc6IHRydWUsICdwLWhpZ2hsaWdodCc6IHNlbGVjdGVkLCAncC1kaXNhYmxlZCc6IGRpc2FibGVkLCAncC1mb2N1cyc6IGZvY3VzZWQgfVwiXG4gICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLXNldHNpemVdPVwiYXJpYVNldFNpemVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1wb3NpbnNldF09XCJhcmlhUG9zSW5zZXRcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLXAtZm9jdXNlZF09XCJmb2N1c2VkXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtcC1oaWdobGlnaHRdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1wLWRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbk9wdGlvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25PcHRpb25Nb3VzZUVudGVyKCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveCBwLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiIFtuZ0NsYXNzXT1cInsgJ3AtaGlnaGxpZ2h0Jzogc2VsZWN0ZWQgfVwiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJzZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gKm5nSWY9XCIhY2hlY2tJY29uVGVtcGxhdGVcIiBbc3R5bGVDbGFzc109XCIncC1jaGVja2JveC1pY29uJ1wiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGVja0ljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1jaGVja2JveC1pY29uXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNoZWNrSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCI+e3sgbGFiZWwgPz8gJ2VtcHR5JyB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG9wdGlvbiB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbGk+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdEl0ZW0ge1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBvcHRpb246IGFueTtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgaXRlbVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGZvY3VzZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhcmlhUG9zSW5zZXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGFyaWFTZXRTaXplOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGNoZWNrSWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uTW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBvbk9wdGlvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIG9wdGlvbjogdGhpcy5vcHRpb24sXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZFxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25PcHRpb25Nb3VzZUVudGVyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm9uTW91c2VFbnRlci5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiB0aGlzLm9wdGlvbixcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKlxuICogTXVsdGlTZWxlY3QgaXMgdXNlZCB0byBzZWxlY3QgbXVsdGlwbGUgaXRlbXMgZnJvbSBhIGNvbGxlY3Rpb24uXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtbXVsdGlTZWxlY3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbYXR0ci5pZF09XCJpZFwiIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIChjbGljayk9XCJvbkNvbnRhaW5lckNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCIgW2F0dHIuZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgI2ZvY3VzSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgW3BUb29sdGlwXT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIFtwb3NpdGlvblN0eWxlXT1cInRvb2x0aXBQb3NpdGlvblN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgW3Rvb2x0aXBTdHlsZUNsYXNzXT1cInRvb2x0aXBTdHlsZUNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmlkXT1cImlucHV0SWRcIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiY29tYm9ib3hcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtaGFzcG9wdXBdPVwiJ2xpc3Rib3gnXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJvdmVybGF5VmlzaWJsZSA/PyBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwib3ZlcmxheVZpc2libGUgPyBpZCArICdfbGlzdCcgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiIWRpc2FibGVkID8gdGFiaW5kZXggOiAtMVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJmb2N1c2VkID8gZm9jdXNlZE9wdGlvbklkIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tdWx0aXNlbGVjdC1sYWJlbC1jb250YWluZXJcIiBbcFRvb2x0aXBdPVwidG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCIgW3Bvc2l0aW9uU3R5bGVdPVwidG9vbHRpcFBvc2l0aW9uU3R5bGVcIiBbdG9vbHRpcFN0eWxlQ2xhc3NdPVwidG9vbHRpcFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImxhYmVsQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzZWxlY3RlZEl0ZW1zVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkaXNwbGF5ID09PSAnY29tbWEnXCI+e3sgbGFiZWwoKSB8fCAnZW1wdHknIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzcGxheSA9PT0gJ2NoaXAnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjdG9rZW4gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2hpcFNlbGVjdGVkSXRlbXMoKTsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC10b2tlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtdG9rZW4tbGFiZWxcIj57eyBnZXRMYWJlbEJ5VmFsdWUoaXRlbSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lc0NpcmNsZUljb24gKm5nSWY9XCIhcmVtb3ZlVG9rZW5JY29uVGVtcGxhdGVcIiBbc3R5bGVDbGFzc109XCIncC1tdWx0aXNlbGVjdC10b2tlbi1pY29uJ1wiIChjbGljayk9XCJyZW1vdmVPcHRpb24oaXRlbSwgZXZlbnQpXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidjbGVhcmljb24nXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlbW92ZVRva2VuSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLW11bHRpc2VsZWN0LXRva2VuLWljb25cIiAoY2xpY2spPVwicmVtb3ZlT3B0aW9uKGl0ZW0sIGV2ZW50KVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInY2xlYXJpY29uJ1wiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVtb3ZlVG9rZW5JY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtb2RlbFZhbHVlKCkgfHwgbW9kZWxWYWx1ZSgpLmxlbmd0aCA9PT0gMFwiPnt7IHBsYWNlaG9sZGVyKCkgfHwgZGVmYXVsdExhYmVsIHx8ICdlbXB0eScgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNlbGVjdGVkSXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHNlbGVjdGVkT3B0aW9ucywgcmVtb3ZlQ2hpcDogcmVtb3ZlT3B0aW9uLmJpbmQodGhpcykgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Zpc2libGVDbGVhckljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRpbWVzSWNvbiAqbmdJZj1cIiFjbGVhckljb25UZW1wbGF0ZVwiIFtzdHlsZUNsYXNzXT1cIidwLW11bHRpc2VsZWN0LWNsZWFyLWljb24nXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2NsZWFyaWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjbGVhckljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1jbGVhci1pY29uXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2NsZWFyaWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjbGVhckljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtdHJpZ2dlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZHJvcGRvd25JY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJkcm9wZG93bkljb25cIiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtdHJpZ2dlci1pY29uXCIgW25nQ2xhc3NdPVwiZHJvcGRvd25JY29uXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIid0cmlnZ2VyaWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uICpuZ0lmPVwiIWRyb3Bkb3duSWNvblwiIFtzdHlsZUNsYXNzXT1cIidwLW11bHRpc2VsZWN0LXRyaWdnZXItaWNvbidcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ3RyaWdnZXJpY29uJ1wiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZHJvcGRvd25JY29uVGVtcGxhdGVcIiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtdHJpZ2dlci1pY29uXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIid0cmlnZ2VyaWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImRyb3Bkb3duSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwLW92ZXJsYXlcbiAgICAgICAgICAgICAgICAjb3ZlcmxheVxuICAgICAgICAgICAgICAgIFsodmlzaWJsZSldPVwib3ZlcmxheVZpc2libGVcIlxuICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm92ZXJsYXlPcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbdGFyZ2V0XT1cIidAcGFyZW50J1wiXG4gICAgICAgICAgICAgICAgW2FwcGVuZFRvXT1cImFwcGVuZFRvXCJcbiAgICAgICAgICAgICAgICBbYXV0b1pJbmRleF09XCJhdXRvWkluZGV4XCJcbiAgICAgICAgICAgICAgICBbYmFzZVpJbmRleF09XCJiYXNlWkluZGV4XCJcbiAgICAgICAgICAgICAgICBbc2hvd1RyYW5zaXRpb25PcHRpb25zXT1cInNob3dUcmFuc2l0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgW2hpZGVUcmFuc2l0aW9uT3B0aW9uc109XCJoaWRlVHJhbnNpdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIChvbkFuaW1hdGlvblN0YXJ0KT1cIm9uT3ZlcmxheUFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChvbkhpZGUpPVwiaGlkZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIidwLW11bHRpc2VsZWN0LXBhbmVsIHAtY29tcG9uZW50J1wiIFtuZ1N0eWxlXT1cInBhbmVsU3R5bGVcIiBbY2xhc3NdPVwicGFuZWxTdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmaXJzdEhpZGRlbkZvY3VzYWJsZUVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwiJ3RydWUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGUgcC1oaWRkZW4tZm9jdXNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25GaXJzdEhpZGRlbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtcC1oaWRkZW4tYWNjZXNzaWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXAtaGlkZGVuLWZvY3VzYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWhlYWRlclwiICpuZ0lmPVwic2hvd0hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJUZW1wbGF0ZTsgZWxzZSBidWlsdEluRmlsdGVyRWxlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmlsdGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgb3B0aW9uczogZmlsdGVyT3B0aW9ucyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNidWlsdEluRmlsdGVyRWxlbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1RvZ2dsZUFsbCAmJiAhc2VsZWN0aW9uTGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncC1jaGVja2JveC1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IHRvZ2dsZUFsbERpc2FibGVkIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVG9nZ2xlQWxsKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25IZWFkZXJDaGVja2JveEtleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCIgW2F0dHIuZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2hlYWRlckNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmNoZWNrZWRdPVwiYWxsU2VsZWN0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkhlYWRlckNoZWNrYm94Rm9jdXMoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGVhZGVyQ2hlY2tib3hCbHVyKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgdG9nZ2xlQWxsRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInRvZ2dsZUFsbEFyaWFMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3gtYm94XCIgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImFsbFNlbGVjdGVkKClcIiBbbmdDbGFzc109XCJ7ICdwLWhpZ2hsaWdodCc6IGFsbFNlbGVjdGVkKCksICdwLWZvY3VzJzogaGVhZGVyQ2hlY2tib3hGb2N1cywgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCB0b2dnbGVBbGxEaXNhYmxlZCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBbc3R5bGVDbGFzc109XCIncC1jaGVja2JveC1pY29uJ1wiICpuZ0lmPVwiIWNoZWNrSWNvblRlbXBsYXRlXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2hlY2tJY29uVGVtcGxhdGVcIiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNoZWNrSWNvblRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogYWxsU2VsZWN0ZWQoKSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tdWx0aXNlbGVjdC1maWx0ZXItY29udGFpbmVyXCIgKm5nSWY9XCJmaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJmaWx0ZXJQbGFjZUhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInNlYXJjaGJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1vd25zXT1cImlkICsgJ19saXN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50XT1cImZvY3VzZWRPcHRpb25JZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIl9maWx0ZXJWYWx1ZSgpIHx8ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5wdXQpPVwib25GaWx0ZXJJbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbkZpbHRlcktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uSW5wdXRDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkZpbHRlckJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWZpbHRlciBwLWlucHV0dGV4dCBwLWNvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJmaWx0ZXJQbGFjZUhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhRmlsdGVyTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIFtzdHlsZUNsYXNzXT1cIidwLW11bHRpc2VsZWN0LWZpbHRlci1pY29uJ1wiICpuZ0lmPVwiIWZpbHRlckljb25UZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImZpbHRlckljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1maWx0ZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImZpbHRlckljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwLW11bHRpc2VsZWN0LWNsb3NlIHAtbGluayBwLWJ1dHRvbi1pY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIiBwUmlwcGxlIFthdHRyLmFyaWEtbGFiZWxdPVwiY2xvc2VBcmlhTGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lc0ljb24gW3N0eWxlQ2xhc3NdPVwiJ3AtbXVsdGlzZWxlY3QtY2xvc2UtaWNvbidcIiAqbmdJZj1cIiFjbG9zZUljb25UZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNsb3NlSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWNsb3NlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjbG9zZUljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWl0ZW1zLXdyYXBwZXJcIiBbc3R5bGUubWF4LWhlaWdodF09XCJ2aXJ0dWFsU2Nyb2xsID8gJ2F1dG8nIDogc2Nyb2xsSGVpZ2h0IHx8ICdhdXRvJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNjcm9sbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzY3JvbGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXRlbXNdPVwidmlzaWJsZU9wdGlvbnMoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGhlaWdodDogc2Nyb2xsSGVpZ2h0IH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXRlbVNpemVdPVwidmlydHVhbFNjcm9sbEl0ZW1TaXplIHx8IF9pdGVtU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvU2l6ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhenldPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkxhenlMb2FkKT1cIm9uTGF6eUxvYWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwidmlydHVhbFNjcm9sbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNvbnRlbnRcIiBsZXQtaXRlbXMgbGV0LXNjcm9sbGVyT3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidWlsZEluSXRlbXM7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtcywgb3B0aW9uczogc2Nyb2xsZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwibG9hZGVyXCIgbGV0LXNjcm9sbGVyT3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibG9hZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgb3B0aW9uczogc2Nyb2xsZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zY3JvbGxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXZpcnR1YWxTY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1aWxkSW5JdGVtczsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZpc2libGVPcHRpb25zKCksIG9wdGlvbnM6IHt9IH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYnVpbGRJbkl0ZW1zIGxldC1pdGVtcyBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgI2l0ZW1zIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1pdGVtcyBwLWNvbXBvbmVudFwiIFtuZ0NsYXNzXT1cInNjcm9sbGVyT3B0aW9ucy5jb250ZW50U3R5bGVDbGFzc1wiIFtzdHlsZV09XCJzY3JvbGxlck9wdGlvbnMuY29udGVudFN0eWxlXCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLW11bHRpc2VsZWN0YWJsZT1cInRydWVcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImxpc3RMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1vcHRpb24gW25nRm9yT2ZdPVwiaXRlbXNcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzT3B0aW9uR3JvdXAob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgW2F0dHIuaWRdPVwiaWQgKyAnXycgKyBnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpXCIgY2xhc3M9XCJwLW11bHRpc2VsZWN0LWl0ZW0tZ3JvdXBcIiBbbmdTdHlsZV09XCJ7IGhlaWdodDogc2Nyb2xsZXJPcHRpb25zLml0ZW1TaXplICsgJ3B4JyB9XCIgcm9sZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZ3JvdXBUZW1wbGF0ZVwiPnt7IGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uLm9wdGlvbkdyb3VwKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJncm91cFRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogb3B0aW9uLm9wdGlvbkdyb3VwIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzT3B0aW9uR3JvdXAob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpZCArICdfJyArIGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbl09XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cImlzU2VsZWN0ZWQob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrSWNvblRlbXBsYXRlXT1cImNoZWNrSWNvblRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtU2l6ZV09XCJzY3JvbGxlck9wdGlvbnMuaXRlbVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZvY3VzZWRdPVwiZm9jdXNlZE9wdGlvbkluZGV4KCkgPT09IGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWFQb3NJbnNldF09XCJnZXRBcmlhUG9zSW5zZXQoZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWFTZXRTaXplXT1cImFyaWFTZXRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uT3B0aW9uU2VsZWN0KCRldmVudCwgZmFsc2UsIGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucykpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbk1vdXNlRW50ZXIpPVwib25PcHRpb25Nb3VzZUVudGVyKCRldmVudCwgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wLW11bHRpU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImhhc0ZpbHRlcigpICYmIGlzRW1wdHkoKVwiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1lbXB0eS1tZXNzYWdlXCIgW25nU3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbGVyT3B0aW9ucy5pdGVtU2l6ZSArICdweCcgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW1wdHlGaWx0ZXJUZW1wbGF0ZSAmJiAhZW1wdHlUZW1wbGF0ZTsgZWxzZSBlbXB0eUZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eUZpbHRlck1lc3NhZ2VMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgI2VtcHR5RmlsdGVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW1wdHlGaWx0ZXJUZW1wbGF0ZSB8fCBlbXB0eVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWhhc0ZpbHRlcigpICYmIGlzRW1wdHkoKVwiIGNsYXNzPVwicC1tdWx0aXNlbGVjdC1lbXB0eS1tZXNzYWdlXCIgW25nU3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbGVyT3B0aW9ucy5pdGVtU2l6ZSArICdweCcgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW1wdHlUZW1wbGF0ZTsgZWxzZSBlbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eU1lc3NhZ2VMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgI2VtcHR5ICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW1wdHlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tdWx0aXNlbGVjdC1mb290ZXJcIiAqbmdJZj1cImZvb3RlckZhY2V0IHx8IGZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbGFzdEhpZGRlbkZvY3VzYWJsZUVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlIHAtaGlkZGVuLWZvY3VzYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uTGFzdEhpZGRlbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtcC1oaWRkZW4tYWNjZXNzaWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXAtaGlkZGVuLWZvY3VzYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3Atb3ZlcmxheT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50IHAtaW5wdXR3cmFwcGVyJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1mb2N1c10nOiAnZm9jdXNlZCB8fCBvdmVybGF5VmlzaWJsZScsXG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtNVUxUSVNFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9tdWx0aXNlbGVjdC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBzdHJpbmcgdGhhdCBsYWJlbHMgdGhlIGlucHV0IGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhbmVsU3R5bGU6IGFueTtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgb3ZlcmxheSBwYW5lbCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhbmVsU3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElkZW50aWZpZXIgb2YgdGhlIGZvY3VzIGlucHV0IHRvIG1hdGNoIGEgbGFiZWwgZGVmaW5lZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgZWxlbWVudCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGNhbm5vdCBiZSBlZGl0ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBkaXNwbGF5IG9wdGlvbnMgYXMgZ3JvdXBlZCB3aGVuIG5lc3RlZCBvcHRpb25zIGFyZSBwcm92aWRlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBncm91cDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCwgZGlzcGxheXMgYW4gaW5wdXQgZmllbGQgdG8gZmlsdGVyIHRoZSBpdGVtcyBvbiBrZXl1cC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgcGxhY2Vob2xkZXIgb2YgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJQbGFjZUhvbGRlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIExvY2FsZSB0byB1c2UgaW4gZmlsdGVyaW5nLiBUaGUgZGVmYXVsdCBsb2NhbGUgaXMgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIG9wdGlvbnMgcGFuZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3ZlcmxheVZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5kZXggb2YgdGhlIGVsZW1lbnQgaW4gdGFiYmluZyBvcmRlci5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gMDtcbiAgICAvKipcbiAgICAgKiBUYXJnZXQgZWxlbWVudCB0byBhdHRhY2ggdGhlIG92ZXJsYXksIHZhbGlkIHZhbHVlcyBhcmUgXCJib2R5XCIgb3IgYSBsb2NhbCBuZy10ZW1wbGF0ZSB2YXJpYWJsZSBvZiBhbm90aGVyIGVsZW1lbnQgKG5vdGU6IHVzZSBiaW5kaW5nIHdpdGggYnJhY2tldHMgZm9yIHRlbXBsYXRlIHZhcmlhYmxlcywgZS5nLiBbYXBwZW5kVG9dPVwibXlkaXZcIiBmb3IgYSBkaXYgZWxlbWVudCBoYXZpbmcgI215ZGl2IGFzIHZhcmlhYmxlIG5hbWUpLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGFueTtcbiAgICAvKipcbiAgICAgKiBBIHByb3BlcnR5IHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdmFsdWUgaW4gb3B0aW9ucy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRXN0YWJsaXNoZXMgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIHRoZSBjb21wb25lbnQgYW5kIGxhYmVsKHMpIHdoZXJlIGl0cyB2YWx1ZSBzaG91bGQgYmUgb25lIG9yIG1vcmUgZWxlbWVudCBJRHMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgbGFiZWxzIG9mIHNlbGVjdGVkIGl0ZW0gbGFiZWxzIG9yIHVzZSBkZWZhdWx0IGxhYmVsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgdHJ1ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNldCBkaXNwbGF5U2VsZWN0ZWRMYWJlbCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVNlbGVjdGVkTGFiZWwgPSB2YWw7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5U2VsZWN0ZWRMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlTZWxlY3RlZExhYmVsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNpZGVzIGhvdyBtYW55IHNlbGVjdGVkIGl0ZW0gbGFiZWxzIHRvIHNob3cgYXQgbW9zdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlIDNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZXQgbWF4U2VsZWN0ZWRMYWJlbHModmFsOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heFNlbGVjdGVkTGFiZWxzID0gdmFsO1xuICAgIH1cbiAgICBnZXQgbWF4U2VsZWN0ZWRMYWJlbHMoKTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTZWxlY3RlZExhYmVscztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjaWRlcyBob3cgbWFueSBzZWxlY3RlZCBpdGVtIGxhYmVscyB0byBzaG93IGF0IG1vc3QuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0aW9uTGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMYWJlbCB0byBkaXNwbGF5IGFmdGVyIGV4Y2VlZGluZyBtYXggc2VsZWN0ZWQgbGFiZWxzIGUuZy4gKHswfSBpdGVtcyBzZWxlY3RlZCksIGRlZmF1bHRzIFwiZWxsaXBzaXNcIiBrZXl3b3JkIHRvIGluZGljYXRlIGEgdGV4dC1vdmVyZmxvdy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgdGhlIGNoZWNrYm94IGF0IGhlYWRlciB0byB0b2dnbGUgYWxsIGl0ZW1zIGF0IG9uY2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd1RvZ2dsZUFsbDogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gZmlsdGVyaW5nIGRvZXMgbm90IHJldHVybiBhbnkgcmVzdWx0cy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbXB0eUZpbHRlck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGlzIG5vIGRhdGEuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGZpbHRlciB2YWx1ZSB3aGVuIGhpZGluZyB0aGUgZHJvcGRvd24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcmVzZXRGaWx0ZXJPbkhpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJY29uIGNsYXNzIG9mIHRoZSBkcm9wZG93biBpY29uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRyb3Bkb3duSWNvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGxhYmVsIGZpZWxkIG9mIGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIHZhbHVlIGZpZWxkIG9mIGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25WYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGRpc2FibGVkIGZpZWxkIG9mIGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25EaXNhYmxlZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGxhYmVsIGZpZWxkIG9mIGFuIG9wdGlvbiBncm91cC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnbGFiZWwnO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIG9wdGlvbnMgZmllbGQgb2YgYW4gb3B0aW9uIGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwQ2hpbGRyZW46IHN0cmluZyA9ICdpdGVtcyc7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSBoZWFkZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogV2hlbiBmaWx0ZXJpbmcgaXMgZW5hYmxlZCwgZmlsdGVyQnkgZGVjaWRlcyB3aGljaCBmaWVsZCBvciBmaWVsZHMgKGNvbW1hIHNlcGFyYXRlZCkgdG8gc2VhcmNoIGFnYWluc3QuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGluIHBpeGVscywgYSBzY3JvbGxiYXIgaXMgZGVmaW5lZCBpZiBoZWlnaHQgb2YgbGlzdCBleGNlZWRzIHRoaXMgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmcgPSAnMjAwcHgnO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgaWYgZGF0YSBpcyBsb2FkZWQgYW5kIGludGVyYWN0ZWQgd2l0aCBpbiBsYXp5IG1hbm5lci5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBsYXp5OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgZGF0YSBzaG91bGQgYmUgbG9hZGVkIG9uIGRlbWFuZCBkdXJpbmcgc2Nyb2xsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIGFuIGl0ZW0gaW4gdGhlIGxpc3QgZm9yIFZpcnR1YWxTY3JvbGxpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbEl0ZW1TaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byB1c2UgdGhlIHNjcm9sbGVyIGZlYXR1cmUuIFRoZSBwcm9wZXJ0aWVzIG9mIHNjcm9sbGVyIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBsaWtlIGFuIG9iamVjdCBpbiBpdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsT3B0aW9uczogU2Nyb2xsZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gdXNlIG92ZXJsYXkgQVBJIGZlYXR1cmUuIFRoZSBwcm9wZXJ0aWVzIG9mIG92ZXJsYXkgQVBJIGNhbiBiZSB1c2VkIGxpa2UgYW4gb2JqZWN0IGluIGl0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG92ZXJsYXlPcHRpb25zOiBPdmVybGF5T3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXJpYUZpbHRlckxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBob3cgdGhlIGl0ZW1zIGFyZSBmaWx0ZXJlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJNYXRjaE1vZGU6ICdjb250YWlucycgfCAnc3RhcnRzV2l0aCcgfCAnZW5kc1dpdGgnIHwgJ2VxdWFscycgfCAnbm90RXF1YWxzJyB8ICdpbicgfCAnbHQnIHwgJ2x0ZScgfCAnZ3QnIHwgJ2d0ZScgPSAnY29udGFpbnMnO1xuICAgIC8qKlxuICAgICAqIEFkdmlzb3J5IGluZm9ybWF0aW9uIHRvIGRpc3BsYXkgaW4gYSB0b29sdGlwIG9uIGhvdmVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyA9ICcnO1xuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIG9mIHRoZSB0b29sdGlwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRvb2x0aXBQb3NpdGlvbjogJ3RvcCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgPSAncmlnaHQnO1xuICAgIC8qKlxuICAgICAqIFR5cGUgb2YgQ1NTIHBvc2l0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRvb2x0aXBQb3NpdGlvblN0eWxlOiBzdHJpbmcgPSAnYWJzb2x1dGUnO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSB0b29sdGlwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRvb2x0aXBTdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBmb2N1cyB0byB0aGUgZmlsdGVyIGVsZW1lbnQgd2hlbiB0aGUgb3ZlcmxheSBpcyBzaG93bi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhdXRvZm9jdXNGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgaG93IHRoZSBzZWxlY3RlZCBpdGVtcyBhcmUgZGlzcGxheWVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRpc3BsYXk6IHN0cmluZyB8ICdjb21tYScgfCAnY2hpcCcgPSAnY29tbWEnO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGF1dG9jb21wbGV0ZSBpcyBhY3RpdmUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmcgPSAnb2ZmJztcbiAgICAvKipcbiAgICAgKiBXaGVuIGVuYWJsZWQsIGEgY2xlYXIgaWNvbiBpcyBkaXNwbGF5ZWQgdG8gY2xlYXIgdGhlIHZhbHVlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNob3dDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBtYW5hZ2UgbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGF1dG9aSW5kZXgoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvWkluZGV4O1xuICAgIH1cbiAgICBzZXQgYXV0b1pJbmRleCh2YWw6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYXV0b1pJbmRleCA9IHZhbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgYXV0b1pJbmRleCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKiBCYXNlIHpJbmRleCB2YWx1ZSB0byB1c2UgaW4gbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGJhc2VaSW5kZXgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2VaSW5kZXg7XG4gICAgfVxuICAgIHNldCBiYXNlWkluZGV4KHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VaSW5kZXggPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGJhc2VaSW5kZXggcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBzaG93IGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgc2hvd1RyYW5zaXRpb25PcHRpb25zKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93VHJhbnNpdGlvbk9wdGlvbnM7XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbk9wdGlvbnModmFsOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2hvd1RyYW5zaXRpb25PcHRpb25zID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBzaG93VHJhbnNpdGlvbk9wdGlvbnMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBoaWRlIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgaGlkZVRyYW5zaXRpb25PcHRpb25zKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRlVHJhbnNpdGlvbk9wdGlvbnM7XG4gICAgfVxuICAgIHNldCBoaWRlVHJhbnNpdGlvbk9wdGlvbnModmFsOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faGlkZVRyYW5zaXRpb25PcHRpb25zID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBoaWRlVHJhbnNpdGlvbk9wdGlvbnMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGFiZWwgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGFyZSBubyBzZWxlY3Rpb25zLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZXByZWNhdGVkIFVzZSBwbGFjZWhvbGRlciBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNldCBkZWZhdWx0TGFiZWwodmFsOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdExhYmVsID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ2RlZmF1bHRMYWJlbCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIHNpbmNlIDE2LjYuMCwgdXNlIHBsYWNlaG9sZGVyIGluc3RlYWQnKTtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHRMYWJlbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhYmVsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMYWJlbCB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIHNlbGVjdGlvbnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnNldCh2YWwpO1xuICAgIH1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKTogU2lnbmFsPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIuYXNSZWFkb25seSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBvYmplY3RzIHRvIGRpc3BsYXkgYXMgdGhlIGF2YWlsYWJsZSBvcHRpb25zLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBvcHRpb25zKCk6IGFueVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIHNldCBvcHRpb25zKHZhbDogYW55W10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFPYmplY3RVdGlscy5kZWVwRXF1YWxzKHRoaXMuX29wdGlvbnMoKSwgdmFsKSkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zZXQodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCwgZmlsdGVyIGRpc3BsYXlzIHdpdGggdGhpcyB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgZmlsdGVyVmFsdWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJWYWx1ZSgpO1xuICAgIH1cbiAgICBzZXQgZmlsdGVyVmFsdWUodmFsOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlLnNldCh2YWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJdGVtIHNpemUgb2YgaXRlbSB0byBiZSB2aXJ0dWFsIHNjcm9sbGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZXByZWNhdGVkIHVzZSB2aXJ0dWFsU2Nyb2xsSXRlbVNpemUgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgaXRlbVNpemUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1TaXplO1xuICAgIH1cbiAgICBzZXQgaXRlbVNpemUodmFsOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faXRlbVNpemUgPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGl0ZW1TaXplIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHVzZSB2aXJ0dWFsU2Nyb2xsSXRlbVNpemUgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hldGhlciBhbGwgZGF0YSBpcyBzZWxlY3RlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgc2VsZWN0QWxsKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdEFsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdEFsbCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0QWxsID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpZWxkcyB1c2VkIHdoZW4gZmlsdGVyaW5nIHRoZSBvcHRpb25zLCBkZWZhdWx0cyB0byBvcHRpb25MYWJlbC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmb2N1c09uSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBGaWVsZHMgdXNlZCB3aGVuIGZpbHRlcmluZyB0aGUgb3B0aW9ucywgZGVmYXVsdHMgdG8gb3B0aW9uTGFiZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyRmllbGRzOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBvcHRpb24gd2lsbCBiZSBzZWxlY3RlZCBvbiBmb2N1cy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZWxlY3RPbkZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBmb2N1cyBvbiB0aGUgZmlyc3QgdmlzaWJsZSBvciBzZWxlY3RlZCBlbGVtZW50IHdoZW4gdGhlIG92ZXJsYXkgcGFuZWwgaXMgc2hvd24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXV0b09wdGlvbkZvY3VzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqIEBwYXJhbSB7TXVsdGlTZWxlY3RDaGFuZ2VFdmVudH0gZXZlbnQgLSBDdXN0b20gY2hhbmdlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE11bHRpU2VsZWN0Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNdWx0aVNlbGVjdENoYW5nZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGRhdGEgaXMgZmlsdGVyZWQuXG4gICAgICogQHBhcmFtIHtNdWx0aVNlbGVjdEZpbHRlckV2ZW50fSBldmVudCAtIEN1c3RvbSBmaWx0ZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8TXVsdGlTZWxlY3RGaWx0ZXJFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE11bHRpU2VsZWN0RmlsdGVyRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gbXVsdGlzZWxlY3QgcmVjZWl2ZXMgZm9jdXMuXG4gICAgICogQHBhcmFtIHtNdWx0aVNlbGVjdEZvY3VzRXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGZvY3VzIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8TXVsdGlTZWxlY3RGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TXVsdGlTZWxlY3RGb2N1c0V2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIG11bHRpc2VsZWN0IGxvc2VzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7TXVsdGlTZWxlY3RCbHVyRXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGJsdXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPE11bHRpU2VsZWN0Qmx1ckV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TXVsdGlTZWxlY3RCbHVyRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gY29tcG9uZW50IGlzIGNsaWNrZWQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBCcm93c2VyIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBpbnB1dCBmaWVsZCBpcyBjbGVhcmVkLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gb3ZlcmxheSBwYW5lbCBiZWNvbWVzIHZpc2libGUuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uUGFuZWxTaG93OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gb3ZlcmxheSBwYW5lbCBiZWNvbWVzIGhpZGRlbi5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25QYW5lbEhpZGU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2UgaW4gbGF6eSBtb2RlIHRvIGxvYWQgbmV3IGRhdGEuXG4gICAgICogQHBhcmFtIHtNdWx0aVNlbGVjdExhenlMb2FkRXZlbnR9IGV2ZW50IC0gTGF6eSBsb2FkIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkxhenlMb2FkOiBFdmVudEVtaXR0ZXI8TXVsdGlTZWxlY3RMYXp5TG9hZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TXVsdGlTZWxlY3RMYXp5TG9hZEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBpbiBsYXp5IG1vZGUgdG8gbG9hZCBuZXcgZGF0YS5cbiAgICAgKiBAcGFyYW0ge011bHRpU2VsZWN0UmVtb3ZlRXZlbnR9IGV2ZW50IC0gUmVtb3ZlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPE11bHRpU2VsZWN0UmVtb3ZlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNdWx0aVNlbGVjdFJlbW92ZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGFsbCBkYXRhIGlzIHNlbGVjdGVkLlxuICAgICAqIEBwYXJhbSB7TXVsdGlTZWxlY3RTZWxlY3RBbGxDaGFuZ2VFdmVudH0gZXZlbnQgLSBDdXN0b20gc2VsZWN0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblNlbGVjdEFsbENoYW5nZTogRXZlbnRFbWl0dGVyPE11bHRpU2VsZWN0U2VsZWN0QWxsQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNdWx0aVNlbGVjdFNlbGVjdEFsbENoYW5nZUV2ZW50PigpO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5Vmlld0NoaWxkOiBOdWxsYWJsZTxPdmVybGF5PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXRDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdmb2N1c0lucHV0JykgZm9jdXNJbnB1dFZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdpdGVtcycpIGl0ZW1zVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbGVyJykgc2Nyb2xsZXI6IE51bGxhYmxlPFNjcm9sbGVyPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2xhc3RIaWRkZW5Gb2N1c2FibGVFbCcpIGxhc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50T25PdmVybGF5OiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2ZpcnN0SGlkZGVuRm9jdXNhYmxlRWwnKSBmaXJzdEhpZGRlbkZvY3VzYWJsZUVsZW1lbnRPbk92ZXJsYXk6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnaGVhZGVyQ2hlY2tib3gnKSBoZWFkZXJDaGVja2JveFZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAQ29udGVudENoaWxkKEZvb3RlcikgZm9vdGVyRmFjZXQ6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoSGVhZGVyKSBoZWFkZXJGYWNldDogYW55O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IE51bGxhYmxlPFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPj47XG5cbiAgICBzZWFyY2hWYWx1ZTogTnVsbGFibGU8c3RyaW5nPjtcblxuICAgIHNlYXJjaFRpbWVvdXQ6IGFueTtcblxuICAgIF9zZWxlY3RBbGw6IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsID0gbnVsbDtcblxuICAgIF9hdXRvWkluZGV4OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgX2Jhc2VaSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIF9zaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIF9oaWRlVHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIF9kZWZhdWx0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIF9wbGFjZWhvbGRlciA9IHNpZ25hbDxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgICBfaXRlbVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIF9zZWxlY3Rpb25MaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgdmFsdWU6IGFueVtdO1xuXG4gICAgcHVibGljIF9maWx0ZXJlZE9wdGlvbnM6IGFueVtdIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIHB1YmxpYyBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIHZhbHVlc0FzU3RyaW5nOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZm9jdXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZmlsdGVyZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgbG9hZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZmlsdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZW1wdHlGaWx0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBlbXB0eVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbXNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIGNoZWNrSWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgZmlsdGVySWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgcmVtb3ZlVG9rZW5JY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBjbG9zZUljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIGNsZWFySWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgZHJvcGRvd25JY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgaGVhZGVyQ2hlY2tib3hGb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIGZpbHRlck9wdGlvbnM6IE11bHRpU2VsZWN0RmlsdGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcblxuICAgIHByZXZlbnRNb2RlbFRvdWNoZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBwcmV2ZW50RG9jdW1lbnREZWZhdWx0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaXRlbXNXcmFwcGVyOiBhbnk7XG5cbiAgICBfZGlzcGxheVNlbGVjdGVkTGFiZWw6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgX21heFNlbGVjdGVkTGFiZWxzOiBudW1iZXIgPSAzO1xuXG4gICAgbW9kZWxWYWx1ZSA9IHNpZ25hbDxhbnk+KG51bGwpO1xuXG4gICAgX2ZpbHRlclZhbHVlID0gc2lnbmFsPGFueT4obnVsbCk7XG5cbiAgICBfb3B0aW9ucyA9IHNpZ25hbDxhbnlbXT4obnVsbCk7XG5cbiAgICBzdGFydFJhbmdlSW5kZXggPSBzaWduYWw8bnVtYmVyPigtMSk7XG5cbiAgICBmb2N1c2VkT3B0aW9uSW5kZXggPSBzaWduYWw8bnVtYmVyPigtMSk7XG5cbiAgICBzZWxlY3RlZE9wdGlvbnM6IGFueTtcblxuICAgIGNsaWNrSW5Qcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0IGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtbXVsdGlzZWxlY3QgcC1jb21wb25lbnQgcC1pbnB1dHdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ3AtbXVsdGlzZWxlY3QtY2xlYXJhYmxlJzogdGhpcy5zaG93Q2xlYXIgJiYgIXRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAncC1tdWx0aXNlbGVjdC1jaGlwJzogdGhpcy5kaXNwbGF5ID09PSAnY2hpcCcsXG4gICAgICAgICAgICAncC1mb2N1cyc6IHRoaXMuZm9jdXNlZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBpbnB1dENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtbXVsdGlzZWxlY3QtbGFiZWwgcC1pbnB1dHRleHQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtcGxhY2Vob2xkZXInOiAodGhpcy5wbGFjZWhvbGRlcigpIHx8IHRoaXMuZGVmYXVsdExhYmVsKSAmJiAodGhpcy5sYWJlbCgpID09PSB0aGlzLnBsYWNlaG9sZGVyKCkgfHwgdGhpcy5sYWJlbCgpID09PSB0aGlzLmRlZmF1bHRMYWJlbCksXG4gICAgICAgICAgICAncC1tdWx0aXNlbGVjdC1sYWJlbC1lbXB0eSc6ICF0aGlzLnNlbGVjdGVkSXRlbXNUZW1wbGF0ZSAmJiAodGhpcy5sYWJlbCgpID09PSAncC1lbXB0eWxhYmVsJyB8fCB0aGlzLmxhYmVsKCkubGVuZ3RoID09PSAwKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBwYW5lbENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtbXVsdGlzZWxlY3QtcGFuZWwgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtaW5wdXQtZmlsbGVkJzogdGhpcy5jb25maWcuaW5wdXRTdHlsZSA9PT0gJ2ZpbGxlZCcsXG4gICAgICAgICAgICAncC1yaXBwbGUtZGlzYWJsZWQnOiB0aGlzLmNvbmZpZy5yaXBwbGUgPT09IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1tdWx0aXNlbGVjdC1sYWJlbCc6IHRydWUsXG4gICAgICAgICAgICAncC1wbGFjZWhvbGRlcic6IHRoaXMubGFiZWwoKSA9PT0gdGhpcy5wbGFjZWhvbGRlcigpIHx8IHRoaXMubGFiZWwoKSA9PT0gdGhpcy5kZWZhdWx0TGFiZWwsXG4gICAgICAgICAgICAncC1tdWx0aXNlbGVjdC1sYWJlbC1lbXB0eSc6ICF0aGlzLnBsYWNlaG9sZGVyKCkgJiYgIXRoaXMuZGVmYXVsdExhYmVsICYmICghdGhpcy5tb2RlbFZhbHVlKCkgfHwgdGhpcy5tb2RlbFZhbHVlKCkubGVuZ3RoID09PSAwKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBlbXB0eU1lc3NhZ2VMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU1lc3NhZ2UgfHwgdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkVNUFRZX01FU1NBR0UpO1xuICAgIH1cblxuICAgIGdldCBlbXB0eUZpbHRlck1lc3NhZ2VMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eUZpbHRlck1lc3NhZ2UgfHwgdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkVNUFRZX0ZJTFRFUl9NRVNTQUdFKTtcbiAgICB9XG5cbiAgICBnZXQgZmlsbGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubW9kZWxWYWx1ZSgpID09PSAnc3RyaW5nJykgcmV0dXJuICEhdGhpcy5tb2RlbFZhbHVlKCk7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmlzTm90RW1wdHkodGhpcy5tb2RlbFZhbHVlKCkpO1xuICAgIH1cblxuICAgIGdldCBpc1Zpc2libGVDbGVhckljb24oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsVmFsdWUoKSAhPSBudWxsICYmIHRoaXMubW9kZWxWYWx1ZSgpICE9PSAnJyAmJiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKSAmJiB0aGlzLnNob3dDbGVhciAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmZpbGxlZDtcbiAgICB9XG5cbiAgICBnZXQgdG9nZ2xlQWxsQXJpYUxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudHJhbnNsYXRpb24uYXJpYSA/IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmFyaWFbdGhpcy5hbGxTZWxlY3RlZCgpID8gJ3NlbGVjdEFsbCcgOiAndW5zZWxlY3RBbGwnXSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgY2xvc2VBcmlhTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5hcmlhID8gdGhpcy5jb25maWcudHJhbnNsYXRpb24uYXJpYS5jbG9zZSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdExhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRUcmFuc2xhdGlvbihUcmFuc2xhdGlvbktleXMuQVJJQSlbJ2xpc3RMYWJlbCddO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QWxsVmlzaWJsZUFuZE5vblZpc2libGVPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZmxhdE9wdGlvbnModGhpcy5vcHRpb25zKSA6IHRoaXMub3B0aW9ucyB8fCBbXTtcbiAgICB9XG5cbiAgICB2aXNpYmxlT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0QWxsVmlzaWJsZUFuZE5vblZpc2libGVPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlPZk9iamVjdHMgPSBPYmplY3RVdGlscy5pc0FycmF5KG9wdGlvbnMpICYmIE9iamVjdFV0aWxzLmlzT2JqZWN0KG9wdGlvbnNbMF0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJWYWx1ZSgpKSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRPcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAoaXNBcnJheU9mT2JqZWN0cykge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIob3B0aW9ucywgdGhpcy5zZWFyY2hGaWVsZHMoKSwgdGhpcy5fZmlsdGVyVmFsdWUoKSwgdGhpcy5maWx0ZXJNYXRjaE1vZGUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLl9maWx0ZXJWYWx1ZSgpLnRvTG9jYWxlTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25Hcm91cHMgPSB0aGlzLm9wdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBbXTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbkdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cENoaWxkcmVuID0gdGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKGdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IGdyb3VwQ2hpbGRyZW4uZmlsdGVyKChpdGVtKSA9PiBmaWx0ZXJlZE9wdGlvbnMuaW5jbHVkZXMoaXRlbSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA+IDApIGZpbHRlcmVkLnB1c2goeyAuLi5ncm91cCwgW3R5cGVvZiB0aGlzLm9wdGlvbkdyb3VwQ2hpbGRyZW4gPT09ICdzdHJpbmcnID8gdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuIDogJ2l0ZW1zJ106IFsuLi5maWx0ZXJlZEl0ZW1zXSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZsYXRPcHRpb25zKGZpbHRlcmVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9KTtcblxuICAgIGxhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBsZXQgbGFiZWw7XG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB0aGlzLm1vZGVsVmFsdWUoKTtcblxuICAgICAgICBpZiAobW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmxlbmd0aCAmJiB0aGlzLmRpc3BsYXlTZWxlY3RlZExhYmVsKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1heFNlbGVjdGVkTGFiZWxzKSAmJiBtb2RlbFZhbHVlLmxlbmd0aCA+IHRoaXMubWF4U2VsZWN0ZWRMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZEl0ZW1zTGFiZWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSAnJztcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgKz0gJywgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICs9IHRoaXMuZ2V0TGFiZWxCeVZhbHVlKG1vZGVsVmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gdGhpcy5wbGFjZWhvbGRlcigpIHx8IHRoaXMuZGVmYXVsdExhYmVsIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGNoaXBTZWxlY3RlZEl0ZW1zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1heFNlbGVjdGVkTGFiZWxzKSAmJiB0aGlzLm1vZGVsVmFsdWUoKSAmJiB0aGlzLm1vZGVsVmFsdWUoKS5sZW5ndGggPiB0aGlzLm1heFNlbGVjdGVkTGFiZWxzID8gdGhpcy5tb2RlbFZhbHVlKCkuc2xpY2UoMCwgdGhpcy5tYXhTZWxlY3RlZExhYmVscykgOiB0aGlzLm1vZGVsVmFsdWUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUsIHB1YmxpYyBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnLCBwdWJsaWMgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlKSB7XG4gICAgICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdGhpcy5tb2RlbFZhbHVlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZpc2libGVPcHRpb25zID0gdGhpcy52aXNpYmxlT3B0aW9ucygpO1xuICAgICAgICAgICAgaWYgKHZpc2libGVPcHRpb25zICYmIE9iamVjdFV0aWxzLmlzTm90RW1wdHkodmlzaWJsZU9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uVmFsdWUgJiYgdGhpcy5vcHRpb25MYWJlbCAmJiBtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdmlzaWJsZU9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG1vZGVsVmFsdWUuaW5jbHVkZXMob3B0aW9uW3RoaXMub3B0aW9uTGFiZWxdKSB8fCBtb2RlbFZhbHVlLmluY2x1ZGVzKG9wdGlvblt0aGlzLm9wdGlvblZhbHVlXSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gbW9kZWxWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZU1vZGVsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyQnkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6ICh2YWx1ZSkgPT4gdGhpcy5vbkZpbHRlcklucHV0Q2hhbmdlKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT4gdGhpcy5yZXNldEZpbHRlcigpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF4U2VsZWN0aW9uTGltaXRSZWFjaGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25MaW1pdCAmJiB0aGlzLm1vZGVsVmFsdWUoKSAmJiB0aGlzLm1vZGVsVmFsdWUoKS5sZW5ndGggPT09IHRoaXMuc2VsZWN0aW9uTGltaXQ7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAodGhpcy50ZW1wbGF0ZXMgYXMgUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdncm91cCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWRJdGVtcyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1RlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmaWx0ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eWZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlGaWx0ZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xvYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNraWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcmljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZldG9rZW5pY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb2tlbkljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY2xvc2VpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY2xlYXJpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZHJvcGRvd25pY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bkljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlWaWV3Q2hpbGQ/LmFsaWduT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGF0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucyB8fCBbXSkucmVkdWNlKChyZXN1bHQsIG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgb3B0aW9uR3JvdXA6IG9wdGlvbiwgZ3JvdXA6IHRydWUsIGluZGV4IH0pO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25Hcm91cENoaWxkcmVuID0gdGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdGlvbik7XG5cbiAgICAgICAgICAgIG9wdGlvbkdyb3VwQ2hpbGRyZW4gJiYgb3B0aW9uR3JvdXBDaGlsZHJlbi5mb3JFYWNoKChvKSA9PiByZXN1bHQucHVzaChvKSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBhdXRvVXBkYXRlTW9kZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE9uRm9jdXMgJiYgdGhpcy5hdXRvT3B0aW9uRm9jdXMgJiYgIXRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCkpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldE9wdGlvblZhbHVlKHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpXSk7XG4gICAgICAgICAgICB0aGlzLm9uT3B0aW9uU2VsZWN0KHsgb3JpZ2luYWxFdmVudDogbnVsbCwgb3B0aW9uOiBbdmFsdWVdIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgdmFsdWUuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQ/KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlLnNldCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25JbnB1dENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0KGV2ZW50LCBpc0ZvY3VzID0gZmFsc2UsIGluZGV4ID0gLTEpIHtcbiAgICAgICAgY29uc3QgeyBvcmlnaW5hbEV2ZW50LCBvcHRpb24gfSA9IGV2ZW50O1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKG9wdGlvbik7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMubW9kZWxWYWx1ZSgpLmZpbHRlcigodmFsKSA9PiAhT2JqZWN0VXRpbHMuZXF1YWxzKHZhbCwgdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pLCB0aGlzLmVxdWFsaXR5S2V5KCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gWy4uLih0aGlzLm1vZGVsVmFsdWUoKSB8fCBbXSksIHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlLCBvcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgaW5kZXggIT09IC0xICYmIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldChpbmRleCk7XG5cbiAgICAgICAgaXNGb2N1cyAmJiBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgaXRlbVZhbHVlOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgPyB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbikpIDogLTE7XG4gICAgfVxuXG4gICAgb25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgc3RhcnQgPSAtMSwgZW5kID0gLTEpIHtcbiAgICAgICAgc3RhcnQgPT09IC0xICYmIChzdGFydCA9IHRoaXMuZmluZE5lYXJlc3RTZWxlY3RlZE9wdGlvbkluZGV4KGVuZCwgdHJ1ZSkpO1xuICAgICAgICBlbmQgPT09IC0xICYmIChlbmQgPSB0aGlzLmZpbmROZWFyZXN0U2VsZWN0ZWRPcHRpb25JbmRleChzdGFydCkpO1xuXG4gICAgICAgIGlmIChzdGFydCAhPT0gLTEgJiYgZW5kICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2VTdGFydCA9IE1hdGgubWluKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgY29uc3QgcmFuZ2VFbmQgPSBNYXRoLm1heChzdGFydCwgZW5kKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kICsgMSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKVxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoRmllbGRzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZmlsdGVyQnkgfHwgdGhpcy5vcHRpb25MYWJlbCB8fCAnbGFiZWwnKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZpbmROZWFyZXN0U2VsZWN0ZWRPcHRpb25JbmRleChpbmRleCwgZmlyc3RDaGVja1VwID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IG1hdGNoZWRPcHRpb25JbmRleCA9IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdENoZWNrVXApIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkT3B0aW9uSW5kZXggPSB0aGlzLmZpbmRQcmV2U2VsZWN0ZWRPcHRpb25JbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9wdGlvbkluZGV4ID0gbWF0Y2hlZE9wdGlvbkluZGV4ID09PSAtMSA/IHRoaXMuZmluZE5leHRTZWxlY3RlZE9wdGlvbkluZGV4KGluZGV4KSA6IG1hdGNoZWRPcHRpb25JbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9wdGlvbkluZGV4ID0gdGhpcy5maW5kTmV4dFNlbGVjdGVkT3B0aW9uSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIG1hdGNoZWRPcHRpb25JbmRleCA9IG1hdGNoZWRPcHRpb25JbmRleCA9PT0gLTEgPyB0aGlzLmZpbmRQcmV2U2VsZWN0ZWRPcHRpb25JbmRleChpbmRleCkgOiBtYXRjaGVkT3B0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbkluZGV4ID4gLTEgPyBtYXRjaGVkT3B0aW9uSW5kZXggOiBpbmRleDtcbiAgICB9XG5cbiAgICBmaW5kUHJldlNlbGVjdGVkT3B0aW9uSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbkluZGV4ID0gdGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpICYmIGluZGV4ID4gMCA/IE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLnNsaWNlKDAsIGluZGV4KSwgKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkU2VsZWN0ZWRPcHRpb24ob3B0aW9uKSkgOiAtMTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbkluZGV4ID4gLTEgPyBtYXRjaGVkT3B0aW9uSW5kZXggOiAtMTtcbiAgICB9XG5cbiAgICBmaW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmZpbmRGaXJzdFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCA8IDAgPyB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkgOiBzZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIGZpbmRGaXJzdE9wdGlvbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlT3B0aW9ucygpLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgZmluZEZpcnN0U2VsZWN0ZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkU2VsZWN0ZWRPcHRpb24ob3B0aW9uKSkgOiAtMTtcbiAgICB9XG5cbiAgICBmaW5kTmV4dFNlbGVjdGVkT3B0aW9uSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbkluZGV4ID1cbiAgICAgICAgICAgIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSAmJiBpbmRleCA8IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkU2VsZWN0ZWRPcHRpb24ob3B0aW9uKSlcbiAgICAgICAgICAgICAgICA6IC0xO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkT3B0aW9uSW5kZXggPiAtMSA/IG1hdGNoZWRPcHRpb25JbmRleCArIGluZGV4ICsgMSA6IC0xO1xuICAgIH1cblxuICAgIGVxdWFsaXR5S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25WYWx1ZSA/IG51bGwgOiB0aGlzLmRhdGFLZXk7XG4gICAgfVxuXG4gICAgaGFzU2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkU2VsZWN0ZWRPcHRpb24ob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSAmJiB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBpc09wdGlvbkdyb3VwKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ3JvdXAgfHwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSAmJiBvcHRpb24ub3B0aW9uR3JvdXAgJiYgb3B0aW9uLmdyb3VwO1xuICAgIH1cblxuICAgIGlzVmFsaWRPcHRpb24ob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gJiYgISh0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB8fCB0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgaXNPcHRpb25EaXNhYmxlZChvcHRpb246IGFueSkge1xuICAgICAgICBpZiAodGhpcy5tYXhTZWxlY3Rpb25MaW1pdFJlYWNoZWQoKSAmJiAhdGhpcy5pc1NlbGVjdGVkKG9wdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkRpc2FibGVkID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uRGlzYWJsZWQpIDogb3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9uLmRpc2FibGVkIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChvcHRpb24pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbik7XG4gICAgICAgIHJldHVybiAodGhpcy5tb2RlbFZhbHVlKCkgfHwgW10pLnNvbWUoKHZhbHVlKSA9PiBPYmplY3RVdGlscy5lcXVhbHModmFsdWUsIG9wdGlvblZhbHVlLCB0aGlzLmVxdWFsaXR5S2V5KCkpKTtcbiAgICB9XG5cbiAgICBpc09wdGlvbk1hdGNoZWQob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSAmJiB0aGlzLmdldE9wdGlvbkxhYmVsKG9wdGlvbikudG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9vcHRpb25zKCkgfHwgKHRoaXMudmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoID09PSAwKTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25JbmRleChpbmRleCwgc2Nyb2xsZXJPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGxlckRpc2FibGVkID8gaW5kZXggOiBzY3JvbGxlck9wdGlvbnMgJiYgc2Nyb2xsZXJPcHRpb25zLmdldEl0ZW1PcHRpb25zKGluZGV4KVsnaW5kZXgnXTtcbiAgICB9XG5cbiAgICBnZXRBcmlhUG9zSW5zZXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0aGlzLm9wdGlvbkdyb3VwTGFiZWxcbiAgICAgICAgICAgICAgICA/IGluZGV4IC1cbiAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IHRoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pKS5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IGluZGV4KSArIDFcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXQgYXJpYVNldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmlsdGVyKChvcHRpb24pID0+ICF0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSkubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldExhYmVsQnlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5ncm91cCA/IHRoaXMuZmxhdE9wdGlvbnModGhpcy5fb3B0aW9ucygpKSA6IHRoaXMuX29wdGlvbnMoKSB8fCBbXTtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiAhdGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbikgJiYgT2JqZWN0VXRpbHMuZXF1YWxzKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSwgdmFsdWUsIHRoaXMuZXF1YWxpdHlLZXkoKSkpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbiA/IHRoaXMuZ2V0T3B0aW9uTGFiZWwobWF0Y2hlZE9wdGlvbikgOiBudWxsO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkSXRlbXNMYWJlbCgpIHtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAveyguKj8pfS87XG4gICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5zZWxlY3RlZEl0ZW1zTGFiZWwgPyB0aGlzLnNlbGVjdGVkSXRlbXNMYWJlbCA6IHRoaXMuY29uZmlnLmdldFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uS2V5cy5TRUxFQ1RJT05fTUVTU0FHRSk7XG5cbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChtZXNzYWdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShtZXNzYWdlLm1hdGNoKHBhdHRlcm4pWzBdLCB0aGlzLm1vZGVsVmFsdWUoKS5sZW5ndGggKyAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25MYWJlbChvcHRpb246IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkxhYmVsKSA6IG9wdGlvbiAmJiBvcHRpb24ubGFiZWwgIT0gdW5kZWZpbmVkID8gb3B0aW9uLmxhYmVsIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogIXRoaXMub3B0aW9uTGFiZWwgJiYgb3B0aW9uICYmIG9wdGlvbi52YWx1ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uR3JvdXA6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSA6IG9wdGlvbkdyb3VwICYmIG9wdGlvbkdyb3VwLmxhYmVsICE9IHVuZGVmaW5lZCA/IG9wdGlvbkdyb3VwLmxhYmVsIDogb3B0aW9uR3JvdXA7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb25Hcm91cDogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkdyb3VwQ2hpbGRyZW4gPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbkdyb3VwLCB0aGlzLm9wdGlvbkdyb3VwQ2hpbGRyZW4pIDogb3B0aW9uR3JvdXAuaXRlbXM7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhvbWVLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhZ2VEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFnZVVwS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMub25FbnRlcktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVzY2FwZUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgICAgICAgdGhpcy5vblRhYktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdTaGlmdFJpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hpZnRLZXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleUEnICYmIG1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSAmJiBPYmplY3RVdGlscy5pc1ByaW50YWJsZUNoYXJhY3RlcihldmVudC5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaE9wdGlvbnMoZXZlbnQsIGV2ZW50LmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbHRlcktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dVcEtleShldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dMZWZ0S2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhvbWVLZXkoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRLZXkoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXNjYXBlS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyb3dMZWZ0S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBwcmVzc2VkSW5JbnB1dFRleHQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBwcmVzc2VkSW5JbnB1dFRleHQgJiYgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICB9XG5cbiAgICBvbkFycm93RG93bktleShldmVudCkge1xuICAgICAgICBjb25zdCBvcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xID8gdGhpcy5maW5kTmV4dE9wdGlvbkluZGV4KHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpIDogdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgdGhpcy5zdGFydFJhbmdlSW5kZXgoKSwgb3B0aW9uSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcbiAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG9uQXJyb3dVcEtleShldmVudCwgcHJlc3NlZEluSW5wdXRUZXh0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiAhcHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uU2VsZWN0KGV2ZW50LCB0aGlzLnZpc2libGVPcHRpb25zKClbdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyB0aGlzLmZpbmRQcmV2T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSkgOiB0aGlzLmZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgb3B0aW9uSW5kZXgsIHRoaXMuc3RhcnRSYW5nZUluZGV4KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuXG4gICAgICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgb25Ib21lS2V5KGV2ZW50LCBwcmVzc2VkSW5JbnB1dFRleHQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICAgIGlmIChwcmVzc2VkSW5JbnB1dFRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGN1cnJlbnRUYXJnZXQudmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIGV2ZW50LnNoaWZ0S2V5ID8gbGVuIDogMCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgICAgICBsZXQgb3B0aW9uSW5kZXggPSB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdFJhbmdlKGV2ZW50LCBvcHRpb25JbmRleCwgdGhpcy5zdGFydFJhbmdlSW5kZXgoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG5cbiAgICAgICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkVuZEtleShldmVudCwgcHJlc3NlZEluSW5wdXRUZXh0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudDtcblxuICAgICAgICBpZiAocHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBjdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoZXZlbnQuc2hpZnRLZXkgPyAwIDogbGVuLCBsZW4pO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtZXRhS2V5ID0gZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5O1xuICAgICAgICAgICAgbGV0IG9wdGlvbkluZGV4ID0gdGhpcy5maW5kTGFzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgbWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgdGhpcy5zdGFydFJhbmdlSW5kZXgoKSwgb3B0aW9uSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuXG4gICAgICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25QYWdlRG93bktleShldmVudCkge1xuICAgICAgICB0aGlzLnNjcm9sbEluVmlldyh0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoIC0gMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25QYWdlVXBLZXkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcoMCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25FbnRlcktleShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBvcHRpb246IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpXSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRXNjYXBlS2V5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5oaWRlKHRydWUpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRGVsZXRlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dDbGVhcikge1xuICAgICAgICAgICAgdGhpcy5jbGVhcihldmVudCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UYWJLZXkoZXZlbnQsIHByZXNzZWRJbklucHV0VGV4dCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghcHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhhc0ZvY3VzYWJsZUVsZW1lbnRzKCkpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKGV2ZW50LnNoaWZ0S2V5ID8gdGhpcy5sYXN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudE9uT3ZlcmxheS5uYXRpdmVFbGVtZW50IDogdGhpcy5maXJzdEhpZGRlbkZvY3VzYWJsZUVsZW1lbnRPbk92ZXJsYXkubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBvcHRpb246IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpXSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSh0aGlzLmZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNoaWZ0S2V5KCkge1xuICAgICAgICB0aGlzLnN0YXJ0UmFuZ2VJbmRleC5zZXQodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSk7XG4gICAgfVxuXG4gICAgb25Db250YWluZXJDbGljayhldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkgfHwgKGV2ZW50LnRhcmdldCBhcyBOb2RlKS5pc1NhbWVOb2RlKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBjLXNlY3Rpb24nKSA9PT0gJ2NsZWFyaWNvbicgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBjLXNlY3Rpb249XCJjbGVhcmljb25cIl0nKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vdmVybGF5Vmlld0NoaWxkIHx8ICF0aGlzLm92ZXJsYXlWaWV3Q2hpbGQuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja0luUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2xpY2tJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0luUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDE1MCk7XG5cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPyB0aGlzLmhpZGUodHJ1ZSkgOiB0aGlzLnNob3codHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbkZpcnN0SGlkZGVuRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWwgPVxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gdGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICAgICAgPyBEb21IYW5kbGVyLmdldEZpcnN0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLm92ZXJsYXlWaWV3Q2hpbGQ/Lm92ZXJsYXlWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsICc6bm90KFtkYXRhLXAtaGlkZGVuLWZvY3VzYWJsZT1cInRydWVcIl0pJylcbiAgICAgICAgICAgICAgICA6IHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBEb21IYW5kbGVyLmZvY3VzKGZvY3VzYWJsZUVsKTtcbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xID8gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSA6IHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5hdXRvT3B0aW9uRm9jdXMgPyB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpIDogLTE7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldChmb2N1c2VkT3B0aW9uSW5kZXgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2Nyb2xsSW5WaWV3KHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXRCbHVyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJsdXIuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50IH0pO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ZW50TW9kZWxUb3VjaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25GaWx0ZXJJbnB1dENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBmaWx0ZXI6IHRoaXMuX2ZpbHRlclZhbHVlKCkgfSk7XG5cbiAgICAgICAgIXRoaXMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQgJiYgdGhpcy5zY3JvbGxlci5zY3JvbGxUb0luZGV4KDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpZXdDaGlsZC5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25MYXN0SGlkZGVuRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWwgPVxuICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gdGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICAgICAgPyBEb21IYW5kbGVyLmdldExhc3RGb2N1c2FibGVFbGVtZW50KHRoaXMub3ZlcmxheVZpZXdDaGlsZD8ub3ZlcmxheVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCwgJzpub3QoW2RhdGEtcC1oaWRkZW4tZm9jdXNhYmxlPVwidHJ1ZVwiXSknKVxuICAgICAgICAgICAgICAgIDogdGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIERvbUhhbmRsZXIuZm9jdXMoZm9jdXNhYmxlRWwpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uTW91c2VFbnRlcihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNPbkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IZWFkZXJDaGVja2JveEtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Ub2dnbGVBbGwoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMub25Ub2dnbGVBbGwoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmlsdGVyQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgIH1cblxuICAgIG9uSGVhZGVyQ2hlY2tib3hGb2N1cygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJDaGVja2JveEZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkhlYWRlckNoZWNrYm94Qmx1cigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJDaGVja2JveEZvY3VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVBbGwoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RBbGxDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogIXRoaXMuYWxsU2VsZWN0ZWQoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYWxsU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgID8gdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiAhdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IHRoaXMuaXNTZWxlY3RlZChvcHRpb24pIHx8IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQpO1xuXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9uVG9nZ2xlQWxsIGNvdWxkIGhhdmUgYmVlbiBjYWxsZWQgZHVyaW5nIGZpbHRlcmluZywgIHRoaXMgYWRkaXRpb25hbCB0ZXN0IG5lZWRzIHRvIGJlIHBlcmZvcm1lZCBiZWZvcmUgY2FsbGluZyBvblNlbGVjdEFsbENoYW5nZS5lbWl0XG4gICAgICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggPT09IHRoaXMuZ2V0QWxsVmlzaWJsZUFuZE5vblZpc2libGVPcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdEFsbENoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICEhdmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICAgIERvbUhhbmRsZXIuZm9jdXModGhpcy5oZWFkZXJDaGVja2JveFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3hGb2N1cyA9IHRydWU7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldChpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEluVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZpcnR1YWxTY3JvbGxlckRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMudmlydHVhbFNjcm9sbDtcbiAgICB9XG5cbiAgICBzY3JvbGxJblZpZXcoaW5kZXggPSAtMSkge1xuICAgICAgICBjb25zdCBpZCA9IGluZGV4ICE9PSAtMSA/IGAke3RoaXMuaWR9XyR7aW5kZXh9YCA6IHRoaXMuZm9jdXNlZE9wdGlvbklkO1xuICAgICAgICBpZiAodGhpcy5pdGVtc1ZpZXdDaGlsZCAmJiB0aGlzLml0ZW1zVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5pdGVtc1ZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCBgbGlbaWQ9XCIke2lkfVwiXWApO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3ICYmIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICduZWFyZXN0JyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsICYmIHRoaXMuc2Nyb2xsZXI/LnNjcm9sbFRvSW5kZXgoaW5kZXggIT09IC0xID8gaW5kZXggOiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBmb2N1c2VkT3B0aW9uSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IGAke3RoaXMuaWR9XyR7dGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKX1gIDogbnVsbDtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUuc2V0KHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGFsbFNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RBbGwgIT09IG51bGwgPyB0aGlzLnNlbGVjdEFsbCA6IE9iamVjdFV0aWxzLmlzTm90RW1wdHkodGhpcy52aXNpYmxlT3B0aW9ucygpKSAmJiB0aGlzLnZpc2libGVPcHRpb25zKCkuZXZlcnkoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbikgfHwgdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikgfHwgdGhpcy5pc1NlbGVjdGVkKG9wdGlvbikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIHRoZSBwYW5lbC5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHNob3coaXNGb2N1cz8pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xID8gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSA6IHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IC0xO1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoZm9jdXNlZE9wdGlvbkluZGV4KTtcblxuICAgICAgICBpZiAoaXNGb2N1cykge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgcGFuZWwuXG4gICAgICogQGdyb3VwIE1ldGhvZFxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlKGlzRm9jdXM/KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcblxuICAgICAgICBpZiAodGhpcy5maWx0ZXIgJiYgdGhpcy5yZXNldEZpbHRlck9uSGlkZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNGb2N1cyAmJiBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMub25QYW5lbEhpZGUuZW1pdCgpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIG9uT3ZlcmxheUFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRvU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNXcmFwcGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMub3ZlcmxheVZpZXdDaGlsZD8ub3ZlcmxheVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCwgdGhpcy52aXJ0dWFsU2Nyb2xsID8gJy5wLXNjcm9sbGVyJyA6ICcucC1tdWx0aXNlbGVjdC1pdGVtcy13cmFwcGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsICYmIHRoaXMuc2Nyb2xsZXI/LnNldENvbnRlbnRFbCh0aGlzLml0ZW1zVmlld0NoaWxkPy5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zKCkgJiYgdGhpcy5fb3B0aW9ucygpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1vZGVsVmFsdWUoKSkgPyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyPy5zY3JvbGxUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGlzdEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5pdGVtc1dyYXBwZXIsICcucC1tdWx0aXNlbGVjdC1pdGVtLnAtaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMaXN0SXRlbS5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcsIGlubGluZTogJ25lYXJlc3QnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVySW5wdXRDaGlsZCAmJiB0aGlzLmZpbHRlcklucHV0Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRNb2RlbFRvdWNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9mb2N1c0ZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dENoaWxkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub25QYW5lbFNob3cuZW1pdCgpO1xuICAgICAgICAgICAgY2FzZSAndm9pZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1dyYXBwZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0RmlsdGVyKCkge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJJbnB1dENoaWxkICYmIHRoaXMuZmlsdGVySW5wdXRDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUuc2V0KG51bGwpO1xuICAgICAgICB0aGlzLl9maWx0ZXJlZE9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKG51bGwsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBudWxsO1xuICAgICAgICB0aGlzLm9uQ2xlYXIuZW1pdCgpO1xuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHJlbW92ZU9wdGlvbihvcHRpb25WYWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5tb2RlbFZhbHVlKCkuZmlsdGVyKCh2YWwpID0+ICFPYmplY3RVdGlscy5lcXVhbHModmFsLCBvcHRpb25WYWx1ZSwgdGhpcy5lcXVhbGl0eUtleSgpKSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBpdGVtVmFsdWU6IG9wdGlvblZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZpbmROZXh0SXRlbShpdGVtOiBhbnkpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICBsZXQgbmV4dEl0ZW0gPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAobmV4dEl0ZW0pIHJldHVybiBEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRJdGVtLmNoaWxkcmVuWzBdLCAncC1kaXNhYmxlZCcpIHx8IERvbUhhbmRsZXIuaXNIaWRkZW4obmV4dEl0ZW0uY2hpbGRyZW5bMF0pIHx8IERvbUhhbmRsZXIuaGFzQ2xhc3MobmV4dEl0ZW0sICdwLW11bHRpc2VsZWN0LWl0ZW0tZ3JvdXAnKSA/IHRoaXMuZmluZE5leHRJdGVtKG5leHRJdGVtKSA6IG5leHRJdGVtLmNoaWxkcmVuWzBdO1xuICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRQcmV2SXRlbShpdGVtOiBhbnkpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICBsZXQgcHJldkl0ZW0gPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHByZXZJdGVtKSByZXR1cm4gRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2SXRlbS5jaGlsZHJlblswXSwgJ3AtZGlzYWJsZWQnKSB8fCBEb21IYW5kbGVyLmlzSGlkZGVuKHByZXZJdGVtLmNoaWxkcmVuWzBdKSB8fCBEb21IYW5kbGVyLmhhc0NsYXNzKHByZXZJdGVtLCAncC1tdWx0aXNlbGVjdC1pdGVtLWdyb3VwJykgPyB0aGlzLmZpbmRQcmV2SXRlbShwcmV2SXRlbSkgOiBwcmV2SXRlbS5jaGlsZHJlblswXTtcbiAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaW5kTmV4dE9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9XG4gICAgICAgICAgICBpbmRleCA8IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgOiAtMTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4ICsgaW5kZXggKyAxIDogaW5kZXg7XG4gICAgfVxuXG4gICAgZmluZFByZXZPcHRpb25JbmRleChpbmRleCkge1xuICAgICAgICBjb25zdCBtYXRjaGVkT3B0aW9uSW5kZXggPSBpbmRleCA+IDAgPyBPYmplY3RVdGlscy5maW5kTGFzdEluZGV4KHRoaXMudmlzaWJsZU9wdGlvbnMoKS5zbGljZSgwLCBpbmRleCksIChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKSA6IC0xO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkT3B0aW9uSW5kZXggPiAtMSA/IG1hdGNoZWRPcHRpb25JbmRleCA6IGluZGV4O1xuICAgIH1cblxuICAgIGZpbmRMYXN0U2VsZWN0ZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSA/IE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLCAob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRTZWxlY3RlZE9wdGlvbihvcHRpb24pKSA6IC0xO1xuICAgIH1cblxuICAgIGZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5maW5kTGFzdFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCA8IDAgPyB0aGlzLmZpbmRMYXN0T3B0aW9uSW5kZXgoKSA6IHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgZmluZExhc3RPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLCAob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgc2VhcmNoT3B0aW9ucyhldmVudCwgY2hhcikge1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gKHRoaXMuc2VhcmNoVmFsdWUgfHwgJycpICsgY2hhcjtcblxuICAgICAgICBsZXQgb3B0aW9uSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbkluZGV4ID0gdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgLnNsaWNlKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpXG4gICAgICAgICAgICAgICAgLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzT3B0aW9uTWF0Y2hlZChvcHRpb24pKTtcbiAgICAgICAgICAgIG9wdGlvbkluZGV4ID1cbiAgICAgICAgICAgICAgICBvcHRpb25JbmRleCA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbk1hdGNoZWQob3B0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgOiBvcHRpb25JbmRleCArIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25JbmRleCA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbk1hdGNoZWQob3B0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25JbmRleCA9PT0gLTEgJiYgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbkluZGV4ID0gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZWFyY2hUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZUZpbHRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRmlsdGVyKCkgJiYgdGhpcy5fb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRHcm91cHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvcHRncm91cCBvZiB0aGlzLm9wdGlvbnMgYXMgYW55W10pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkU3ViT3B0aW9ucyA9IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIodGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdGdyb3VwKSwgdGhpcy5zZWFyY2hGaWVsZHMoKSwgdGhpcy5maWx0ZXJWYWx1ZSwgdGhpcy5maWx0ZXJNYXRjaE1vZGUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkU3ViT3B0aW9ucyAmJiBmaWx0ZXJlZFN1Yk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEdyb3Vwcy5wdXNoKHsgLi4ub3B0Z3JvdXAsIC4uLnsgW3RoaXMub3B0aW9uR3JvdXBDaGlsZHJlbl06IGZpbHRlcmVkU3ViT3B0aW9ucyB9IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyZWRHcm91cHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIodGhpcy5vcHRpb25zIGFzIGFueVtdLCB0aGlzLnNlYXJjaEZpZWxkcygpLCB0aGlzLmZpbHRlclZhbHVlLCB0aGlzLmZpbHRlck1hdGNoTW9kZSwgdGhpcy5maWx0ZXJMb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRPcHRpb25zID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5nZXRGb2N1c2FibGVFbGVtZW50cyh0aGlzLm92ZXJsYXlWaWV3Q2hpbGQub3ZlcmxheVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAnOm5vdChbZGF0YS1wLWhpZGRlbi1mb2N1c2FibGU9XCJ0cnVlXCJdKScpLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzRmlsdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyVmFsdWUoKSAmJiB0aGlzLl9maWx0ZXJWYWx1ZSgpLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBTaGFyZWRNb2R1bGUsIFRvb2x0aXBNb2R1bGUsIFJpcHBsZU1vZHVsZSwgU2Nyb2xsZXJNb2R1bGUsIENoZWNrSWNvbiwgU2VhcmNoSWNvbiwgVGltZXNDaXJjbGVJY29uLCBUaW1lc0ljb24sIENoZXZyb25Eb3duSWNvbiwgQ2hlY2tJY29uXSxcbiAgICBleHBvcnRzOiBbTXVsdGlTZWxlY3QsIE92ZXJsYXlNb2R1bGUsIFNoYXJlZE1vZHVsZSwgU2Nyb2xsZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW011bHRpU2VsZWN0LCBNdWx0aVNlbGVjdEl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0TW9kdWxlIHt9XG4iXX0=