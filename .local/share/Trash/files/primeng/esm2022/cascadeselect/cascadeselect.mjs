import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ContentChildren, effect, EventEmitter, forwardRef, Input, NgModule, Output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { AngleRightIcon } from 'primeng/icons/angleright';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import { TimesIcon } from 'primeng/icons/times';
import { OverlayModule } from 'primeng/overlay';
import { RippleModule } from 'primeng/ripple';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/overlay";
export const CASCADESELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CascadeSelect),
    multi: true
};
export class CascadeSelectSub {
    el;
    config;
    role;
    selectId;
    activeOptionPath;
    optionDisabled;
    focusedOptionId;
    options;
    optionGroupChildren;
    optionTemplate;
    groupIconTemplate;
    level = 0;
    optionLabel;
    optionValue;
    optionGroupLabel;
    dirty;
    root;
    onChange = new EventEmitter();
    get listLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)['listLabel'];
    }
    constructor(el, config) {
        this.el = el;
        this.config = config;
    }
    ngOnInit() {
        if (!this.root) {
            this.position();
        }
    }
    onOptionClick(event, option) {
        this.onChange.emit({
            originalEvent: event,
            value: option,
            isFocus: true
        });
    }
    onOptionChange(event) {
        this.onChange.emit(event);
    }
    getOptionId(processedOption) {
        return `${this.selectId}_${processedOption.key}`;
    }
    getOptionLabel(processedOption) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
    }
    getOptionValue(processedOption) {
        return this.optionValue ? ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
    }
    getOptionLabelToRender(processedOption) {
        return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
    }
    isOptionDisabled(processedOption) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
    }
    getOptionGroupLabel(processedOption) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(processedOption) {
        return processedOption.children;
    }
    isOptionGroup(processedOption) {
        return ObjectUtils.isNotEmpty(processedOption.children);
    }
    isOptionSelected(processedOption) {
        return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
    }
    isOptionActive(processedOption) {
        return this.activeOptionPath.some((path) => path.key === processedOption.key);
    }
    isOptionFocused(processedOption) {
        return this.focusedOptionId === this.getOptionId(processedOption);
    }
    getItemClass(option) {
        return {
            'p-cascadeselect-item': true,
            'p-cascadeselect-item-group': this.isOptionGroup(option),
            'p-cascadeselect-item-active p-highlight': this.isOptionActive(option),
            'p-focus': this.isOptionFocused(option),
            'p-disabled': this.isOptionDisabled(option)
        };
    }
    position() {
        const parentItem = this.el.nativeElement.parentElement;
        const containerOffset = DomHandler.getOffset(parentItem);
        const viewport = DomHandler.getViewport();
        const sublistWidth = this.el.nativeElement.children[0].offsetParent ? this.el.nativeElement.children[0].offsetWidth : DomHandler.getHiddenElementOuterWidth(this.el.nativeElement.children[0]);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
        if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
            this.el.nativeElement.children[0].style.left = '-200%';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelectSub, deps: [{ token: i0.ElementRef }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: CascadeSelectSub, selector: "p-cascadeSelectSub", inputs: { role: "role", selectId: "selectId", activeOptionPath: "activeOptionPath", optionDisabled: "optionDisabled", focusedOptionId: "focusedOptionId", options: "options", optionGroupChildren: "optionGroupChildren", optionTemplate: "optionTemplate", groupIconTemplate: "groupIconTemplate", level: "level", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", dirty: "dirty", root: "root" }, outputs: { onChange: "onChange" }, ngImport: i0, template: `
        <ul
            class="p-cascadeselect-panel p-cascadeselect-items"
            [ngClass]="{ 'p-cascadeselect-panel-root': root }"
            [attr.role]="role"
            aria-orientation="horizontal"
            [attr.data-pc-section]="level === 0 ? 'list' : 'sublist'"
            [attr.aria-label]="listLabel"
        >
            <ng-template ngFor let-processedOption [ngForOf]="options" let-i="index">
                <li
                    [ngClass]="getItemClass(processedOption)"
                    role="treeitem"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="options.length"
                    [attr.data-pc-section]="'item'"
                    [id]="getOptionId(processedOption)"
                    [attr.aria-label]="getOptionLabelToRender(processedOption)"
                    [attr.aria-selected]="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)"
                    [attr.aria-posinset]="i + 1"
                >
                    <div class="p-cascadeselect-item-content" (click)="onOptionClick($event, processedOption)" [attr.tabindex]="0" pRipple [attr.data-pc-section]="'content'">
                        <ng-container *ngIf="optionTemplate; else defaultOptionTemplate">
                            <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: processedOption.option }"></ng-container>
                        </ng-container>
                        <ng-template #defaultOptionTemplate>
                            <span class="p-cascadeselect-item-text" [attr.data-pc-section]="'text'">{{ getOptionLabelToRender(processedOption) }}</span>
                        </ng-template>
                        <span class="p-cascadeselect-group-icon" *ngIf="isOptionGroup(processedOption)" [attr.data-pc-section]="'groupIcon'">
                            <AngleRightIcon *ngIf="!groupIconTemplate" />
                            <ng-template *ngTemplateOutlet="groupIconTemplate"></ng-template>
                        </span>
                    </div>
                    <p-cascadeSelectSub
                        *ngIf="isOptionGroup(processedOption) && isOptionActive(processedOption)"
                        [role]="'group'"
                        class="p-cascadeselect-sublist"
                        [selectId]="selectId"
                        [focusedOptionId]="focusedOptionId"
                        [activeOptionPath]="activeOptionPath"
                        [options]="getOptionGroupChildren(processedOption)"
                        [optionLabel]="optionLabel"
                        [optionValue]="optionValue"
                        [level]="level + 1"
                        (onChange)="onOptionChange($event)"
                        [optionGroupLabel]="optionGroupLabel"
                        [optionGroupChildren]="optionGroupChildren"
                        [dirty]="dirty"
                        [optionTemplate]="optionTemplate"
                    >
                    </p-cascadeSelectSub>
                </li>
            </ng-template>
        </ul>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i3.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => AngleRightIcon), selector: "AngleRightIcon" }, { kind: "component", type: i0.forwardRef(() => CascadeSelectSub), selector: "p-cascadeSelectSub", inputs: ["role", "selectId", "activeOptionPath", "optionDisabled", "focusedOptionId", "options", "optionGroupChildren", "optionTemplate", "groupIconTemplate", "level", "optionLabel", "optionValue", "optionGroupLabel", "dirty", "root"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelectSub, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-cascadeSelectSub',
                    template: `
        <ul
            class="p-cascadeselect-panel p-cascadeselect-items"
            [ngClass]="{ 'p-cascadeselect-panel-root': root }"
            [attr.role]="role"
            aria-orientation="horizontal"
            [attr.data-pc-section]="level === 0 ? 'list' : 'sublist'"
            [attr.aria-label]="listLabel"
        >
            <ng-template ngFor let-processedOption [ngForOf]="options" let-i="index">
                <li
                    [ngClass]="getItemClass(processedOption)"
                    role="treeitem"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="options.length"
                    [attr.data-pc-section]="'item'"
                    [id]="getOptionId(processedOption)"
                    [attr.aria-label]="getOptionLabelToRender(processedOption)"
                    [attr.aria-selected]="isOptionGroup(processedOption) ? undefined : isOptionSelected(processedOption)"
                    [attr.aria-posinset]="i + 1"
                >
                    <div class="p-cascadeselect-item-content" (click)="onOptionClick($event, processedOption)" [attr.tabindex]="0" pRipple [attr.data-pc-section]="'content'">
                        <ng-container *ngIf="optionTemplate; else defaultOptionTemplate">
                            <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: processedOption.option }"></ng-container>
                        </ng-container>
                        <ng-template #defaultOptionTemplate>
                            <span class="p-cascadeselect-item-text" [attr.data-pc-section]="'text'">{{ getOptionLabelToRender(processedOption) }}</span>
                        </ng-template>
                        <span class="p-cascadeselect-group-icon" *ngIf="isOptionGroup(processedOption)" [attr.data-pc-section]="'groupIcon'">
                            <AngleRightIcon *ngIf="!groupIconTemplate" />
                            <ng-template *ngTemplateOutlet="groupIconTemplate"></ng-template>
                        </span>
                    </div>
                    <p-cascadeSelectSub
                        *ngIf="isOptionGroup(processedOption) && isOptionActive(processedOption)"
                        [role]="'group'"
                        class="p-cascadeselect-sublist"
                        [selectId]="selectId"
                        [focusedOptionId]="focusedOptionId"
                        [activeOptionPath]="activeOptionPath"
                        [options]="getOptionGroupChildren(processedOption)"
                        [optionLabel]="optionLabel"
                        [optionValue]="optionValue"
                        [level]="level + 1"
                        (onChange)="onOptionChange($event)"
                        [optionGroupLabel]="optionGroupLabel"
                        [optionGroupChildren]="optionGroupChildren"
                        [dirty]="dirty"
                        [optionTemplate]="optionTemplate"
                    >
                    </p-cascadeSelectSub>
                </li>
            </ng-template>
        </ul>
    `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.PrimeNGConfig }], propDecorators: { role: [{
                type: Input
            }], selectId: [{
                type: Input
            }], activeOptionPath: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], focusedOptionId: [{
                type: Input
            }], options: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], optionTemplate: [{
                type: Input
            }], groupIconTemplate: [{
                type: Input
            }], level: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], dirty: [{
                type: Input
            }], root: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
/**
 * CascadeSelect is a form component to select a value from a nested structure of options.
 * @group Components
 */
