import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChildren, effect, EventEmitter, forwardRef, Input, NgModule, Output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { DomHandler } from 'primeng/dom';
import { OverlayModule } from 'primeng/overlay';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { TooltipModule } from 'primeng/tooltip';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { TimesIcon } from 'primeng/icons/times';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import { SearchIcon } from 'primeng/icons/search';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
import * as i3 from "primeng/api";
import * as i4 from "primeng/overlay";
import * as i5 from "primeng/tooltip";
import * as i6 from "primeng/scroller";
import * as i7 from "primeng/autofocus";
export const DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Dropdown),
    multi: true
};
export class DropdownItem {
    id;
    option;
    selected;
    focused;
    label;
    disabled;
    visible;
    itemSize;
    ariaPosInset;
    ariaSetSize;
    template;
    onClick = new EventEmitter();
    onMouseEnter = new EventEmitter();
    ngOnInit() { }
    onOptionClick(event) {
        this.onClick.emit(event);
    }
    onOptionMouseEnter(event) {
        this.onMouseEnter.emit(event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DropdownItem, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: DropdownItem, selector: "p-dropdownItem", inputs: { id: "id", option: "option", selected: "selected", focused: "focused", label: "label", disabled: "disabled", visible: "visible", itemSize: "itemSize", ariaPosInset: "ariaPosInset", ariaSetSize: "ariaSetSize", template: "template" }, outputs: { onClick: "onClick", onMouseEnter: "onMouseEnter" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
        >
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.Ripple, selector: "[pRipple]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DropdownItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-dropdownItem',
                    template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
        >
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
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
            }], focused: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], visible: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], ariaPosInset: [{
                type: Input
            }], ariaSetSize: [{
                type: Input
            }], template: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onMouseEnter: [{
                type: Output
            }] } });
/**
 * Dropdown also known as Select, is used to choose an item from a collection of options.
 * @group Components
 */
