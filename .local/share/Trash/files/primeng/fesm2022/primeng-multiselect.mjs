import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ViewEncapsulation, Input, Output, signal, computed, effect, ChangeDetectionStrategy, ViewChild, ContentChild, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i3 from 'primeng/api';
import { TranslationKeys, Footer, Header, PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import * as i4 from 'primeng/overlay';
import { OverlayModule } from 'primeng/overlay';
import * as i2 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import * as i6 from 'primeng/scroller';
import { ScrollerModule } from 'primeng/scroller';
import * as i5 from 'primeng/tooltip';
import { TooltipModule } from 'primeng/tooltip';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { CheckIcon } from 'primeng/icons/check';
import { SearchIcon } from 'primeng/icons/search';
import { TimesCircleIcon } from 'primeng/icons/timescircle';
import { TimesIcon } from 'primeng/icons/times';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';

const MULTISELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelect),
    multi: true
};
class MultiSelectItem {
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
class MultiSelect {
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
class MultiSelectModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { MULTISELECT_VALUE_ACCESSOR, MultiSelect, MultiSelectItem, MultiSelectModule };
//# sourceMappingURL=primeng-multiselect.mjs.map