export class CascadeSelect {
    el;
    cd;
    config;
    overlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration.
     * @group Props
     * @defaultValue 'No available options'
     */
    emptySearchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @group Props
     */
    optionValue;
    /**
     * Property name or getter function to use as the label of an option group.
     * @group Props
     */
    optionGroupLabel;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @group Props
     */
    optionGroupChildren;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    placeholder;
    /**
     * Selected value of the component.
     * @group Props
     */
    value;
    /**
     * A property to uniquely identify an option.
     * @group Props
     */
    dataKey;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    inputId;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    inputLabel;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
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
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
        return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
        this._hideTransitionOptions = val;
        console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Callback to invoke on value change.
     * @param {CascadeSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new EventEmitter();
    /**
     * Callback to invoke when a group changes.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onGroupChange = new EventEmitter();
    /**
     * Callback to invoke when the overlay is shown.
     * @param {CascadeSelectShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow = new EventEmitter();
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {CascadeSelectHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onHide = new EventEmitter();
    /**
     * Callback to invoke when the clear token is clicked.
     * @group Emits
     */
    onClear = new EventEmitter();
    /**
     * Callback to invoke before overlay is shown.
     * @param {CascadeSelectBeforeShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onBeforeShow = new EventEmitter();
    /**
     * Callback to invoke before overlay is hidden.
     * @param {CascadeSelectBeforeHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onBeforeHide = new EventEmitter();
    /**
     * Callback to invoke when input receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when input loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    focusInputViewChild;
    containerViewChild;
    panelViewChild;
    overlayViewChild;
    templates;
    _showTransitionOptions = '';
    _hideTransitionOptions = '';
    selectionPath = null;
    focused = false;
    overlayVisible = false;
    dirty = true;
    searchValue;
    searchTimeout;
    valueTemplate;
    optionTemplate;
    triggerIconTemplate;
    groupIconTemplate;
    clearIconTemplate;
    onModelChange = () => { };
    onModelTouched = () => { };
    focusedOptionInfo = signal({ index: -1, level: 0, parentKey: '' });
    activeOptionPath = signal([]);
    modelValue = signal(null);
    get containerClass() {
        return {
            'p-cascadeselect p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-focus': this.focused,
            'p-inputwrapper-filled': this.modelValue(),
            'p-inputwrapper-focus': this.focused || this.overlayVisible,
            'p-overlay-open': this.overlayVisible
        };
    }
    get labelClass() {
        return {
            'p-cascadeselect-label': true,
            'p-inputtext': true,
            'p-placeholder': this.label() === this.placeholder,
            'p-cascadeselect-label-empty': !this.value && (this.label() === 'p-emptylabel' || this.label().length === 0)
        };
    }
    get focusedOptionId() {
        return this.focusedOptionInfo().index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(this.focusedOptionInfo().parentKey) ? '_' + this.focusedOptionInfo().parentKey : ''}_${this.focusedOptionInfo().index}` : null;
    }
    get filled() {
        if (typeof this.modelValue() === 'string')
            return !!this.modelValue();
        return this.modelValue() || this.modelValue() != null || this.modelValue() != undefined;
    }
    get searchResultMessageText() {
        return ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
        return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
        return this.emptySearchMessage || this.config.translation.emptySearchMessage || '';
    }
    get emptyMessageText() {
        return this.emptyMessage || this.config.translation.emptyMessage || '';
    }
    get selectionMessageText() {
        return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
        return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
        return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
    }
    visibleOptions = computed(() => {
        const processedOption = this.activeOptionPath().find((p) => p.key === this.focusedOptionInfo().parentKey);
        return processedOption ? processedOption.children : this.processedOptions();
    });
    processedOptions = computed(() => {
        return this.createProcessedOptions(this.options || []);
    });
    label = computed(() => {
        const label = this.placeholder || 'p-emptylabel';
        if (this.hasSelectedOption()) {
            const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
            const processedOption = ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
            return processedOption ? this.getOptionLabel(processedOption.option) : label;
        }
        return label;
    });
    get _label() {
        const label = this.placeholder || 'p-emptylabel';
        if (this.hasSelectedOption()) {
            const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
            const processedOption = ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
            return processedOption ? this.getOptionLabel(processedOption.option) : label;
        }
        return label;
    }
    hasSelectedOption() {
        return ObjectUtils.isNotEmpty(this.modelValue());
    }
    createProcessedOptions(options, level = 0, parent = {}, parentKey = '') {
        const processedOptions = [];
        options &&
            options.forEach((option, index) => {
                const key = (parentKey !== '' ? parentKey + '_' : '') + index;
                const newOption = {
                    option,
                    index,
                    level,
                    key,
                    parent,
                    parentKey
                };
                newOption['children'] = this.createProcessedOptions(this.getOptionGroupChildren(option, level), level + 1, newOption, key);
                processedOptions.push(newOption);
            });
        return processedOptions;
    }
    onInputFocus(event) {
        if (this.disabled) {
            // For screenreaders
            return;
        }
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        this.focusedOptionInfo.set({ indeX: -1, level: 0, parentKey: '' });
        this.searchValue = '';
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputKeyDown(event) {
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
            case 'ArrowLeft':
                this.onArrowLeftKey(event);
                break;
            case 'ArrowRight':
                this.onArrowRightKey(event);
                break;
            case 'Home':
                this.onHomeKey(event);
                break;
            case 'End':
                this.onEndKey(event);
                break;
            case 'Space':
                this.onSpaceKey(event);
                break;
            case 'Enter':
            case 'NumpadEnter':
                this.onEnterKey(event);
                break;
            case 'Escape':
                this.onEscapeKey(event);
                break;
            case 'Tab':
                this.onTabKey(event);
                break;
            case 'Backspace':
                this.onBackspaceKey(event);
                break;
            case 'PageDown':
            case 'PageUp':
            case 'ShiftLeft':
            case 'ShiftRight':
                //NOOP
                break;
            default:
                if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                    !this.overlayVisible && this.show();
                    this.searchOptions(event, event.key);
                }
                break;
        }
    }
    onArrowDownKey(event) {
        const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo().index) : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
    }
    onArrowUpKey(event) {
        if (event.altKey) {
            if (this.focusedOptionInfo().index !== -1) {
                const processedOption = this.visibleOptions[this.focusedOptionInfo().index];
                const grouped = this.isProccessedOptionGroup(processedOption);
                !grouped && this.onOptionChange({ originalEvent: event, value: processedOption });
            }
            this.overlayVisible && this.hide();
            event.preventDefault();
        }
        else {
            const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo().index) : this.findLastFocusedOptionIndex();
            this.changeFocusedOptionIndex(event, optionIndex);
            !this.overlayVisible && this.show();
            event.preventDefault();
        }
    }
    onArrowLeftKey(event) {
        if (this.overlayVisible) {
            const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
            const parentOption = this.activeOptionPath().find((p) => p.key === processedOption.parentKey);
            const matched = this.focusedOptionInfo().parentKey === '' || (parentOption && parentOption.key === this.focusedOptionInfo().parentKey);
            const root = ObjectUtils.isEmpty(processedOption.parent);
            if (matched) {
                const activeOptionPath = this.activeOptionPath().filter((p) => p.parentKey !== this.focusedOptionInfo().parentKey);
                this.activeOptionPath.set(activeOptionPath);
            }
            if (!root) {
                this.focusedOptionInfo.set({ index: -1, parentKey: parentOption ? parentOption.parentKey : '' });
                this.searchValue = '';
                this.onArrowDownKey(event);
            }
            event.preventDefault();
        }
    }
    onArrowRightKey(event) {
        if (this.overlayVisible) {
            const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
            const grouped = this.isProccessedOptionGroup(processedOption);
            if (grouped) {
                const matched = this.activeOptionPath().some((p) => processedOption.key === p.key);
                if (matched) {
                    this.focusedOptionInfo.set({ index: -1, parentKey: processedOption.key });
                    this.searchValue = '';
                    this.onArrowDownKey(event);
                }
                else {
                    this.onOptionChange({ originalEvent: event, value: processedOption });
                }
            }
            event.preventDefault();
        }
    }
    onHomeKey(event) {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
        event.preventDefault();
    }
    onEndKey(event) {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
        event.preventDefault();
    }
    onEnterKey(event) {
        if (!this.overlayVisible) {
            this.onArrowDownKey(event);
        }
        else {
            if (this.focusedOptionInfo().index !== -1) {
                const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
                const grouped = this.isProccessedOptionGroup(processedOption);
                this.onOptionChange({ originalEvent: event, value: processedOption });
                !grouped && this.hide();
            }
        }
        event.preventDefault();
    }
    onSpaceKey(event) {
        this.onEnterKey(event);
    }
    onEscapeKey(event) {
        this.overlayVisible && this.hide(true);
        event.preventDefault();
    }
    onTabKey(event) {
        if (this.focusedOptionInfo().index !== -1) {
            const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
            const grouped = this.isProccessedOptionGroup(processedOption);
            !grouped && this.onOptionChange({ originalEvent: event, value: processedOption });
        }
        this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
        if (ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
            this.clear();
        }
        event.stopPropagation();
    }
    equalityKey() {
        return this.optionValue ? null : this.dataKey;
    }
    updateModel(value, event) {
        this.value = value;
        this.onModelChange(value);
        this.modelValue.set(value);
        this.onChange.emit({
            originalEvent: event,
            value: value
        });
    }
    autoUpdateModel() {
        if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
            this.focusedOptionInfo().index = this.findFirstFocusedOptionIndex();
            this.onOptionChange({ originalEvent: null, processedOption: this.visibleOptions()[this.focusedOptionInfo().index], isHide: false });
            !this.overlayVisible && this.focusedOptionInfo.set({ index: -1, level: 0, parentKey: '' });
        }
    }
    scrollInView(index = -1) {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
        const element = DomHandler.findSingle(this.panelViewChild?.nativeElement, `li[id="${id}"]`);
        if (element) {
            element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    }
    changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionInfo().index !== index) {
            const focusedOptionInfo = this.focusedOptionInfo();
            this.focusedOptionInfo.set({ ...focusedOptionInfo, index });
            this.scrollInView();
        }
        if (this.selectOnFocus) {
            this.onOptionChange({ originalEvent: event, processedOption: this.visibleOptions()[index], isHide: false });
        }
    }
    onOptionChange(event) {
        const { originalEvent, value, isFocus, isHide } = event;
        if (ObjectUtils.isEmpty(value))
            return;
        const { index, level, parentKey, children } = value;
        const grouped = ObjectUtils.isNotEmpty(children);
        const activeOptionPath = this.activeOptionPath().filter((p) => p.parentKey !== parentKey);
        activeOptionPath.push(value);
        this.focusedOptionInfo.set({ index, level, parentKey });
        this.activeOptionPath.set(activeOptionPath);
        grouped ? this.onOptionGroupSelect({ originalEvent, value, isFocus: false }) : this.onOptionSelect({ originalEvent, value, isFocus });
        isFocus && DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    onOptionSelect(event) {
        const { originalEvent, value, isFocus } = event;
        const newValue = this.getOptionValue(value.option);
        const activeOptionPath = this.activeOptionPath();
        activeOptionPath.forEach((p) => (p.selected = true));
        this.activeOptionPath.set(activeOptionPath);
        this.updateModel(newValue, originalEvent);
        isFocus && this.hide(true);
    }
    onOptionGroupSelect(event) {
        this.dirty = true;
        this.onGroupChange.emit(event);
    }
    onContainerClick(event) {
        if (this.disabled) {
            return;
        }
        if (!this.overlayViewChild?.el?.nativeElement?.contains(event.target)) {
            if (this.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }
            this.focusInputViewChild?.nativeElement.focus();
        }
    }
    isOptionMatched(processedOption) {
        return this.isValidOption(processedOption) && this.getProccessedOptionLabel(processedOption).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isValidOption(processedOption) {
        return !!processedOption && !this.isOptionDisabled(processedOption.option);
    }
    isValidSelectedOption(processedOption) {
        return this.isValidOption(processedOption) && this.isSelected(processedOption);
    }
    isSelected(processedOption) {
        return this.activeOptionPath().some((p) => p.key === processedOption.key);
    }
    findOptionPathByValue(value, processedOptions, level = 0) {
        processedOptions = processedOptions || (level === 0 && this.processedOptions());
        if (!processedOptions)
            return null;
        if (ObjectUtils.isEmpty(value))
            return [];
        for (let i = 0; i < processedOptions.length; i++) {
            const processedOption = processedOptions[i];
            if (ObjectUtils.equals(value, this.getOptionValue(processedOption.option), this.equalityKey())) {
                return [processedOption];
            }
            const matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);
            if (matchedOptions) {
                matchedOptions.unshift(processedOption);
                return matchedOptions;
            }
        }
    }
    findFirstOptionIndex() {
        return this.visibleOptions().findIndex((processedOption) => this.isValidOption(processedOption));
    }
    findLastOptionIndex() {
        return ObjectUtils.findLastIndex(this.visibleOptions(), (processedOption) => this.isValidOption(processedOption));
    }
    findNextOptionIndex(index) {
        const matchedOptionIndex = index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((processedOption) => this.isValidOption(processedOption))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
        const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (processedOption) => this.isValidOption(processedOption)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findSelectedOptionIndex() {
        return this.visibleOptions().findIndex((processedOption) => this.isValidSelectedOption(processedOption));
    }
    findFirstFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    searchOptions(event, char) {
        this.searchValue = (this.searchValue || '') + char;
        let optionIndex = -1;
        let matched = false;
        const focusedOptionInfo = this.focusedOptionInfo();
        if (focusedOptionInfo.index !== -1) {
            optionIndex = this.visibleOptions()
                .slice(focusedOptionInfo.index)
                .findIndex((processedOption) => this.isOptionMatched(processedOption));
            optionIndex =
                optionIndex === -1
                    ? this.visibleOptions()
                        .slice(0, focusedOptionInfo.index)
                        .findIndex((processedOption) => this.isOptionMatched(processedOption))
                    : optionIndex + focusedOptionInfo.index;
        }
        else {
            optionIndex = this.visibleOptions().findIndex((processedOption) => this.isOptionMatched(processedOption));
        }
        if (optionIndex !== -1) {
            matched = true;
        }
        if (optionIndex === -1 && focusedOptionInfo.index === -1) {
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
    hide(event, isFocus = false) {
        const _hide = () => {
            this.overlayVisible = false;
            this.activeOptionPath.set([]);
            this.focusedOptionInfo.set({ index: -1, level: 0, parentKey: '' });
            isFocus && DomHandler.focus(this.focusInputViewChild.nativeElement);
            this.onHide.emit(event);
        };
        setTimeout(() => {
            _hide();
        }, 0); // For ScreenReaders
    }
    show(event, isFocus = false) {
        this.onShow.emit(event);
        this.overlayVisible = true;
        const activeOptionPath = this.hasSelectedOption() ? this.findOptionPathByValue(this.modelValue()) : this.activeOptionPath();
        this.activeOptionPath.set(activeOptionPath);
        let focusedOptionInfo;
        if (this.hasSelectedOption() && ObjectUtils.isNotEmpty(this.activeOptionPath())) {
            const processedOption = this.activeOptionPath()[this.activeOptionPath().length - 1];
            focusedOptionInfo = { index: this.autoOptionFocus ? processedOption.index : -1, level: processedOption.level, parentKey: processedOption.parentKey };
        }
        else {
            focusedOptionInfo = { index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, level: 0, parentKey: '' };
        }
        this.focusedOptionInfo.set(focusedOptionInfo);
        isFocus && DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    clear(event) {
        if (ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
            this.updateModel(null);
            this.focusedOptionInfo.set({ index: -1, level: 0, parentKey: '' });
            this.activeOptionPath.set([]);
            this.onClear.emit();
        }
        event && event.stopPropagation();
    }
    getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(optionGroup, level) {
        return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    }
    isOptionGroup(option, level) {
        return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    }
    isProccessedOptionGroup(processedOption) {
        return ObjectUtils.isNotEmpty(processedOption.children);
    }
    getProccessedOptionLabel(processedOption) {
        const grouped = this.isProccessedOptionGroup(processedOption);
        return grouped ? this.getOptionGroupLabel(processedOption.option) : this.getOptionLabel(processedOption.option);
    }
    constructor(el, cd, config, overlayService) {
        this.el = el;
        this.cd = cd;
        this.config = config;
        this.overlayService = overlayService;
        effect(() => {
            const activeOptionPath = this.activeOptionPath();
            if (ObjectUtils.isNotEmpty(activeOptionPath)) {
                this.overlayViewChild.alignOverlay();
            }
        });
    }
    ngOnInit() {
        this.id = this.id || UniqueComponentId();
        this.autoUpdateModel();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'value':
                    this.valueTemplate = item.template;
                    break;
                case 'option':
                    this.optionTemplate = item.template;
                    break;
                case 'triggericon':
                    this.triggerIconTemplate = item.template;
                    break;
                case 'clearicon':
                    this.clearIconTemplate = item.template;
                    break;
                case 'optiongroupicon':
                    this.groupIconTemplate = item.template;
                    break;
            }
        });
    }
    onOverlayAnimationDone(event) {
        switch (event.toState) {
            case 'void':
                this.dirty = false;
                break;
        }
    }
    writeValue(value) {
        this.value = value;
        this.updateModel(value);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelect, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }, { token: i1.OverlayService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: CascadeSelect, selector: "p-cascadeSelect", inputs: { id: "id", selectOnFocus: "selectOnFocus", searchMessage: "searchMessage", emptyMessage: "emptyMessage", selectionMessage: "selectionMessage", emptySearchMessage: "emptySearchMessage", emptySelectionMessage: "emptySelectionMessage", searchLocale: "searchLocale", optionDisabled: "optionDisabled", autoOptionFocus: "autoOptionFocus", styleClass: "styleClass", style: "style", options: "options", optionLabel: "optionLabel", optionValue: "optionValue", optionGroupLabel: "optionGroupLabel", optionGroupChildren: "optionGroupChildren", placeholder: "placeholder", value: "value", dataKey: "dataKey", inputId: "inputId", tabindex: "tabindex", ariaLabelledBy: "ariaLabelledBy", inputLabel: "inputLabel", ariaLabel: "ariaLabel", appendTo: "appendTo", disabled: "disabled", showClear: "showClear", panelStyleClass: "panelStyleClass", panelStyle: "panelStyle", overlayOptions: "overlayOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onChange: "onChange", onGroupChange: "onGroupChange", onShow: "onShow", onHide: "onHide", onClear: "onClear", onBeforeShow: "onBeforeShow", onBeforeHide: "onBeforeHide", onFocus: "onFocus", onBlur: "onBlur" }, host: { properties: { "class.p-inputwrapper-filled": "filled", "class.p-inputwrapper-focus": "focused || overlayVisible", "class.p-cascadeselect-clearable": "showClear && !disabled" }, classAttribute: "p-element p-inputwrapper" }, providers: [CASCADESELECT_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "focusInputViewChild", first: true, predicate: ["focusInput"], descendants: true }, { propertyName: "containerViewChild", first: true, predicate: ["container"], descendants: true }, { propertyName: "panelViewChild", first: true, predicate: ["panel"], descendants: true }, { propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }], ngImport: i0, template: ` <div #container [ngClass]="containerClass" [class]="styleClass" [ngStyle]="style" (click)="onContainerClick($event)" [attr.data-pc-name]="'cascadeselect'" [attr.data-pc-section]="'root'">
        <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
            <input
                #focusInput
                readonly
                type="text"
                role="combobox"
                [disabled]="disabled"
                [placeholder]="placeholder"
                [tabindex]="!disabled ? tabindex : -1"
                [attr.id]="inputId"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                aria-haspopup="tree"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_tree' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onInputKeyDown($event)"
            />
        </div>
        <span [ngClass]="labelClass" [attr.data-pc-section]="'label'">
            <ng-container *ngIf="valueTemplate; else defaultValueTemplate">
                <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: value, placeholder: placeholder }"></ng-container>
            </ng-container>
            <ng-template #defaultValueTemplate>
                {{ label() }}
            </ng-template>
        </span>

        <ng-container *ngIf="filled && !disabled && showClear">
            <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-cascadeselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate" class="p-cascadeselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
            </span>
        </ng-container>

        <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'dropdownIcon'" [attr.aria-hidden]="true">
            <ChevronDownIcon *ngIf="!triggerIconTemplate" [styleClass]="'p-cascadeselect-trigger-icon'" />
            <span *ngIf="triggerIconTemplate" class="p-cascadeselect-trigger-icon">
                <ng-template *ngTemplateOutlet="triggerIconTemplate"></ng-template>
            </span>
        </div>
        <span role="status" aria-live="polite" class="p-hidden-accessible">
            {{ searchResultMessageText }}
        </span>
        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationDone)="onOverlayAnimationDone($event)"
            (onBeforeShow)="onBeforeShow.emit($event)"
            (onShow)="show($event)"
            (onBeforeHide)="onBeforeHide.emit($event)"
            (onHide)="hide($event)"
        >
            <ng-template pTemplate="content">
                <div #panel class="p-cascadeselect-panel p-component" [class]="panelStyleClass" [ngStyle]="panelStyle" [attr.data-pc-section]="'panel'">
                    <div class="p-cascadeselect-items-wrapper" [attr.data-pc-section]="'wrapper'">
                        <p-cascadeSelectSub
                            class="p-cascadeselect-items"
                            [options]="processedOptions()"
                            [selectId]="id"
                            [focusedOptionId]="focused ? focusedOptionId : undefined"
                            [activeOptionPath]="activeOptionPath()"
                            [optionLabel]="optionLabel"
                            [optionValue]="optionValue"
                            [level]="0"
                            [optionTemplate]="optionTemplate"
                            [groupIconTemplate]="groupIconTemplate"
                            [optionGroupLabel]="optionGroupLabel"
                            [optionGroupChildren]="optionGroupChildren"
                            [optionDisabled]="optionDisabled"
                            [optionValue]="optionValue"
                            [optionLabel]="optionLabel"
                            [root]="true"
                            (onChange)="onOptionChange($event)"
                            [dirty]="dirty"
                            [role]="'tree'"
                        >
                        </p-cascadeSelectSub>
                    </div>
                    <span role="status" aria-live="polite" class="p-hidden-accessible">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </ng-template>
        </p-overlay>
    </div>`, isInline: true, styles: ["@layer primeng{.p-cascadeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-cascadeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-cascadeselect-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{display:flex;align-items:center;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{margin:0;padding:0;list-style-type:none}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{position:absolute;min-width:100%;z-index:1;display:none}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}.p-cascadeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-cascadeselect-clearable,.p-overlay-modal .p-cascadeselect-sublist{position:relative}.p-overlay-modal .p-cascadeselect-item-active>.p-cascadeselect-sublist{left:0}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i4.Overlay), selector: "p-overlay", inputs: ["visible", "mode", "style", "styleClass", "contentStyle", "contentStyleClass", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "listener", "responsive", "options"], outputs: ["visibleChange", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "onAnimationStart", "onAnimationDone"] }, { kind: "directive", type: i0.forwardRef(() => i1.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i0.forwardRef(() => ChevronDownIcon), selector: "ChevronDownIcon" }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }, { kind: "component", type: i0.forwardRef(() => CascadeSelectSub), selector: "p-cascadeSelectSub", inputs: ["role", "selectId", "activeOptionPath", "optionDisabled", "focusedOptionId", "options", "optionGroupChildren", "optionTemplate", "groupIconTemplate", "level", "optionLabel", "optionValue", "optionGroupLabel", "dirty", "root"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelect, decorators: [{
            type: Component,
            args: [{ selector: 'p-cascadeSelect', template: ` <div #container [ngClass]="containerClass" [class]="styleClass" [ngStyle]="style" (click)="onContainerClick($event)" [attr.data-pc-name]="'cascadeselect'" [attr.data-pc-section]="'root'">
        <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
            <input
                #focusInput
                readonly
                type="text"
                role="combobox"
                [disabled]="disabled"
                [placeholder]="placeholder"
                [tabindex]="!disabled ? tabindex : -1"
                [attr.id]="inputId"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                aria-haspopup="tree"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_tree' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onInputKeyDown($event)"
            />
        </div>
        <span [ngClass]="labelClass" [attr.data-pc-section]="'label'">
            <ng-container *ngIf="valueTemplate; else defaultValueTemplate">
                <ng-container *ngTemplateOutlet="valueTemplate; context: { $implicit: value, placeholder: placeholder }"></ng-container>
            </ng-container>
            <ng-template #defaultValueTemplate>
                {{ label() }}
            </ng-template>
        </span>

        <ng-container *ngIf="filled && !disabled && showClear">
            <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-cascadeselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate" class="p-cascadeselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
            </span>
        </ng-container>

        <div class="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'dropdownIcon'" [attr.aria-hidden]="true">
            <ChevronDownIcon *ngIf="!triggerIconTemplate" [styleClass]="'p-cascadeselect-trigger-icon'" />
            <span *ngIf="triggerIconTemplate" class="p-cascadeselect-trigger-icon">
                <ng-template *ngTemplateOutlet="triggerIconTemplate"></ng-template>
            </span>
        </div>
        <span role="status" aria-live="polite" class="p-hidden-accessible">
            {{ searchResultMessageText }}
        </span>
        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationDone)="onOverlayAnimationDone($event)"
            (onBeforeShow)="onBeforeShow.emit($event)"
            (onShow)="show($event)"
            (onBeforeHide)="onBeforeHide.emit($event)"
            (onHide)="hide($event)"
        >
            <ng-template pTemplate="content">
                <div #panel class="p-cascadeselect-panel p-component" [class]="panelStyleClass" [ngStyle]="panelStyle" [attr.data-pc-section]="'panel'">
                    <div class="p-cascadeselect-items-wrapper" [attr.data-pc-section]="'wrapper'">
                        <p-cascadeSelectSub
                            class="p-cascadeselect-items"
                            [options]="processedOptions()"
                            [selectId]="id"
                            [focusedOptionId]="focused ? focusedOptionId : undefined"
                            [activeOptionPath]="activeOptionPath()"
                            [optionLabel]="optionLabel"
                            [optionValue]="optionValue"
                            [level]="0"
                            [optionTemplate]="optionTemplate"
                            [groupIconTemplate]="groupIconTemplate"
                            [optionGroupLabel]="optionGroupLabel"
                            [optionGroupChildren]="optionGroupChildren"
                            [optionDisabled]="optionDisabled"
                            [optionValue]="optionValue"
                            [optionLabel]="optionLabel"
                            [root]="true"
                            (onChange)="onOptionChange($event)"
                            [dirty]="dirty"
                            [role]="'tree'"
                        >
                        </p-cascadeSelectSub>
                    </div>
                    <span role="status" aria-live="polite" class="p-hidden-accessible">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </ng-template>
        </p-overlay>
    </div>`, host: {
                        class: 'p-element p-inputwrapper',
                        '[class.p-inputwrapper-filled]': 'filled',
                        '[class.p-inputwrapper-focus]': 'focused || overlayVisible',
                        '[class.p-cascadeselect-clearable]': 'showClear && !disabled'
                    }, providers: [CASCADESELECT_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["@layer primeng{.p-cascadeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-cascadeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-cascadeselect-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{display:flex;align-items:center;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{margin:0;padding:0;list-style-type:none}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{position:absolute;min-width:100%;z-index:1;display:none}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}.p-cascadeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-cascadeselect-clearable,.p-overlay-modal .p-cascadeselect-sublist{position:relative}.p-overlay-modal .p-cascadeselect-item-active>.p-cascadeselect-sublist{left:0}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }, { type: i1.OverlayService }], propDecorators: { id: [{
                type: Input
            }], selectOnFocus: [{
                type: Input
            }], searchMessage: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], selectionMessage: [{
                type: Input
            }], emptySearchMessage: [{
                type: Input
            }], emptySelectionMessage: [{
                type: Input
            }], searchLocale: [{
                type: Input
            }], optionDisabled: [{
                type: Input
            }], autoOptionFocus: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], style: [{
                type: Input
            }], options: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], optionValue: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], inputId: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], inputLabel: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], appendTo: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showClear: [{
                type: Input
            }], panelStyleClass: [{
                type: Input
            }], panelStyle: [{
                type: Input
            }], overlayOptions: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onGroupChange: [{
                type: Output
            }], onShow: [{
                type: Output
            }], onHide: [{
                type: Output
            }], onClear: [{
                type: Output
            }], onBeforeShow: [{
                type: Output
            }], onBeforeHide: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], focusInputViewChild: [{
                type: ViewChild,
                args: ['focusInput']
            }], containerViewChild: [{
                type: ViewChild,
                args: ['container']
            }], panelViewChild: [{
                type: ViewChild,
                args: ['panel']
            }], overlayViewChild: [{
                type: ViewChild,
                args: ['overlay']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class CascadeSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelectModule, declarations: [CascadeSelect, CascadeSelectSub], imports: [CommonModule, OverlayModule, SharedModule, RippleModule, ChevronDownIcon, AngleRightIcon, TimesIcon], exports: [CascadeSelect, OverlayModule, CascadeSelectSub, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelectModule, imports: [CommonModule, OverlayModule, SharedModule, RippleModule, ChevronDownIcon, AngleRightIcon, TimesIcon, OverlayModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CascadeSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, SharedModule, RippleModule, ChevronDownIcon, AngleRightIcon, TimesIcon],
                    exports: [CascadeSelect, OverlayModule, CascadeSelectSub, SharedModule],
                    declarations: [CascadeSelect, CascadeSelectSub]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlc2VsZWN0L2Nhc2NhZGVzZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFSCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsTUFBTSxFQUVOLFlBQVksRUFDWixVQUFVLEVBRVYsS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEVBRU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFpRCxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBVyxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRy9ELE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsS0FBSyxF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QUFNO2dCQUVrQixtQkFBbUI7c0JBQTNDLFNBQVM7dUJBQUMsWUFBWTtnQkFFQyxrQkFBa0I7c0JBQXpDLFNBQVM7dUJBQUMsV0FBVztnQkFFRixjQUFjO3NCQUFqQyxTQUFTO3VCQUFDLE9BQU87Z0JBRUksZ0JBQWdCO3NCQUFyQyxTQUFTO3VCQUFDLFNBQVM7Z0JBRVksU0FBUztzQkFBeEMsZUFBZTt1QkFBQyxhQUFhOztBQWd2QmxDLE1BQU0sT0FBTyxtQkFBbUI7dUdBQW5CLG1CQUFtQjt3R0FBbkIsbUJBQW1CLGlCQXQrQm5CLGFBQWEsRUExT2IsZ0JBQWdCLGFBNHNDZixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLGFBbCtCcEcsYUFBYSxFQW0rQkcsYUFBYSxFQTdzQzdCLGdCQUFnQixFQTZzQ2lDLFlBQVk7d0dBRzdELG1CQUFtQixZQUpsQixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQ3BGLGFBQWEsRUFBb0IsWUFBWTs7MkZBRzdELG1CQUFtQjtrQkFML0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUM7b0JBQzlHLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO29CQUN2RSxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIGNvbXB1dGVkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBlZmZlY3QsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgc2lnbmFsLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3ZlcmxheU9wdGlvbnMsIE92ZXJsYXlTZXJ2aWNlLCBQcmltZU5HQ29uZmlnLCBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUsIFRyYW5zbGF0aW9uS2V5cyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBBbmdsZVJpZ2h0SWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvYW5nbGVyaWdodCc7XG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZXZyb25kb3duJztcbmltcG9ydCB7IFRpbWVzSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvdGltZXMnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvb3ZlcmxheSc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5pbXBvcnQgeyBOdWxsYWJsZSB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG5pbXBvcnQgeyBPYmplY3RVdGlscywgVW5pcXVlQ29tcG9uZW50SWQgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IENhc2NhZGVTZWxlY3RCZWZvcmVIaWRlRXZlbnQsIENhc2NhZGVTZWxlY3RCZWZvcmVTaG93RXZlbnQsIENhc2NhZGVTZWxlY3RDaGFuZ2VFdmVudCwgQ2FzY2FkZVNlbGVjdEhpZGVFdmVudCwgQ2FzY2FkZVNlbGVjdFNob3dFdmVudCB9IGZyb20gJy4vY2FzY2FkZXNlbGVjdC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgQ0FTQ0FERVNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENhc2NhZGVTZWxlY3QpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY2FzY2FkZVNlbGVjdFN1YicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1wYW5lbCBwLWNhc2NhZGVzZWxlY3QtaXRlbXNcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncC1jYXNjYWRlc2VsZWN0LXBhbmVsLXJvb3QnOiByb290IH1cIlxuICAgICAgICAgICAgW2F0dHIucm9sZV09XCJyb2xlXCJcbiAgICAgICAgICAgIGFyaWEtb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCJsZXZlbCA9PT0gMCA/ICdsaXN0JyA6ICdzdWJsaXN0J1wiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImxpc3RMYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcHJvY2Vzc2VkT3B0aW9uIFtuZ0Zvck9mXT1cIm9wdGlvbnNcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldEl0ZW1DbGFzcyhwcm9jZXNzZWRPcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRyZWVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sZXZlbF09XCJsZXZlbCArIDFcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNldHNpemVdPVwib3B0aW9ucy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2l0ZW0nXCJcbiAgICAgICAgICAgICAgICAgICAgW2lkXT1cImdldE9wdGlvbklkKHByb2Nlc3NlZE9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImdldE9wdGlvbkxhYmVsVG9SZW5kZXIocHJvY2Vzc2VkT3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXNPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pID8gdW5kZWZpbmVkIDogaXNPcHRpb25TZWxlY3RlZChwcm9jZXNzZWRPcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1wb3NpbnNldF09XCJpICsgMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWl0ZW0tY29udGVudFwiIChjbGljayk9XCJvbk9wdGlvbkNsaWNrKCRldmVudCwgcHJvY2Vzc2VkT3B0aW9uKVwiIFthdHRyLnRhYmluZGV4XT1cIjBcIiBwUmlwcGxlIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInY29udGVudCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25UZW1wbGF0ZTsgZWxzZSBkZWZhdWx0T3B0aW9uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwib3B0aW9uVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBwcm9jZXNzZWRPcHRpb24ub3B0aW9uIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0T3B0aW9uVGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtaXRlbS10ZXh0XCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIid0ZXh0J1wiPnt7IGdldE9wdGlvbkxhYmVsVG9SZW5kZXIocHJvY2Vzc2VkT3B0aW9uKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1ncm91cC1pY29uXCIgKm5nSWY9XCJpc09wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbilcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2dyb3VwSWNvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5nbGVSaWdodEljb24gKm5nSWY9XCIhZ3JvdXBJY29uVGVtcGxhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwLWNhc2NhZGVTZWxlY3RTdWJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pICYmIGlzT3B0aW9uQWN0aXZlKHByb2Nlc3NlZE9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvbGVdPVwiJ2dyb3VwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1zdWJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RJZF09XCJzZWxlY3RJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZm9jdXNlZE9wdGlvbklkXT1cImZvY3VzZWRPcHRpb25JZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlT3B0aW9uUGF0aF09XCJhY3RpdmVPcHRpb25QYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ocHJvY2Vzc2VkT3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib3B0aW9uTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvblZhbHVlXT1cIm9wdGlvblZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsZXZlbF09XCJsZXZlbCArIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cIm9uT3B0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbkdyb3VwTGFiZWxdPVwib3B0aW9uR3JvdXBMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uR3JvdXBDaGlsZHJlbl09XCJvcHRpb25Hcm91cENoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXJ0eV09XCJkaXJ0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uVGVtcGxhdGVdPVwib3B0aW9uVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1jYXNjYWRlU2VsZWN0U3ViPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3VsPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlU2VsZWN0U3ViIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSByb2xlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYWN0aXZlT3B0aW9uUGF0aDogYW55W107XG5cbiAgICBASW5wdXQoKSBvcHRpb25EaXNhYmxlZDogYW55W107XG5cbiAgICBASW5wdXQoKSBmb2N1c2VkT3B0aW9uSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IHN0cmluZ1tdIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwQ2hpbGRyZW46IHN0cmluZ1tdIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIEBJbnB1dCgpIG9wdGlvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIEBJbnB1dCgpIGdyb3VwSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIEBJbnB1dCgpIGxldmVsOiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIG9wdGlvblZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBvcHRpb25Hcm91cExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBkaXJ0eTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHJvb3Q6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZ2V0IGxpc3RMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0VHJhbnNsYXRpb24oVHJhbnNsYXRpb25LZXlzLkFSSUEpWydsaXN0TGFiZWwnXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY29uZmlnOiBQcmltZU5HQ29uZmlnKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk9wdGlvbkNsaWNrKGV2ZW50LCBvcHRpb246IGFueSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgaXNGb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbklkKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3RJZH1fJHtwcm9jZXNzZWRPcHRpb24ua2V5fWA7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uTGFiZWwocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkxhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShwcm9jZXNzZWRPcHRpb24ub3B0aW9uLCB0aGlzLm9wdGlvbkxhYmVsKSA6IHByb2Nlc3NlZE9wdGlvbi5vcHRpb247XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uVmFsdWUocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShwcm9jZXNzZWRPcHRpb24ub3B0aW9uLCB0aGlzLm9wdGlvblZhbHVlKSA6IHByb2Nlc3NlZE9wdGlvbi5vcHRpb247XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uTGFiZWxUb1JlbmRlcihwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pID8gdGhpcy5nZXRPcHRpb25Hcm91cExhYmVsKHByb2Nlc3NlZE9wdGlvbikgOiB0aGlzLmdldE9wdGlvbkxhYmVsKHByb2Nlc3NlZE9wdGlvbik7XG4gICAgfVxuXG4gICAgaXNPcHRpb25EaXNhYmxlZChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24sIHRoaXMub3B0aW9uRGlzYWJsZWQpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBMYWJlbChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uR3JvdXBMYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbiwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpc09wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShwcm9jZXNzZWRPcHRpb24uY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGlzT3B0aW9uU2VsZWN0ZWQocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc09wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbikgJiYgdGhpcy5pc09wdGlvbkFjdGl2ZShwcm9jZXNzZWRPcHRpb24pO1xuICAgIH1cblxuICAgIGlzT3B0aW9uQWN0aXZlKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb25QYXRoLnNvbWUoKHBhdGgpID0+IHBhdGgua2V5ID09PSBwcm9jZXNzZWRPcHRpb24ua2V5KTtcbiAgICB9XG5cbiAgICBpc09wdGlvbkZvY3VzZWQocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRPcHRpb25JZCA9PT0gdGhpcy5nZXRPcHRpb25JZChwcm9jZXNzZWRPcHRpb24pO1xuICAgIH1cblxuICAgIGdldEl0ZW1DbGFzcyhvcHRpb246IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1jYXNjYWRlc2VsZWN0LWl0ZW0nOiB0cnVlLFxuICAgICAgICAgICAgJ3AtY2FzY2FkZXNlbGVjdC1pdGVtLWdyb3VwJzogdGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbiksXG4gICAgICAgICAgICAncC1jYXNjYWRlc2VsZWN0LWl0ZW0tYWN0aXZlIHAtaGlnaGxpZ2h0JzogdGhpcy5pc09wdGlvbkFjdGl2ZShvcHRpb24pLFxuICAgICAgICAgICAgJ3AtZm9jdXMnOiB0aGlzLmlzT3B0aW9uRm9jdXNlZChvcHRpb24pLFxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnRJdGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lck9mZnNldCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHBhcmVudEl0ZW0pO1xuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IERvbUhhbmRsZXIuZ2V0Vmlld3BvcnQoKTtcbiAgICAgICAgY29uc3Qgc3VibGlzdFdpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLm9mZnNldFBhcmVudCA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5vZmZzZXRXaWR0aCA6IERvbUhhbmRsZXIuZ2V0SGlkZGVuRWxlbWVudE91dGVyV2lkdGgodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgY29uc3QgaXRlbU91dGVyV2lkdGggPSBEb21IYW5kbGVyLmdldE91dGVyV2lkdGgocGFyZW50SXRlbS5jaGlsZHJlblswXSk7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KGNvbnRhaW5lck9mZnNldC5sZWZ0LCAxMCkgKyBpdGVtT3V0ZXJXaWR0aCArIHN1Ymxpc3RXaWR0aCA+IHZpZXdwb3J0LndpZHRoIC0gRG9tSGFuZGxlci5jYWxjdWxhdGVTY3JvbGxiYXJXaWR0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubGVmdCA9ICctMjAwJSc7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENhc2NhZGVTZWxlY3QgaXMgYSBmb3JtIGNvbXBvbmVudCB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tIGEgbmVzdGVkIHN0cnVjdHVyZSBvZiBvcHRpb25zLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWNhc2NhZGVTZWxlY3QnLFxuICAgIHRlbXBsYXRlOiBgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCJjb250YWluZXJDbGFzc1wiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiAoY2xpY2spPVwib25Db250YWluZXJDbGljaygkZXZlbnQpXCIgW2F0dHIuZGF0YS1wYy1uYW1lXT1cIidjYXNjYWRlc2VsZWN0J1wiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCIncm9vdCdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2hpZGRlbklucHV0V3JhcHBlcidcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICNmb2N1c0lucHV0XG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cImNvbWJvYm94XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIiFkaXNhYmxlZCA/IHRhYmluZGV4IDogLTFcIlxuICAgICAgICAgICAgICAgIFthdHRyLmlkXT1cImlucHV0SWRcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cmVlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlID8/IGZhbHNlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIm92ZXJsYXlWaXNpYmxlID8gaWQgKyAnX3RyZWUnIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50XT1cImZvY3VzZWQgPyBmb2N1c2VkT3B0aW9uSWQgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25JbnB1dEtleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwibGFiZWxDbGFzc1wiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInbGFiZWwnXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsdWVUZW1wbGF0ZTsgZWxzZSBkZWZhdWx0VmFsdWVUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ2YWx1ZVRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmFsdWUsIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFZhbHVlVGVtcGxhdGU+XG4gICAgICAgICAgICAgICAge3sgbGFiZWwoKSB9fVxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWxsZWQgJiYgIWRpc2FibGVkICYmIHNob3dDbGVhclwiPlxuICAgICAgICAgICAgPFRpbWVzSWNvbiAqbmdJZj1cIiFjbGVhckljb25UZW1wbGF0ZVwiIFtzdHlsZUNsYXNzXT1cIidwLWNhc2NhZGVzZWxlY3QtY2xlYXItaWNvbidcIiAoY2xpY2spPVwiY2xlYXIoJGV2ZW50KVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInY2xlYXJpY29uJ1wiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIiAvPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjbGVhckljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWNsZWFyLWljb25cIiAoY2xpY2spPVwiY2xlYXIoJGV2ZW50KVwiIFthdHRyLmRhdGEtcGMtc2VjdGlvbl09XCInY2xlYXJpY29uJ1wiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjbGVhckljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3ZlcmxheVZpc2libGUgPz8gZmFsc2VcIiBbYXR0ci5kYXRhLXBjLXNlY3Rpb25dPVwiJ2Ryb3Bkb3duSWNvbidcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uICpuZ0lmPVwiIXRyaWdnZXJJY29uVGVtcGxhdGVcIiBbc3R5bGVDbGFzc109XCIncC1jYXNjYWRlc2VsZWN0LXRyaWdnZXItaWNvbidcIiAvPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0cmlnZ2VySWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWNhc2NhZGVzZWxlY3QtdHJpZ2dlci1pY29uXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJpZ2dlckljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiByb2xlPVwic3RhdHVzXCIgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCI+XG4gICAgICAgICAgICB7eyBzZWFyY2hSZXN1bHRNZXNzYWdlVGV4dCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxwLW92ZXJsYXlcbiAgICAgICAgICAgICNvdmVybGF5XG4gICAgICAgICAgICBbKHZpc2libGUpXT1cIm92ZXJsYXlWaXNpYmxlXCJcbiAgICAgICAgICAgIFtvcHRpb25zXT1cIm92ZXJsYXlPcHRpb25zXCJcbiAgICAgICAgICAgIFt0YXJnZXRdPVwiJ0BwYXJlbnQnXCJcbiAgICAgICAgICAgIFthcHBlbmRUb109XCJhcHBlbmRUb1wiXG4gICAgICAgICAgICBbc2hvd1RyYW5zaXRpb25PcHRpb25zXT1cInNob3dUcmFuc2l0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICBbaGlkZVRyYW5zaXRpb25PcHRpb25zXT1cImhpZGVUcmFuc2l0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICAob25BbmltYXRpb25Eb25lKT1cIm9uT3ZlcmxheUFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiXG4gICAgICAgICAgICAob25CZWZvcmVTaG93KT1cIm9uQmVmb3JlU2hvdy5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgKG9uU2hvdyk9XCJzaG93KCRldmVudClcIlxuICAgICAgICAgICAgKG9uQmVmb3JlSGlkZSk9XCJvbkJlZm9yZUhpZGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChvbkhpZGUpPVwiaGlkZSgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICNwYW5lbCBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1wYW5lbCBwLWNvbXBvbmVudFwiIFtjbGFzc109XCJwYW5lbFN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJwYW5lbFN0eWxlXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidwYW5lbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY2FzY2FkZXNlbGVjdC1pdGVtcy13cmFwcGVyXCIgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIid3cmFwcGVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtY2FzY2FkZVNlbGVjdFN1YlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1jYXNjYWRlc2VsZWN0LWl0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJwcm9jZXNzZWRPcHRpb25zKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RJZF09XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZvY3VzZWRPcHRpb25JZF09XCJmb2N1c2VkID8gZm9jdXNlZE9wdGlvbklkIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlT3B0aW9uUGF0aF09XCJhY3RpdmVPcHRpb25QYXRoKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25MYWJlbF09XCJvcHRpb25MYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvblZhbHVlXT1cIm9wdGlvblZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGV2ZWxdPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvblRlbXBsYXRlXT1cIm9wdGlvblRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JvdXBJY29uVGVtcGxhdGVdPVwiZ3JvdXBJY29uVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25Hcm91cExhYmVsXT1cIm9wdGlvbkdyb3VwTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25Hcm91cENoaWxkcmVuXT1cIm9wdGlvbkdyb3VwQ2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25EaXNhYmxlZF09XCJvcHRpb25EaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvblZhbHVlXT1cIm9wdGlvblZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwib3B0aW9uTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb290XT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJvbk9wdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlydHldPVwiZGlydHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb2xlXT1cIid0cmVlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2FzY2FkZVNlbGVjdFN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkTWVzc2FnZVRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9wLW92ZXJsYXk+XG4gICAgPC9kaXY+YCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50IHAtaW5wdXR3cmFwcGVyJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0d3JhcHBlci1maWxsZWRdJzogJ2ZpbGxlZCcsXG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZm9jdXNdJzogJ2ZvY3VzZWQgfHwgb3ZlcmxheVZpc2libGUnLFxuICAgICAgICAnW2NsYXNzLnAtY2FzY2FkZXNlbGVjdC1jbGVhcmFibGVdJzogJ3Nob3dDbGVhciAmJiAhZGlzYWJsZWQnXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtDQVNDQURFU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2Nhc2NhZGVzZWxlY3QuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZVNlbGVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgb3B0aW9uIHdpbGwgYmUgc2VsZWN0ZWQgb24gZm9jdXMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0T25Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIHRoZSBzZWFyY2ggaXMgYWN0aXZlLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgJ3swfSByZXN1bHRzIGFyZSBhdmFpbGFibGUnXG4gICAgICovXG4gICAgQElucHV0KCkgc2VhcmNoTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGlzIG5vIGRhdGEuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gaGlkZGVuIGFjY2Vzc2libGUgZmllbGQgd2hlbiBvcHRpb25zIGFyZSBzZWxlY3RlZC4gRGVmYXVsdHMgdG8gZ2xvYmFsIHZhbHVlIGluIGkxOG4gdHJhbnNsYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlICd7MH0gaXRlbXMgc2VsZWN0ZWQnXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0aW9uTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIGZpbHRlcmluZyBkb2VzIG5vdCByZXR1cm4gYW55IHJlc3VsdHMuIERlZmF1bHRzIHRvIHZhbHVlIGZyb20gUHJpbWVORyBsb2NhbGUgY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlICdObyBhdmFpbGFibGUgb3B0aW9ucydcbiAgICAgKi9cbiAgICBASW5wdXQoKSBlbXB0eVNlYXJjaE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiBmaWx0ZXJpbmcgZG9lcyBub3QgcmV0dXJuIGFueSByZXN1bHRzLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgJ05vIHNlbGVjdGVkIGl0ZW0nXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlTZWxlY3Rpb25NZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTG9jYWxlIHRvIHVzZSBpbiBzZWFyY2hpbmcuIFRoZSBkZWZhdWx0IGxvY2FsZSBpcyB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNlYXJjaExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGRpc2FibGVkIGZpZWxkIG9mIGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25EaXNhYmxlZDogYW55O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZm9jdXMgb24gdGhlIGZpcnN0IHZpc2libGUgb3Igc2VsZWN0ZWQgZWxlbWVudCB3aGVuIHRoZSBvdmVybGF5IHBhbmVsIGlzIHNob3duLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGF1dG9PcHRpb25Gb2N1czogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygc2VsZWN0aXRlbXMgdG8gZGlzcGxheSBhcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uczogc3RyaW5nW10gfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZSBvciBnZXR0ZXIgZnVuY3Rpb24gdG8gdXNlIGFzIHRoZSBsYWJlbCBvZiBhbiBvcHRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lIG9yIGdldHRlciBmdW5jdGlvbiB0byB1c2UgYXMgdGhlIHZhbHVlIG9mIGFuIG9wdGlvbiwgZGVmYXVsdHMgdG8gdGhlIG9wdGlvbiBpdHNlbGYgd2hlbiBub3QgZGVmaW5lZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvcHRpb25WYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWUgb3IgZ2V0dGVyIGZ1bmN0aW9uIHRvIHVzZSBhcyB0aGUgbGFiZWwgb2YgYW4gb3B0aW9uIGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwTGFiZWw6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWUgb3IgZ2V0dGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBpdGVtcyBvZiBhIGdyb3VwLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkdyb3VwQ2hpbGRyZW46IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgdGV4dCB0byBkaXNwbGF5IHdoZW4gbm8gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU2VsZWN0ZWQgdmFsdWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBBIHByb3BlcnR5IHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGFuIG9wdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllciBvZiB0aGUgdW5kZXJseWluZyBpbnB1dCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0YWJiaW5nIG9yZGVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSAwO1xuICAgIC8qKlxuICAgICAqIEVzdGFibGlzaGVzIHJlbGF0aW9uc2hpcHMgYmV0d2VlbiB0aGUgY29tcG9uZW50IGFuZCBsYWJlbChzKSB3aGVyZSBpdHMgdmFsdWUgc2hvdWxkIGJlIG9uZSBvciBtb3JlIGVsZW1lbnQgSURzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGlucHV0IGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGlucHV0TGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBpbnB1dCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJZCBvZiB0aGUgZWxlbWVudCBvciBcImJvZHlcIiBmb3IgZG9jdW1lbnQgd2hlcmUgdGhlIG92ZXJsYXkgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGFueTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZW5hYmxlZCwgYSBjbGVhciBpY29uIGlzIGRpc3BsYXllZCB0byBjbGVhciB0aGUgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0NsZWFyOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIG92ZXJsYXkgcGFuZWwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBvdmVybGF5IHBhbmVsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhbmVsU3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byB1c2Ugb3ZlcmxheSBBUEkgZmVhdHVyZS4gVGhlIHByb3BlcnRpZXMgb2Ygb3ZlcmxheSBBUEkgY2FuIGJlIHVzZWQgbGlrZSBhbiBvYmplY3QgaW4gaXQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3ZlcmxheU9wdGlvbnM6IE92ZXJsYXlPcHRpb25zIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gb3B0aW9ucyBvZiB0aGUgc2hvdyBhbmltYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgc2hvd1RyYW5zaXRpb25PcHRpb25zKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93VHJhbnNpdGlvbk9wdGlvbnM7XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbk9wdGlvbnModmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2hvd1RyYW5zaXRpb25PcHRpb25zID0gdmFsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBzaG93VHJhbnNpdGlvbk9wdGlvbnMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MTQuMi4wLCB1c2Ugb3ZlcmxheU9wdGlvbnMgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBoaWRlIGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVwcmVjYXRlZCBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBoaWRlVHJhbnNpdGlvbk9wdGlvbnMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGVUcmFuc2l0aW9uT3B0aW9ucztcbiAgICB9XG4gICAgc2V0IGhpZGVUcmFuc2l0aW9uT3B0aW9ucyh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9oaWRlVHJhbnNpdGlvbk9wdGlvbnMgPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGhpZGVUcmFuc2l0aW9uT3B0aW9ucyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIHNpbmNlIHYxNC4yLjAsIHVzZSBvdmVybGF5T3B0aW9ucyBwcm9wZXJ0eSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gdmFsdWUgY2hhbmdlLlxuICAgICAqIEBwYXJhbSB7Q2FzY2FkZVNlbGVjdENoYW5nZUV2ZW50fSBldmVudCAtIEN1c3RvbSBjaGFuZ2UgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdENoYW5nZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgZ3JvdXAgY2hhbmdlcy5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIEJyb3dzZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uR3JvdXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBvdmVybGF5IGlzIHNob3duLlxuICAgICAqIEBwYXJhbSB7Q2FzY2FkZVNlbGVjdFNob3dFdmVudH0gZXZlbnQgLSBDdXN0b20gb3ZlcmxheSBzaG93IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0U2hvd0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZVNlbGVjdFNob3dFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgb3ZlcmxheSBpcyBoaWRkZW4uXG4gICAgICogQHBhcmFtIHtDYXNjYWRlU2VsZWN0SGlkZUV2ZW50fSBldmVudCAtIEN1c3RvbSBvdmVybGF5IGhpZGUgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPENhc2NhZGVTZWxlY3RIaWRlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0SGlkZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBjbGVhciB0b2tlbiBpcyBjbGlja2VkLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2UgYmVmb3JlIG92ZXJsYXkgaXMgc2hvd24uXG4gICAgICogQHBhcmFtIHtDYXNjYWRlU2VsZWN0QmVmb3JlU2hvd0V2ZW50fSBldmVudCAtIEN1c3RvbSBvdmVybGF5IHNob3cgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQmVmb3JlU2hvdzogRXZlbnRFbWl0dGVyPENhc2NhZGVTZWxlY3RCZWZvcmVTaG93RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0QmVmb3JlU2hvd0V2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBiZWZvcmUgb3ZlcmxheSBpcyBoaWRkZW4uXG4gICAgICogQHBhcmFtIHtDYXNjYWRlU2VsZWN0QmVmb3JlSGlkZUV2ZW50fSBldmVudCAtIEN1c3RvbSBvdmVybGF5IGhpZGUgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPENhc2NhZGVTZWxlY3RCZWZvcmVIaWRlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYXNjYWRlU2VsZWN0QmVmb3JlSGlkZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGlucHV0IHJlY2VpdmVzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7Rm9jdXNFdmVudH0gZXZlbnQgLSBGb2N1cyBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGlucHV0IGxvc2VzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7Rm9jdXNFdmVudH0gZXZlbnQgLSBGb2N1cyBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdmb2N1c0lucHV0JykgZm9jdXNJbnB1dFZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbFZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdvdmVybGF5Jykgb3ZlcmxheVZpZXdDaGlsZDogTnVsbGFibGU8T3ZlcmxheT47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlcyE6IFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPjtcblxuICAgIF9zaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcnO1xuXG4gICAgX2hpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJyc7XG5cbiAgICBzZWxlY3Rpb25QYXRoOiBhbnkgPSBudWxsO1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb3ZlcmxheVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGRpcnR5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBzZWFyY2hUaW1lb3V0OiBhbnk7XG5cbiAgICB2YWx1ZVRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIG9wdGlvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHRyaWdnZXJJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZ3JvdXBJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgY2xlYXJJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgZm9jdXNlZE9wdGlvbkluZm8gPSBzaWduYWw8YW55Pih7IGluZGV4OiAtMSwgbGV2ZWw6IDAsIHBhcmVudEtleTogJycgfSk7XG5cbiAgICBhY3RpdmVPcHRpb25QYXRoID0gc2lnbmFsPGFueT4oW10pO1xuXG4gICAgbW9kZWxWYWx1ZSA9IHNpZ25hbDxhbnk+KG51bGwpO1xuXG4gICAgZ2V0IGNvbnRhaW5lckNsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2FzY2FkZXNlbGVjdCBwLWNvbXBvbmVudCBwLWlucHV0d3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAncC1mb2N1cyc6IHRoaXMuZm9jdXNlZCxcbiAgICAgICAgICAgICdwLWlucHV0d3JhcHBlci1maWxsZWQnOiB0aGlzLm1vZGVsVmFsdWUoKSxcbiAgICAgICAgICAgICdwLWlucHV0d3JhcHBlci1mb2N1cyc6IHRoaXMuZm9jdXNlZCB8fCB0aGlzLm92ZXJsYXlWaXNpYmxlLFxuICAgICAgICAgICAgJ3Atb3ZlcmxheS1vcGVuJzogdGhpcy5vdmVybGF5VmlzaWJsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBsYWJlbENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtY2FzY2FkZXNlbGVjdC1sYWJlbCc6IHRydWUsXG4gICAgICAgICAgICAncC1pbnB1dHRleHQnOiB0cnVlLFxuICAgICAgICAgICAgJ3AtcGxhY2Vob2xkZXInOiB0aGlzLmxhYmVsKCkgPT09IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAncC1jYXNjYWRlc2VsZWN0LWxhYmVsLWVtcHR5JzogIXRoaXMudmFsdWUgJiYgKHRoaXMubGFiZWwoKSA9PT0gJ3AtZW1wdHlsYWJlbCcgfHwgdGhpcy5sYWJlbCgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgZm9jdXNlZE9wdGlvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4ICE9PSAtMSA/IGAke3RoaXMuaWR9JHtPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5wYXJlbnRLZXkpID8gJ18nICsgdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLnBhcmVudEtleSA6ICcnfV8ke3RoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleH1gIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgZmlsbGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubW9kZWxWYWx1ZSgpID09PSAnc3RyaW5nJykgcmV0dXJuICEhdGhpcy5tb2RlbFZhbHVlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxWYWx1ZSgpIHx8IHRoaXMubW9kZWxWYWx1ZSgpICE9IG51bGwgfHwgdGhpcy5tb2RlbFZhbHVlKCkgIT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hSZXN1bHRNZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmlzTm90RW1wdHkodGhpcy52aXNpYmxlT3B0aW9ucygpKSA/IHRoaXMuc2VhcmNoTWVzc2FnZVRleHQucmVwbGFjZUFsbCgnezB9JywgdGhpcy52aXNpYmxlT3B0aW9ucygpLmxlbmd0aCkgOiB0aGlzLmVtcHR5U2VhcmNoTWVzc2FnZVRleHQ7XG4gICAgfVxuXG4gICAgZ2V0IHNlYXJjaE1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hNZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLnNlYXJjaE1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVtcHR5U2VhcmNoTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5U2VhcmNoTWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5lbXB0eVNlYXJjaE1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVtcHR5TWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5TWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5lbXB0eU1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGlvbk1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25NZXNzYWdlIHx8IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLnNlbGVjdGlvbk1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IGVtcHR5U2VsZWN0aW9uTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5U2VsZWN0aW9uTWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5lbXB0eVNlbGVjdGlvbk1lc3NhZ2UgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkTWVzc2FnZVRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uID8gdGhpcy5zZWxlY3Rpb25NZXNzYWdlVGV4dC5yZXBsYWNlQWxsKCd7MH0nLCAnMScpIDogdGhpcy5lbXB0eVNlbGVjdGlvbk1lc3NhZ2VUZXh0O1xuICAgIH1cblxuICAgIHZpc2libGVPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRPcHRpb24gPSB0aGlzLmFjdGl2ZU9wdGlvblBhdGgoKS5maW5kKChwKSA9PiBwLmtleSA9PT0gdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLnBhcmVudEtleSk7XG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZE9wdGlvbiA/IHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbiA6IHRoaXMucHJvY2Vzc2VkT3B0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgcHJvY2Vzc2VkT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUHJvY2Vzc2VkT3B0aW9ucyh0aGlzLm9wdGlvbnMgfHwgW10pO1xuICAgIH0pO1xuXG4gICAgbGFiZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5wbGFjZWhvbGRlciB8fCAncC1lbXB0eWxhYmVsJztcblxuICAgICAgICBpZiAodGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25QYXRoID0gdGhpcy5maW5kT3B0aW9uUGF0aEJ5VmFsdWUodGhpcy5tb2RlbFZhbHVlKCksIG51bGwpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShhY3RpdmVPcHRpb25QYXRoKSA/IGFjdGl2ZU9wdGlvblBhdGhbYWN0aXZlT3B0aW9uUGF0aC5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRPcHRpb24gPyB0aGlzLmdldE9wdGlvbkxhYmVsKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24pIDogbGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgZ2V0IF9sYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnBsYWNlaG9sZGVyIHx8ICdwLWVtcHR5bGFiZWwnO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvblBhdGggPSB0aGlzLmZpbmRPcHRpb25QYXRoQnlWYWx1ZSh0aGlzLm1vZGVsVmFsdWUoKSwgbnVsbCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRPcHRpb24gPSBPYmplY3RVdGlscy5pc05vdEVtcHR5KGFjdGl2ZU9wdGlvblBhdGgpID8gYWN0aXZlT3B0aW9uUGF0aFthY3RpdmVPcHRpb25QYXRoLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZE9wdGlvbiA/IHRoaXMuZ2V0T3B0aW9uTGFiZWwocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbikgOiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgaGFzU2VsZWN0ZWRPcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9jZXNzZWRPcHRpb25zKG9wdGlvbnMsIGxldmVsID0gMCwgcGFyZW50ID0ge30sIHBhcmVudEtleSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbnMgPSBbXTtcblxuICAgICAgICBvcHRpb25zICYmXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSAocGFyZW50S2V5ICE9PSAnJyA/IHBhcmVudEtleSArICdfJyA6ICcnKSArIGluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uWydjaGlsZHJlbiddID0gdGhpcy5jcmVhdGVQcm9jZXNzZWRPcHRpb25zKHRoaXMuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24sIGxldmVsKSwgbGV2ZWwgKyAxLCBuZXdPcHRpb24sIGtleSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkT3B0aW9ucy5wdXNoKG5ld09wdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkT3B0aW9ucztcbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEZvciBzY3JlZW5yZWFkZXJzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZVg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXRhS2V5ID0gZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5O1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93VXBLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd0xlZnRLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dSaWdodEtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Ib21lS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMub25TcGFjZUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIGNhc2UgJ051bXBhZEVudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW50ZXJLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHRoaXMub25Fc2NhcGVLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgICAgICAgIHRoaXMub25UYWJLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMub25CYWNrc3BhY2VLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgICBjYXNlICdQYWdlVXAnOlxuICAgICAgICAgICAgY2FzZSAnU2hpZnRMZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0UmlnaHQnOlxuICAgICAgICAgICAgICAgIC8vTk9PUFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSAmJiBPYmplY3RVdGlscy5pc1ByaW50YWJsZUNoYXJhY3RlcihldmVudC5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaE9wdGlvbnMoZXZlbnQsIGV2ZW50LmtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFycm93RG93bktleShldmVudCkge1xuICAgICAgICBjb25zdCBvcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCAhPT0gLTEgPyB0aGlzLmZpbmROZXh0T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4KSA6IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcblxuICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkFycm93VXBLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRPcHRpb24gPSB0aGlzLnZpc2libGVPcHRpb25zW3RoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBlZCA9IHRoaXMuaXNQcm9jY2Vzc2VkT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICFncm91cGVkICYmIHRoaXMub25PcHRpb25DaGFuZ2UoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHByb2Nlc3NlZE9wdGlvbiB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleCAhPT0gLTEgPyB0aGlzLmZpbmRQcmV2T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4KSA6IHRoaXMuZmluZExhc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcblxuICAgICAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd0xlZnRLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50T3B0aW9uID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkuZmluZCgocCkgPT4gcC5rZXkgPT09IHByb2Nlc3NlZE9wdGlvbi5wYXJlbnRLZXkpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5wYXJlbnRLZXkgPT09ICcnIHx8IChwYXJlbnRPcHRpb24gJiYgcGFyZW50T3B0aW9uLmtleSA9PT0gdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLnBhcmVudEtleSk7XG4gICAgICAgICAgICBjb25zdCByb290ID0gT2JqZWN0VXRpbHMuaXNFbXB0eShwcm9jZXNzZWRPcHRpb24ucGFyZW50KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25QYXRoID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkuZmlsdGVyKChwKSA9PiBwLnBhcmVudEtleSAhPT0gdGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLnBhcmVudEtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVPcHRpb25QYXRoLnNldChhY3RpdmVPcHRpb25QYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mby5zZXQoeyBpbmRleDogLTEsIHBhcmVudEtleTogcGFyZW50T3B0aW9uID8gcGFyZW50T3B0aW9uLnBhcmVudEtleSA6ICcnIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyb3dSaWdodEtleShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleF07XG4gICAgICAgICAgICBjb25zdCBncm91cGVkID0gdGhpcy5pc1Byb2NjZXNzZWRPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmFjdGl2ZU9wdGlvblBhdGgoKS5zb21lKChwKSA9PiBwcm9jZXNzZWRPcHRpb24ua2V5ID09PSBwLmtleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmZvLnNldCh7IGluZGV4OiAtMSwgcGFyZW50S2V5OiBwcm9jZXNzZWRPcHRpb24ua2V5IH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25DaGFuZ2UoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHByb2Nlc3NlZE9wdGlvbiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhvbWVLZXkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIHRoaXMuZmluZEZpcnN0T3B0aW9uSW5kZXgoKSk7XG5cbiAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25FbmRLZXkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpKTtcblxuICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkVudGVyS2V5KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwZWQgPSB0aGlzLmlzUHJvY2Nlc3NlZE9wdGlvbkdyb3VwKHByb2Nlc3NlZE9wdGlvbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uT3B0aW9uQ2hhbmdlKHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiBwcm9jZXNzZWRPcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgIWdyb3VwZWQgJiYgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uU3BhY2VLZXkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkVzY2FwZUtleShldmVudCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSh0cnVlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvblRhYktleShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleF07XG4gICAgICAgICAgICBjb25zdCBncm91cGVkID0gdGhpcy5pc1Byb2NjZXNzZWRPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICAhZ3JvdXBlZCAmJiB0aGlzLm9uT3B0aW9uQ2hhbmdlKHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiBwcm9jZXNzZWRPcHRpb24gfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIG9uQmFja3NwYWNlS2V5KGV2ZW50KSB7XG4gICAgICAgIGlmIChPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKSAmJiB0aGlzLnNob3dDbGVhcikge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZXF1YWxpdHlLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gbnVsbCA6IHRoaXMuZGF0YUtleTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb2RlbCh2YWx1ZSwgZXZlbnQ/KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlLnNldCh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGF1dG9VcGRhdGVNb2RlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25Gb2N1cyAmJiB0aGlzLmF1dG9PcHRpb25Gb2N1cyAmJiAhdGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCkuaW5kZXggPSB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICAgICAgdGhpcy5vbk9wdGlvbkNoYW5nZSh7IG9yaWdpbmFsRXZlbnQ6IG51bGwsIHByb2Nlc3NlZE9wdGlvbjogdGhpcy52aXNpYmxlT3B0aW9ucygpW3RoaXMuZm9jdXNlZE9wdGlvbkluZm8oKS5pbmRleF0sIGlzSGlkZTogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbEluVmlldyhpbmRleCA9IC0xKSB7XG4gICAgICAgIGNvbnN0IGlkID0gaW5kZXggIT09IC0xID8gYCR7dGhpcy5pZH1fJHtpbmRleH1gIDogdGhpcy5mb2N1c2VkT3B0aW9uSWQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5wYW5lbFZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCwgYGxpW2lkPVwiJHtpZH1cIl1gKTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyAmJiBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnc3RhcnQnIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5mbygpLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZE9wdGlvbkluZm8gPSB0aGlzLmZvY3VzZWRPcHRpb25JbmZvKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmZvLnNldCh7IC4uLmZvY3VzZWRPcHRpb25JbmZvLCBpbmRleCB9KTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW5WaWV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm9uT3B0aW9uQ2hhbmdlKHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHByb2Nlc3NlZE9wdGlvbjogdGhpcy52aXNpYmxlT3B0aW9ucygpW2luZGV4XSwgaXNIaWRlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZ2luYWxFdmVudCwgdmFsdWUsIGlzRm9jdXMsIGlzSGlkZSB9ID0gZXZlbnQ7XG4gICAgICAgIGlmIChPYmplY3RVdGlscy5pc0VtcHR5KHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGxldmVsLCBwYXJlbnRLZXksIGNoaWxkcmVuIH0gPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgZ3JvdXBlZCA9IE9iamVjdFV0aWxzLmlzTm90RW1wdHkoY2hpbGRyZW4pO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvblBhdGggPSB0aGlzLmFjdGl2ZU9wdGlvblBhdGgoKS5maWx0ZXIoKHApID0+IHAucGFyZW50S2V5ICE9PSBwYXJlbnRLZXkpO1xuXG4gICAgICAgIGFjdGl2ZU9wdGlvblBhdGgucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mby5zZXQoeyBpbmRleCwgbGV2ZWwsIHBhcmVudEtleSB9KTtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb25QYXRoLnNldChhY3RpdmVPcHRpb25QYXRoKTtcblxuICAgICAgICBncm91cGVkID8gdGhpcy5vbk9wdGlvbkdyb3VwU2VsZWN0KHsgb3JpZ2luYWxFdmVudCwgdmFsdWUsIGlzRm9jdXM6IGZhbHNlIH0pIDogdGhpcy5vbk9wdGlvblNlbGVjdCh7IG9yaWdpbmFsRXZlbnQsIHZhbHVlLCBpc0ZvY3VzIH0pO1xuICAgICAgICBpc0ZvY3VzICYmIERvbUhhbmRsZXIuZm9jdXModGhpcy5mb2N1c0lucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZ2luYWxFdmVudCwgdmFsdWUsIGlzRm9jdXMgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0T3B0aW9uVmFsdWUodmFsdWUub3B0aW9uKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25QYXRoID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKCk7XG4gICAgICAgIGFjdGl2ZU9wdGlvblBhdGguZm9yRWFjaCgocCkgPT4gKHAuc2VsZWN0ZWQgPSB0cnVlKSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb25QYXRoLnNldChhY3RpdmVPcHRpb25QYXRoKTtcbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbChuZXdWYWx1ZSwgb3JpZ2luYWxFdmVudCk7XG4gICAgICAgIGlzRm9jdXMgJiYgdGhpcy5oaWRlKHRydWUpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uR3JvdXBTZWxlY3QoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMub25Hcm91cENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpZXdDaGlsZD8uZWw/Lm5hdGl2ZUVsZW1lbnQ/LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzT3B0aW9uTWF0Y2hlZChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZE9wdGlvbihwcm9jZXNzZWRPcHRpb24pICYmIHRoaXMuZ2V0UHJvY2Nlc3NlZE9wdGlvbkxhYmVsKHByb2Nlc3NlZE9wdGlvbikudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5zZWFyY2hMb2NhbGUpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hWYWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLnNlYXJjaExvY2FsZSkpO1xuICAgIH1cblxuICAgIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkRpc2FibGVkID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uRGlzYWJsZWQpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaXNWYWxpZE9wdGlvbihwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuICEhcHJvY2Vzc2VkT3B0aW9uICYmICF0aGlzLmlzT3B0aW9uRGlzYWJsZWQocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbik7XG4gICAgfVxuXG4gICAgaXNWYWxpZFNlbGVjdGVkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikgJiYgdGhpcy5pc1NlbGVjdGVkKHByb2Nlc3NlZE9wdGlvbik7XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChwcm9jZXNzZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpLnNvbWUoKHApID0+IHAua2V5ID09PSBwcm9jZXNzZWRPcHRpb24ua2V5KTtcbiAgICB9XG5cbiAgICBmaW5kT3B0aW9uUGF0aEJ5VmFsdWUodmFsdWUsIHByb2Nlc3NlZE9wdGlvbnM/LCBsZXZlbCA9IDApIHtcbiAgICAgICAgcHJvY2Vzc2VkT3B0aW9ucyA9IHByb2Nlc3NlZE9wdGlvbnMgfHwgKGxldmVsID09PSAwICYmIHRoaXMucHJvY2Vzc2VkT3B0aW9ucygpKTtcblxuICAgICAgICBpZiAoIXByb2Nlc3NlZE9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNFbXB0eSh2YWx1ZSkpIHJldHVybiBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2Nlc3NlZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZE9wdGlvbiA9IHByb2Nlc3NlZE9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChPYmplY3RVdGlscy5lcXVhbHModmFsdWUsIHRoaXMuZ2V0T3B0aW9uVmFsdWUocHJvY2Vzc2VkT3B0aW9uLm9wdGlvbiksIHRoaXMuZXF1YWxpdHlLZXkoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Byb2Nlc3NlZE9wdGlvbl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25zID0gdGhpcy5maW5kT3B0aW9uUGF0aEJ5VmFsdWUodmFsdWUsIHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbiwgbGV2ZWwgKyAxKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZWRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9wdGlvbnMudW5zaGlmdChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEZpcnN0T3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihwcm9jZXNzZWRPcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kTGFzdE9wdGlvbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZmluZExhc3RJbmRleCh0aGlzLnZpc2libGVPcHRpb25zKCksIChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihwcm9jZXNzZWRPcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kTmV4dE9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9XG4gICAgICAgICAgICBpbmRleCA8IHRoaXMudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLnZpc2libGVPcHRpb25zKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKHByb2Nlc3NlZE9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikpXG4gICAgICAgICAgICAgICAgOiAtMTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbkluZGV4ID4gLTEgPyBtYXRjaGVkT3B0aW9uSW5kZXggKyBpbmRleCArIDEgOiBpbmRleDtcbiAgICB9XG5cbiAgICBmaW5kUHJldk9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRPcHRpb25JbmRleCA9IGluZGV4ID4gMCA/IE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucygpLnNsaWNlKDAsIGluZGV4KSwgKHByb2Nlc3NlZE9wdGlvbikgPT4gdGhpcy5pc1ZhbGlkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikpIDogLTE7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4IDogaW5kZXg7XG4gICAgfVxuXG4gICAgZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNWYWxpZFNlbGVjdGVkT3B0aW9uKHByb2Nlc3NlZE9wdGlvbikpO1xuICAgIH1cblxuICAgIGZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCA8IDAgPyB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkgOiBzZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIGZpbmRMYXN0Rm9jdXNlZE9wdGlvbkluZGV4KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5maW5kU2VsZWN0ZWRPcHRpb25JbmRleCgpO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4IDwgMCA/IHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpIDogc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBzZWFyY2hPcHRpb25zKGV2ZW50LCBjaGFyKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAodGhpcy5zZWFyY2hWYWx1ZSB8fCAnJykgKyBjaGFyO1xuXG4gICAgICAgIGxldCBvcHRpb25JbmRleCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb2N1c2VkT3B0aW9uSW5mbyA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZm8oKTtcblxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZm8uaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBvcHRpb25JbmRleCA9IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgIC5zbGljZShmb2N1c2VkT3B0aW9uSW5mby5pbmRleClcbiAgICAgICAgICAgICAgICAuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKHByb2Nlc3NlZE9wdGlvbikpO1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPVxuICAgICAgICAgICAgICAgIG9wdGlvbkluZGV4ID09PSAtMVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMudmlzaWJsZU9wdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgZm9jdXNlZE9wdGlvbkluZm8uaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKHByb2Nlc3NlZE9wdGlvbikgPT4gdGhpcy5pc09wdGlvbk1hdGNoZWQocHJvY2Vzc2VkT3B0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgOiBvcHRpb25JbmRleCArIGZvY3VzZWRPcHRpb25JbmZvLmluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChwcm9jZXNzZWRPcHRpb24pID0+IHRoaXMuaXNPcHRpb25NYXRjaGVkKHByb2Nlc3NlZE9wdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uSW5kZXggPT09IC0xICYmIGZvY3VzZWRPcHRpb25JbmZvLmluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cblxuICAgIGhpZGUoZXZlbnQ/LCBpc0ZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgX2hpZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvblBhdGguc2V0KFtdKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcblxuICAgICAgICAgICAgaXNGb2N1cyAmJiBEb21IYW5kbGVyLmZvY3VzKHRoaXMuZm9jdXNJbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub25IaWRlLmVtaXQoZXZlbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX2hpZGUoKTtcbiAgICAgICAgfSwgMCk7IC8vIEZvciBTY3JlZW5SZWFkZXJzXG4gICAgfVxuXG4gICAgc2hvdyhldmVudD8sIGlzRm9jdXMgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvblBhdGggPSB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgPyB0aGlzLmZpbmRPcHRpb25QYXRoQnlWYWx1ZSh0aGlzLm1vZGVsVmFsdWUoKSkgOiB0aGlzLmFjdGl2ZU9wdGlvblBhdGgoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb25QYXRoLnNldChhY3RpdmVPcHRpb25QYXRoKTtcblxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZm87XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSAmJiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMuYWN0aXZlT3B0aW9uUGF0aCgpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkT3B0aW9uID0gdGhpcy5hY3RpdmVPcHRpb25QYXRoKClbdGhpcy5hY3RpdmVPcHRpb25QYXRoKCkubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGZvY3VzZWRPcHRpb25JbmZvID0geyBpbmRleDogdGhpcy5hdXRvT3B0aW9uRm9jdXMgPyBwcm9jZXNzZWRPcHRpb24uaW5kZXggOiAtMSwgbGV2ZWw6IHByb2Nlc3NlZE9wdGlvbi5sZXZlbCwgcGFyZW50S2V5OiBwcm9jZXNzZWRPcHRpb24ucGFyZW50S2V5IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb2N1c2VkT3B0aW9uSW5mbyA9IHsgaW5kZXg6IHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5mby5zZXQoZm9jdXNlZE9wdGlvbkluZm8pO1xuXG4gICAgICAgIGlzRm9jdXMgJiYgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmZvY3VzSW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY2xlYXIoZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSgpKSAmJiB0aGlzLnNob3dDbGVhcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChudWxsKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZm8uc2V0KHsgaW5kZXg6IC0xLCBsZXZlbDogMCwgcGFyZW50S2V5OiAnJyB9KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uUGF0aC5zZXQoW10pO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFyLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkxhYmVsKSA6IG9wdGlvbjtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uVmFsdWUgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25WYWx1ZSkgOiBvcHRpb247XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBMYWJlbChvcHRpb25Hcm91cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cExhYmVsKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb25Hcm91cCwgbGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbltsZXZlbF0pO1xuICAgIH1cblxuICAgIGlzT3B0aW9uR3JvdXAob3B0aW9uLCBsZXZlbCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbiwgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuW2xldmVsXSk7XG4gICAgfVxuXG4gICAgaXNQcm9jY2Vzc2VkT3B0aW9uR3JvdXAocHJvY2Vzc2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHByb2Nlc3NlZE9wdGlvbi5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgZ2V0UHJvY2Nlc3NlZE9wdGlvbkxhYmVsKHByb2Nlc3NlZE9wdGlvbikge1xuICAgICAgICBjb25zdCBncm91cGVkID0gdGhpcy5pc1Byb2NjZXNzZWRPcHRpb25Hcm91cChwcm9jZXNzZWRPcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBncm91cGVkID8gdGhpcy5nZXRPcHRpb25Hcm91cExhYmVsKHByb2Nlc3NlZE9wdGlvbi5vcHRpb24pIDogdGhpcy5nZXRPcHRpb25MYWJlbChwcm9jZXNzZWRPcHRpb24ub3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBjb25maWc6IFByaW1lTkdDb25maWcsIHB1YmxpYyBvdmVybGF5U2VydmljZTogT3ZlcmxheVNlcnZpY2UpIHtcbiAgICAgICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvblBhdGggPSB0aGlzLmFjdGl2ZU9wdGlvblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChPYmplY3RVdGlscy5pc05vdEVtcHR5KGFjdGl2ZU9wdGlvblBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Vmlld0NoaWxkLmFsaWduT3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgfHwgVW5pcXVlQ29tcG9uZW50SWQoKTtcbiAgICAgICAgdGhpcy5hdXRvVXBkYXRlTW9kZWwoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAndHJpZ2dlcmljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsZWFyaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbmdyb3VwaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25PdmVybGF5QW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFNoYXJlZE1vZHVsZSwgUmlwcGxlTW9kdWxlLCBDaGV2cm9uRG93bkljb24sIEFuZ2xlUmlnaHRJY29uLCBUaW1lc0ljb25dLFxuICAgIGV4cG9ydHM6IFtDYXNjYWRlU2VsZWN0LCBPdmVybGF5TW9kdWxlLCBDYXNjYWRlU2VsZWN0U3ViLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0Nhc2NhZGVTZWxlY3QsIENhc2NhZGVTZWxlY3RTdWJdXG59KVxuZXhwb3J0IGNsYXNzIENhc2NhZGVTZWxlY3RNb2R1bGUge31cbiJdfQ==