export class Dropdown {
    el;
    renderer;
    cd;
    zone;
    filterService;
    config;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    scrollHeight = '200px';
    /**
     * When specified, displays an input field to filter the items on keyup.
     * @group Props
     */
    filter;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Inline style of the overlay panel element.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * When present, custom value instead of predefined options can be entered using the editable input field.
     * @group Props
     */
    editable;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    set placeholder(val) {
        this._placeholder.set(val);
    }
    get placeholder() {
        return this._placeholder.asReadonly();
    }
    /**
     * Placeholder text to show when filter input is empty.
     * @group Props
     */
    filterPlaceholder;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Identifier of the accessible input element.
     * @group Props
     */
    inputId;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    filterFields;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
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
     * Whether to display the first item as the label if no placeholder is defined and value is null.
     * @deprecated since v17.3.0, set initial value by model instead.
     * @group Props
     */
    autoDisplayFirst = true;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyFilterMessage = '';
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage = '';
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
     * Used to define a aria label attribute the current element.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode = 'contains';
    /**
     * Maximum number of character allows in the editable input field.
     * @group Props
     */
    maxlength;
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
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    focusOnHover = false;
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
     * Applies focus to the filter element when the overlay is shown.
     * @group Props
     */
    autofocusFilter = true;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(_disabled) {
        if (_disabled) {
            this.focused = false;
            if (this.overlayVisible)
                this.hide();
        }
        this._disabled = _disabled;
        if (!this.cd.destroyed) {
            this.cd.detectChanges();
        }
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
    _itemSize;
    /**
     * Whether to automatically manage layering.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get autoZIndex() {
        return this._autoZIndex;
    }
    set autoZIndex(val) {
        this._autoZIndex = val;
        console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    _autoZIndex;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get baseZIndex() {
        return this._baseZIndex;
    }
    set baseZIndex(val) {
        this._baseZIndex = val;
        console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    _baseZIndex;
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
    _showTransitionOptions;
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
    _hideTransitionOptions;
    /**
     * When specified, filter displays with this value.
     * @group Props
     */
    get filterValue() {
        return this._filterValue();
    }
    set filterValue(val) {
        setTimeout(() => {
            this._filterValue.set(val);
        });
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
        if (!ObjectUtils.deepEquals(val, this._options())) {
            this._options.set(val);
        }
    }
    /**
     * Callback to invoke when value of dropdown changes.
     * @param {DropdownChangeEvent} event - custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {DropdownFilterEvent} event - custom filter event.
     * @group Emits
     */
    onFilter = new EventEmitter();
    /**
     * Callback to invoke when dropdown gets focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when dropdown loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    /**
     * Callback to invoke when component is clicked.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onClick = new EventEmitter();
    /**
     * Callback to invoke when dropdown overlay gets visible.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     */
    onShow = new EventEmitter();
    /**
     * Callback to invoke when dropdown overlay gets hidden.
     * @param {AnimationEvent} event - Animation event.
     * @group Emits
     */
    onHide = new EventEmitter();
    /**
     * Callback to invoke when dropdown clears the value.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClear = new EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {DropdownLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new EventEmitter();
    containerViewChild;
    filterViewChild;
    focusInputViewChild;
    editableInputViewChild;
    itemsViewChild;
    scroller;
    overlayViewChild;
    firstHiddenFocusableElementOnOverlay;
    lastHiddenFocusableElementOnOverlay;
    templates;
    _disabled;
    itemsWrapper;
    itemTemplate;
    groupTemplate;
    loaderTemplate;
    selectedItemTemplate;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    emptyFilterTemplate;
    emptyTemplate;
    dropdownIconTemplate;
    clearIconTemplate;
    filterIconTemplate;
    filterOptions;
    _options = signal(null);
    _placeholder = signal(undefined);
    modelValue = signal(null);
    value;
    onModelChange = () => { };
    onModelTouched = () => { };
    hover;
    focused;
    overlayVisible;
    optionsChanged;
    panel;
    dimensionsUpdated;
    hoveredItem;
    selectedOptionUpdated;
    _filterValue = signal(null);
    searchValue;
    searchIndex;
    searchTimeout;
    previousSearchChar;
    currentSearchChar;
    preventModelTouched;
    focusedOptionIndex = signal(-1);
    labelId;
    listId;
    clicked = signal(false);
    get emptyMessageLabel() {
        return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
    }
    get emptyFilterMessageLabel() {
        return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
    }
    get isVisibleClearIcon() {
        return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
    }
    get listLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)['listLabel'];
    }
    get containerClass() {
        return {
            'p-dropdown p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-dropdown-clearable': this.showClear && !this.disabled,
            'p-focus': this.focused,
            'p-inputwrapper-filled': this.modelValue() !== undefined && this.modelValue() !== null && !this.modelValue().length,
            'p-inputwrapper-focus': this.focused || this.overlayVisible
        };
    }
    get inputClass() {
        const label = this.label();
        return {
            'p-dropdown-label p-inputtext': true,
            'p-placeholder': this.placeholder() && label === this.placeholder(),
            'p-dropdown-label-empty': !this.editable && !this.selectedItemTemplate && (label === undefined || label === null || label === 'p-emptylabel' || label.length === 0)
        };
    }
    get panelClass() {
        return {
            'p-dropdown-panel p-component': true,
            'p-input-filled': this.config.inputStyle === 'filled',
            'p-ripple-disabled': this.config.ripple === false
        };
    }
    get focusedOptionId() {
        return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    visibleOptions = computed(() => {
        const options = this.getAllVisibleAndNonVisibleOptions();
        if (this._filterValue()) {
            const _filterBy = this.filterBy || this.optionLabel;
            const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue
                ? this.options.filter((option) => {
                    if (option.label) {
                        return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
                    }
                    return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
                })
                : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
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
        // use  getAllVisibleAndNonVisibleOptions verses just visible options
        // this will find the selected option whether or not the user is currently filtering  because the filtered (i.e. visible) options, are a subset of all the options
        const options = this.getAllVisibleAndNonVisibleOptions();
        // use isOptionEqualsModelValue for the use case where the dropdown is initalized with a disabled option
        const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
        return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || 'p-emptylabel';
    });
    filled = computed(() => {
        if (typeof this.modelValue() === 'string')
            return !!this.modelValue();
        return this.label() !== 'p-emptylabel' && this.modelValue() !== undefined && this.modelValue() !== null;
    });
    selectedOption;
    editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || '');
    constructor(el, renderer, cd, zone, filterService, config) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.filterService = filterService;
        this.config = config;
        effect(() => {
            const modelValue = this.modelValue();
            const visibleOptions = this.visibleOptions();
            if (visibleOptions && ObjectUtils.isNotEmpty(visibleOptions)) {
                const selectedOptionIndex = this.findSelectedOptionIndex();
                if (selectedOptionIndex !== -1 || modelValue === undefined || (typeof modelValue === 'string' && modelValue.length === 0) || this.isModelValueNotSet() || this.editable) {
                    this.selectedOption = visibleOptions[selectedOptionIndex];
                }
            }
            if (ObjectUtils.isEmpty(visibleOptions) && (modelValue === undefined || this.isModelValueNotSet()) && ObjectUtils.isNotEmpty(this.selectedOption)) {
                this.selectedOption = null;
            }
            if (modelValue !== undefined && this.editable) {
                this.updateEditableLabel();
            }
            this.cd.markForCheck();
        });
    }
    isModelValueNotSet() {
        return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
    }
    displayPlaceholder() {
        return ObjectUtils.isEmpty(this.selectedOption) && this.label() === this.placeholder();
    }
    getAllVisibleAndNonVisibleOptions() {
        return this.group ? this.flatOptions(this.options) : this.options || [];
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
    ngAfterViewChecked() {
        if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    if (this.overlayViewChild) {
                        this.overlayViewChild.alignOverlay();
                    }
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            let selectedItem = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, 'li.p-highlight');
            if (selectedItem) {
                DomHandler.scrollInView(this.itemsWrapper, selectedItem);
            }
            this.selectedOptionUpdated = false;
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'filter':
                    this.filterTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'emptyfilter':
                    this.emptyFilterTemplate = item.template;
                    break;
                case 'empty':
                    this.emptyTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                case 'loader':
                    this.loaderTemplate = item.template;
                    break;
                case 'dropdownicon':
                    this.dropdownIconTemplate = item.template;
                    break;
                case 'clearicon':
                    this.clearIconTemplate = item.template;
                    break;
                case 'filtericon':
                    this.filterIconTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
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
            this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
        }
        if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === undefined)) {
            if (!this.placeholder()) {
                const ind = this.findFirstOptionIndex();
                this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
            }
        }
    }
    onOptionSelect(event, option, isHide = true, preventChange = false) {
        if (!this.isSelected(option)) {
            const value = this.getOptionValue(option);
            this.updateModel(value, event);
            this.focusedOptionIndex.set(this.findSelectedOptionIndex());
            preventChange === false && this.onChange.emit({ originalEvent: event, value: value });
        }
        if (isHide) {
            this.hide(true);
        }
    }
    onOptionMouseEnter(event, index) {
        if (this.focusOnHover) {
            this.changeFocusedOptionIndex(event, index);
        }
    }
    updateModel(value, event) {
        this.value = value;
        this.onModelChange(value);
        this.modelValue.set(value);
        this.selectedOptionUpdated = true;
    }
    writeValue(value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.allowModelChange() && this.onModelChange(value);
        this.modelValue.set(this.value);
        this.updateEditableLabel();
        this.cd.markForCheck();
    }
    allowModelChange() {
        return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === undefined || this.modelValue() === null) && !this.editable && this.options && this.options.length;
    }
    isSelected(option) {
        return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
    }
    isOptionValueEqualsModelValue(option) {
        return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
    }
    ngAfterViewInit() {
        if (this.editable) {
            this.updateEditableLabel();
        }
    }
    updateEditableLabel() {
        if (this.editableInputViewChild) {
            this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || '';
        }
    }
    clearEditableLabel() {
        if (this.editableInputViewChild) {
            this.editableInputViewChild.nativeElement.value = '';
        }
    }
    getOptionIndex(index, scrollerOptions) {
        return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionLabel(option) {
        return this.optionLabel !== undefined && this.optionLabel !== null ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== undefined ? option.label : option;
    }
    getOptionValue(option) {
        return this.optionValue && this.optionValue !== null ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    isOptionDisabled(option) {
        if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || (this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false)) {
            return false;
        }
        else {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
        }
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel !== undefined && this.optionGroupLabel !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren !== undefined && this.optionGroupChildren !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
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
    /**
     * Callback to invoke on filter reset.
     * @group Method
     */
    resetFilter() {
        this._filterValue.set(null);
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
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
    onContainerClick(event) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.focusInputViewChild?.nativeElement.focus({ preventScroll: true });
        if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
            return;
        }
        else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
            this.overlayVisible ? this.hide(true) : this.show(true);
        }
        this.onClick.emit(event);
        this.clicked.set(true);
        this.cd.detectChanges();
    }
    isEmpty() {
        return !this._options() || (this.visibleOptions() && this.visibleOptions().length === 0);
    }
    onEditableInput(event) {
        const value = event.target.value;
        this.searchValue = '';
        const matched = this.searchOptions(event, value);
        !matched && this.focusedOptionIndex.set(-1);
        this.onModelChange(value);
        this.updateModel(value, event);
        setTimeout(() => {
            this.onChange.emit({ originalEvent: event, value: value });
        }, 1);
        !this.overlayVisible && ObjectUtils.isNotEmpty(value) && this.show();
    }
    /**
     * Displays the panel.
     * @group Method
     */
    show(isFocus) {
        this.overlayVisible = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
        this.focusedOptionIndex.set(focusedOptionIndex);
        if (isFocus) {
            DomHandler.focus(this.focusInputViewChild?.nativeElement);
        }
        this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
        if (event.toState === 'visible') {
            this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-dropdown-items-wrapper');
            this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
            if (this.options && this.options.length) {
                if (this.virtualScroll) {
                    const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
                    if (selectedIndex !== -1) {
                        this.scroller?.scrollToIndex(selectedIndex);
                    }
                }
                else {
                    let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
                    if (selectedListItem) {
                        selectedListItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    }
                }
            }
            if (this.filterViewChild && this.filterViewChild.nativeElement) {
                this.preventModelTouched = true;
                if (this.autofocusFilter && !this.editable) {
                    this.filterViewChild.nativeElement.focus();
                }
            }
            this.onShow.emit(event);
        }
        if (event.toState === 'void') {
            this.itemsWrapper = null;
            this.onModelTouched();
            this.onHide.emit(event);
        }
    }
    /**
     * Hides the panel.
     * @group Method
     */
    hide(isFocus) {
        this.overlayVisible = false;
        this.focusedOptionIndex.set(-1);
        this.clicked.set(false);
        this.searchValue = '';
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        if (isFocus) {
            if (this.focusInputViewChild) {
                DomHandler.focus(this.focusInputViewChild?.nativeElement);
            }
            if (this.editable && this.editableInputViewChild) {
                DomHandler.focus(this.editableInputViewChild?.nativeElement);
            }
        }
        this.cd.markForCheck();
    }
    onInputFocus(event) {
        if (this.disabled) {
            // For ScreenReaders
            return;
        }
        this.focused = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.overlayVisible === false && this.onBlur.emit(event);
        if (!this.preventModelTouched) {
            this.onModelTouched();
        }
        this.preventModelTouched = false;
    }
    onKeyDown(event, search) {
        if (this.disabled || this.readonly) {
            return;
        }
        switch (event.code) {
            //down
            case 'ArrowDown':
                this.onArrowDownKey(event);
                break;
            //up
            case 'ArrowUp':
                this.onArrowUpKey(event, this.editable);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                this.onArrowLeftKey(event, this.editable);
                break;
            case 'Delete':
                this.onDeleteKey(event);
                break;
            case 'Home':
                this.onHomeKey(event, this.editable);
                break;
            case 'End':
                this.onEndKey(event, this.editable);
                break;
            case 'PageDown':
                this.onPageDownKey(event);
                break;
            case 'PageUp':
                this.onPageUpKey(event);
                break;
            //space
            case 'Space':
                this.onSpaceKey(event, search);
                break;
            //enter
            case 'Enter':
            case 'NumpadEnter':
                this.onEnterKey(event);
                break;
            //escape and tab
            case 'Escape':
                this.onEscapeKey(event);
                break;
            case 'Tab':
                this.onTabKey(event);
                break;
            case 'Backspace':
                this.onBackspaceKey(event, this.editable);
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                //NOOP
                break;
            default:
                if (!event.metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                    !this.overlayVisible && this.show();
                    !this.editable && this.searchOptions(event, event.key);
                }
                break;
        }
        this.clicked.set(false);
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
                this.onEnterKey(event, true);
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
    onFilterBlur(event) {
        this.focusedOptionIndex.set(-1);
    }
    onArrowDownKey(event) {
        if (!this.overlayVisible) {
            this.show();
            this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
        }
        else {
            const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
            this.changeFocusedOptionIndex(event, optionIndex);
        }
        // const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
        // this.changeFocusedOptionIndex(event, optionIndex);
        // !this.overlayVisible && this.show();
        event.preventDefault();
    }
    changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionIndex() !== index) {
            this.focusedOptionIndex.set(index);
            this.scrollInView();
            if (this.selectOnFocus) {
                const option = this.visibleOptions()[index];
                this.onOptionSelect(event, option, false);
            }
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
    hasSelectedOption() {
        return this.modelValue() !== undefined;
    }
    isValidSelectedOption(option) {
        return this.isValidOption(option) && this.isSelected(option);
    }
    equalityKey() {
        return this.optionValue ? null : this.dataKey;
    }
    findFirstFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findFirstOptionIndex() {
        return this.visibleOptions().findIndex((option) => this.isValidOption(option));
    }
    findSelectedOptionIndex() {
        return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
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
    findLastOptionIndex() {
        return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
    }
    findLastFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    isValidOption(option) {
        return option !== undefined && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionGroup(option) {
        return this.optionGroupLabel !== undefined && this.optionGroupLabel !== null && option.optionGroup !== undefined && option.optionGroup !== null && option.group;
    }
    onArrowUpKey(event, pressedInInputText = false) {
        if (event.altKey && !pressedInInputText) {
            if (this.focusedOptionIndex() !== -1) {
                const option = this.visibleOptions()[this.focusedOptionIndex()];
                this.onOptionSelect(event, option);
            }
            this.overlayVisible && this.hide();
            event.preventDefault();
        }
        else {
            const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
            this.changeFocusedOptionIndex(event, optionIndex);
            !this.overlayVisible && this.show();
            event.preventDefault();
        }
    }
    onArrowLeftKey(event, pressedInInputText = false) {
        pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onDeleteKey(event) {
        if (this.showClear) {
            this.clear(event);
            event.preventDefault();
        }
    }
    onHomeKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
            const target = event.currentTarget;
            if (event.shiftKey) {
                target.setSelectionRange(0, target.value.length);
            }
            else {
                target.setSelectionRange(0, 0);
                this.focusedOptionIndex.set(-1);
            }
        }
        else {
            this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
            !this.overlayVisible && this.show();
        }
        event.preventDefault();
    }
    onEndKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
            const target = event.currentTarget;
            if (event.shiftKey) {
                target.setSelectionRange(0, target.value.length);
            }
            else {
                const len = target.value.length;
                target.setSelectionRange(len, len);
                this.focusedOptionIndex.set(-1);
            }
        }
        else {
            this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
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
    onSpaceKey(event, pressedInInputText = false) {
        !this.editable && !pressedInInputText && this.onEnterKey(event);
    }
    onEnterKey(event, pressedInInput = false) {
        if (!this.overlayVisible) {
            this.focusedOptionIndex.set(-1);
            this.onArrowDownKey(event);
        }
        else {
            if (this.focusedOptionIndex() !== -1) {
                const option = this.visibleOptions()[this.focusedOptionIndex()];
                this.onOptionSelect(event, option);
            }
            !pressedInInput && this.hide();
        }
        event.preventDefault();
    }
    onEscapeKey(event) {
        this.overlayVisible && this.hide(true);
        event.preventDefault();
    }
    onTabKey(event, pressedInInputText = false) {
        if (!pressedInInputText) {
            if (this.overlayVisible && this.hasFocusableElements()) {
                DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
                event.preventDefault();
            }
            else {
                if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
                    const option = this.visibleOptions()[this.focusedOptionIndex()];
                    this.onOptionSelect(event, option);
                }
                this.overlayVisible && this.hide(this.filter);
            }
        }
    }
    onFirstHiddenFocus(event) {
        const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ':not(.p-hidden-focusable)') : this.focusInputViewChild?.nativeElement;
        DomHandler.focus(focusableEl);
    }
    onLastHiddenFocus(event) {
        const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement
            ? DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])')
            : this.focusInputViewChild?.nativeElement;
        DomHandler.focus(focusableEl);
    }
    hasFocusableElements() {
        return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
    }
    onBackspaceKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
            !this.overlayVisible && this.show();
        }
    }
    searchFields() {
        return this.filterBy?.split(',') || this.filterFields || [this.optionLabel];
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
    isOptionMatched(option) {
        return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
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
        this.cd.markForCheck();
    }
    applyFocus() {
        if (this.editable)
            DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();
        else
            DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    /**
     * Applies focus.
     * @group Method
     */
    focus() {
        this.applyFocus();
    }
    /**
     * Clears the model.
     * @group Method
     */
    clear(event) {
        this.updateModel(null, event);
        this.clearEditableLabel();
        this.onModelTouched();
        this.onChange.emit({ originalEvent: event, value: this.value });
        this.onClear.emit(event);
        this.resetFilter();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: Dropdown, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i3.FilterService }, { token: i3.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: Dropdown, selector: "p-dropdown", inputs: { id: "id", scrollHeight: "scrollHeight", filter: "filter", name: "name", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", readonly: "readonly", required: "required", editable: "editable", appendTo: "appendTo", tabindex: "tabindex", placeholder: "placeholder", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", inputId: "inputId", dataKey: "dataKey", filterBy: "filterBy", filterFields: "filterFields", autofocus: "autofocus", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", optionLabel: "optionLabel", optionValue: "optionValue", optionDisabled: "optionDisabled", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", autoDisplayFirst: "autoDisplayFirst", group: "group", showClear: "showClear", emptyFilterMessage: "emptyFilterMessage", emptyMessage: "emptyMessage", lazy: "lazy", virtualScroll: "virtualScroll", virtualScrollItemSize: "virtualScrollItemSize", virtualScrollOptions: "virtualScrollOptions", overlayOptions: "overlayOptions", ariaFilterLabel: "ariaFilterLabel", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", filterMatchMode: "filterMatchMode", maxlength: "maxlength", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", tooltipStyleClass: "tooltipStyleClass", focusOnHover: "focusOnHover", selectOnFocus: "selectOnFocus", autoOptionFocus: "autoOptionFocus", autofocusFilter: "autofocusFilter", disabled: "disabled", itemSize: "itemSize", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterValue: "filterValue", options: "options" }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide", onClear: "onClear", onLazyLoad: "onLazyLoad" }, host: { properties: { "class.p-inputwrapper-filled": "filled()", "class.p-inputwrapper-focus": "focused || overlayVisible" }, classAttribute: "p-element p-inputwrapper" }, providers: [DROPDOWN_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "containerViewChild", first: true, predicate: ["container"], descendants: true }, { propertyName: "filterViewChild", first: true, predicate: ["filter"], descendants: true }, { propertyName: "focusInputViewChild", first: true, predicate: ["focusInput"], descendants: true }, { propertyName: "editableInputViewChild", first: true, predicate: ["editableInput"], descendants: true }, { propertyName: "itemsViewChild", first: true, predicate: ["items"], descendants: true }, { propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }, { propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }, { propertyName: "firstHiddenFocusableElementOnOverlay", first: true, predicate: ["firstHiddenFocusableEl"], descendants: true }, { propertyName: "lastHiddenFocusableElementOnOverlay", first: true, predicate: ["lastHiddenFocusableEl"], descendants: true }], ngImport: i0, template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" (click)="onContainerClick($event)" [ngStyle]="style" [class]="styleClass">
            <span
                #focusInput
                [ngClass]="inputClass"
                *ngIf="!editable"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required"
                [attr.required]="required"
            >
                <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
                <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
                <ng-template #defaultPlaceholder>
                    <span *ngIf="displayPlaceholder()">{{ label() === 'p-emptylabel' ? '&nbsp;' : placeholder() }}</span>
                </ng-template>
            </span>
            <input
                *ngIf="editable"
                #editableInput
                type="text"
                [attr.maxlength]="maxlength"
                [ngClass]="inputClass"
                [disabled]="disabled"
                aria-haspopup="listbox"
                [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
            />
            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
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
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        autocomplete="off"
                                        [value]="_filterValue() || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [attr.placeholder]="filterPlaceholder"
                                        [attr.aria-owns]="id + '_list'"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
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
                                <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li class="p-dropdown-item-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-dropdownItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, option)"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-dropdownItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
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
    `, isInline: true, styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i1.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i1.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i4.Overlay), selector: "p-overlay", inputs: ["visible", "mode", "style", "styleClass", "contentStyle", "contentStyleClass", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "listener", "responsive", "options"], outputs: ["visibleChange", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "onAnimationStart", "onAnimationDone"] }, { kind: "directive", type: i0.forwardRef(() => i3.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i5.Tooltip), selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i0.forwardRef(() => i6.Scroller), selector: "p-scroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }, { kind: "directive", type: i0.forwardRef(() => i7.AutoFocus), selector: "[pAutoFocus]", inputs: ["autofocus"] }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }, { kind: "component", type: i0.forwardRef(() => ChevronDownIcon), selector: "ChevronDownIcon" }, { kind: "component", type: i0.forwardRef(() => SearchIcon), selector: "SearchIcon" }, { kind: "component", type: i0.forwardRef(() => DropdownItem), selector: "p-dropdownItem", inputs: ["id", "option", "selected", "focused", "label", "disabled", "visible", "itemSize", "ariaPosInset", "ariaSetSize", "template"], outputs: ["onClick", "onMouseEnter"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: Dropdown, decorators: [{
            type: Component,
            args: [{ selector: 'p-dropdown', template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" (click)="onContainerClick($event)" [ngStyle]="style" [class]="styleClass">
            <span
                #focusInput
                [ngClass]="inputClass"
                *ngIf="!editable"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required"
                [attr.required]="required"
            >
                <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
                <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
                <ng-template #defaultPlaceholder>
                    <span *ngIf="displayPlaceholder()">{{ label() === 'p-emptylabel' ? '&nbsp;' : placeholder() }}</span>
                </ng-template>
            </span>
            <input
                *ngIf="editable"
                #editableInput
                type="text"
                [attr.maxlength]="maxlength"
                [ngClass]="inputClass"
                [disabled]="disabled"
                aria-haspopup="listbox"
                [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
            />
            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
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
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        autocomplete="off"
                                        [value]="_filterValue() || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [attr.placeholder]="filterPlaceholder"
                                        [attr.aria-owns]="id + '_list'"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
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
                                <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li class="p-dropdown-item-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-dropdownItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, option)"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-dropdownItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
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
                        '[class.p-inputwrapper-filled]': 'filled()',
                        '[class.p-inputwrapper-focus]': 'focused || overlayVisible'
                    }, providers: [DROPDOWN_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i3.FilterService }, { type: i3.PrimeNGConfig }], propDecorators: { id: [{
                type: Input
            }], scrollHeight: [{
                type: Input
            }], filter: [{
                type: Input
            }], name: [{
                type: Input
            }], style: [{
                type: Input
            }], panelStyle: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], panelStyleClass: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], editable: [{
                type: Input
            }], appendTo: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], filterPlaceholder: [{
                type: Input
            }], filterLocale: [{
                type: Input
            }], inputId: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], filterBy: [{
                type: Input
            }], filterFields: [{
                type: Input
            }], autofocus: [{
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
            }], autoDisplayFirst: [{
                type: Input
            }], group: [{
                type: Input
            }], showClear: [{
                type: Input
            }], emptyFilterMessage: [{
                type: Input
            }], emptyMessage: [{
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
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], filterMatchMode: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], tooltipPosition: [{
                type: Input
            }], tooltipPositionStyle: [{
                type: Input
            }], tooltipStyleClass: [{
                type: Input
            }], focusOnHover: [{
                type: Input
            }], selectOnFocus: [{
                type: Input
            }], autoOptionFocus: [{
                type: Input
            }], autofocusFilter: [{
                type: Input
            }], disabled: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], autoZIndex: [{
                type: Input
            }], baseZIndex: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], filterValue: [{
                type: Input
            }], options: [{
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
            }], onShow: [{
                type: Output
            }], onHide: [{
                type: Output
            }], onClear: [{
                type: Output
            }], onLazyLoad: [{
                type: Output
            }], containerViewChild: [{
                type: ViewChild,
                args: ['container']
            }], filterViewChild: [{
                type: ViewChild,
                args: ['filter']
            }], focusInputViewChild: [{
                type: ViewChild,
                args: ['focusInput']
            }], editableInputViewChild: [{
                type: ViewChild,
                args: ['editableInput']
            }], itemsViewChild: [{
                type: ViewChild,
                args: ['items']
            }], scroller: [{
                type: ViewChild,
                args: ['scroller']
            }], overlayViewChild: [{
                type: ViewChild,
                args: ['overlay']
            }], firstHiddenFocusableElementOnOverlay: [{
                type: ViewChild,
                args: ['firstHiddenFocusableEl']
            }], lastHiddenFocusableElementOnOverlay: [{
                type: ViewChild,
                args: ['lastHiddenFocusableEl']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class DropdownModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: DropdownModule, declarations: [Dropdown, DropdownItem], imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon], exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DropdownModule, imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, OverlayModule, SharedModule, ScrollerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
                    exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule],
                    declarations: [Dropdown, DropdownItem]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFJSCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsTUFBTSxFQUVOLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFHUixNQUFNLEVBSU4sTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFFcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBZ0QsYUFBYSxFQUFjLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFXLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7OztB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QUFjLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUNySSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWM7OzJGQUd0RCxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQztvQkFDMUosT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUNoRSxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDO2lCQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIEFmdGVyVmlld0NoZWNrZWQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgY29tcHV0ZWQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIGVmZmVjdCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBmb3J3YXJkUmVmLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE5nWm9uZSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2lnbmFsLFxuICAgIHNpZ25hbCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZSwgT3ZlcmxheU9wdGlvbnMsIFByaW1lTkdDb25maWcsIFByaW1lVGVtcGxhdGUsIFNlbGVjdEl0ZW0sIFNoYXJlZE1vZHVsZSwgVHJhbnNsYXRpb25LZXlzIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQXV0b0ZvY3VzTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hdXRvZm9jdXMnO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlNb2R1bGUgfSBmcm9tICdwcmltZW5nL292ZXJsYXknO1xuaW1wb3J0IHsgUmlwcGxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuaW1wb3J0IHsgU2Nyb2xsZXIsIFNjcm9sbGVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zY3JvbGxlcic7XG5pbXBvcnQgeyBTY3JvbGxlck9wdGlvbnMgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90b29sdGlwJztcbmltcG9ydCB7IE9iamVjdFV0aWxzLCBVbmlxdWVDb21wb25lbnRJZCB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgVGltZXNJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy90aW1lcyc7XG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZXZyb25kb3duJztcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL3NlYXJjaCc7XG5pbXBvcnQgeyBEcm9wZG93bkNoYW5nZUV2ZW50LCBEcm9wZG93bkZpbHRlckV2ZW50LCBEcm9wZG93bkZpbHRlck9wdGlvbnMsIERyb3Bkb3duTGF6eUxvYWRFdmVudCB9IGZyb20gJy4vZHJvcGRvd24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IERST1BET1dOX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd24pLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZHJvcGRvd25JdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bGlcbiAgICAgICAgICAgIFtpZF09XCJpZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25PcHRpb25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIm9uT3B0aW9uTW91c2VFbnRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgcFJpcHBsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLXNldHNpemVdPVwiYXJpYVNldFNpemVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1wb3NpbnNldF09XCJhcmlhUG9zSW5zZXRcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLXAtZm9jdXNlZF09XCJmb2N1c2VkXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtcC1oaWdobGlnaHRdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1wLWRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBpdGVtU2l6ZSArICdweCcgfVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdwLWRyb3Bkb3duLWl0ZW0nOiB0cnVlLCAncC1oaWdobGlnaHQnOiBzZWxlY3RlZCwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ3AtZm9jdXMnOiBmb2N1c2VkIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiPnt7IGxhYmVsID8/ICdlbXB0eScgfX08L3NwYW4+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBvcHRpb24gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbSB7XG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIG9wdGlvbjogU2VsZWN0SXRlbSB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgZm9jdXNlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBpdGVtU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYXJpYVBvc0luc2V0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhcmlhU2V0U2l6ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Nb3VzZUVudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbk1vdXNlRW50ZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25Nb3VzZUVudGVyLmVtaXQoZXZlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBEcm9wZG93biBhbHNvIGtub3duIGFzIFNlbGVjdCwgaXMgdXNlZCB0byBjaG9vc2UgYW4gaXRlbSBmcm9tIGEgY29sbGVjdGlvbiBvZiBvcHRpb25zLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWRyb3Bkb3duJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNjb250YWluZXIgW2F0dHIuaWRdPVwiaWRcIiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzc1wiIChjbGljayk9XCJvbkNvbnRhaW5lckNsaWNrKCRldmVudClcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICNmb2N1c0lucHV0XG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZWRpdGFibGVcIlxuICAgICAgICAgICAgICAgIFtwVG9vbHRpcF09XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgW3Bvc2l0aW9uU3R5bGVdPVwidG9vbHRpcFBvc2l0aW9uU3R5bGVcIlxuICAgICAgICAgICAgICAgIFt0b29sdGlwU3R5bGVDbGFzc109XCJ0b29sdGlwU3R5bGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiaW5wdXRJZFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImNvbWJvYm94XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbCB8fCAobGFiZWwoKSA9PT0gJ3AtZW1wdHlsYWJlbCcgPyB1bmRlZmluZWQgOiBsYWJlbCgpKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cIidsaXN0Ym94J1wiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJvdmVybGF5VmlzaWJsZSA/PyBmYWxzZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJvdmVybGF5VmlzaWJsZSA/IGlkICsgJ19saXN0JyA6IG51bGxcIlxuICAgICAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cIiFkaXNhYmxlZCA/IHRhYmluZGV4IDogLTFcIlxuICAgICAgICAgICAgICAgIHBBdXRvRm9jdXNcbiAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50XT1cImZvY3VzZWQgPyBmb2N1c2VkT3B0aW9uSWQgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIFthdHRyLnJlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNlbGVjdGVkSXRlbVRlbXBsYXRlOyBlbHNlIGRlZmF1bHRQbGFjZWhvbGRlclwiPnt7IGxhYmVsKCkgPT09ICdwLWVtcHR5bGFiZWwnID8gJyZuYnNwOycgOiBsYWJlbCgpIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSXRlbVRlbXBsYXRlICYmIHNlbGVjdGVkT3B0aW9uXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0ZWRJdGVtVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHNlbGVjdGVkT3B0aW9uIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRQbGFjZWhvbGRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJkaXNwbGF5UGxhY2Vob2xkZXIoKVwiPnt7IGxhYmVsKCkgPT09ICdwLWVtcHR5bGFiZWwnID8gJyZuYnNwOycgOiBwbGFjZWhvbGRlcigpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAqbmdJZj1cImVkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAjZWRpdGFibGVJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5tYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJtb2RlbFZhbHVlKCkgPT09IHVuZGVmaW5lZCB8fCBtb2RlbFZhbHVlKCkgPT09IG51bGwgPyBwbGFjZWhvbGRlcigpIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAoaW5wdXQpPVwib25FZGl0YWJsZUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25JbnB1dEZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Zpc2libGVDbGVhckljb25cIj5cbiAgICAgICAgICAgICAgICA8VGltZXNJY29uIFtzdHlsZUNsYXNzXT1cIidwLWRyb3Bkb3duLWNsZWFyLWljb24nXCIgKGNsaWNrKT1cImNsZWFyKCRldmVudClcIiAqbmdJZj1cIiFjbGVhckljb25UZW1wbGF0ZVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInY2xlYXJpY29uJ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWRyb3Bkb3duLWNsZWFyLWljb25cIiAoY2xpY2spPVwiY2xlYXIoJGV2ZW50KVwiICpuZ0lmPVwiY2xlYXJJY29uVGVtcGxhdGVcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2NsZWFyaWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2xlYXJJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kcm9wZG93bi10cmlnZ2VyXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJkcm9wZG93biB0cmlnZ2VyXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlID8/IGZhbHNlXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIid0cmlnZ2VyJ1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZHJvcGRvd25JY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWRyb3Bkb3duLXRyaWdnZXItaWNvblwiICpuZ0lmPVwiZHJvcGRvd25JY29uXCIgW25nQ2xhc3NdPVwiZHJvcGRvd25JY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uICpuZ0lmPVwiIWRyb3Bkb3duSWNvblwiIFtzdHlsZUNsYXNzXT1cIidwLWRyb3Bkb3duLXRyaWdnZXItaWNvbidcIiAvPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZHJvcGRvd25JY29uVGVtcGxhdGVcIiBjbGFzcz1cInAtZHJvcGRvd24tdHJpZ2dlci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImRyb3Bkb3duSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAtb3ZlcmxheVxuICAgICAgICAgICAgICAgICNvdmVybGF5XG4gICAgICAgICAgICAgICAgWyh2aXNpYmxlKV09XCJvdmVybGF5VmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgW29wdGlvbnNdPVwib3ZlcmxheU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFt0YXJnZXRdPVwiJ0BwYXJlbnQnXCJcbiAgICAgICAgICAgICAgICBbYXBwZW5kVG9dPVwiYXBwZW5kVG9cIlxuICAgICAgICAgICAgICAgIFthdXRvWkluZGV4XT1cImF1dG9aSW5kZXhcIlxuICAgICAgICAgICAgICAgIFtiYXNlWkluZGV4XT1cImJhc2VaSW5kZXhcIlxuICAgICAgICAgICAgICAgIFtzaG93VHJhbnNpdGlvbk9wdGlvbnNdPVwic2hvd1RyYW5zaXRpb25PcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbaGlkZVRyYW5zaXRpb25PcHRpb25zXT1cImhpZGVUcmFuc2l0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKG9uQW5pbWF0aW9uU3RhcnQpPVwib25PdmVybGF5QW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG9uSGlkZSk9XCJoaWRlKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtZHJvcGRvd24tcGFuZWwgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwicGFuZWxTdHlsZVwiIFtjbGFzc109XCJwYW5lbFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZpcnN0SGlkZGVuRm9jdXNhYmxlRWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGUgcC1oaWRkZW4tZm9jdXNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25GaXJzdEhpZGRlbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtcC1oaWRkZW4tYWNjZXNzaWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXAtaGlkZGVuLWZvY3VzYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZHJvcGRvd24taGVhZGVyXCIgKm5nSWY9XCJmaWx0ZXJcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlclRlbXBsYXRlOyBlbHNlIGJ1aWx0SW5GaWx0ZXJFbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWx0ZXJUZW1wbGF0ZTsgY29udGV4dDogeyBvcHRpb25zOiBmaWx0ZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2J1aWx0SW5GaWx0ZXJFbGVtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kcm9wZG93bi1maWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIl9maWx0ZXJWYWx1ZSgpIHx8ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtZHJvcGRvd24tZmlsdGVyIHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJmaWx0ZXJQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1vd25zXT1cImlkICsgJ19saXN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uRmlsdGVySW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhRmlsdGVyTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJmb2N1c2VkT3B0aW9uSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uRmlsdGVyS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkZpbHRlckJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gKm5nSWY9XCIhZmlsdGVySWNvblRlbXBsYXRlXCIgW3N0eWxlQ2xhc3NdPVwiJ3AtZHJvcGRvd24tZmlsdGVyLWljb24nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZmlsdGVySWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWRyb3Bkb3duLWZpbHRlci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmlsdGVySWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZHJvcGRvd24taXRlbXMtd3JhcHBlclwiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cInZpcnR1YWxTY3JvbGwgPyAnYXV0bycgOiBzY3JvbGxIZWlnaHQgfHwgJ2F1dG8nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2Nyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Njcm9sbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtc109XCJ2aXNpYmxlT3B0aW9ucygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInsgaGVpZ2h0OiBzY3JvbGxIZWlnaHQgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtU2l6ZV09XCJ2aXJ0dWFsU2Nyb2xsSXRlbVNpemUgfHwgX2l0ZW1TaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9TaXplXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGF6eV09XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uTGF6eUxvYWQpPVwib25MYXp5TG9hZC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJ2aXJ0dWFsU2Nyb2xsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY29udGVudFwiIGxldC1pdGVtcyBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1aWxkSW5JdGVtczsgY29udGV4dDogeyAkaW1wbGljaXQ6IGl0ZW1zLCBvcHRpb25zOiBzY3JvbGxlck9wdGlvbnMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJsb2FkZXJcIiBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsb2FkZXJUZW1wbGF0ZTsgY29udGV4dDogeyBvcHRpb25zOiBzY3JvbGxlck9wdGlvbnMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNjcm9sbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmlydHVhbFNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnVpbGRJbkl0ZW1zOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmlzaWJsZU9wdGlvbnMoKSwgb3B0aW9uczoge30gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNidWlsZEluSXRlbXMgbGV0LWl0ZW1zIGxldC1zY3JvbGxlck9wdGlvbnM9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCAjaXRlbXMgW2F0dHIuaWRdPVwiaWQgKyAnX2xpc3QnXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsaXN0TGFiZWxcIiBjbGFzcz1cInAtZHJvcGRvd24taXRlbXNcIiBbbmdDbGFzc109XCJzY3JvbGxlck9wdGlvbnMuY29udGVudFN0eWxlQ2xhc3NcIiBbc3R5bGVdPVwic2Nyb2xsZXJPcHRpb25zLmNvbnRlbnRTdHlsZVwiIHJvbGU9XCJsaXN0Ym94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW9wdGlvbiBbbmdGb3JPZl09XCJpdGVtc1wiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNPcHRpb25Hcm91cChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtZHJvcGRvd24taXRlbS1ncm91cFwiIFthdHRyLmlkXT1cImlkICsgJ18nICsgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKVwiIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBzY3JvbGxlck9wdGlvbnMuaXRlbVNpemUgKyAncHgnIH1cIiByb2xlPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFncm91cFRlbXBsYXRlXCI+e3sgZ2V0T3B0aW9uR3JvdXBMYWJlbChvcHRpb24ub3B0aW9uR3JvdXApIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBvcHRpb24ub3B0aW9uR3JvdXAgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNPcHRpb25Hcm91cChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlkICsgJ18nICsgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJnZXRPcHRpb25MYWJlbChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpc09wdGlvbkRpc2FibGVkKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9jdXNlZF09XCJmb2N1c2VkT3B0aW9uSW5kZXgoKSA9PT0gZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYVBvc0luc2V0XT1cImdldEFyaWFQb3NJbnNldChnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYVNldFNpemVdPVwiYXJpYVNldFNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwib25PcHRpb25TZWxlY3QoJGV2ZW50LCBvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbk1vdXNlRW50ZXIpPVwib25PcHRpb25Nb3VzZUVudGVyKCRldmVudCwgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wLWRyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImZpbHRlclZhbHVlICYmIGlzRW1wdHkoKVwiIGNsYXNzPVwicC1kcm9wZG93bi1lbXB0eS1tZXNzYWdlXCIgW25nU3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbGVyT3B0aW9ucy5pdGVtU2l6ZSArICdweCcgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW1wdHlGaWx0ZXJUZW1wbGF0ZSAmJiAhZW1wdHlUZW1wbGF0ZTsgZWxzZSBlbXB0eUZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eUZpbHRlck1lc3NhZ2VMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgI2VtcHR5RmlsdGVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW1wdHlGaWx0ZXJUZW1wbGF0ZSB8fCBlbXB0eVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWZpbHRlclZhbHVlICYmIGlzRW1wdHkoKVwiIGNsYXNzPVwicC1kcm9wZG93bi1lbXB0eS1tZXNzYWdlXCIgW25nU3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbGVyT3B0aW9ucy5pdGVtU2l6ZSArICdweCcgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW1wdHlUZW1wbGF0ZTsgZWxzZSBlbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eU1lc3NhZ2VMYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgI2VtcHR5ICpuZ1RlbXBsYXRlT3V0bGV0PVwiZW1wdHlUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2xhc3RIaWRkZW5Gb2N1c2FibGVFbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZSBwLWhpZGRlbi1mb2N1c2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkxhc3RIaWRkZW5Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXAtaGlkZGVuLWFjY2Vzc2libGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wLWhpZGRlbi1mb2N1c2FibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW92ZXJsYXk+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG5cbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50IHAtaW5wdXR3cmFwcGVyJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1maWxsZWRdJzogJ2ZpbGxlZCgpJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1mb2N1c10nOiAnZm9jdXNlZCB8fCBvdmVybGF5VmlzaWJsZSdcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW0RST1BET1dOX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdDaGVja2VkLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBpbiBwaXhlbHMsIGEgc2Nyb2xsYmFyIGlzIGRlZmluZWQgaWYgaGVpZ2h0IG9mIGxpc3QgZXhjZWVkcyB0aGlzIHZhbHVlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nID0gJzIwMHB4JztcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCwgZGlzcGxheXMgYW4gaW5wdXQgZmllbGQgdG8gZmlsdGVyIHRoZSBpdGVtcyBvbiBrZXl1cC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgb3ZlcmxheSBwYW5lbCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhbmVsU3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBvdmVybGF5IHBhbmVsIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGNhbm5vdCBiZSBlZGl0ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCBhbiBpbnB1dCBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBjdXN0b20gdmFsdWUgaW5zdGVhZCBvZiBwcmVkZWZpbmVkIG9wdGlvbnMgY2FuIGJlIGVudGVyZWQgdXNpbmcgdGhlIGVkaXRhYmxlIGlucHV0IGZpZWxkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRhcmdldCBlbGVtZW50IHRvIGF0dGFjaCB0aGUgb3ZlcmxheSwgdmFsaWQgdmFsdWVzIGFyZSBcImJvZHlcIiBvciBhIGxvY2FsIG5nLXRlbXBsYXRlIHZhcmlhYmxlIG9mIGFub3RoZXIgZWxlbWVudCAobm90ZTogdXNlIGJpbmRpbmcgd2l0aCBicmFja2V0cyBmb3IgdGVtcGxhdGUgdmFyaWFibGVzLCBlLmcuIFthcHBlbmRUb109XCJteWRpdlwiIGZvciBhIGRpdiBlbGVtZW50IGhhdmluZyAjbXlkaXYgYXMgdmFyaWFibGUgbmFtZSkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXBwZW5kVG86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHwgYW55O1xuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRhYmJpbmcgb3JkZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IDA7XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCB0ZXh0IHRvIGRpc3BsYXkgd2hlbiBubyBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnNldCh2YWwpO1xuICAgIH1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKTogU2lnbmFsPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIuYXNSZWFkb25seSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciB0ZXh0IHRvIHNob3cgd2hlbiBmaWx0ZXIgaW5wdXQgaXMgZW1wdHkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyUGxhY2Vob2xkZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMb2NhbGUgdG8gdXNlIGluIGZpbHRlcmluZy4gVGhlIGRlZmF1bHQgbG9jYWxlIGlzIHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllciBvZiB0aGUgYWNjZXNzaWJsZSBpbnB1dCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBBIHByb3BlcnR5IHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdmFsdWUgaW4gb3B0aW9ucy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBmaWx0ZXJpbmcgaXMgZW5hYmxlZCwgZmlsdGVyQnkgZGVjaWRlcyB3aGljaCBmaWVsZCBvciBmaWVsZHMgKGNvbW1hIHNlcGFyYXRlZCkgdG8gc2VhcmNoIGFnYWluc3QuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBGaWVsZHMgdXNlZCB3aGVuIGZpbHRlcmluZyB0aGUgb3B0aW9ucywgZGVmYXVsdHMgdG8gb3B0aW9uTGFiZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyRmllbGRzOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgZ2V0IGZvY3VzIG9uIGxvYWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXV0b2ZvY3VzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZmlsdGVyIHZhbHVlIHdoZW4gaGlkaW5nIHRoZSBkcm9wZG93bi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByZXNldEZpbHRlck9uSGlkZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEljb24gY2xhc3Mgb2YgdGhlIGRyb3Bkb3duIGljb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZHJvcGRvd25JY29uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgbGFiZWwgZmllbGQgb2YgYW4gb3B0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgdmFsdWUgZmllbGQgb2YgYW4gb3B0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvblZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgZGlzYWJsZWQgZmllbGQgb2YgYW4gb3B0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgbGFiZWwgZmllbGQgb2YgYW4gb3B0aW9uIGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICdsYWJlbCc7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgb3B0aW9ucyBmaWVsZCBvZiBhbiBvcHRpb24gZ3JvdXAuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBDaGlsZHJlbjogc3RyaW5nID0gJ2l0ZW1zJztcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGZpcnN0IGl0ZW0gYXMgdGhlIGxhYmVsIGlmIG5vIHBsYWNlaG9sZGVyIGlzIGRlZmluZWQgYW5kIHZhbHVlIGlzIG51bGwuXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdjE3LjMuMCwgc2V0IGluaXRpYWwgdmFsdWUgYnkgbW9kZWwgaW5zdGVhZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhdXRvRGlzcGxheUZpcnN0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgb3B0aW9ucyBhcyBncm91cGVkIHdoZW4gbmVzdGVkIG9wdGlvbnMgYXJlIHByb3ZpZGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGdyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZW5hYmxlZCwgYSBjbGVhciBpY29uIGlzIGRpc3BsYXllZCB0byBjbGVhciB0aGUgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0NsZWFyOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIGZpbHRlcmluZyBkb2VzIG5vdCByZXR1cm4gYW55IHJlc3VsdHMuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlGaWx0ZXJNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGVyZSBpcyBubyBkYXRhLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVtcHR5TWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBpZiBkYXRhIGlzIGxvYWRlZCBhbmQgaW50ZXJhY3RlZCB3aXRoIGluIGxhenkgbWFubmVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxhenk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBkYXRhIHNob3VsZCBiZSBsb2FkZWQgb24gZGVtYW5kIGR1cmluZyBzY3JvbGwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgYW4gaXRlbSBpbiB0aGUgbGlzdCBmb3IgVmlydHVhbFNjcm9sbGluZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgc2Nyb2xsZXIgZmVhdHVyZS4gVGhlIHByb3BlcnRpZXMgb2Ygc2Nyb2xsZXIgY29tcG9uZW50IGNhbiBiZSB1c2VkIGxpa2UgYW4gb2JqZWN0IGluIGl0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGxPcHRpb25zOiBTY3JvbGxlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byB1c2Ugb3ZlcmxheSBBUEkgZmVhdHVyZS4gVGhlIHByb3BlcnRpZXMgb2Ygb3ZlcmxheSBBUEkgY2FuIGJlIHVzZWQgbGlrZSBhbiBvYmplY3QgaW4gaXQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3ZlcmxheU9wdGlvbnM6IE92ZXJsYXlPcHRpb25zIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBzdHJpbmcgdGhhdCBsYWJlbHMgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhRmlsdGVyTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGRlZmluZSBhIGFyaWEgbGFiZWwgYXR0cmlidXRlIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRXN0YWJsaXNoZXMgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIHRoZSBjb21wb25lbnQgYW5kIGxhYmVsKHMpIHdoZXJlIGl0cyB2YWx1ZSBzaG91bGQgYmUgb25lIG9yIG1vcmUgZWxlbWVudCBJRHMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGhvdyB0aGUgaXRlbXMgYXJlIGZpbHRlcmVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZpbHRlck1hdGNoTW9kZTogJ2NvbnRhaW5zJyB8ICdzdGFydHNXaXRoJyB8ICdlbmRzV2l0aCcgfCAnZXF1YWxzJyB8ICdub3RFcXVhbHMnIHwgJ2luJyB8ICdsdCcgfCAnbHRlJyB8ICdndCcgfCAnZ3RlJyA9ICdjb250YWlucyc7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVyIGFsbG93cyBpbiB0aGUgZWRpdGFibGUgaW5wdXQgZmllbGQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbWF4bGVuZ3RoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQWR2aXNvcnkgaW5mb3JtYXRpb24gdG8gZGlzcGxheSBpbiBhIHRvb2x0aXAgb24gaG92ZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nID0gJyc7XG4gICAgLyoqXG4gICAgICogUG9zaXRpb24gb2YgdGhlIHRvb2x0aXAuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdG9vbHRpcFBvc2l0aW9uOiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyA9ICdyaWdodCc7XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiBDU1MgcG9zaXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdG9vbHRpcFBvc2l0aW9uU3R5bGU6IHN0cmluZyA9ICdhYnNvbHV0ZSc7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIHRvb2x0aXAuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdG9vbHRpcFN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBGaWVsZHMgdXNlZCB3aGVuIGZpbHRlcmluZyB0aGUgb3B0aW9ucywgZGVmYXVsdHMgdG8gb3B0aW9uTGFiZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZm9jdXNPbkhvdmVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgb3B0aW9uIHdpbGwgYmUgc2VsZWN0ZWQgb24gZm9jdXMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0T25Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZm9jdXMgb24gdGhlIGZpcnN0IHZpc2libGUgb3Igc2VsZWN0ZWQgZWxlbWVudCB3aGVuIHRoZSBvdmVybGF5IHBhbmVsIGlzIHNob3duLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGF1dG9PcHRpb25Gb2N1czogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBmb2N1cyB0byB0aGUgZmlsdGVyIGVsZW1lbnQgd2hlbiB0aGUgb3ZlcmxheSBpcyBzaG93bi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhdXRvZm9jdXNGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlZChfZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKF9kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gX2Rpc2FibGVkO1xuICAgICAgICBpZiAoISh0aGlzLmNkIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSXRlbSBzaXplIG9mIGl0ZW0gdG8gYmUgdmlydHVhbCBzY3JvbGxlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgdmlydHVhbFNjcm9sbEl0ZW1TaXplIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGl0ZW1TaXplKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtU2l6ZTtcbiAgICB9XG4gICAgc2V0IGl0ZW1TaXplKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1TaXplID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBpdGVtU2l6ZSBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLCB1c2UgdmlydHVhbFNjcm9sbEl0ZW1TaXplIHByb3BlcnR5IGluc3RlYWQuJyk7XG4gICAgfVxuICAgIF9pdGVtU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBtYW5hZ2UgbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdjE0LjIuMCwgdXNlIG92ZXJsYXlPcHRpb25zIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGF1dG9aSW5kZXgoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvWkluZGV4O1xuICAgIH1cbiAgICBzZXQgYXV0b1pJbmRleCh2YWw6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYXV0b1pJbmRleCA9IHZhbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgYXV0b1pJbmRleCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICBfYXV0b1pJbmRleDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBCYXNlIHpJbmRleCB2YWx1ZSB0byB1c2UgaW4gbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdjE0LjIuMCwgdXNlIG92ZXJsYXlPcHRpb25zIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGJhc2VaSW5kZXgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2VaSW5kZXg7XG4gICAgfVxuICAgIHNldCBiYXNlWkluZGV4KHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VaSW5kZXggPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGJhc2VaSW5kZXggcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgX2Jhc2VaSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUcmFuc2l0aW9uIG9wdGlvbnMgb2YgdGhlIHNob3cgYW5pbWF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBzaG93VHJhbnNpdGlvbk9wdGlvbnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dUcmFuc2l0aW9uT3B0aW9ucztcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uT3B0aW9ucyh2YWw6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zaG93VHJhbnNpdGlvbk9wdGlvbnMgPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIHNob3dUcmFuc2l0aW9uT3B0aW9ucyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICBfc2hvd1RyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBoaWRlIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgaGlkZVRyYW5zaXRpb25PcHRpb25zKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRlVHJhbnNpdGlvbk9wdGlvbnM7XG4gICAgfVxuICAgIHNldCBoaWRlVHJhbnNpdGlvbk9wdGlvbnModmFsOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faGlkZVRyYW5zaXRpb25PcHRpb25zID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBoaWRlVHJhbnNpdGlvbk9wdGlvbnMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgX2hpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gc3BlY2lmaWVkLCBmaWx0ZXIgZGlzcGxheXMgd2l0aCB0aGlzIHZhbHVlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBmaWx0ZXJWYWx1ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclZhbHVlKCk7XG4gICAgfVxuICAgIHNldCBmaWx0ZXJWYWx1ZSh2YWw6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJWYWx1ZS5zZXQodmFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG9iamVjdHMgdG8gZGlzcGxheSBhcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IG9wdGlvbnMoKTogYW55W10gfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgc2V0IG9wdGlvbnModmFsOiBhbnlbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIU9iamVjdFV0aWxzLmRlZXBFcXVhbHModmFsLCB0aGlzLl9vcHRpb25zKCkpKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNldCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIHZhbHVlIG9mIGRyb3Bkb3duIGNoYW5nZXMuXG4gICAgICogQHBhcmFtIHtEcm9wZG93bkNoYW5nZUV2ZW50fSBldmVudCAtIGN1c3RvbSBjaGFuZ2UgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHJvcGRvd25DaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERyb3Bkb3duQ2hhbmdlRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gZGF0YSBpcyBmaWx0ZXJlZC5cbiAgICAgKiBAcGFyYW0ge0Ryb3Bkb3duRmlsdGVyRXZlbnR9IGV2ZW50IC0gY3VzdG9tIGZpbHRlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxEcm9wZG93bkZpbHRlckV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcGRvd25GaWx0ZXJFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBkcm9wZG93biBnZXRzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gZHJvcGRvd24gbG9zZXMgZm9jdXMuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBCcm93c2VyIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGNvbXBvbmVudCBpcyBjbGlja2VkLlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgLSBNb3VzZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGRyb3Bkb3duIG92ZXJsYXkgZ2V0cyB2aXNpYmxlLlxuICAgICAqIEBwYXJhbSB7QW5pbWF0aW9uRXZlbnR9IGV2ZW50IC0gQW5pbWF0aW9uIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxBbmltYXRpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGRyb3Bkb3duIG92ZXJsYXkgZ2V0cyBoaWRkZW4uXG4gICAgICogQHBhcmFtIHtBbmltYXRpb25FdmVudH0gZXZlbnQgLSBBbmltYXRpb24gZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gZHJvcGRvd24gY2xlYXJzIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIEJyb3dzZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBpbiBsYXp5IG1vZGUgdG8gbG9hZCBuZXcgZGF0YS5cbiAgICAgKiBAcGFyYW0ge0Ryb3Bkb3duTGF6eUxvYWRFdmVudH0gZXZlbnQgLSBMYXp5IGxvYWQgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uTGF6eUxvYWQ6IEV2ZW50RW1pdHRlcjxEcm9wZG93bkxhenlMb2FkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wZG93bkxhenlMb2FkRXZlbnQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnZmlsdGVyJykgZmlsdGVyVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2ZvY3VzSW5wdXQnKSBmb2N1c0lucHV0Vmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRhYmxlSW5wdXQnKSBlZGl0YWJsZUlucHV0Vmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2l0ZW1zJykgaXRlbXNWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsZXInKSBzY3JvbGxlcjogTnVsbGFibGU8U2Nyb2xsZXI+O1xuXG4gICAgQFZpZXdDaGlsZCgnb3ZlcmxheScpIG92ZXJsYXlWaWV3Q2hpbGQ6IE51bGxhYmxlPE92ZXJsYXk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZmlyc3RIaWRkZW5Gb2N1c2FibGVFbCcpIGZpcnN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudE9uT3ZlcmxheTogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdsYXN0SGlkZGVuRm9jdXNhYmxlRWwnKSBsYXN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudE9uT3ZlcmxheTogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogTnVsbGFibGU8UXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+PjtcblxuICAgIF9kaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIGl0ZW1zV3JhcHBlcjogTnVsbGFibGU8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgaXRlbVRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGdyb3VwVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgbG9hZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgc2VsZWN0ZWRJdGVtVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZmlsdGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZm9vdGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZW1wdHlGaWx0ZXJUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBlbXB0eVRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGRyb3Bkb3duSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGNsZWFySWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGZpbHRlckljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBmaWx0ZXJPcHRpb25zOiBEcm9wZG93bkZpbHRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG5cbiAgICBfb3B0aW9ucyA9IHNpZ25hbDxhbnlbXSB8IHVuZGVmaW5lZD4obnVsbCk7XG5cbiAgICBfcGxhY2Vob2xkZXIgPSBzaWduYWw8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gICAgbW9kZWxWYWx1ZSA9IHNpZ25hbDxhbnk+KG51bGwpO1xuXG4gICAgdmFsdWU6IGFueTtcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIGhvdmVyOiBOdWxsYWJsZTxib29sZWFuPjtcblxuICAgIGZvY3VzZWQ6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgb3ZlcmxheVZpc2libGU6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgb3B0aW9uc0NoYW5nZWQ6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgcGFuZWw6IE51bGxhYmxlPEhUTUxEaXZFbGVtZW50PjtcblxuICAgIGRpbWVuc2lvbnNVcGRhdGVkOiBOdWxsYWJsZTxib29sZWFuPjtcblxuICAgIGhvdmVyZWRJdGVtOiBhbnk7XG5cbiAgICBzZWxlY3RlZE9wdGlvblVwZGF0ZWQ6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgX2ZpbHRlclZhbHVlID0gc2lnbmFsPGFueT4obnVsbCk7XG5cbiAgICBzZWFyY2hWYWx1ZTogTnVsbGFibGU8c3RyaW5nPjtcblxuICAgIHNlYXJjaEluZGV4OiBOdWxsYWJsZTxudW1iZXI+O1xuXG4gICAgc2VhcmNoVGltZW91dDogYW55O1xuXG4gICAgcHJldmlvdXNTZWFyY2hDaGFyOiBOdWxsYWJsZTxzdHJpbmc+O1xuXG4gICAgY3VycmVudFNlYXJjaENoYXI6IE51bGxhYmxlPHN0cmluZz47XG5cbiAgICBwcmV2ZW50TW9kZWxUb3VjaGVkOiBOdWxsYWJsZTxib29sZWFuPjtcblxuICAgIGZvY3VzZWRPcHRpb25JbmRleCA9IHNpZ25hbDxudW1iZXI+KC0xKTtcblxuICAgIGxhYmVsSWQ6IE51bGxhYmxlPHN0cmluZz47XG5cbiAgICBsaXN0SWQ6IE51bGxhYmxlPHN0cmluZz47XG5cbiAgICBjbGlja2VkID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGdldCBlbXB0eU1lc3NhZ2VMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU1lc3NhZ2UgfHwgdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkVNUFRZX01FU1NBR0UpO1xuICAgIH1cblxuICAgIGdldCBlbXB0eUZpbHRlck1lc3NhZ2VMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eUZpbHRlck1lc3NhZ2UgfHwgdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkVNUFRZX0ZJTFRFUl9NRVNTQUdFKTtcbiAgICB9XG5cbiAgICBnZXQgaXNWaXNpYmxlQ2xlYXJJY29uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFZhbHVlKCkgIT0gbnVsbCAmJiB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgJiYgdGhpcy5zaG93Q2xlYXIgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgZ2V0IGxpc3RMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkFSSUEpWydsaXN0TGFiZWwnXTtcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1kcm9wZG93biBwLWNvbXBvbmVudCBwLWlucHV0d3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAncC1kcm9wZG93bi1jbGVhcmFibGUnOiB0aGlzLnNob3dDbGVhciAmJiAhdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICdwLWZvY3VzJzogdGhpcy5mb2N1c2VkLFxuICAgICAgICAgICAgJ3AtaW5wdXR3cmFwcGVyLWZpbGxlZCc6IHRoaXMubW9kZWxWYWx1ZSgpICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tb2RlbFZhbHVlKCkgIT09IG51bGwgJiYgIXRoaXMubW9kZWxWYWx1ZSgpLmxlbmd0aCxcbiAgICAgICAgICAgICdwLWlucHV0d3JhcHBlci1mb2N1cyc6IHRoaXMuZm9jdXNlZCB8fCB0aGlzLm92ZXJsYXlWaXNpYmxlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IGlucHV0Q2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtZHJvcGRvd24tbGFiZWwgcC1pbnB1dHRleHQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyKCkgJiYgbGFiZWwgPT09IHRoaXMucGxhY2Vob2xkZXIoKSxcbiAgICAgICAgICAgICdwLWRyb3Bkb3duLWxhYmVsLWVtcHR5JzogIXRoaXMuZWRpdGFibGUgJiYgIXRoaXMuc2VsZWN0ZWRJdGVtVGVtcGxhdGUgJiYgKGxhYmVsID09PSB1bmRlZmluZWQgfHwgbGFiZWwgPT09IG51bGwgfHwgbGFiZWwgPT09ICdwLWVtcHR5bGFiZWwnIHx8IGxhYmVsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgcGFuZWxDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLWRyb3Bkb3duLXBhbmVsIHAtY29tcG9uZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICdwLWlucHV0LWZpbGxlZCc6IHRoaXMuY29uZmlnLmlucHV0U3R5bGUgPT09ICdmaWxsZWQnLFxuICAgICAgICAgICAgJ3AtcmlwcGxlLWRpc2FibGVkJzogdGhpcy5jb25maWcucmlwcGxlID09PSBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBmb2N1c2VkT3B0aW9uSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IGAke3RoaXMuaWR9XyR7dGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKX1gIDogbnVsbDtcbiAgICB9XG5cbiAgICB2aXNpYmxlT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0QWxsVmlzaWJsZUFuZE5vblZpc2libGVPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlclZhbHVlKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IF9maWx0ZXJCeSA9IHRoaXMuZmlsdGVyQnkgfHwgdGhpcy5vcHRpb25MYWJlbDtcblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRPcHRpb25zID1cbiAgICAgICAgICAgICAgICAhX2ZpbHRlckJ5ICYmICF0aGlzLmZpbHRlckZpZWxkcyAmJiAhdGhpcy5vcHRpb25WYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmxhYmVsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuX2ZpbHRlclZhbHVlKCkudG9Mb3dlckNhc2UoKS50cmltKCkpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuX2ZpbHRlclZhbHVlKCkudG9Mb3dlckNhc2UoKS50cmltKCkpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIob3B0aW9ucywgdGhpcy5zZWFyY2hGaWVsZHMoKSwgdGhpcy5fZmlsdGVyVmFsdWUoKS50cmltKCksIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uR3JvdXBzID0gdGhpcy5vcHRpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gW107XG5cbiAgICAgICAgICAgICAgICBvcHRpb25Hcm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBDaGlsZHJlbiA9IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihncm91cCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBncm91cENoaWxkcmVuLmZpbHRlcigoaXRlbSkgPT4gZmlsdGVyZWRPcHRpb25zLmluY2x1ZGVzKGl0ZW0pKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAwKSBmaWx0ZXJlZC5wdXNoKHsgLi4uZ3JvdXAsIFt0eXBlb2YgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuID09PSAnc3RyaW5nJyA/IHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbiA6ICdpdGVtcyddOiBbLi4uZmlsdGVyZWRJdGVtc10gfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mbGF0T3B0aW9ucyhmaWx0ZXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSk7XG5cbiAgICBsYWJlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgLy8gdXNlICBnZXRBbGxWaXNpYmxlQW5kTm9uVmlzaWJsZU9wdGlvbnMgdmVyc2VzIGp1c3QgdmlzaWJsZSBvcHRpb25zXG4gICAgICAgIC8vIHRoaXMgd2lsbCBmaW5kIHRoZSBzZWxlY3RlZCBvcHRpb24gd2hldGhlciBvciBub3QgdGhlIHVzZXIgaXMgY3VycmVudGx5IGZpbHRlcmluZyAgYmVjYXVzZSB0aGUgZmlsdGVyZWQgKGkuZS4gdmlzaWJsZSkgb3B0aW9ucywgYXJlIGEgc3Vic2V0IG9mIGFsbCB0aGUgb3B0aW9uc1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRBbGxWaXNpYmxlQW5kTm9uVmlzaWJsZU9wdGlvbnMoKTtcbiAgICAgICAgLy8gdXNlIGlzT3B0aW9uRXF1YWxzTW9kZWxWYWx1ZSBmb3IgdGhlIHVzZSBjYXNlIHdoZXJlIHRoZSBkcm9wZG93biBpcyBpbml0YWxpemVkIHdpdGggYSBkaXNhYmxlZCBvcHRpb25cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25JbmRleCA9IG9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNPcHRpb25WYWx1ZUVxdWFsc01vZGVsVmFsdWUob3B0aW9uKSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uSW5kZXggIT09IC0xID8gdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb25zW3NlbGVjdGVkT3B0aW9uSW5kZXhdKSA6IHRoaXMucGxhY2Vob2xkZXIoKSB8fCAncC1lbXB0eWxhYmVsJztcbiAgICB9KTtcblxuICAgIGZpbGxlZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1vZGVsVmFsdWUoKSA9PT0gJ3N0cmluZycpIHJldHVybiAhIXRoaXMubW9kZWxWYWx1ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbCgpICE9PSAncC1lbXB0eWxhYmVsJyAmJiB0aGlzLm1vZGVsVmFsdWUoKSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubW9kZWxWYWx1ZSgpICE9PSBudWxsO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRPcHRpb246IGFueTtcblxuICAgIGVkaXRhYmxlSW5wdXRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy5zZWxlY3RlZE9wdGlvbikgfHwgdGhpcy5tb2RlbFZhbHVlKCkgfHwgJycpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSwgcHVibGljIGZpbHRlclNlcnZpY2U6IEZpbHRlclNlcnZpY2UsIHB1YmxpYyBjb25maWc6IFByaW1lTkdDb25maWcpIHtcbiAgICAgICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB0aGlzLm1vZGVsVmFsdWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGVPcHRpb25zID0gdGhpcy52aXNpYmxlT3B0aW9ucygpO1xuXG4gICAgICAgICAgICBpZiAodmlzaWJsZU9wdGlvbnMgJiYgT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh2aXNpYmxlT3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbkluZGV4ID0gdGhpcy5maW5kU2VsZWN0ZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uSW5kZXggIT09IC0xIHx8IG1vZGVsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCAodHlwZW9mIG1vZGVsVmFsdWUgPT09ICdzdHJpbmcnICYmIG1vZGVsVmFsdWUubGVuZ3RoID09PSAwKSB8fCB0aGlzLmlzTW9kZWxWYWx1ZU5vdFNldCgpIHx8IHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHZpc2libGVPcHRpb25zW3NlbGVjdGVkT3B0aW9uSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdFV0aWxzLmlzRW1wdHkodmlzaWJsZU9wdGlvbnMpICYmIChtb2RlbFZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy5pc01vZGVsVmFsdWVOb3RTZXQoKSkgJiYgT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW9kZWxWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRhYmxlTGFiZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNb2RlbFZhbHVlTm90U2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFZhbHVlKCkgPT09IG51bGwgJiYgIXRoaXMuaXNPcHRpb25WYWx1ZUVxdWFsc01vZGVsVmFsdWUodGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgfVxuXG4gICAgZGlzcGxheVBsYWNlaG9sZGVyKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNFbXB0eSh0aGlzLnNlbGVjdGVkT3B0aW9uKSAmJiB0aGlzLmxhYmVsKCkgPT09IHRoaXMucGxhY2Vob2xkZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFsbFZpc2libGVBbmROb25WaXNpYmxlT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmZsYXRPcHRpb25zKHRoaXMub3B0aW9ucykgOiB0aGlzLm9wdGlvbnMgfHwgW107XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZU1vZGVsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyQnkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6ICh2YWx1ZSkgPT4gdGhpcy5vbkZpbHRlcklucHV0Q2hhbmdlKHZhbHVlKSxcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT4gdGhpcy5yZXNldEZpbHRlcigpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zQ2hhbmdlZCAmJiB0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpZXdDaGlsZC5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvblVwZGF0ZWQgJiYgdGhpcy5pdGVtc1dyYXBwZXIpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5vdmVybGF5Vmlld0NoaWxkPy5vdmVybGF5Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50LCAnbGkucC1oaWdobGlnaHQnKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnNjcm9sbEluVmlldyh0aGlzLml0ZW1zV3JhcHBlciwgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25VcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgICh0aGlzLnRlbXBsYXRlcyBhcyBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkSXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5ZmlsdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eUZpbHRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xvYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Ryb3Bkb3duaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25JY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsZWFyaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcmljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmxhdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMgfHwgW10pLnJlZHVjZSgocmVzdWx0LCBvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IG9wdGlvbkdyb3VwOiBvcHRpb24sIGdyb3VwOiB0cnVlLCBpbmRleCB9KTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uR3JvdXBDaGlsZHJlbiA9IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24pO1xuXG4gICAgICAgICAgICBvcHRpb25Hcm91cENoaWxkcmVuICYmIG9wdGlvbkdyb3VwQ2hpbGRyZW4uZm9yRWFjaCgobykgPT4gcmVzdWx0LnB1c2gobykpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgYXV0b1VwZGF0ZU1vZGVsKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzICYmIHRoaXMuYXV0b09wdGlvbkZvY3VzICYmICF0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCh0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpKTtcbiAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QobnVsbCwgdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCldLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b0Rpc3BsYXlGaXJzdCAmJiAodGhpcy5tb2RlbFZhbHVlKCkgPT09IG51bGwgfHwgdGhpcy5tb2RlbFZhbHVlKCkgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGFjZWhvbGRlcigpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kID0gdGhpcy5maW5kRmlyc3RPcHRpb25JbmRleCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QobnVsbCwgdGhpcy52aXNpYmxlT3B0aW9ucygpW2luZF0sIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0KGV2ZW50LCBvcHRpb24sIGlzSGlkZSA9IHRydWUsIHByZXZlbnRDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTZWxlY3RlZChvcHRpb24pKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUsIGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCh0aGlzLmZpbmRTZWxlY3RlZE9wdGlvbkluZGV4KCkpO1xuICAgICAgICAgICAgcHJldmVudENoYW5nZSA9PT0gZmFsc2UgJiYgdGhpcy5vbkNoYW5nZS5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNIaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk9wdGlvbk1vdXNlRW50ZXIoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzT25Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZU1vZGVsKHZhbHVlLCBldmVudD8pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUuc2V0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvblVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hbGxvd01vZGVsQ2hhbmdlKCkgJiYgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlLnNldCh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0YWJsZUxhYmVsKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgYWxsb3dNb2RlbENoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b0Rpc3BsYXlGaXJzdCAmJiAhdGhpcy5wbGFjZWhvbGRlcigpICYmICh0aGlzLm1vZGVsVmFsdWUoKSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubW9kZWxWYWx1ZSgpID09PSBudWxsKSAmJiAhdGhpcy5lZGl0YWJsZSAmJiB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikgJiYgdGhpcy5pc09wdGlvblZhbHVlRXF1YWxzTW9kZWxWYWx1ZShvcHRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNPcHRpb25WYWx1ZUVxdWFsc01vZGVsVmFsdWUob3B0aW9uOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmVxdWFscyh0aGlzLm1vZGVsVmFsdWUoKSwgdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pLCB0aGlzLmVxdWFsaXR5S2V5KCkpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdGFibGVMYWJlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdGFibGVMYWJlbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGVJbnB1dFZpZXdDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmdldE9wdGlvbkxhYmVsKHRoaXMuc2VsZWN0ZWRPcHRpb24pIHx8IHRoaXMubW9kZWxWYWx1ZSgpIHx8ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJFZGl0YWJsZUxhYmVsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lZGl0YWJsZUlucHV0Vmlld0NoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uSW5kZXgoaW5kZXgsIHNjcm9sbGVyT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZCA/IGluZGV4IDogc2Nyb2xsZXJPcHRpb25zICYmIHNjcm9sbGVyT3B0aW9ucy5nZXRJdGVtT3B0aW9ucyhpbmRleClbJ2luZGV4J107XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTGFiZWwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wdGlvbkxhYmVsICE9PSBudWxsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uTGFiZWwpIDogb3B0aW9uICYmIG9wdGlvbi5sYWJlbCAhPT0gdW5kZWZpbmVkID8gb3B0aW9uLmxhYmVsIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlICYmIHRoaXMub3B0aW9uVmFsdWUgIT09IG51bGwgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25WYWx1ZSkgOiAhdGhpcy5vcHRpb25MYWJlbCAmJiBvcHRpb24gJiYgb3B0aW9uLnZhbHVlICE9PSB1bmRlZmluZWQgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG4gICAgfVxuXG4gICAgaXNPcHRpb25EaXNhYmxlZChvcHRpb246IGFueSkge1xuICAgICAgICBpZiAodGhpcy5nZXRPcHRpb25WYWx1ZSh0aGlzLm1vZGVsVmFsdWUoKSkgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB8fCAodGhpcy5nZXRPcHRpb25MYWJlbCh0aGlzLm1vZGVsVmFsdWUoKSA9PT0gdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb24pKSAmJiBvcHRpb24uZGlzYWJsZWQgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiBvcHRpb24gJiYgb3B0aW9uLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBvcHRpb24uZGlzYWJsZWQgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uR3JvdXA6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcHRpb25Hcm91cExhYmVsICE9PSBudWxsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSA6IG9wdGlvbkdyb3VwICYmIG9wdGlvbkdyb3VwLmxhYmVsICE9PSB1bmRlZmluZWQgPyBvcHRpb25Hcm91cC5sYWJlbCA6IG9wdGlvbkdyb3VwO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0aW9uR3JvdXA6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuICE9PSBudWxsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuKSA6IG9wdGlvbkdyb3VwLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEFyaWFQb3NJbnNldChpbmRleCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRoaXMub3B0aW9uR3JvdXBMYWJlbFxuICAgICAgICAgICAgICAgID8gaW5kZXggLVxuICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbikpLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogaW5kZXgpICsgMVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldCBhcmlhU2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZU9wdGlvbnMoKS5maWx0ZXIoKG9wdGlvbikgPT4gIXRoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIGZpbHRlciByZXNldC5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0RmlsdGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9maWx0ZXJWYWx1ZS5zZXQobnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmlld0NoaWxkICYmIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYy1zZWN0aW9uJykgPT09ICdjbGVhcmljb24nIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1wYy1zZWN0aW9uPVwiY2xlYXJpY29uXCJdJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vdmVybGF5Vmlld0NoaWxkIHx8ICF0aGlzLm92ZXJsYXlWaWV3Q2hpbGQuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID8gdGhpcy5oaWRlKHRydWUpIDogdGhpcy5zaG93KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5jbGlja2VkLnNldCh0cnVlKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9vcHRpb25zKCkgfHwgKHRoaXMudmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoID09PSAwKTtcbiAgICB9XG5cbiAgICBvbkVkaXRhYmxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IG1hdGNoZWQgPSB0aGlzLnNlYXJjaE9wdGlvbnMoZXZlbnQsIHZhbHVlKTtcbiAgICAgICAgIW1hdGNoZWQgJiYgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcblxuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlLCBldmVudCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh2YWx1ZSkgJiYgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIHRoZSBwYW5lbC5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHNob3coaXNGb2N1cz8pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xID8gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSA6IHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IHRoaXMuZWRpdGFibGUgPyAtMSA6IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KGZvY3VzZWRPcHRpb25JbmRleCk7XG5cbiAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuZm9jdXModGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkPy5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgb25PdmVybGF5QW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNXcmFwcGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMub3ZlcmxheVZpZXdDaGlsZD8ub3ZlcmxheVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCwgdGhpcy52aXJ0dWFsU2Nyb2xsID8gJy5wLXNjcm9sbGVyJyA6ICcucC1kcm9wZG93bi1pdGVtcy13cmFwcGVyJyk7XG4gICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwgJiYgdGhpcy5zY3JvbGxlcj8uc2V0Q29udGVudEVsKHRoaXMuaXRlbXNWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLm1vZGVsVmFsdWUoKSA/IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyPy5zY3JvbGxUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGlzdEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5pdGVtc1dyYXBwZXIsICcucC1kcm9wZG93bi1pdGVtLnAtaGlnaGxpZ2h0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGlzdEl0ZW0uc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICduZWFyZXN0JyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmlld0NoaWxkICYmIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRNb2RlbFRvdWNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzRmlsdGVyICYmICF0aGlzLmVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25TaG93LmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNXcmFwcGVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgICAgIHRoaXMub25IaWRlLmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBwYW5lbC5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIGhpZGUoaXNGb2N1cz8pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgICAgICB0aGlzLmNsaWNrZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbHRlciAmJiB0aGlzLnJlc2V0RmlsdGVyT25IaWRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRm9jdXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0YWJsZSAmJiB0aGlzLmVkaXRhYmxlSW5wdXRWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZWRpdGFibGVJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBGb3IgU2NyZWVuUmVhZGVyc1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZm9jdXNlZE9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpIDogdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmF1dG9PcHRpb25Gb2N1cyA/IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCkgOiAtMTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KGZvY3VzZWRPcHRpb25JbmRleCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zY3JvbGxJblZpZXcodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSk7XG5cbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRCbHVyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9PT0gZmFsc2UgJiYgdGhpcy5vbkJsdXIuZW1pdChldmVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRNb2RlbFRvdWNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZlbnRNb2RlbFRvdWNoZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHNlYXJjaDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93VXBLZXkoZXZlbnQsIHRoaXMuZWRpdGFibGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93TGVmdEtleShldmVudCwgdGhpcy5lZGl0YWJsZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Ib21lS2V5KGV2ZW50LCB0aGlzLmVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kS2V5KGV2ZW50LCB0aGlzLmVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMub25QYWdlRG93bktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhZ2VVcEtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vc3BhY2VcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BhY2VLZXkoZXZlbnQsIHNlYXJjaCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZW50ZXJcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIGNhc2UgJ051bXBhZEVudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW50ZXJLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2VzY2FwZSBhbmQgdGFiXG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Fc2NhcGVLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgICAgICAgIHRoaXMub25UYWJLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMub25CYWNrc3BhY2VLZXkoZXZlbnQsIHRoaXMuZWRpdGFibGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdTaGlmdExlZnQnOlxuICAgICAgICAgICAgY2FzZSAnU2hpZnRSaWdodCc6XG4gICAgICAgICAgICAgICAgLy9OT09QXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5tZXRhS2V5ICYmIE9iamVjdFV0aWxzLmlzUHJpbnRhYmxlQ2hhcmFjdGVyKGV2ZW50LmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmVkaXRhYmxlICYmIHRoaXMuc2VhcmNoT3B0aW9ucyhldmVudCwgZXZlbnQua2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xpY2tlZC5zZXQoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uRmlsdGVyS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd0xlZnRLZXkoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZUtleShldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEtleShldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW50ZXJLZXkoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Fc2NhcGVLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgICAgICAgIHRoaXMub25UYWJLZXkoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaWx0ZXJCbHVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgfVxuXG4gICAgb25BcnJvd0Rvd25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdGFibGUgJiYgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xID8gdGhpcy5maW5kTmV4dE9wdGlvbkluZGV4KHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpIDogdGhpcy5jbGlja2VkKCkgPyB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkgOiB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyB0aGlzLmZpbmROZXh0T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSkgOiB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8vICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25Gb2N1cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgb3B0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmlydHVhbFNjcm9sbGVyRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy52aXJ0dWFsU2Nyb2xsO1xuICAgIH1cblxuICAgIHNjcm9sbEluVmlldyhpbmRleCA9IC0xKSB7XG4gICAgICAgIGNvbnN0IGlkID0gaW5kZXggIT09IC0xID8gYCR7dGhpcy5pZH1fJHtpbmRleH1gIDogdGhpcy5mb2N1c2VkT3B0aW9uSWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbXNWaWV3Q2hpbGQgJiYgdGhpcy5pdGVtc1ZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuaXRlbXNWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgYGxpW2lkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyAmJiBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCcgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZpcnR1YWxTY3JvbGxlckRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbCAmJiB0aGlzLnNjcm9sbGVyPy5zY3JvbGxUb0luZGV4KGluZGV4ICE9PSAtMSA/IGluZGV4IDogdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNTZWxlY3RlZE9wdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxWYWx1ZSgpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgZXF1YWxpdHlLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gbnVsbCA6IHRoaXMuZGF0YUtleTtcbiAgICB9XG5cbiAgICBmaW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmZpbmRTZWxlY3RlZE9wdGlvbkluZGV4KCk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4IDwgMCA/IHRoaXMuZmluZEZpcnN0T3B0aW9uSW5kZXgoKSA6IHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgZmluZEZpcnN0T3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kU2VsZWN0ZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkU2VsZWN0ZWRPcHRpb24ob3B0aW9uKSkgOiAtMTtcbiAgICB9XG5cbiAgICBmaW5kTmV4dE9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9XG4gICAgICAgICAgICBpbmRleCA8IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgOiAtMTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4ICsgaW5kZXggKyAxIDogaW5kZXg7XG4gICAgfVxuXG4gICAgZmluZFByZXZPcHRpb25JbmRleChpbmRleCkge1xuICAgICAgICBjb25zdCBtYXRjaGVkT3B0aW9uSW5kZXggPSBpbmRleCA+IDAgPyBPYmplY3RVdGlscy5maW5kTGFzdEluZGV4KHRoaXMudmlzaWJsZU9wdGlvbnMoKS5zbGljZSgwLCBpbmRleCksIChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKSA6IC0xO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkT3B0aW9uSW5kZXggPiAtMSA/IG1hdGNoZWRPcHRpb25JbmRleCA6IGluZGV4O1xuICAgIH1cblxuICAgIGZpbmRMYXN0T3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5maW5kTGFzdEluZGV4KHRoaXMudmlzaWJsZU9wdGlvbnMoKSwgKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikpO1xuICAgIH1cblxuICAgIGZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5maW5kU2VsZWN0ZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4IDwgMCA/IHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpIDogc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBpc1ZhbGlkT3B0aW9uKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gb3B0aW9uICE9PSB1bmRlZmluZWQgJiYgb3B0aW9uICE9PSBudWxsICYmICEodGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikgfHwgdGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbikpO1xuICAgIH1cblxuICAgIGlzT3B0aW9uR3JvdXAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkdyb3VwTGFiZWwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wdGlvbkdyb3VwTGFiZWwgIT09IG51bGwgJiYgb3B0aW9uLm9wdGlvbkdyb3VwICE9PSB1bmRlZmluZWQgJiYgb3B0aW9uLm9wdGlvbkdyb3VwICE9PSBudWxsICYmIG9wdGlvbi5ncm91cDtcbiAgICB9XG5cbiAgICBvbkFycm93VXBLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHByZXNzZWRJbklucHV0VGV4dDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChldmVudC5hbHRLZXkgJiYgIXByZXNzZWRJbklucHV0VGV4dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCldO1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIG9wdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IHRoaXMuZmluZFByZXZPcHRpb25JbmRleCh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKSA6IHRoaXMuY2xpY2tlZCgpID8gdGhpcy5maW5kTGFzdE9wdGlvbkluZGV4KCkgOiB0aGlzLmZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG5cbiAgICAgICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyb3dMZWZ0S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBwcmVzc2VkSW5JbnB1dFRleHQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBwcmVzc2VkSW5JbnB1dFRleHQgJiYgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5zaG93Q2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoZXZlbnQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSG9tZUtleShldmVudDogYW55LCBwcmVzc2VkSW5JbnB1dFRleHQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAocHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIHRhcmdldC52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkpO1xuXG4gICAgICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25FbmRLZXkoZXZlbnQ6IGFueSwgcHJlc3NlZEluSW5wdXRUZXh0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHByZXNzZWRJbklucHV0VGV4dCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIHRhcmdldC52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSB0YXJnZXQudmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGxlbiwgbGVuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpKTtcblxuICAgICAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUGFnZURvd25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcodGhpcy52aXNpYmxlT3B0aW9ucygpLmxlbmd0aCAtIDEpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUGFnZVVwS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW5WaWV3KDApO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uU3BhY2VLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHByZXNzZWRJbklucHV0VGV4dDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgICF0aGlzLmVkaXRhYmxlICYmICFwcmVzc2VkSW5JbnB1dFRleHQgJiYgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkVudGVyS2V5KGV2ZW50LCBwcmVzc2VkSW5JbnB1dCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCldO1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIG9wdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICFwcmVzc2VkSW5JbnB1dCAmJiB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25Fc2NhcGVLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25UYWJLZXkoZXZlbnQsIHByZXNzZWRJbklucHV0VGV4dCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghcHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhhc0ZvY3VzYWJsZUVsZW1lbnRzKCkpIHtcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKGV2ZW50LnNoaWZ0S2V5ID8gdGhpcy5sYXN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudE9uT3ZlcmxheS5uYXRpdmVFbGVtZW50IDogdGhpcy5maXJzdEhpZGRlbkZvY3VzYWJsZUVsZW1lbnRPbk92ZXJsYXkubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xICYmIHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uU2VsZWN0KGV2ZW50LCBvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSh0aGlzLmZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpcnN0SGlkZGVuRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWwgPSBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSB0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQgPyBEb21IYW5kbGVyLmdldEZpcnN0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLm92ZXJsYXlWaWV3Q2hpbGQuZWw/Lm5hdGl2ZUVsZW1lbnQsICc6bm90KC5wLWhpZGRlbi1mb2N1c2FibGUpJykgOiB0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIERvbUhhbmRsZXIuZm9jdXMoZm9jdXNhYmxlRWwpO1xuICAgIH1cblxuICAgIG9uTGFzdEhpZGRlbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsID1cbiAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAgID8gRG9tSGFuZGxlci5nZXRMYXN0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLm92ZXJsYXlWaWV3Q2hpbGQ/Lm92ZXJsYXlWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsICc6bm90KFtkYXRhLXAtaGlkZGVuLWZvY3VzYWJsZT1cInRydWVcIl0pJylcbiAgICAgICAgICAgICAgICA6IHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBEb21IYW5kbGVyLmZvY3VzKGZvY3VzYWJsZUVsKTtcbiAgICB9XG5cbiAgICBoYXNGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuZ2V0Rm9jdXNhYmxlRWxlbWVudHModGhpcy5vdmVybGF5Vmlld0NoaWxkLm92ZXJsYXlWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgJzpub3QoW2RhdGEtcC1oaWRkZW4tZm9jdXNhYmxlPVwidHJ1ZVwiXSknKS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIG9uQmFja3NwYWNlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBwcmVzc2VkSW5JbnB1dFRleHQgPSBmYWxzZSkge1xuICAgICAgICBpZiAocHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaEZpZWxkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyQnk/LnNwbGl0KCcsJykgfHwgdGhpcy5maWx0ZXJGaWVsZHMgfHwgW3RoaXMub3B0aW9uTGFiZWxdO1xuICAgIH1cblxuICAgIHNlYXJjaE9wdGlvbnMoZXZlbnQsIGNoYXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICh0aGlzLnNlYXJjaFZhbHVlIHx8ICcnKSArIGNoYXI7XG5cbiAgICAgICAgbGV0IG9wdGlvbkluZGV4ID0gLTE7XG4gICAgICAgIGxldCBtYXRjaGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xKSB7XG4gICAgICAgICAgICBvcHRpb25JbmRleCA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgIC5zbGljZSh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKVxuICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbk1hdGNoZWQob3B0aW9uKSk7XG4gICAgICAgICAgICBvcHRpb25JbmRleCA9XG4gICAgICAgICAgICAgICAgb3B0aW9uSW5kZXggPT09IC0xXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKG9wdGlvbikpXG4gICAgICAgICAgICAgICAgICAgIDogb3B0aW9uSW5kZXggKyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKG9wdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uSW5kZXggPT09IC0xICYmIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgPT09IC0xKSB7XG4gICAgICAgICAgICBvcHRpb25JbmRleCA9IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGltZW91dCA9IG51bGw7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgfVxuXG4gICAgaXNPcHRpb25NYXRjaGVkKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikgJiYgdGhpcy5nZXRPcHRpb25MYWJlbChvcHRpb24pLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5maWx0ZXJMb2NhbGUpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hWYWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkpO1xuICAgIH1cblxuICAgIG9uRmlsdGVySW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50IHwgYW55KTogdm9pZCB7XG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUuc2V0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIGZpbHRlcjogdGhpcy5fZmlsdGVyVmFsdWUoKSB9KTtcbiAgICAgICAgIXRoaXMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQgJiYgdGhpcy5zY3JvbGxlci5zY3JvbGxUb0luZGV4KDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpZXdDaGlsZC5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgYXBwbHlGb2N1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGUpIERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcucC1kcm9wZG93bi1sYWJlbC5wLWlucHV0dGV4dCcpLmZvY3VzKCk7XG4gICAgICAgIGVsc2UgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGZvY3VzLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwbHlGb2N1cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIG1vZGVsLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKG51bGwsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5jbGVhckVkaXRhYmxlTGFiZWwoKTtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICAgIHRoaXMub25DbGVhci5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBTaGFyZWRNb2R1bGUsIFRvb2x0aXBNb2R1bGUsIFJpcHBsZU1vZHVsZSwgU2Nyb2xsZXJNb2R1bGUsIEF1dG9Gb2N1c01vZHVsZSwgVGltZXNJY29uLCBDaGV2cm9uRG93bkljb24sIFNlYXJjaEljb25dLFxuICAgIGV4cG9ydHM6IFtEcm9wZG93biwgT3ZlcmxheU1vZHVsZSwgU2hhcmVkTW9kdWxlLCBTY3JvbGxlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbRHJvcGRvd24sIERyb3Bkb3duSXRlbV1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Nb2R1bGUge31cbiJdfQ==