import { NgModule, Component, Input, Output, EventEmitter, ContentChildren, ContentChild, forwardRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate, Footer, Header } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { SearchIcon } from 'primeng/icons/search';
import { CheckIcon } from 'primeng/icons/check';
import { ScrollerModule } from 'primeng/scroller';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/scroller";
export const LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Listbox),
    multi: true
};
/**
 * ListBox is used to select one or more values from a list of items.
 * @group Components
 */
export class Listbox {
    el;
    cd;
    filterService;
    config;
    renderer;
    /**
     * Unique identifier of the component.
     * @group Props
     */
    id;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * When enabled, the focused option is selected.
     * @group Props
     */
    selectOnFocus;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * When enabled, the hovered option will be focused.
     * @group Props
     */
    focusOnHover;
    /**
     * Text to display when filtering.
     * @group Props
     */
    filterMessage;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    filterFields;
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
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    scrollHeight = '200px';
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
     * Inline style of the container.
     * @group Props
     */
    style;
    /**
     * Style class of the container.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the list element.
     * @group Props
     */
    listStyle;
    /**
     * Style class of the list element.
     * @group Props
     */
    listStyleClass;
    /**
     * When present, it specifies that the element value cannot be changed.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When specified, allows selecting items with checkboxes.
     * @group Props
     */
    checkbox = false;
    /**
     * When specified, displays a filter input at header.
     * @group Props
     */
    filter = false;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode = 'contains';
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection = false;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Whether header checkbox is shown in multiple mode.
     * @group Props
     */
    showToggleAll = true;
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
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    ariaFilterLabel;
    /**
     * Defines placeholder of the filter input.
     * @group Props
     */
    filterPlaceHolder;
    /**
     * Text to display when filtering does not return any results.
     * @group Props
     */
    emptyFilterMessage;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    get options() {
        return this._options();
    }
    set options(val) {
        this._options.set(val);
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
     * Callback to invoke on value change.
     * @param {ListboxChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    /**
     * Callback to invoke when option is clicked.
     * @param {ListboxClickEvent} event - Custom click event.
     * @group Emits
     */
    onClick = new EventEmitter();
    /**
     * Callback to invoke when option is double clicked.
     * @param {ListboxDoubleClickEvent} event - Custom double click event.
     * @group Emits
     */
    onDblClick = new EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {ListboxFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter = new EventEmitter();
    /**
     * Callback to invoke when component receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when component loses focus.
     * @param {FocusEvent} event - Blur event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    /**
     * Callback to invoke when all data is selected.
     * @param {ListboxSelectAllChangeEvent} event - Custom select event.
     * @group Emits
     */
    onSelectAllChange = new EventEmitter();
    headerCheckboxViewChild;
    filterViewChild;
    lastHiddenFocusableElement;
    firstHiddenFocusableElement;
    scroller;
    listViewChild;
    headerFacet;
    footerFacet;
    templates;
    itemTemplate;
    groupTemplate;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    emptyFilterTemplate;
    emptyTemplate;
    filterIconTemplate;
    checkIconTemplate;
    _filterValue = signal(null);
    _filteredOptions;
    filterOptions;
    filtered;
    value;
    onModelChange = () => { };
    onModelTouched = () => { };
    optionTouched;
    focus;
    headerCheckboxFocus;
    translationSubscription;
    focused;
    get containerClass() {
        return {
            'p-listbox p-component': true,
            'p-focus': this.focused,
            'p-disabled': this.disabled
        };
    }
    get focusedOptionId() {
        return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    get filterResultMessageText() {
        return ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.filterMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptyFilterMessageText;
    }
    get filterMessageText() {
        return this.filterMessage || this.config.translation.searchMessage || '';
    }
    get searchMessageText() {
        return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptyFilterMessageText() {
        return this.emptyFilterMessage || this.config.translation.emptySearchMessage || this.config.translation.emptyFilterMessage || '';
    }
    get selectionMessageText() {
        return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
        return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
        return this.hasSelectedOption() ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.modelValue().length : '1') : this.emptySelectionMessageText;
    }
    get ariaSetSize() {
        return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
    }
    get virtualScrollerDisabled() {
        return !this.virtualScroll;
    }
    get searchFields() {
        return this.filterFields || [this.optionLabel];
    }
    get toggleAllAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? 'selectAll' : 'unselectAll'] : undefined;
    }
    searchValue;
    searchTimeout;
    _selectAll = null;
    _options = signal(null);
    startRangeIndex = signal(-1);
    focusedOptionIndex = signal(-1);
    modelValue = signal(null);
    visibleOptions = computed(() => {
        const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
        return this._filterValue() ? this.filterService.filter(options, this.searchFields, this._filterValue(), this.filterMatchMode, this.filterLocale) : options;
    });
    constructor(el, cd, filterService, config, renderer) {
        this.el = el;
        this.cd = cd;
        this.filterService = filterService;
        this.config = config;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.id = this.id || UniqueComponentId();
        this.translationSubscription = this.config.translationObserver.subscribe(() => {
            this.cd.markForCheck();
        });
        this.autoUpdateModel();
        if (this.filterBy) {
            this.filterOptions = {
                filter: (value) => this.onFilterChange(value),
                reset: () => this.resetFilter()
            };
        }
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
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'filter':
                    this.filterTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'empty':
                    this.emptyTemplate = item.template;
                    break;
                case 'emptyfilter':
                    this.emptyFilterTemplate = item.template;
                    break;
                case 'filtericon':
                    this.filterIconTemplate = item.template;
                    break;
                case 'checkicon':
                    this.checkIconTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
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
    flatOptions(options) {
        return (options || []).reduce((result, option, index) => {
            result.push({ optionGroup: option, group: true, index });
            const optionGroupChildren = this.getOptionGroupChildren(option);
            optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
            return result;
        }, []);
    }
    autoUpdateModel() {
        if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption() && !this.multiple) {
            const focusedOptionIndex = this.findFirstFocusedOptionIndex();
            this.focusedOptionIndex.set(focusedOptionIndex);
            this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()]);
        }
    }
    /**
     * Updates the model value.
     * @group Method
     */
    updateModel(value, event) {
        this.value = value;
        this.modelValue.set(value);
        this.onModelChange(value);
        this.onChange.emit({ originalEvent: event, value: this.value });
    }
    removeOption(option) {
        return this.modelValue().filter((val) => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
    }
    onOptionSelect(event, option, index = -1) {
        if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
            return;
        }
        event && this.onClick.emit({ originalEvent: event, option, value: this.value });
        this.multiple ? this.onOptionSelectMultiple(event, option) : this.onOptionSelectSingle(event, option);
        this.optionTouched = false;
        index !== -1 && this.focusedOptionIndex.set(index);
    }
    onOptionSelectMultiple(event, option) {
        let selected = this.isSelected(option);
        let value = null;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = event.metaKey || event.ctrlKey;
            if (selected) {
                value = metaKey ? this.removeOption(option) : [this.getOptionValue(option)];
            }
            else {
                value = metaKey ? this.modelValue() || [] : [];
                value = [...value, this.getOptionValue(option)];
            }
        }
        else {
            value = selected ? this.removeOption(option) : [...(this.modelValue() || []), this.getOptionValue(option)];
        }
        this.updateModel(value, event);
    }
    onOptionSelectSingle(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = event.metaKey || event.ctrlKey;
            if (selected) {
                if (metaKey) {
                    value = null;
                    valueChanged = true;
                }
            }
            else {
                value = this.getOptionValue(option);
                valueChanged = true;
            }
        }
        else {
            value = selected ? null : this.getOptionValue(option);
            valueChanged = true;
        }
        if (valueChanged) {
            this.updateModel(value, event);
        }
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
    onToggleAll(event) {
        if (this.disabled || this.readonly) {
            return;
        }
        DomHandler.focus(this.headerCheckboxViewChild.nativeElement);
        if (this.selectAll !== null) {
            this.onSelectAllChange.emit({
                originalEvent: event,
                checked: !this.allSelected()
            });
        }
        else {
            const value = this.allSelected()
                ? []
                : this.visibleOptions()
                    .filter((option) => this.isValidOption(option))
                    .map((option) => this.getOptionValue(option));
            this.updateModel(value, event);
            this.onChange.emit({ originalEvent: event, value: this.value });
        }
        event.preventDefault();
        // event.stopPropagation();
    }
    allSelected() {
        return this.selectAll !== null ? this.selectAll : ObjectUtils.isNotEmpty(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
    }
    onOptionTouchEnd() {
        if (this.disabled) {
            return;
        }
        this.optionTouched = true;
    }
    onOptionMouseDown(event, index) {
        this.changeFocusedOptionIndex(event, index);
    }
    onOptionMouseEnter(event, index) {
        if (this.focusOnHover) {
            this.changeFocusedOptionIndex(event, index);
        }
    }
    onOptionDoubleClick(event, option) {
        if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
            return;
        }
        this.onDblClick.emit({
            originalEvent: event,
            option: option,
            value: this.value
        });
    }
    onFirstHiddenFocus(event) {
        DomHandler.focus(this.listViewChild.nativeElement);
        const firstFocusableEl = DomHandler.getFirstFocusableElement(this.el.nativeElement, ':not([data-p-hidden-focusable="true"])');
        this.lastHiddenFocusableElement.nativeElement.tabIndex = ObjectUtils.isEmpty(firstFocusableEl) ? '-1' : undefined;
        this.firstHiddenFocusableElement.nativeElement.tabIndex = -1;
    }
    onLastHiddenFocus(event) {
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === this.listViewChild.nativeElement) {
            const firstFocusableEl = DomHandler.getFirstFocusableElement(this.el.nativeElement, ':not(.p-hidden-focusable)');
            DomHandler.focus(firstFocusableEl);
            this.firstHiddenFocusableElement.nativeElement.tabIndex = undefined;
        }
        else {
            DomHandler.focus(this.firstHiddenFocusableElement.nativeElement);
        }
        this.lastHiddenFocusableElement.nativeElement.tabIndex = -1;
    }
    onFocusout(event) {
        if (!this.el.nativeElement.contains(event.relatedTarget) && this.lastHiddenFocusableElement && this.firstHiddenFocusableElement) {
            this.firstHiddenFocusableElement.nativeElement.tabIndex = this.lastHiddenFocusableElement.nativeElement.tabIndex = undefined;
        }
    }
    onListFocus(event) {
        this.focused = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.onFocus.emit(event);
    }
    onListBlur(event) {
        this.focused = false;
        this.focusedOptionIndex.set(-1);
        this.startRangeIndex.set(-1);
        this.searchValue = '';
    }
    onHeaderCheckboxFocus(event) {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
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
            case 'Tab':
                this.onHeaderCheckboxTabKeyDown(event);
                break;
            default:
                break;
        }
    }
    onHeaderCheckboxTabKeyDown(event) {
        DomHandler.focus(this.listViewChild.nativeElement);
        event.preventDefault();
    }
    onFilterChange(event) {
        let value = event.target.value?.trim();
        this._filterValue.set(value);
        this.focusedOptionIndex.set(-1);
        this.startRangeIndex.set(-1);
        this.onFilter.emit({ originalEvent: event, filter: this._filterValue() });
        !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    }
    onFilterBlur(event) {
        this.focusedOptionIndex.set(-1);
        this.startRangeIndex.set(-1);
    }
    onListKeyDown(event) {
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
            case 'NumpadEnter':
                this.onSpaceKey(event);
                break;
            case 'Tab':
                //NOOP
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.onShiftKey();
                break;
            default:
                if (this.multiple && event.code === 'KeyA' && metaKey) {
                    const value = this.visibleOptions()
                        .filter((option) => this.isValidOption(option))
                        .map((option) => this.getOptionValue(option));
                    this.updateModel(value, event);
                    event.preventDefault();
                    break;
                }
                if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
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
                this.onArrowUpKey(event);
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
                this.onEnterKey(event);
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.onShiftKey();
                break;
            default:
                break;
        }
    }
    onArrowDownKey(event) {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
        if (this.multiple && event.shiftKey) {
            this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
    }
    onArrowUpKey(event) {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
        if (this.multiple && event.shiftKey) {
            this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
    }
    onArrowLeftKey(event, pressedInInputText = false) {
        pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onHomeKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
            event.currentTarget.setSelectionRange(0, 0);
            this.focusedOptionIndex.set(-1);
        }
        else {
            let metaKey = event.metaKey || event.ctrlKey;
            let optionIndex = this.findFirstOptionIndex();
            if (this.multiple && event.shiftKey && metaKey) {
                this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
            }
            this.changeFocusedOptionIndex(event, optionIndex);
        }
        event.preventDefault();
    }
    onEndKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
            const target = event.currentTarget;
            const len = target.value.length;
            target.setSelectionRange(len, len);
            this.focusedOptionIndex.set(-1);
        }
        else {
            let metaKey = event.metaKey || event.ctrlKey;
            let optionIndex = this.findLastOptionIndex();
            if (this.multiple && event.shiftKey && metaKey) {
                this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
            }
            this.changeFocusedOptionIndex(event, optionIndex);
        }
        event.preventDefault();
    }
    onPageDownKey(event) {
        this.scrollInView(0);
        event.preventDefault();
    }
    onPageUpKey(event) {
        this.scrollInView(this.visibleOptions().length - 1);
        event.preventDefault();
    }
    onEnterKey(event) {
        if (this.focusedOptionIndex() !== -1) {
            if (this.multiple && event.shiftKey)
                this.onOptionSelectRange(event, this.focusedOptionIndex());
            else
                this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        event.preventDefault();
    }
    onSpaceKey(event) {
        this.onEnterKey(event);
    }
    onShiftKey() {
        const focusedOptionIndex = this.focusedOptionIndex();
        this.startRangeIndex.set(focusedOptionIndex);
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
    }
    getOptionIndex(index, scrollerOptions) {
        return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    getAriaPosInset(index) {
        return ((this.optionGroupLabel
            ? index -
                this.visibleOptions()
                    .slice(0, index)
                    .filter((option) => this.isOptionGroup(option)).length
            : index) + 1);
    }
    hasSelectedOption() {
        return ObjectUtils.isNotEmpty(this.modelValue());
    }
    isOptionGroup(option) {
        return this.optionGroupLabel && option.optionGroup && option.group;
    }
    changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionIndex() !== index) {
            this.focusedOptionIndex.set(index);
            this.scrollInView();
            if (this.selectOnFocus && !this.multiple) {
                this.onOptionSelect(event, this.visibleOptions()[index]);
            }
        }
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
        return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    }
    scrollInView(index = -1) {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
        const element = DomHandler.findSingle(this.listViewChild.nativeElement, `li[id="${id}"]`);
        if (element) {
            element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
        else if (!this.virtualScrollerDisabled) {
            this.virtualScroll && this.scroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }
    }
    findFirstOptionIndex() {
        return this.visibleOptions().findIndex((option) => this.isValidOption(option));
    }
    findLastOptionIndex() {
        return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
    }
    findFirstFocusedOptionIndex() {
        const selectedIndex = this.findFirstSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
        const selectedIndex = this.findLastSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findLastSelectedOptionIndex() {
        return this.hasSelectedOption() ? ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
        const matchedOptionIndex = index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((option) => this.isValidOption(option))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findNextSelectedOptionIndex(index) {
        const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((option) => this.isValidSelectedOption(option))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    }
    findPrevSelectedOptionIndex(index) {
        const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    }
    findFirstSelectedOptionIndex() {
        return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
    }
    findPrevOptionIndex(index) {
        const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
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
    equalityKey() {
        return this.optionValue ? null : this.dataKey;
    }
    isValidSelectedOption(option) {
        return this.isValidOption(option) && this.isSelected(option);
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isSelected(option) {
        const optionValue = this.getOptionValue(option);
        if (this.multiple)
            return (this.modelValue() || []).some((value) => ObjectUtils.equals(value, optionValue, this.equalityKey()));
        else
            return ObjectUtils.equals(this.modelValue(), optionValue, this.equalityKey());
    }
    isValidOption(option) {
        return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isEmpty() {
        return !this._options() || (this._options() && this._options().length === 0);
    }
    hasFilter() {
        return this._filterValue() && this._filterValue().trim().length > 0;
    }
    resetFilter() {
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
        }
        this._filterValue.set(null);
    }
    ngOnDestroy() {
        if (this.translationSubscription) {
            this.translationSubscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: Listbox, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.FilterService }, { token: i1.PrimeNGConfig }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: Listbox, selector: "p-listbox", inputs: { id: "id", searchMessage: "searchMessage", emptySelectionMessage: "emptySelectionMessage", selectionMessage: "selectionMessage", autoOptionFocus: "autoOptionFocus", selectOnFocus: "selectOnFocus", searchLocale: "searchLocale", focusOnHover: "focusOnHover", filterMessage: "filterMessage", filterFields: "filterFields", lazy: "lazy", virtualScroll: "virtualScroll", virtualScrollItemSize: "virtualScrollItemSize", virtualScrollOptions: "virtualScrollOptions", scrollHeight: "scrollHeight", tabindex: "tabindex", multiple: "multiple", style: "style", styleClass: "styleClass", listStyle: "listStyle", listStyleClass: "listStyleClass", readonly: "readonly", disabled: "disabled", checkbox: "checkbox", filter: "filter", filterBy: "filterBy", filterMatchMode: "filterMatchMode", filterLocale: "filterLocale", metaKeySelection: "metaKeySelection", dataKey: "dataKey", showToggleAll: "showToggleAll", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupChildren: "optionGroupChildren", optionGroupLabel: "optionGroupLabel", optionDisabled: "optionDisabled", ariaFilterLabel: "ariaFilterLabel", filterPlaceHolder: "filterPlaceHolder", emptyFilterMessage: "emptyFilterMessage", emptyMessage: "emptyMessage", group: "group", options: "options", filterValue: "filterValue", selectAll: "selectAll" }, outputs: { onChange: "onChange", onClick: "onClick", onDblClick: "onDblClick", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onSelectAllChange: "onSelectAllChange" }, host: { classAttribute: "p-element" }, providers: [LISTBOX_VALUE_ACCESSOR], queries: [{ propertyName: "headerFacet", first: true, predicate: Header, descendants: true }, { propertyName: "footerFacet", first: true, predicate: Footer, descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "headerCheckboxViewChild", first: true, predicate: ["headerchkbox"], descendants: true }, { propertyName: "filterViewChild", first: true, predicate: ["filter"], descendants: true }, { propertyName: "lastHiddenFocusableElement", first: true, predicate: ["lastHiddenFocusableElement"], descendants: true }, { propertyName: "firstHiddenFocusableElement", first: true, predicate: ["firstHiddenFocusableElement"], descendants: true }, { propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }, { propertyName: "listViewChild", first: true, predicate: ["list"], descendants: true }], ngImport: i0, template: `
        <div [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (focusout)="onFocusout($event)">
            <span
                #firstHiddenFocusableElement
                role="presentation"
                [attr.aria-hidden]="true"
                class="p-hidden-accessible p-hidden-focusable"
                [tabindex]="!disabled ? tabindex : -1"
                (focus)="onFirstHiddenFocus($event)"
                [attr.data-p-hidden-focusable]="true"
            >
            </span>
            <div class="p-listbox-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
            </div>
            <div class="p-listbox-header" *ngIf="(checkbox && multiple && showToggleAll) || filter">
                <div *ngIf="checkbox && multiple && showToggleAll" class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-disabled': disabled || toggleAllDisabled }" (click)="onToggleAll($event)" (keydown)="onHeaderCheckboxKeyDown($event)">
                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            #headerchkbox
                            type="checkbox"
                            readonly="readonly"
                            [attr.checked]="allSelected()"
                            [disabled]="disabled || toggleAllDisabled"
                            (focus)="onHeaderCheckboxFocus($event)"
                            (blur)="onHeaderCheckboxBlur($event)"
                            [attr.aria-label]="toggleAllAriaLabel"
                        />
                    </div>
                    <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allSelected()" [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }">
                        <ng-container *ngIf="allSelected()">
                            <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </div>
                </div>
                <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                    <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                </ng-container>
                <ng-template #builtInFilterElement>
                    <div class="p-listbox-filter-container" *ngIf="filter">
                        <input
                            #filterInput
                            type="text"
                            class="p-listbox-filter p-inputtext p-component"
                            role="searchbox"
                            [value]="_filterValue() || ''"
                            [disabled]="disabled"
                            [attr.aria-owns]="id + '_list'"
                            [attr.aria-activedescendant]="focusedOptionId"
                            [attr.placeholder]="filterPlaceHolder"
                            [attr.aria-label]="ariaFilterLabel"
                            [tabindex]="!disabled && !focused ? tabindex : -1"
                            (input)="onFilterChange($event)"
                            (keydown)="onFilterKeyDown($event)"
                            (blur)="onFilterBlur($event)"
                        />
                        <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-listbox-filter-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="filterIconTemplate" class="p-listbox-filter-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                        </span>
                    </div>
                    <span role="status" attr.aria-live="polite" class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        {{ filterResultMessageText }}
                    </span>
                </ng-template>
            </div>
            <div [ngClass]="'p-listbox-list-wrapper'" [ngStyle]="listStyle" [class]="listStyleClass" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="visibleOptions()"
                    [style]="{ height: scrollHeight }"
                    [itemSize]="virtualScrollItemSize"
                    [autoSize]="true"
                    [tabindex]="-1"
                    [lazy]="lazy"
                    [options]="virtualScrollOptions"
                    (onLazyLoad)="onLazyLoad.emit($event)"
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
                    <ul
                        #list
                        class="p-listbox-list"
                        role="listbox"
                        [tabindex]="-1"
                        [attr.aria-multiselectable]="true"
                        [ngClass]="scrollerOptions.contentStyleClass"
                        [style]="scrollerOptions.contentStyle"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-multiselectable]="multiple"
                        [attr.aria-disabled]="disabled"
                        (focus)="onListFocus($event)"
                        (blur)="onListBlur($event)"
                        (keydown)="onListKeyDown($event)"
                    >
                        <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                            <ng-container *ngIf="isOptionGroup(option)">
                                <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-listbox-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                </li>
                            </ng-container>
                            <ng-container *ngIf="!isOptionGroup(option)">
                                <li
                                    pRipple
                                    class="p-listbox-item"
                                    role="option"
                                    [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                    [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                    [ngClass]="{ 'p-listbox-item': true, 'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), 'p-disabled': isOptionDisabled(option) }"
                                    [attr.aria-label]="getOptionLabel(option)"
                                    [attr.aria-selected]="isSelected(option)"
                                    [attr.aria-disabled]="isOptionDisabled(option)"
                                    [attr.aria-setsize]="ariaSetSize"
                                    [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                    (click)="onOptionSelect($event, option, getOptionIndex(i, scrollerOptions))"
                                    (dblclick)="onOptionDoubleClick($event, option)"
                                    (mousedown)="onOptionMouseDown($event, getOptionIndex(i, scrollerOptions))"
                                    (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    (touchend)="onOptionTouchEnd()"
                                >
                                    <div class="p-checkbox p-component" *ngIf="checkbox && multiple" [ngClass]="{ 'p-checkbox-disabled': disabled || isOptionDisabled(option) }">
                                        <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': isSelected(option) }">
                                            <ng-container *ngIf="isSelected(option)">
                                                <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                                                <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                    <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                                                </span>
                                            </ng-container>
                                        </div>
                                    </div>
                                    <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>
                                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: getOptionIndex(i, scrollerOptions) }"></ng-container>
                                </li>
                            </ng-container>
                        </ng-template>
                        <li *ngIf="hasFilter() && isEmpty()" class="p-listbox-empty-message" role="option">
                            <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                {{ emptyFilterMessageText }}
                            </ng-container>
                            <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                        </li>
                        <li *ngIf="!hasFilter() && isEmpty()" class="p-listbox-empty-message" role="option">
                            <ng-container *ngIf="!emptyTemplate; else empty">
                                {{ emptyMessage }}
                            </ng-container>
                            <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                        </li>
                    </ul>
                </ng-template>
            </div>
            <div class="p-listbox-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
            </div>
            <span *ngIf="isEmpty()" role="status" aria-live="polite" class="p-hidden-accessible">
                {{ emptyMessage }}
            </span>
            <span role="status" aria-live="polite" class="p-hidden-accessible">
                {{ selectedMessageText }}
            </span>
            <span
                #lastHiddenFocusableElement
                role="presentation"
                [attr.aria-hidden]="true"
                class="p-hidden-accessible p-hidden-focusable"
                [tabindex]="!disabled ? tabindex : -1"
                (focus)="onLastHiddenFocus($event)"
                [attr.data-p-hidden-focusable]="true"
            >
            </span>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;-webkit-user-select:none;user-select:none}.p-listbox-header{display:flex;align-items:center}.p-listbox-filter-container{position:relative;flex:1 1 auto}.p-listbox-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-listbox-filter{width:100%}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i0.forwardRef(() => i1.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i3.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => i4.Scroller), selector: "p-scroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }, { kind: "component", type: i0.forwardRef(() => SearchIcon), selector: "SearchIcon" }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: Listbox, decorators: [{
            type: Component,
            args: [{ selector: 'p-listbox', template: `
        <div [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (focusout)="onFocusout($event)">
            <span
                #firstHiddenFocusableElement
                role="presentation"
                [attr.aria-hidden]="true"
                class="p-hidden-accessible p-hidden-focusable"
                [tabindex]="!disabled ? tabindex : -1"
                (focus)="onFirstHiddenFocus($event)"
                [attr.data-p-hidden-focusable]="true"
            >
            </span>
            <div class="p-listbox-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
            </div>
            <div class="p-listbox-header" *ngIf="(checkbox && multiple && showToggleAll) || filter">
                <div *ngIf="checkbox && multiple && showToggleAll" class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-disabled': disabled || toggleAllDisabled }" (click)="onToggleAll($event)" (keydown)="onHeaderCheckboxKeyDown($event)">
                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            #headerchkbox
                            type="checkbox"
                            readonly="readonly"
                            [attr.checked]="allSelected()"
                            [disabled]="disabled || toggleAllDisabled"
                            (focus)="onHeaderCheckboxFocus($event)"
                            (blur)="onHeaderCheckboxBlur($event)"
                            [attr.aria-label]="toggleAllAriaLabel"
                        />
                    </div>
                    <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allSelected()" [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }">
                        <ng-container *ngIf="allSelected()">
                            <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </div>
                </div>
                <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                    <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                </ng-container>
                <ng-template #builtInFilterElement>
                    <div class="p-listbox-filter-container" *ngIf="filter">
                        <input
                            #filterInput
                            type="text"
                            class="p-listbox-filter p-inputtext p-component"
                            role="searchbox"
                            [value]="_filterValue() || ''"
                            [disabled]="disabled"
                            [attr.aria-owns]="id + '_list'"
                            [attr.aria-activedescendant]="focusedOptionId"
                            [attr.placeholder]="filterPlaceHolder"
                            [attr.aria-label]="ariaFilterLabel"
                            [tabindex]="!disabled && !focused ? tabindex : -1"
                            (input)="onFilterChange($event)"
                            (keydown)="onFilterKeyDown($event)"
                            (blur)="onFilterBlur($event)"
                        />
                        <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-listbox-filter-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="filterIconTemplate" class="p-listbox-filter-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                        </span>
                    </div>
                    <span role="status" attr.aria-live="polite" class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        {{ filterResultMessageText }}
                    </span>
                </ng-template>
            </div>
            <div [ngClass]="'p-listbox-list-wrapper'" [ngStyle]="listStyle" [class]="listStyleClass" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="visibleOptions()"
                    [style]="{ height: scrollHeight }"
                    [itemSize]="virtualScrollItemSize"
                    [autoSize]="true"
                    [tabindex]="-1"
                    [lazy]="lazy"
                    [options]="virtualScrollOptions"
                    (onLazyLoad)="onLazyLoad.emit($event)"
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
                    <ul
                        #list
                        class="p-listbox-list"
                        role="listbox"
                        [tabindex]="-1"
                        [attr.aria-multiselectable]="true"
                        [ngClass]="scrollerOptions.contentStyleClass"
                        [style]="scrollerOptions.contentStyle"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-multiselectable]="multiple"
                        [attr.aria-disabled]="disabled"
                        (focus)="onListFocus($event)"
                        (blur)="onListBlur($event)"
                        (keydown)="onListKeyDown($event)"
                    >
                        <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                            <ng-container *ngIf="isOptionGroup(option)">
                                <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-listbox-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                </li>
                            </ng-container>
                            <ng-container *ngIf="!isOptionGroup(option)">
                                <li
                                    pRipple
                                    class="p-listbox-item"
                                    role="option"
                                    [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                    [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                    [ngClass]="{ 'p-listbox-item': true, 'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), 'p-disabled': isOptionDisabled(option) }"
                                    [attr.aria-label]="getOptionLabel(option)"
                                    [attr.aria-selected]="isSelected(option)"
                                    [attr.aria-disabled]="isOptionDisabled(option)"
                                    [attr.aria-setsize]="ariaSetSize"
                                    [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                    (click)="onOptionSelect($event, option, getOptionIndex(i, scrollerOptions))"
                                    (dblclick)="onOptionDoubleClick($event, option)"
                                    (mousedown)="onOptionMouseDown($event, getOptionIndex(i, scrollerOptions))"
                                    (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    (touchend)="onOptionTouchEnd()"
                                >
                                    <div class="p-checkbox p-component" *ngIf="checkbox && multiple" [ngClass]="{ 'p-checkbox-disabled': disabled || isOptionDisabled(option) }">
                                        <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': isSelected(option) }">
                                            <ng-container *ngIf="isSelected(option)">
                                                <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                                                <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                    <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                                                </span>
                                            </ng-container>
                                        </div>
                                    </div>
                                    <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>
                                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: getOptionIndex(i, scrollerOptions) }"></ng-container>
                                </li>
                            </ng-container>
                        </ng-template>
                        <li *ngIf="hasFilter() && isEmpty()" class="p-listbox-empty-message" role="option">
                            <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                {{ emptyFilterMessageText }}
                            </ng-container>
                            <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                        </li>
                        <li *ngIf="!hasFilter() && isEmpty()" class="p-listbox-empty-message" role="option">
                            <ng-container *ngIf="!emptyTemplate; else empty">
                                {{ emptyMessage }}
                            </ng-container>
                            <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                        </li>
                    </ul>
                </ng-template>
            </div>
            <div class="p-listbox-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
            </div>
            <span *ngIf="isEmpty()" role="status" aria-live="polite" class="p-hidden-accessible">
                {{ emptyMessage }}
            </span>
            <span role="status" aria-live="polite" class="p-hidden-accessible">
                {{ selectedMessageText }}
            </span>
            <span
                #lastHiddenFocusableElement
                role="presentation"
                [attr.aria-hidden]="true"
                class="p-hidden-accessible p-hidden-focusable"
                [tabindex]="!disabled ? tabindex : -1"
                (focus)="onLastHiddenFocus($event)"
                [attr.data-p-hidden-focusable]="true"
            >
            </span>
        </div>
    `, providers: [LISTBOX_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;-webkit-user-select:none;user-select:none}.p-listbox-header{display:flex;align-items:center}.p-listbox-filter-container{position:relative;flex:1 1 auto}.p-listbox-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-listbox-filter{width:100%}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FilterService }, { type: i1.PrimeNGConfig }, { type: i0.Renderer2 }], propDecorators: { id: [{
                type: Input
            }], searchMessage: [{
                type: Input
            }], emptySelectionMessage: [{
                type: Input
            }], selectionMessage: [{
                type: Input
            }], autoOptionFocus: [{
                type: Input
            }], selectOnFocus: [{
                type: Input
            }], searchLocale: [{
                type: Input
            }], focusOnHover: [{
                type: Input
            }], filterMessage: [{
                type: Input
            }], filterFields: [{
                type: Input
            }], lazy: [{
                type: Input
            }], virtualScroll: [{
                type: Input
            }], virtualScrollItemSize: [{
                type: Input
            }], virtualScrollOptions: [{
                type: Input
            }], scrollHeight: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], multiple: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], listStyle: [{
                type: Input
            }], listStyleClass: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], checkbox: [{
                type: Input
            }], filter: [{
                type: Input
            }], filterBy: [{
                type: Input
            }], filterMatchMode: [{
                type: Input
            }], filterLocale: [{
                type: Input
            }], metaKeySelection: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], showToggleAll: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], ariaFilterLabel: [{
                type: Input
            }], filterPlaceHolder: [{
                type: Input
            }], emptyFilterMessage: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], group: [{
                type: Input
            }], options: [{
                type: Input
            }], filterValue: [{
                type: Input
            }], selectAll: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onClick: [{
                type: Output
            }], onDblClick: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onSelectAllChange: [{
                type: Output
            }], headerCheckboxViewChild: [{
                type: ViewChild,
                args: ['headerchkbox']
            }], filterViewChild: [{
                type: ViewChild,
                args: ['filter']
            }], lastHiddenFocusableElement: [{
                type: ViewChild,
                args: ['lastHiddenFocusableElement']
            }], firstHiddenFocusableElement: [{
                type: ViewChild,
                args: ['firstHiddenFocusableElement']
            }], scroller: [{
                type: ViewChild,
                args: ['scroller']
            }], listViewChild: [{
                type: ViewChild,
                args: ['list']
            }], headerFacet: [{
                type: ContentChild,
                args: [Header]
            }], footerFacet: [{
                type: ContentChild,
                args: [Footer]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class ListboxModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ListboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: ListboxModule, declarations: [Listbox], imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, SearchIcon, CheckIcon], exports: [Listbox, SharedModule, ScrollerModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ListboxModule, imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, SearchIcon, CheckIcon, SharedModule, ScrollerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ListboxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, SearchIcon, CheckIcon],
                    exports: [Listbox, SharedModule, ScrollerModule],
                    declarations: [Listbox]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9saXN0Ym94L2xpc3Rib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFFBQVEsRUFDUixTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosZUFBZSxFQUNmLFlBQVksRUFHWixVQUFVLEVBRVYsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFHakIsUUFBUSxFQUNSLE1BQU0sRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBa0UsTUFBTSxhQUFhLENBQUM7QUFDMUksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdoRCxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUU1RCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBUTtJQUN2QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ3RDLEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUNGOzs7R0FHRztBQTBNSCxNQUFNLE9BQU8sT0FB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QUFhOztBQWk0QmxDLE1BQU0sT0FBTyxhQUFhO3VHQUFiLGFBQWE7d0dBQWIsYUFBYSxpQkEzcUNiLE9BQU8sYUF1cUNOLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsU0FBUyxhQXZxQ2hGLE9BQU8sRUF3cUNHLFlBQVksRUFBRSxjQUFjO3dHQUd0QyxhQUFhLFlBSlosWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ3RFLFlBQVksRUFBRSxjQUFjOzsyRkFHdEMsYUFBYTtrQkFMekIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQztvQkFDMUYsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ2hELFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE5nTW9kdWxlLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQ29udGVudENoaWxkLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBPbkluaXQsXG4gICAgT25EZXN0cm95LFxuICAgIGNvbXB1dGVkLFxuICAgIHNpZ25hbCxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlLCBQcmltZVRlbXBsYXRlLCBGb290ZXIsIEhlYWRlciwgRmlsdGVyU2VydmljZSwgVHJhbnNsYXRpb25LZXlzLCBQcmltZU5HQ29uZmlnLCBTY3JvbGxlck9wdGlvbnMgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMsIFVuaXF1ZUNvbXBvbmVudElkIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL3NlYXJjaCc7XG5pbXBvcnQgeyBDaGVja0ljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZWNrJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IExpc3Rib3hDaGFuZ2VFdmVudCwgTGlzdGJveENsaWNrRXZlbnQsIExpc3Rib3hEb3VibGVDbGlja0V2ZW50LCBMaXN0Ym94RmlsdGVyRXZlbnQsIExpc3Rib3hGaWx0ZXJPcHRpb25zLCBMaXN0Ym94U2VsZWN0QWxsQ2hhbmdlRXZlbnQgfSBmcm9tICcuL2xpc3Rib3guaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjcm9sbGVyLCBTY3JvbGxlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc2Nyb2xsZXInO1xuXG5leHBvcnQgY29uc3QgTElTVEJPWF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExpc3Rib3gpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBMaXN0Qm94IGlzIHVzZWQgdG8gc2VsZWN0IG9uZSBvciBtb3JlIHZhbHVlcyBmcm9tIGEgbGlzdCBvZiBpdGVtcy5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1saXN0Ym94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFthdHRyLmlkXT1cImlkXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXNvdXQoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAjZmlyc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50XG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlIHAtaGlkZGVuLWZvY3VzYWJsZVwiXG4gICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIiFkaXNhYmxlZCA/IHRhYmluZGV4IDogLTFcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZpcnN0SGlkZGVuRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1wLWhpZGRlbi1mb2N1c2FibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1saXN0Ym94LWhlYWRlclwiICpuZ0lmPVwiaGVhZGVyRmFjZXQgfHwgaGVhZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBtb2RlbFZhbHVlKCksIG9wdGlvbnM6IHZpc2libGVPcHRpb25zKCkgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1saXN0Ym94LWhlYWRlclwiICpuZ0lmPVwiKGNoZWNrYm94ICYmIG11bHRpcGxlICYmIHNob3dUb2dnbGVBbGwpIHx8IGZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjaGVja2JveCAmJiBtdWx0aXBsZSAmJiBzaG93VG9nZ2xlQWxsXCIgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgW25nQ2xhc3NdPVwieyAncC1jaGVja2JveC1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IHRvZ2dsZUFsbERpc2FibGVkIH1cIiAoY2xpY2spPVwib25Ub2dnbGVBbGwoJGV2ZW50KVwiIChrZXlkb3duKT1cIm9uSGVhZGVyQ2hlY2tib3hLZXlEb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIiBbYXR0ci5kYXRhLXAtaGlkZGVuLWFjY2Vzc2libGVdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2hlYWRlcmNoa2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY2hlY2tlZF09XCJhbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgdG9nZ2xlQWxsRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkhlYWRlckNoZWNrYm94Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZWFkZXJDaGVja2JveEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJ0b2dnbGVBbGxBcmlhTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiIHJvbGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJhbGxTZWxlY3RlZCgpXCIgW25nQ2xhc3NdPVwieyAncC1oaWdobGlnaHQnOiBhbGxTZWxlY3RlZCgpLCAncC1mb2N1cyc6IGhlYWRlckNoZWNrYm94Rm9jdXMsICdwLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgdG9nZ2xlQWxsRGlzYWJsZWQgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIFtzdHlsZUNsYXNzXT1cIidwLWNoZWNrYm94LWljb24nXCIgKm5nSWY9XCIhY2hlY2tJY29uVGVtcGxhdGVcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoZWNrSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWNoZWNrYm94LWljb25cIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNoZWNrSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlclRlbXBsYXRlOyBlbHNlIGJ1aWx0SW5GaWx0ZXJFbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWx0ZXJUZW1wbGF0ZTsgY29udGV4dDogeyBvcHRpb25zOiBmaWx0ZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2J1aWx0SW5GaWx0ZXJFbGVtZW50PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1saXN0Ym94LWZpbHRlci1jb250YWluZXJcIiAqbmdJZj1cImZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1saXN0Ym94LWZpbHRlciBwLWlucHV0dGV4dCBwLWNvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInNlYXJjaGJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIl9maWx0ZXJWYWx1ZSgpIHx8ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtb3duc109XCJpZCArICdfbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJmb2N1c2VkT3B0aW9uSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cImZpbHRlclBsYWNlSG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFGaWx0ZXJMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIiFkaXNhYmxlZCAmJiAhZm9jdXNlZCA/IHRhYmluZGV4IDogLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbHRlckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbkZpbHRlcktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25GaWx0ZXJCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uICpuZ0lmPVwiIWZpbHRlckljb25UZW1wbGF0ZVwiIFtzdHlsZUNsYXNzXT1cIidwLWxpc3Rib3gtZmlsdGVyLWljb24nXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImZpbHRlckljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1saXN0Ym94LWZpbHRlci1pY29uXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImZpbHRlckljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwic3RhdHVzXCIgYXR0ci5hcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIiBbYXR0ci5kYXRhLXAtaGlkZGVuLWFjY2Vzc2libGVdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlsdGVyUmVzdWx0TWVzc2FnZVRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtbGlzdGJveC1saXN0LXdyYXBwZXInXCIgW25nU3R5bGVdPVwibGlzdFN0eWxlXCIgW2NsYXNzXT1cImxpc3RTdHlsZUNsYXNzXCIgW3N0eWxlLm1heC1oZWlnaHRdPVwidmlydHVhbFNjcm9sbCA/ICdhdXRvJyA6IHNjcm9sbEhlaWdodCB8fCAnYXV0bydcIj5cbiAgICAgICAgICAgICAgICA8cC1zY3JvbGxlclxuICAgICAgICAgICAgICAgICAgICAjc2Nyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCJcbiAgICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cInZpc2libGVPcHRpb25zKClcIlxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbEhlaWdodCB9XCJcbiAgICAgICAgICAgICAgICAgICAgW2l0ZW1TaXplXT1cInZpcnR1YWxTY3JvbGxJdGVtU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdXRvU2l6ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIi0xXCJcbiAgICAgICAgICAgICAgICAgICAgW2xhenldPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInZpcnR1YWxTY3JvbGxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgKG9uTGF6eUxvYWQpPVwib25MYXp5TG9hZC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNvbnRlbnRcIiBsZXQtaXRlbXMgbGV0LXNjcm9sbGVyT3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidWlsZEluSXRlbXM7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtcywgb3B0aW9uczogc2Nyb2xsZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwibG9hZGVyXCIgbGV0LXNjcm9sbGVyT3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibG9hZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgb3B0aW9uczogc2Nyb2xsZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvcC1zY3JvbGxlcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXZpcnR1YWxTY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1aWxkSW5JdGVtczsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZpc2libGVPcHRpb25zKCksIG9wdGlvbnM6IHt9IH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYnVpbGRJbkl0ZW1zIGxldC1pdGVtcyBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgICNsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtbGlzdGJveC1saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0YWJpbmRleF09XCItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLW11bHRpc2VsZWN0YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInNjcm9sbGVyT3B0aW9ucy5jb250ZW50U3R5bGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwic2Nyb2xsZXJPcHRpb25zLmNvbnRlbnRTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWFjdGl2ZWRlc2NlbmRhbnRdPVwiZm9jdXNlZCA/IGZvY3VzZWRPcHRpb25JZCA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLW11bHRpc2VsZWN0YWJsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkxpc3RGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cIm9uTGlzdEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbkxpc3RLZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW9wdGlvbiBbbmdGb3JPZl09XCJpdGVtc1wiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNPcHRpb25Hcm91cChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbYXR0ci5pZF09XCJpZCArICdfJyArIGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucylcIiBjbGFzcz1cInAtbGlzdGJveC1pdGVtLWdyb3VwXCIgW25nU3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbGVyT3B0aW9ucy5pdGVtU2l6ZSArICdweCcgfVwiIHJvbGU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWdyb3VwVGVtcGxhdGVcIj57eyBnZXRPcHRpb25Hcm91cExhYmVsKG9wdGlvbi5vcHRpb25Hcm91cCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG9wdGlvbi5vcHRpb25Hcm91cCB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc09wdGlvbkdyb3VwKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwUmlwcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtbGlzdGJveC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWQgKyAnXycgKyBnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBzY3JvbGxlck9wdGlvbnMuaXRlbVNpemUgKyAncHgnIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncC1saXN0Ym94LWl0ZW0nOiB0cnVlLCAncC1oaWdobGlnaHQnOiBpc1NlbGVjdGVkKG9wdGlvbiksICdwLWZvY3VzJzogZm9jdXNlZE9wdGlvbkluZGV4KCkgPT09IGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucyksICdwLWRpc2FibGVkJzogaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJnZXRPcHRpb25MYWJlbChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2V0c2l6ZV09XCJhcmlhU2V0U2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYVBvc0luc2V0XT1cImdldEFyaWFQb3NJbnNldChnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25PcHRpb25TZWxlY3QoJGV2ZW50LCBvcHRpb24sIGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucykpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJvbk9wdGlvbkRvdWJsZUNsaWNrKCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cIm9uT3B0aW9uTW91c2VEb3duKCRldmVudCwgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25PcHRpb25Nb3VzZUVudGVyKCRldmVudCwgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRvdWNoZW5kKT1cIm9uT3B0aW9uVG91Y2hFbmQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgKm5nSWY9XCJjaGVja2JveCAmJiBtdWx0aXBsZVwiIFtuZ0NsYXNzXT1cInsgJ3AtY2hlY2tib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCBpc09wdGlvbkRpc2FibGVkKG9wdGlvbikgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiIFtuZ0NsYXNzXT1cInsgJ3AtaGlnaGxpZ2h0JzogaXNTZWxlY3RlZChvcHRpb24pIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2VsZWN0ZWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBbc3R5bGVDbGFzc109XCIncC1jaGVja2JveC1pY29uJ1wiICpuZ0lmPVwiIWNoZWNrSWNvblRlbXBsYXRlXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoZWNrSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWNoZWNrYm94LWljb25cIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2hlY2tJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXRlbVRlbXBsYXRlXCI+e3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBvcHRpb24sIGluZGV4OiBnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJoYXNGaWx0ZXIoKSAmJiBpc0VtcHR5KClcIiBjbGFzcz1cInAtbGlzdGJveC1lbXB0eS1tZXNzYWdlXCIgcm9sZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW1wdHlGaWx0ZXJUZW1wbGF0ZSAmJiAhZW1wdHlUZW1wbGF0ZTsgZWxzZSBlbXB0eUZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eUZpbHRlck1lc3NhZ2VUZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAjZW1wdHlGaWx0ZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlbXB0eUZpbHRlclRlbXBsYXRlIHx8IGVtcHR5VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCIhaGFzRmlsdGVyKCkgJiYgaXNFbXB0eSgpXCIgY2xhc3M9XCJwLWxpc3Rib3gtZW1wdHktbWVzc2FnZVwiIHJvbGU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVtcHR5VGVtcGxhdGU7IGVsc2UgZW1wdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1wdHlNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAjZW1wdHkgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlbXB0eVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWxpc3Rib3gtZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJGYWNldCB8fCBmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG1vZGVsVmFsdWUoKSwgb3B0aW9uczogdmlzaWJsZU9wdGlvbnMoKSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNFbXB0eSgpXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIHt7IGVtcHR5TWVzc2FnZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkTWVzc2FnZVRleHQgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgI2xhc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50XG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlIHAtaGlkZGVuLWZvY3VzYWJsZVwiXG4gICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIiFkaXNhYmxlZCA/IHRhYmluZGV4IDogLTFcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkxhc3RIaWRkZW5Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXAtaGlkZGVuLWZvY3VzYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtMSVNUQk9YX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2xpc3Rib3guY3NzJ10sXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIExpc3Rib3ggaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGUgc2VhcmNoIGlzIGFjdGl2ZS4gRGVmYXVsdHMgdG8gZ2xvYmFsIHZhbHVlIGluIGkxOG4gdHJhbnNsYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlICd7MH0gcmVzdWx0cyBhcmUgYXZhaWxhYmxlJ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNlYXJjaE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiBmaWx0ZXJpbmcgZG9lcyBub3QgcmV0dXJuIGFueSByZXN1bHRzLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgJ05vIHNlbGVjdGVkIGl0ZW0nXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlTZWxlY3Rpb25NZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gaGlkZGVuIGFjY2Vzc2libGUgZmllbGQgd2hlbiBvcHRpb25zIGFyZSBzZWxlY3RlZC4gRGVmYXVsdHMgdG8gZ2xvYmFsIHZhbHVlIGluIGkxOG4gdHJhbnNsYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlICd7MH0gaXRlbXMgc2VsZWN0ZWQnXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0aW9uTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZm9jdXMgb24gdGhlIGZpcnN0IHZpc2libGUgb3Igc2VsZWN0ZWQgZWxlbWVudCB3aGVuIHRoZSBvdmVybGF5IHBhbmVsIGlzIHNob3duLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGF1dG9PcHRpb25Gb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHRydWU7XG4gICAgLyoqXG4gICAgICogV2hlbiBlbmFibGVkLCB0aGUgZm9jdXNlZCBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0T25Gb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMb2NhbGUgdG8gdXNlIGluIHNlYXJjaGluZy4gVGhlIGRlZmF1bHQgbG9jYWxlIGlzIHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2VhcmNoTG9jYWxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZW5hYmxlZCwgdGhlIGhvdmVyZWQgb3B0aW9uIHdpbGwgYmUgZm9jdXNlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmb2N1c09uSG92ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gZmlsdGVyaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZpbHRlck1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBGaWVsZHMgdXNlZCB3aGVuIGZpbHRlcmluZyB0aGUgb3B0aW9ucywgZGVmYXVsdHMgdG8gb3B0aW9uTGFiZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyRmllbGRzOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGlmIGRhdGEgaXMgbG9hZGVkIGFuZCBpbnRlcmFjdGVkIHdpdGggaW4gbGF6eSBtYW5uZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbGF6eTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRhdGEgc2hvdWxkIGJlIGxvYWRlZCBvbiBkZW1hbmQgZHVyaW5nIHNjcm9sbC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEhlaWdodCBvZiBhbiBpdGVtIGluIHRoZSBsaXN0IGZvciBWaXJ0dWFsU2Nyb2xsaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gdXNlIHRoZSBzY3JvbGxlciBmZWF0dXJlLiBUaGUgcHJvcGVydGllcyBvZiBzY3JvbGxlciBjb21wb25lbnQgY2FuIGJlIHVzZWQgbGlrZSBhbiBvYmplY3QgaW4gaXQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbE9wdGlvbnM6IFNjcm9sbGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGluIHBpeGVscywgYSBzY3JvbGxiYXIgaXMgZGVmaW5lZCBpZiBoZWlnaHQgb2YgbGlzdCBleGNlZWRzIHRoaXMgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2Nyb2xsSGVpZ2h0OiBzdHJpbmcgPSAnMjAwcHgnO1xuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRhYmJpbmcgb3JkZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IDA7XG4gICAgLyoqXG4gICAgICogV2hlbiBzcGVjaWZpZWQsIGFsbG93cyBzZWxlY3RpbmcgbXVsdGlwbGUgdmFsdWVzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29udGFpbmVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb250YWluZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgbGlzdCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxpc3RTdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgbGlzdCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxpc3RTdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgZWxlbWVudCB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBlbGVtZW50IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCwgYWxsb3dzIHNlbGVjdGluZyBpdGVtcyB3aXRoIGNoZWNrYm94ZXMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgY2hlY2tib3g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCwgZGlzcGxheXMgYSBmaWx0ZXIgaW5wdXQgYXQgaGVhZGVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZmlsdGVyaW5nIGlzIGVuYWJsZWQsIGZpbHRlckJ5IGRlY2lkZXMgd2hpY2ggZmllbGQgb3IgZmllbGRzIChjb21tYSBzZXBhcmF0ZWQpIHRvIHNlYXJjaCBhZ2FpbnN0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBob3cgdGhlIGl0ZW1zIGFyZSBmaWx0ZXJlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJNYXRjaE1vZGU6ICdjb250YWlucycgfCAnc3RhcnRzV2l0aCcgfCAnZW5kc1dpdGgnIHwgJ2VxdWFscycgfCAnbm90RXF1YWxzJyB8ICdpbicgfCAnbHQnIHwgJ2x0ZScgfCAnZ3QnIHwgJ2d0ZScgPSAnY29udGFpbnMnO1xuICAgIC8qKlxuICAgICAqIExvY2FsZSB0byB1c2UgaW4gZmlsdGVyaW5nLiBUaGUgZGVmYXVsdCBsb2NhbGUgaXMgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGhvdyBtdWx0aXBsZSBpdGVtcyBjYW4gYmUgc2VsZWN0ZWQsIHdoZW4gdHJ1ZSBtZXRhS2V5IG5lZWRzIHRvIGJlIHByZXNzZWQgdG8gc2VsZWN0IG9yIHVuc2VsZWN0IGFuIGl0ZW0gYW5kIHdoZW4gc2V0IHRvIGZhbHNlIHNlbGVjdGlvbiBvZiBlYWNoIGl0ZW0gY2FuIGJlIHRvZ2dsZWQgaW5kaXZpZHVhbGx5LiBPbiB0b3VjaCBlbmFibGVkIGRldmljZXMsIG1ldGFLZXlTZWxlY3Rpb24gaXMgdHVybmVkIG9mZiBhdXRvbWF0aWNhbGx5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG1ldGFLZXlTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBBIHByb3BlcnR5IHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdmFsdWUgaW4gb3B0aW9ucy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBoZWFkZXIgY2hlY2tib3ggaXMgc2hvd24gaW4gbXVsdGlwbGUgbW9kZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzaG93VG9nZ2xlQWxsOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBsYWJlbCBmaWVsZCBvZiBhbiBvcHRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSB2YWx1ZSBmaWVsZCBvZiBhbiBvcHRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBvcHRpb25zIGZpZWxkIG9mIGFuIG9wdGlvbiBncm91cC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cENoaWxkcmVuOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnaXRlbXMnO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGxhYmVsIGZpZWxkIG9mIGFuIG9wdGlvbiBncm91cC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnbGFiZWwnO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGRpc2FibGVkIGZpZWxkIG9mIGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25EaXNhYmxlZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBzdHJpbmcgdGhhdCBsYWJlbHMgdGhlIGZpbHRlciBpbnB1dC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhRmlsdGVyTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHBsYWNlaG9sZGVyIG9mIHRoZSBmaWx0ZXIgaW5wdXQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyUGxhY2VIb2xkZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiBmaWx0ZXJpbmcgZG9lcyBub3QgcmV0dXJuIGFueSByZXN1bHRzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGVtcHR5RmlsdGVyTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGlzIG5vIGRhdGEuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBkaXNwbGF5IG9wdGlvbnMgYXMgZ3JvdXBlZCB3aGVuIG5lc3RlZCBvcHRpb25zIGFyZSBwcm92aWRlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBncm91cDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBzZWxlY3RpdGVtcyB0byBkaXNwbGF5IGFzIHRoZSBhdmFpbGFibGUgb3B0aW9ucy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgb3B0aW9ucygpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zKCk7XG4gICAgfVxuICAgIHNldCBvcHRpb25zKHZhbDogYW55W10pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zZXQodmFsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBzcGVjaWZpZWQsIGZpbHRlciBkaXNwbGF5cyB3aXRoIHRoaXMgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IGZpbHRlclZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJWYWx1ZSgpO1xuICAgIH1cbiAgICBzZXQgZmlsdGVyVmFsdWUodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyVmFsdWUuc2V0KHZhbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYWxsIGRhdGEgaXMgc2VsZWN0ZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IHNlbGVjdEFsbCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RBbGwodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEFsbCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gdmFsdWUgY2hhbmdlLlxuICAgICAqIEBwYXJhbSB7TGlzdGJveENoYW5nZUV2ZW50fSBldmVudCAtIEN1c3RvbSBjaGFuZ2UgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGlzdGJveENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdGJveENoYW5nZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIG9wdGlvbiBpcyBjbGlja2VkLlxuICAgICAqIEBwYXJhbSB7TGlzdGJveENsaWNrRXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGNsaWNrIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TGlzdGJveENsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0Ym94Q2xpY2tFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBvcHRpb24gaXMgZG91YmxlIGNsaWNrZWQuXG4gICAgICogQHBhcmFtIHtMaXN0Ym94RG91YmxlQ2xpY2tFdmVudH0gZXZlbnQgLSBDdXN0b20gZG91YmxlIGNsaWNrIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8TGlzdGJveERvdWJsZUNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0Ym94RG91YmxlQ2xpY2tFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBkYXRhIGlzIGZpbHRlcmVkLlxuICAgICAqIEBwYXJhbSB7TGlzdGJveEZpbHRlckV2ZW50fSBldmVudCAtIEN1c3RvbSBmaWx0ZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8TGlzdGJveEZpbHRlckV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdGJveEZpbHRlckV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGNvbXBvbmVudCByZWNlaXZlcyBmb2N1cy5cbiAgICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50IC0gRm9jdXMgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBjb21wb25lbnQgbG9zZXMgZm9jdXMuXG4gICAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBldmVudCAtIEJsdXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGFsbCBkYXRhIGlzIHNlbGVjdGVkLlxuICAgICAqIEBwYXJhbSB7TGlzdGJveFNlbGVjdEFsbENoYW5nZUV2ZW50fSBldmVudCAtIEN1c3RvbSBzZWxlY3QgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uU2VsZWN0QWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGlzdGJveFNlbGVjdEFsbENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdGJveFNlbGVjdEFsbENoYW5nZUV2ZW50PigpO1xuXG4gICAgQFZpZXdDaGlsZCgnaGVhZGVyY2hrYm94JykgaGVhZGVyQ2hlY2tib3hWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnZmlsdGVyJykgZmlsdGVyVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2xhc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50JykgbGFzdEhpZGRlbkZvY3VzYWJsZUVsZW1lbnQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnZmlyc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50JykgZmlyc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50OiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbGVyJykgc2Nyb2xsZXI6IE51bGxhYmxlPFNjcm9sbGVyPjtcblxuICAgIEBWaWV3Q2hpbGQoJ2xpc3QnKSBsaXN0Vmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBDb250ZW50Q2hpbGQoSGVhZGVyKSBoZWFkZXJGYWNldDogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBAQ29udGVudENoaWxkKEZvb3RlcikgZm9vdGVyRmFjZXQ6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXMhOiBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT47XG5cbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZmlsdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgZW1wdHlGaWx0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBlbXB0eVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgZmlsdGVySWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgY2hlY2tJY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgX2ZpbHRlclZhbHVlID0gc2lnbmFsPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuXG4gICAgcHVibGljIF9maWx0ZXJlZE9wdGlvbnM6IGFueVtdIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIGZpbHRlck9wdGlvbnM6IExpc3Rib3hGaWx0ZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIGZpbHRlcmVkOiBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIHB1YmxpYyB2YWx1ZTogYW55IHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIHB1YmxpYyBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgcHVibGljIG9wdGlvblRvdWNoZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsO1xuXG4gICAgcHVibGljIGZvY3VzOiBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIHB1YmxpYyBoZWFkZXJDaGVja2JveEZvY3VzOiBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIHRyYW5zbGF0aW9uU3Vic2NyaXB0aW9uOiBOdWxsYWJsZTxTdWJzY3JpcHRpb24+O1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIGdldCBjb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwLWxpc3Rib3ggcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtZm9jdXMnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgZm9jdXNlZE9wdGlvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyBgJHt0aGlzLmlkfV8ke3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCl9YCA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGZpbHRlclJlc3VsdE1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnZpc2libGVPcHRpb25zKCkpID8gdGhpcy5maWx0ZXJNZXNzYWdlVGV4dC5yZXBsYWNlQWxsKCd7MH0nLCB0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSA6IHRoaXMuZW1wdHlGaWx0ZXJNZXNzYWdlVGV4dDtcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVyTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlck1lc3NhZ2UgfHwgdGhpcy5jb25maWcudHJhbnNsYXRpb24uc2VhcmNoTWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgc2VhcmNoTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaE1lc3NhZ2UgfHwgdGhpcy5jb25maWcudHJhbnNsYXRpb24uc2VhcmNoTWVzc2FnZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZW1wdHlGaWx0ZXJNZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHlGaWx0ZXJNZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmVtcHR5U2VhcmNoTWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5lbXB0eUZpbHRlck1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGlvbk1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25NZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLnNlbGVjdGlvbk1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVtcHR5U2VsZWN0aW9uTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5U2VsZWN0aW9uTWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5lbXB0eVNlbGVjdGlvbk1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgPyB0aGlzLnNlbGVjdGlvbk1lc3NhZ2VUZXh0LnJlcGxhY2VBbGwoJ3swfScsIHRoaXMubXVsdGlwbGUgPyB0aGlzLm1vZGVsVmFsdWUoKS5sZW5ndGggOiAnMScpIDogdGhpcy5lbXB0eVNlbGVjdGlvbk1lc3NhZ2VUZXh0O1xuICAgIH1cblxuICAgIGdldCBhcmlhU2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZU9wdGlvbnMoKS5maWx0ZXIoKG9wdGlvbikgPT4gIXRoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IHZpcnR1YWxTY3JvbGxlckRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMudmlydHVhbFNjcm9sbDtcbiAgICB9XG5cbiAgICBnZXQgc2VhcmNoRmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJGaWVsZHMgfHwgW3RoaXMub3B0aW9uTGFiZWxdO1xuICAgIH1cblxuICAgIGdldCB0b2dnbGVBbGxBcmlhTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5hcmlhID8gdGhpcy5jb25maWcudHJhbnNsYXRpb24uYXJpYVt0aGlzLmFsbFNlbGVjdGVkKCkgPyAnc2VsZWN0QWxsJyA6ICd1bnNlbGVjdEFsbCddIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBzZWFyY2hUaW1lb3V0OiBhbnk7XG5cbiAgICBfc2VsZWN0QWxsOiBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbCA9IG51bGw7XG5cbiAgICBfb3B0aW9ucyA9IHNpZ25hbDxhbnk+KG51bGwpO1xuXG4gICAgc3RhcnRSYW5nZUluZGV4ID0gc2lnbmFsPG51bWJlcj4oLTEpO1xuXG4gICAgZm9jdXNlZE9wdGlvbkluZGV4ID0gc2lnbmFsPG51bWJlcj4oLTEpO1xuXG4gICAgbW9kZWxWYWx1ZSA9IHNpZ25hbDxhbnk+KG51bGwpO1xuXG4gICAgdmlzaWJsZU9wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdyb3VwID8gdGhpcy5mbGF0T3B0aW9ucyh0aGlzLl9vcHRpb25zKCkpIDogdGhpcy5fb3B0aW9ucygpIHx8IFtdO1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyVmFsdWUoKSA/IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIob3B0aW9ucywgdGhpcy5zZWFyY2hGaWVsZHMsIHRoaXMuX2ZpbHRlclZhbHVlKCksIHRoaXMuZmlsdGVyTWF0Y2hNb2RlLCB0aGlzLmZpbHRlckxvY2FsZSkgOiBvcHRpb25zO1xuICAgIH0pO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgZmlsdGVyU2VydmljZTogRmlsdGVyU2VydmljZSwgcHVibGljIGNvbmZpZzogUHJpbWVOR0NvbmZpZywgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbk9ic2VydmVyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVNb2RlbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbHRlckJ5KSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiAodmFsdWUpID0+IHRoaXMub25GaWx0ZXJDaGFuZ2UodmFsdWUpLFxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PiB0aGlzLnJlc2V0RmlsdGVyKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmaWx0ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHlmaWx0ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5RmlsdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbHRlcmljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlLnNldCh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgZmxhdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMgfHwgW10pLnJlZHVjZSgocmVzdWx0LCBvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IG9wdGlvbkdyb3VwOiBvcHRpb24sIGdyb3VwOiB0cnVlLCBpbmRleCB9KTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uR3JvdXBDaGlsZHJlbiA9IHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24pO1xuXG4gICAgICAgICAgICBvcHRpb25Hcm91cENoaWxkcmVuICYmIG9wdGlvbkdyb3VwQ2hpbGRyZW4uZm9yRWFjaCgobykgPT4gcmVzdWx0LnB1c2gobykpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgYXV0b1VwZGF0ZU1vZGVsKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzICYmIHRoaXMuYXV0b09wdGlvbkZvY3VzICYmICF0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgJiYgIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoZm9jdXNlZE9wdGlvbkluZGV4KTtcbiAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QobnVsbCwgdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBtb2RlbCB2YWx1ZS5cbiAgICAgKiBAZ3JvdXAgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZU1vZGVsKHZhbHVlLCBldmVudD8pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUuc2V0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT3B0aW9uKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFZhbHVlKCkuZmlsdGVyKCh2YWwpID0+ICFPYmplY3RVdGlscy5lcXVhbHModmFsLCB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbiksIHRoaXMuZXF1YWxpdHlLZXkoKSkpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0KGV2ZW50LCBvcHRpb24sIGluZGV4ID0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQgJiYgdGhpcy5vbkNsaWNrLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgb3B0aW9uLCB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcblxuICAgICAgICB0aGlzLm11bHRpcGxlID8gdGhpcy5vbk9wdGlvblNlbGVjdE11bHRpcGxlKGV2ZW50LCBvcHRpb24pIDogdGhpcy5vbk9wdGlvblNlbGVjdFNpbmdsZShldmVudCwgb3B0aW9uKTtcbiAgICAgICAgdGhpcy5vcHRpb25Ub3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGluZGV4ICE9PSAtMSAmJiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoaW5kZXgpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0TXVsdGlwbGUoZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKTtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgbGV0IG1ldGFTZWxlY3Rpb24gPSB0aGlzLm9wdGlvblRvdWNoZWQgPyBmYWxzZSA6IHRoaXMubWV0YUtleVNlbGVjdGlvbjtcblxuICAgICAgICBpZiAobWV0YVNlbGVjdGlvbikge1xuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWV0YUtleSA/IHRoaXMucmVtb3ZlT3B0aW9uKG9wdGlvbikgOiBbdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtZXRhS2V5ID8gdGhpcy5tb2RlbFZhbHVlKCkgfHwgW10gOiBbXTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZSwgdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQgPyB0aGlzLnJlbW92ZU9wdGlvbihvcHRpb24pIDogWy4uLih0aGlzLm1vZGVsVmFsdWUoKSB8fCBbXSksIHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlLCBldmVudCk7XG4gICAgfVxuXG4gICAgb25PcHRpb25TZWxlY3RTaW5nbGUoZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKTtcbiAgICAgICAgbGV0IHZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBsZXQgbWV0YVNlbGVjdGlvbiA9IHRoaXMub3B0aW9uVG91Y2hlZCA/IGZhbHNlIDogdGhpcy5tZXRhS2V5U2VsZWN0aW9uO1xuXG4gICAgICAgIGlmIChtZXRhU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgdmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQgPyBudWxsIDogdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgICAgICAgdmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0UmFuZ2UoZXZlbnQsIHN0YXJ0ID0gLTEsIGVuZCA9IC0xKSB7XG4gICAgICAgIHN0YXJ0ID09PSAtMSAmJiAoc3RhcnQgPSB0aGlzLmZpbmROZWFyZXN0U2VsZWN0ZWRPcHRpb25JbmRleChlbmQsIHRydWUpKTtcbiAgICAgICAgZW5kID09PSAtMSAmJiAoZW5kID0gdGhpcy5maW5kTmVhcmVzdFNlbGVjdGVkT3B0aW9uSW5kZXgoc3RhcnQpKTtcblxuICAgICAgICBpZiAoc3RhcnQgIT09IC0xICYmIGVuZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlU3RhcnQgPSBNYXRoLm1pbihzdGFydCwgZW5kKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlRW5kID0gTWF0aC5tYXgoc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgIC5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCArIDEpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSlcbiAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG9nZ2xlQWxsKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuaGVhZGVyQ2hlY2tib3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0QWxsQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICF0aGlzLmFsbFNlbGVjdGVkKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFsbFNlbGVjdGVkKClcbiAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgOiB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgYWxsU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEFsbCAhPT0gbnVsbCA/IHRoaXMuc2VsZWN0QWxsIDogT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnZpc2libGVPcHRpb25zKCkpICYmIHRoaXMudmlzaWJsZU9wdGlvbnMoKS5ldmVyeSgob3B0aW9uKSA9PiB0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSB8fCB0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB8fCB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgb25PcHRpb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9uVG91Y2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25PcHRpb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIGluZGV4KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbk1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNPbkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PcHRpb25Eb3VibGVDbGljayhldmVudDogTW91c2VFdmVudCwgb3B0aW9uOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbikgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkRibENsaWNrLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRmlyc3RIaWRkZW5Gb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xuICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMubGlzdFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgY29uc3QgZmlyc3RGb2N1c2FibGVFbCA9IERvbUhhbmRsZXIuZ2V0Rmlyc3RGb2N1c2FibGVFbGVtZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJzpub3QoW2RhdGEtcC1oaWRkZW4tZm9jdXNhYmxlPVwidHJ1ZVwiXSknKTtcbiAgICAgICAgdGhpcy5sYXN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50LnRhYkluZGV4ID0gT2JqZWN0VXRpbHMuaXNFbXB0eShmaXJzdEZvY3VzYWJsZUVsKSA/ICctMScgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZmlyc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBvbkxhc3RIaWRkZW5Gb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldDtcblxuICAgICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gdGhpcy5saXN0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlRWwgPSBEb21IYW5kbGVyLmdldEZpcnN0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICc6bm90KC5wLWhpZGRlbi1mb2N1c2FibGUpJyk7XG5cbiAgICAgICAgICAgIERvbUhhbmRsZXIuZm9jdXMoZmlyc3RGb2N1c2FibGVFbCk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50LnRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmZpcnN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBvbkZvY3Vzb3V0KGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpICYmIHRoaXMubGFzdEhpZGRlbkZvY3VzYWJsZUVsZW1lbnQgJiYgdGhpcy5maXJzdEhpZGRlbkZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFiSW5kZXggPSB0aGlzLmxhc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxpc3RGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBmb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgOiB0aGlzLmF1dG9PcHRpb25Gb2N1cyA/IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCkgOiAtMTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KGZvY3VzZWRPcHRpb25JbmRleCk7XG4gICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkxpc3RCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgICAgICB0aGlzLnN0YXJ0UmFuZ2VJbmRleC5zZXQoLTEpO1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgb25IZWFkZXJDaGVja2JveEZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3hGb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgb25IZWFkZXJDaGVja2JveEJsdXIoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyQ2hlY2tib3hGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSGVhZGVyQ2hlY2tib3hLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG9nZ2xlQWxsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG9nZ2xlQWxsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhlYWRlckNoZWNrYm94VGFiS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IZWFkZXJDaGVja2JveFRhYktleURvd24oZXZlbnQpIHtcbiAgICAgICAgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmxpc3RWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25GaWx0ZXJDaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlPy50cmltKCk7XG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgICAgIHRoaXMuc3RhcnRSYW5nZUluZGV4LnNldCgtMSk7XG4gICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBmaWx0ZXI6IHRoaXMuX2ZpbHRlclZhbHVlKCkgfSk7XG5cbiAgICAgICAgIXRoaXMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQgJiYgdGhpcy5zY3JvbGxlci5zY3JvbGxUb0luZGV4KDApO1xuICAgIH1cblxuICAgIG9uRmlsdGVyQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleC5zZXQoLTEpO1xuICAgICAgICB0aGlzLnN0YXJ0UmFuZ2VJbmRleC5zZXQoLTEpO1xuICAgIH1cblxuICAgIG9uTGlzdEtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3QgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhvbWVLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhZ2VEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFnZVVwS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgY2FzZSAnTnVtcGFkRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMub25TcGFjZUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgICAgICAgLy9OT09QXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdTaGlmdFJpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hpZnRLZXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBldmVudC5jb2RlID09PSAnS2V5QScgJiYgbWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlLCBldmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhS2V5ICYmIE9iamVjdFV0aWxzLmlzUHJpbnRhYmxlQ2hhcmFjdGVyKGV2ZW50LmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hPcHRpb25zKGV2ZW50LCBldmVudC5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaWx0ZXJLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93VXBLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93TGVmdEtleShldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Ib21lS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMub25FbnRlcktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdTaGlmdFJpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hpZnRLZXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyb3dEb3duS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyB0aGlzLmZpbmROZXh0T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSkgOiB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLm9uT3B0aW9uU2VsZWN0UmFuZ2UoZXZlbnQsIHRoaXMuc3RhcnRSYW5nZUluZGV4KCksIG9wdGlvbkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25BcnJvd1VwS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyB0aGlzLmZpbmRQcmV2T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSkgOiB0aGlzLmZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgb3B0aW9uSW5kZXgsIHRoaXMuc3RhcnRSYW5nZUluZGV4KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkFycm93TGVmdEtleShldmVudDogS2V5Ym9hcmRFdmVudCwgcHJlc3NlZEluSW5wdXRUZXh0ID0gZmFsc2UpIHtcbiAgICAgICAgcHJlc3NlZEluSW5wdXRUZXh0ICYmIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgfVxuXG4gICAgb25Ib21lS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBwcmVzc2VkSW5JbnB1dFRleHQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAocHJlc3NlZEluSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgIGxldCBvcHRpb25JbmRleCA9IHRoaXMuZmluZEZpcnN0T3B0aW9uSW5kZXgoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgbWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3RSYW5nZShldmVudCwgb3B0aW9uSW5kZXgsIHRoaXMuc3RhcnRSYW5nZUluZGV4KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkVuZEtleShldmVudDogS2V5Ym9hcmRFdmVudCwgcHJlc3NlZEluSW5wdXRUZXh0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHByZXNzZWRJbklucHV0VGV4dCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdGFyZ2V0LnZhbHVlLmxlbmd0aDtcblxuICAgICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGxlbiwgbGVuKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgIGxldCBvcHRpb25JbmRleCA9IHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSAmJiBtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdFJhbmdlKGV2ZW50LCB0aGlzLnN0YXJ0UmFuZ2VJbmRleCgpLCBvcHRpb25JbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBvcHRpb25JbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUGFnZURvd25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcoMCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25QYWdlVXBLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcodGhpcy52aXNpYmxlT3B0aW9ucygpLmxlbmd0aCAtIDEpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRW50ZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBldmVudC5zaGlmdEtleSkgdGhpcy5vbk9wdGlvblNlbGVjdFJhbmdlKGV2ZW50LCB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25TcGFjZUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLm9uRW50ZXJLZXkoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uU2hpZnRLZXkoKSB7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRPcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCk7XG4gICAgICAgIHRoaXMuc3RhcnRSYW5nZUluZGV4LnNldChmb2N1c2VkT3B0aW9uSW5kZXgpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0aW9uR3JvdXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbiA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbikgOiBvcHRpb25Hcm91cC5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRPcHRpb25Hcm91cExhYmVsKG9wdGlvbkdyb3VwOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uR3JvdXBMYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBMYWJlbCkgOiBvcHRpb25Hcm91cCAmJiBvcHRpb25Hcm91cC5sYWJlbCAhPT0gdW5kZWZpbmVkID8gb3B0aW9uR3JvdXAubGFiZWwgOiBvcHRpb25Hcm91cDtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25MYWJlbCkgOiBvcHRpb24ubGFiZWwgIT0gdW5kZWZpbmVkID8gb3B0aW9uLmxhYmVsIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkluZGV4KGluZGV4LCBzY3JvbGxlck9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQgPyBpbmRleCA6IHNjcm9sbGVyT3B0aW9ucyAmJiBzY3JvbGxlck9wdGlvbnMuZ2V0SXRlbU9wdGlvbnMoaW5kZXgpWydpbmRleCddO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogIXRoaXMub3B0aW9uTGFiZWwgJiYgb3B0aW9uICYmIG9wdGlvbi52YWx1ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldEFyaWFQb3NJbnNldChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAodGhpcy5vcHRpb25Hcm91cExhYmVsXG4gICAgICAgICAgICAgICAgPyBpbmRleCAtXG4gICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiB0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSkubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiBpbmRleCkgKyAxXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFzU2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBpc09wdGlvbkdyb3VwKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsICYmIG9wdGlvbi5vcHRpb25Hcm91cCAmJiBvcHRpb24uZ3JvdXA7XG4gICAgfVxuXG4gICAgY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldChpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEluVmlldygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzICYmICF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgdGhpcy52aXNpYmxlT3B0aW9ucygpW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hPcHRpb25zKGV2ZW50LCBjaGFyKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAodGhpcy5zZWFyY2hWYWx1ZSB8fCAnJykgKyBjaGFyO1xuXG4gICAgICAgIGxldCBvcHRpb25JbmRleCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSkge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAuc2xpY2UodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSlcbiAgICAgICAgICAgICAgICAuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKG9wdGlvbikpO1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPVxuICAgICAgICAgICAgICAgIG9wdGlvbkluZGV4ID09PSAtMVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzT3B0aW9uTWF0Y2hlZChvcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICA6IG9wdGlvbkluZGV4ICsgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbkluZGV4ID0gdGhpcy52aXNpYmxlT3B0aW9ucygpLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzT3B0aW9uTWF0Y2hlZChvcHRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ID09PSAtMSAmJiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpID09PSAtMSkge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cblxuICAgIGlzT3B0aW9uTWF0Y2hlZChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pICYmIHRoaXMuZ2V0T3B0aW9uTGFiZWwob3B0aW9uKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLmZpbHRlckxvY2FsZSkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsSW5WaWV3KGluZGV4ID0gLTEpIHtcbiAgICAgICAgY29uc3QgaWQgPSBpbmRleCAhPT0gLTEgPyBgJHt0aGlzLmlkfV8ke2luZGV4fWAgOiB0aGlzLmZvY3VzZWRPcHRpb25JZDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmxpc3RWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwgYGxpW2lkPVwiJHtpZH1cIl1gKTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyAmJiBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCcgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlydHVhbFNjcm9sbCAmJiB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvSW5kZXgoaW5kZXggIT09IC0xID8gaW5kZXggOiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRGaXJzdE9wdGlvbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlT3B0aW9ucygpLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgZmluZExhc3RPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLCAob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5maW5kRmlyc3RTZWxlY3RlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggPCAwID8gdGhpcy5maW5kRmlyc3RPcHRpb25JbmRleCgpIDogc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBmaW5kTGFzdEZvY3VzZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZmluZExhc3RTZWxlY3RlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggPCAwID8gdGhpcy5maW5kTGFzdE9wdGlvbkluZGV4KCkgOiBzZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIGZpbmRMYXN0U2VsZWN0ZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSA/IE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLCAob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRTZWxlY3RlZE9wdGlvbihvcHRpb24pKSA6IC0xO1xuICAgIH1cblxuICAgIGZpbmROZXh0T3B0aW9uSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbkluZGV4ID1cbiAgICAgICAgICAgIGluZGV4IDwgdGhpcy52aXNpYmxlT3B0aW9ucygpLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSlcbiAgICAgICAgICAgICAgICA6IC0xO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkT3B0aW9uSW5kZXggPiAtMSA/IG1hdGNoZWRPcHRpb25JbmRleCArIGluZGV4ICsgMSA6IGluZGV4O1xuICAgIH1cblxuICAgIGZpbmROZXh0U2VsZWN0ZWRPcHRpb25JbmRleChpbmRleCkge1xuICAgICAgICBjb25zdCBtYXRjaGVkT3B0aW9uSW5kZXggPVxuICAgICAgICAgICAgdGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpICYmIGluZGV4IDwgdGhpcy52aXNpYmxlT3B0aW9ucygpLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbmRJbmRleCgob3B0aW9uKSA9PiB0aGlzLmlzVmFsaWRTZWxlY3RlZE9wdGlvbihvcHRpb24pKVxuICAgICAgICAgICAgICAgIDogLTE7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4ICsgaW5kZXggKyAxIDogLTE7XG4gICAgfVxuXG4gICAgZmluZFByZXZTZWxlY3RlZE9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9IHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSAmJiBpbmRleCA+IDAgPyBPYmplY3RVdGlscy5maW5kTGFzdEluZGV4KHRoaXMudmlzaWJsZU9wdGlvbnMoKS5zbGljZSgwLCBpbmRleCksIChvcHRpb24pID0+IHRoaXMuaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbikpIDogLTE7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4IDogLTE7XG4gICAgfVxuXG4gICAgZmluZEZpcnN0U2VsZWN0ZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5maW5kSW5kZXgoKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkU2VsZWN0ZWRPcHRpb24ob3B0aW9uKSkgOiAtMTtcbiAgICB9XG5cbiAgICBmaW5kUHJldk9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9IGluZGV4ID4gMCA/IE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLnNsaWNlKDAsIGluZGV4KSwgKG9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikpIDogLTE7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4IDogaW5kZXg7XG4gICAgfVxuXG4gICAgZmluZE5lYXJlc3RTZWxlY3RlZE9wdGlvbkluZGV4KGluZGV4LCBmaXJzdENoZWNrVXAgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbWF0Y2hlZE9wdGlvbkluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSkge1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hlY2tVcCkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRPcHRpb25JbmRleCA9IHRoaXMuZmluZFByZXZTZWxlY3RlZE9wdGlvbkluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICBtYXRjaGVkT3B0aW9uSW5kZXggPSBtYXRjaGVkT3B0aW9uSW5kZXggPT09IC0xID8gdGhpcy5maW5kTmV4dFNlbGVjdGVkT3B0aW9uSW5kZXgoaW5kZXgpIDogbWF0Y2hlZE9wdGlvbkluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkT3B0aW9uSW5kZXggPSB0aGlzLmZpbmROZXh0U2VsZWN0ZWRPcHRpb25JbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9wdGlvbkluZGV4ID0gbWF0Y2hlZE9wdGlvbkluZGV4ID09PSAtMSA/IHRoaXMuZmluZFByZXZTZWxlY3RlZE9wdGlvbkluZGV4KGluZGV4KSA6IG1hdGNoZWRPcHRpb25JbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVkT3B0aW9uSW5kZXggPiAtMSA/IG1hdGNoZWRPcHRpb25JbmRleCA6IGluZGV4O1xuICAgIH1cblxuICAgIGVxdWFsaXR5S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25WYWx1ZSA/IG51bGwgOiB0aGlzLmRhdGFLZXk7XG4gICAgfVxuXG4gICAgaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgaXNPcHRpb25EaXNhYmxlZChvcHRpb246IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25EaXNhYmxlZCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkRpc2FibGVkKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQob3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSByZXR1cm4gKHRoaXMubW9kZWxWYWx1ZSgpIHx8IFtdKS5zb21lKCh2YWx1ZSkgPT4gT2JqZWN0VXRpbHMuZXF1YWxzKHZhbHVlLCBvcHRpb25WYWx1ZSwgdGhpcy5lcXVhbGl0eUtleSgpKSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIE9iamVjdFV0aWxzLmVxdWFscyh0aGlzLm1vZGVsVmFsdWUoKSwgb3B0aW9uVmFsdWUsIHRoaXMuZXF1YWxpdHlLZXkoKSk7XG4gICAgfVxuXG4gICAgaXNWYWxpZE9wdGlvbihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbiAmJiAhKHRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHx8IHRoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuX29wdGlvbnMoKSB8fCAodGhpcy5fb3B0aW9ucygpICYmIHRoaXMuX29wdGlvbnMoKS5sZW5ndGggPT09IDApO1xuICAgIH1cblxuICAgIGhhc0ZpbHRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclZhbHVlKCkgJiYgdGhpcy5fZmlsdGVyVmFsdWUoKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZXNldEZpbHRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmlld0NoaWxkICYmIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlLnNldChudWxsKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIFJpcHBsZU1vZHVsZSwgU2Nyb2xsZXJNb2R1bGUsIFNlYXJjaEljb24sIENoZWNrSWNvbl0sXG4gICAgZXhwb3J0czogW0xpc3Rib3gsIFNoYXJlZE1vZHVsZSwgU2Nyb2xsZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0xpc3Rib3hdXG59KVxuZXhwb3J0IGNsYXNzIExpc3Rib3hNb2R1bGUge31cbiJdfQ==