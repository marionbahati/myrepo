import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, signal, computed, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, ContentChild, ContentChildren, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from 'primeng/api';
import { Header, Footer, PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i3 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import { SearchIcon } from 'primeng/icons/search';
import { CheckIcon } from 'primeng/icons/check';
import * as i4 from 'primeng/scroller';
import { ScrollerModule } from 'primeng/scroller';

const LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Listbox),
    multi: true
};
/**
 * ListBox is used to select one or more values from a list of items.
 * @group Components
 */
class Listbox {
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
class ListboxModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { LISTBOX_VALUE_ACCESSOR, Listbox, ListboxModule };
//# sourceMappingURL=primeng-listbox.mjs.map
