import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Directive, EventEmitter, HostListener, Inject, Injectable, Input, NgModule, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ArrowDownIcon } from 'primeng/icons/arrowdown';
import { ArrowUpIcon } from 'primeng/icons/arrowup';
import { CheckIcon } from 'primeng/icons/check';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import { ChevronRightIcon } from 'primeng/icons/chevronright';
import { MinusIcon } from 'primeng/icons/minus';
import { SortAltIcon } from 'primeng/icons/sortalt';
import { SortAmountDownIcon } from 'primeng/icons/sortamountdown';
import { SortAmountUpAltIcon } from 'primeng/icons/sortamountupalt';
import { SpinnerIcon } from 'primeng/icons/spinner';
import { PaginatorModule } from 'primeng/paginator';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { ObjectUtils } from 'primeng/utils';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/paginator";
import * as i4 from "primeng/scroller";
import * as i5 from "primeng/ripple";
export class TreeTableService {
    sortSource = new Subject();
    selectionSource = new Subject();
    contextMenuSource = new Subject();
    uiUpdateSource = new Subject();
    totalRecordsSource = new Subject();
    sortSource$ = this.sortSource.asObservable();
    selectionSource$ = this.selectionSource.asObservable();
    contextMenuSource$ = this.contextMenuSource.asObservable();
    uiUpdateSource$ = this.uiUpdateSource.asObservable();
    totalRecordsSource$ = this.totalRecordsSource.asObservable();
    onSort(sortMeta) {
        this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
        this.selectionSource.next(null);
    }
    onContextMenu(node) {
        this.contextMenuSource.next(node);
    }
    onUIUpdate(value) {
        this.uiUpdateSource.next(value);
    }
    onTotalRecordsChange(value) {
        this.totalRecordsSource.next(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableService, decorators: [{
            type: Injectable
        }] });
/**
 * TreeTable is used to display hierarchical data in tabular format.
 * @group Components
 */
export class TreeTable {
    document;
    renderer;
    el;
    cd;
    zone;
    tableService;
    filterService;
    /**
     * An array of objects to represent dynamic columns.
     * @group Props
     */
    columns;
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
     * Inline style of the table.
     * @group Props
     */
    tableStyle;
    /**
     * Style class of the table.
     * @group Props
     */
    tableStyleClass;
    /**
     * Whether the cell widths scale according to their content or not.
     * @group Props
     */
    autoLayout;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    lazyLoadOnInit = true;
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    paginator;
    /**
     * Number of rows to display per page.
     * @group Props
     */
    rows;
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    first = 0;
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    pageLinks = 5;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    rowsPerPageOptions;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShowPaginator = true;
    /**
     * Position of the paginator.
     * @group Props
     */
    paginatorPosition = 'bottom';
    /**
     * Custom style class for paginator
     * @group Props
     */
    paginatorStyleClass;
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    paginatorDropdownAppendTo;
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate = '{currentPage} of {totalPages}';
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon = true;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks = true;
    /**
     * Sort order to use when an unsorted column gets sorted by user interaction.
     * @group Props
     */
    defaultSortOrder = 1;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @group Props
     */
    sortMode = 'single';
    /**
     * When true, resets paginator to first page after sorting.
     * @group Props
     */
    resetPageOnSort = true;
    /**
     * Whether to use the default sorting or a custom one using sortFunction.
     * @group Props
     */
    customSort;
    /**
     * Specifies the selection mode, valid values are "single" and "multiple".
     * @group Props
     */
    selectionMode;
    /**
     * Selected row with a context menu.
     * @group Props
     */
    contextMenuSelection;
    /**
     * Mode of the contet menu selection.
     * @group Props
     */
    contextMenuSelectionMode = 'separate';
    /**
     * A property to uniquely identify a record in data.
     * @group Props
     */
    dataKey;
    /**
     * Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection = false;
    /**
     * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
     * @group Props
     */
    compareSelectionBy = 'deepEquals';
    /**
     * Adds hover effect to rows without the need for selectionMode.
     * @group Props
     */
    rowHover;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon;
    /**
     * Whether to show the loading mask when loading property is true.
     * @group Props
     */
    showLoader = true;
    /**
     * When specifies, enables horizontal and/or vertical scrolling.
     * @group Props
     */
    scrollable;
    /**
     * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
     * @group Props
     */
    scrollHeight;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of a row to use in calculations of virtual scrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * The delay (in milliseconds) before triggering the virtual scroll. This determines the time gap between the user's scroll action and the actual rendering of the next set of items in the virtual scroll.
     * @group Props
     */
    virtualScrollDelay = 150;
    /**
     * Width of the frozen columns container.
     * @group Props
     */
    frozenWidth;
    /**
     * An array of objects to represent dynamic columns that are frozen.
     * @group Props
     */
    frozenColumns;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @group Props
     */
    resizableColumns;
    /**
     * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
     * @group Props
     */
    columnResizeMode = 'fit';
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @group Props
     */
    reorderableColumns;
    /**
     * Local ng-template varilable of a ContextMenu.
     * @group Props
     */
    contextMenu;
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    rowTrackBy = (index, item) => item;
    /**
     * An array of FilterMetadata objects to provide external filters.
     * @group Props
     */
    filters = {};
    /**
     * An array of fields as string to use in global filtering.
     * @group Props
     */
    globalFilterFields;
    /**
     * Delay in milliseconds before filtering the data.
     * @group Props
     */
    filterDelay = 300;
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @group Props
     */
    filterMode = 'lenient';
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Locale to be used in paginator formatting.
     * @group Props
     */
    paginatorLocale;
    /**
     * Number of total records, defaults to length of value when not defined.
     * @group Props
     */
    get totalRecords() {
        return this._totalRecords;
    }
    set totalRecords(val) {
        this._totalRecords = val;
        this.tableService.onTotalRecordsChange(this._totalRecords);
    }
    /**
     * Name of the field to sort data by default.
     * @group Props
     */
    get sortField() {
        return this._sortField;
    }
    set sortField(val) {
        this._sortField = val;
    }
    /**
     * Order to sort when default sorting is enabled.
     * @defaultValue 1
     * @group Props
     */
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(val) {
        this._sortOrder = val;
    }
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     * @defaultValue null
     * @group Props
     */
    get multiSortMeta() {
        return this._multiSortMeta;
    }
    set multiSortMeta(val) {
        this._multiSortMeta = val;
    }
    /**
     * Selected row in single mode or an array of values in multiple mode.
     * @defaultValue null
     * @group Props
     */
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
    }
    /**
     * An array of objects to display.
     * @defaultValue null
     * @group Props
     */
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
    }
    /**
     * Indicates the height of rows to be scrolled.
     * @defaultValue 28
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get virtualRowHeight() {
        return this._virtualRowHeight;
    }
    set virtualRowHeight(val) {
        this._virtualRowHeight = val;
        console.warn('The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.');
    }
    _virtualRowHeight = 28;
    /**
     * Callback to invoke on selected node change.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    selectionChange = new EventEmitter();
    /**
     * Callback to invoke on context menu selection change.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    contextMenuSelectionChange = new EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {TreeTableFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter = new EventEmitter();
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeTableNodeExpandEvent} event - Node expand event.
     * @group Emits
     */
    onNodeExpand = new EventEmitter();
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeTableNodeCollapseEvent} event - Node collapse event.
     * @group Emits
     */
    onNodeCollapse = new EventEmitter();
    /**
     * Callback to invoke when pagination occurs.
     * @param {TreeTablePaginatorState} object - Paginator state.
     * @group Emits
     */
    onPage = new EventEmitter();
    /**
     * Callback to invoke when a column gets sorted.
     * @param {Object} Object - Sort data.
     * @group Emits
     */
    onSort = new EventEmitter();
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {TreeTableLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    onLazyLoad = new EventEmitter();
    /**
     * An event emitter to invoke on custom sorting, refer to sorting section for details.
     * @param {TreeTableSortEvent} event - Custom sort event.
     * @group Emits
     */
    sortFunction = new EventEmitter();
    /**
     * Callback to invoke when a column is resized.
     * @param {TreeTableColResizeEvent} event - Custom column resize event.
     * @group Emits
     */
    onColResize = new EventEmitter();
    /**
     * Callback to invoke when a column is reordered.
     * @param {TreeTableColumnReorderEvent} event - Custom column reorder.
     * @group Emits
     */
    onColReorder = new EventEmitter();
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    onNodeSelect = new EventEmitter();
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeTableNodeUnSelectEvent} event - Custom node unselect event.
     * @group Emits
     */
    onNodeUnselect = new EventEmitter();
    /**
     * Callback to invoke when a node is selected with right click.
     * @param {TreeTableContextMenuSelectEvent} event - Custom context menu select event.
     * @group Emits
     */
    onContextMenuSelect = new EventEmitter();
    /**
     * Callback to invoke when state of header checkbox changes.
     * @param {TreeTableHeaderCheckboxToggleEvent} event - Custom checkbox toggle event.
     * @group Emits
     */
    onHeaderCheckboxToggle = new EventEmitter();
    /**
     * Callback to invoke when a cell switches to edit mode.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    onEditInit = new EventEmitter();
    /**
     * Callback to invoke when cell edit is completed.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    onEditComplete = new EventEmitter();
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    onEditCancel = new EventEmitter();
    containerViewChild;
    resizeHelperViewChild;
    reorderIndicatorUpViewChild;
    reorderIndicatorDownViewChild;
    tableViewChild;
    scrollableViewChild;
    scrollableFrozenViewChild;
    templates;
    _value = [];
    serializedValue;
    _totalRecords = 0;
    _multiSortMeta;
    _sortField;
    _sortOrder = 1;
    filteredNodes;
    filterTimeout;
    colGroupTemplate;
    captionTemplate;
    headerTemplate;
    bodyTemplate;
    footerTemplate;
    summaryTemplate;
    emptyMessageTemplate;
    paginatorLeftTemplate;
    paginatorRightTemplate;
    paginatorDropdownItemTemplate;
    frozenHeaderTemplate;
    frozenBodyTemplate;
    frozenFooterTemplate;
    frozenColGroupTemplate;
    loadingIconTemplate;
    reorderIndicatorUpIconTemplate;
    reorderIndicatorDownIconTemplate;
    sortIconTemplate;
    checkboxIconTemplate;
    headerCheckboxIconTemplate;
    togglerIconTemplate;
    paginatorFirstPageLinkIconTemplate;
    paginatorLastPageLinkIconTemplate;
    paginatorPreviousPageLinkIconTemplate;
    paginatorNextPageLinkIconTemplate;
    lastResizerHelperX;
    reorderIconWidth;
    reorderIconHeight;
    draggedColumn;
    dropPosition;
    preventSelectionSetterPropagation;
    _selection;
    selectionKeys = {};
    rowTouched;
    editingCell;
    editingCellData;
    editingCellField;
    editingCellClick;
    documentEditListener;
    initialized;
    toggleRowIndex;
    ngOnInit() {
        if (this.lazy && this.lazyLoadOnInit && !this.virtualScroll) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'caption':
                    this.captionTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'body':
                    this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'summary':
                    this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    this.colGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    this.paginatorRightTemplate = item.template;
                    break;
                case 'paginatordropdownitem':
                    this.paginatorDropdownItemTemplate = item.template;
                    break;
                case 'frozenheader':
                    this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    this.frozenColGroupTemplate = item.template;
                    break;
                case 'loadingicon':
                    this.loadingIconTemplate = item.template;
                    break;
                case 'reorderindicatorupicon':
                    this.reorderIndicatorUpIconTemplate = item.template;
                    break;
                case 'reorderindicatordownicon':
                    this.reorderIndicatorDownIconTemplate = item.template;
                    break;
                case 'sorticon':
                    this.sortIconTemplate = item.template;
                    break;
                case 'checkboxicon':
                    this.checkboxIconTemplate = item.template;
                    break;
                case 'headercheckboxicon':
                    this.headerCheckboxIconTemplate = item.template;
                    break;
                case 'togglericon':
                    this.togglerIconTemplate = item.template;
                    break;
                case 'paginatorfirstpagelinkicon':
                    this.paginatorFirstPageLinkIconTemplate = item.template;
                    break;
                case 'paginatorlastpagelinkicon':
                    this.paginatorLastPageLinkIconTemplate = item.template;
                    break;
                case 'paginatorpreviouspagelinkicon':
                    this.paginatorPreviousPageLinkIconTemplate = item.template;
                    break;
                case 'paginatornextpagelinkicon':
                    this.paginatorNextPageLinkIconTemplate = item.template;
                    break;
            }
        });
    }
    constructor(document, renderer, el, cd, zone, tableService, filterService) {
        this.document = document;
        this.renderer = renderer;
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this.tableService = tableService;
        this.filterService = filterService;
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            this._value = simpleChange.value.currentValue;
            if (!this.lazy) {
                this.totalRecords = this._value ? this._value.length : 0;
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
                else if (this.hasFilter())
                    //sort already filters
                    this._filter();
            }
            this.updateSerializedValue();
            this.tableService.onUIUpdate(this.value);
        }
        if (simpleChange.sortField) {
            this._sortField = simpleChange.sortField.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        }
        if (simpleChange.sortOrder) {
            this._sortOrder = simpleChange.sortOrder.currentValue;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        }
        if (simpleChange.multiSortMeta) {
            this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        }
        if (simpleChange.selection) {
            this._selection = simpleChange.selection.currentValue;
            if (!this.preventSelectionSetterPropagation) {
                this.updateSelectionKeys();
                this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
        }
    }
    updateSerializedValue() {
        this.serializedValue = [];
        if (this.paginator)
            this.serializePageNodes();
        else
            this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
    }
    serializeNodes(parent, nodes, level, visible) {
        if (nodes && nodes.length) {
            for (let node of nodes) {
                node.parent = parent;
                const rowNode = {
                    node: node,
                    parent: parent,
                    level: level,
                    visible: visible && (parent ? parent.expanded : true)
                };
                this.serializedValue.push(rowNode);
                if (rowNode.visible && node.expanded) {
                    this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                }
            }
        }
    }
    serializePageNodes() {
        let data = this.filteredNodes || this.value;
        this.serializedValue = [];
        if (data && data.length) {
            const first = this.lazy ? 0 : this.first;
            for (let i = first; i < first + this.rows; i++) {
                let node = data[i];
                if (node) {
                    this.serializedValue.push({
                        node: node,
                        parent: null,
                        level: 0,
                        visible: true
                    });
                    this.serializeNodes(node, node.children, 1, true);
                }
            }
        }
    }
    updateSelectionKeys() {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (let node of this._selection) {
                    this.selectionKeys[String(ObjectUtils.resolveFieldData(node.data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection.data, this.dataKey))] = 1;
            }
        }
    }
    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.serializePageNodes();
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.tableService.onUIUpdate(this.value);
        if (this.scrollable) {
            this.resetScrollTop();
        }
    }
    sort(event) {
        let originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
            if (this.resetPageOnSort && this.scrollable) {
                this.resetScrollTop();
            }
        }
        if (this.sortMode === 'multiple') {
            let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            let sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                    if (this.resetPageOnSort && this.scrollable) {
                        this.resetScrollTop();
                    }
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                    if (this.resetPageOnSort && this.scrollable) {
                        this.resetScrollTop();
                    }
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
    }
    sortSingle() {
        if (this.sortField && this.sortOrder) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortNodes(this.value);
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            let sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
            this.updateSerializedValue();
        }
    }
    sortNodes(nodes) {
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: nodes,
                mode: this.sortMode,
                field: this.sortField,
                order: this.sortOrder
            });
        }
        else {
            nodes.sort((node1, node2) => {
                let value1 = ObjectUtils.resolveFieldData(node1.data, this.sortField);
                let value2 = ObjectUtils.resolveFieldData(node2.data, this.sortField);
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                return this.sortOrder * result;
            });
        }
        for (let node of nodes) {
            this.sortNodes(node.children);
        }
    }
    sortMultiple() {
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.sortMultipleNodes(this.value);
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.updateSerializedValue();
            this.tableService.onSort(this.multiSortMeta);
        }
    }
    sortMultipleNodes(nodes) {
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (this.customSort) {
            this.sortFunction.emit({
                data: this.value,
                mode: this.sortMode,
                multiSortMeta: this.multiSortMeta
            });
        }
        else {
            nodes.sort((node1, node2) => {
                return this.multisortField(node1, node2, this.multiSortMeta, 0);
            });
        }
        for (let node of nodes) {
            this.sortMultipleNodes(node.children);
        }
    }
    multisortField(node1, node2, multiSortMeta, index) {
        if (ObjectUtils.isEmpty(this.multiSortMeta) || ObjectUtils.isEmpty(multiSortMeta[index])) {
            return 0;
        }
        let value1 = ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
        let value2 = ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
        let result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && value1 != value2) {
                return multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true });
            }
        }
        else {
            result = value1 < value2 ? -1 : 1;
        }
        if (value1 == value2) {
            return multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, multiSortMeta, index + 1) : 0;
        }
        return multiSortMeta[index].order * result;
    }
    getSortMeta(field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (let i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    }
    isSorted(field) {
        if (this.sortMode === 'single') {
            return this.sortField && this.sortField === field;
        }
        else if (this.sortMode === 'multiple') {
            let sorted = false;
            if (this.multiSortMeta) {
                for (let i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    }
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta,
            forceUpdate: () => this.cd.detectChanges()
        };
    }
    onLazyItemLoad(event) {
        this.onLazyLoad.emit({
            ...this.createLazyLoadMetadata(),
            ...event,
            rows: event.last - event.first
        });
    }
    /**
     * Resets scroll to top.
     * @group Method
     */
    resetScrollTop() {
        if (this.virtualScroll)
            this.scrollToVirtualIndex(0);
        else
            this.scrollTo({ top: 0 });
    }
    /**
     * Scrolls to given index when using virtual scroll.
     * @param {number} index - index of the element.
     * @group Method
     */
    scrollToVirtualIndex(index) {
        if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollToVirtualIndex(index);
        }
        if (this.scrollableFrozenViewChild) {
            this.scrollableViewChild.scrollToVirtualIndex(index);
        }
    }
    /**
     * Scrolls to given index.
     * @param {ScrollToOptions} options - Scroll options.
     * @group Method
     */
    scrollTo(options) {
        if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollTo(options);
        }
        if (this.scrollableFrozenViewChild) {
            this.scrollableViewChild.scrollTo(options);
        }
    }
    isEmpty() {
        let data = this.filteredNodes || this.value;
        return data == null || data.length == 0;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onColumnResizeBegin(event) {
        let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
        this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
        event.preventDefault();
    }
    onColumnResize(event) {
        let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
        DomHandler.addClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    }
    onColumnResizeEnd(event, column) {
        let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        let columnWidth = column.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = column.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                let nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    let nextColumnWidth = nextColumn.offsetWidth - delta;
                    let nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            let scrollableView = this.findParentScrollableView(column);
                            let scrollableBodyTable = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table') || DomHandler.findSingle(scrollableView, '.p-scroller-viewport table');
                            let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                            let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                            let resizeColumnIndex = DomHandler.index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (this.scrollable) {
                    let scrollableView = this.findParentScrollableView(column);
                    let scrollableBody = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body') || DomHandler.findSingle(scrollableView, '.p-scroller-viewport');
                    let scrollableHeader = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-header');
                    let scrollableFooter = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-footer');
                    let scrollableBodyTable = DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table') || DomHandler.findSingle(scrollableView, '.p-scroller-viewport table');
                    let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                    let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableFooterTable.offsetWidth + delta + 'px';
                    }
                    let resizeColumnIndex = DomHandler.index(column);
                    const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
                    const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
                    const isContainerInViewport = this.containerViewChild?.nativeElement.offsetWidth >= scrollableBodyTableWidth;
                    let setWidth = (container, table, width, isContainerInViewport) => {
                        if (container && table) {
                            container.style.width = isContainerInViewport ? width + DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                            table.style.width = width + 'px';
                        }
                    };
                    setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
                    setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
                    setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableViewChild?.nativeElement.offsetWidth + delta + 'px';
                    column.style.width = newColumnWidth + 'px';
                    let containerWidth = this.tableViewChild?.nativeElement.style.width;
                    this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        DomHandler.removeClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
    }
    findParentScrollableView(column) {
        if (column) {
            let parent = column.parentElement;
            while (parent && !DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
                parent = parent.parentElement;
            }
            return parent;
        }
        else {
            return null;
        }
    }
    resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                let col = colGroup.children[resizeColumnIndex];
                let nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw 'Scrollable tables require a colgroup to support resizable columns';
            }
        }
    }
    onColumnDragStart(event, columnElement) {
        this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
        this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    }
    onColumnDragEnter(event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            let containerOffset = DomHandler.getOffset(this.containerViewChild?.nativeElement);
            let dropHeaderOffset = DomHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                let targetLeft = dropHeaderOffset.left - containerOffset.left;
                let targetTop = containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }
    onColumnDragLeave(event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    }
    onColumnDrop(event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
            let dropIndex = DomHandler.indexWithinGroup(dropColumn, 'ttreorderablecolumn');
            let allowDrop = dragIndex != dropIndex;
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
                dropIndex = dropIndex + 1;
            }
            if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
                dropIndex = dropIndex - 1;
            }
            if (allowDrop) {
                ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    handleRowClick(event) {
        let targetNode = event.originalEvent.target.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || DomHandler.hasClass(event.originalEvent.target, 'p-clickable')) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            let rowNode = event.rowNode;
            let selected = this.isSelected(rowNode.node);
            let metaSelection = this.rowTouched ? false : this.metaKeySelection;
            let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowNode.node.data, this.dataKey)) : null;
            if (metaSelection) {
                let keyboardEvent = event.originalEvent;
                let metaKey = keyboardEvent.metaKey || keyboardEvent.ctrlKey;
                if (selected && metaKey) {
                    if (this.isSingleSelectionMode()) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(null);
                    }
                    else {
                        let selectionIndex = this.findIndexInSelection(rowNode.node);
                        this._selection = this.selection.filter((val, i) => i != selectionIndex);
                        this.selectionChange.emit(this.selection);
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        this._selection = rowNode.node;
                        this.selectionChange.emit(rowNode.node);
                        if (dataKeyValue) {
                            this.selectionKeys = {};
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                    else if (this.isMultipleSelectionMode()) {
                        if (metaKey) {
                            this._selection = this.selection || [];
                        }
                        else {
                            this._selection = [];
                            this.selectionKeys = {};
                        }
                        this._selection = [...this.selection, rowNode.node];
                        this.selectionChange.emit(this.selection);
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                    this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                }
            }
            else {
                if (this.selectionMode === 'single') {
                    if (selected) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                    }
                    else {
                        this._selection = rowNode.node;
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                        if (dataKeyValue) {
                            this.selectionKeys = {};
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
                else if (this.selectionMode === 'multiple') {
                    if (selected) {
                        let selectionIndex = this.findIndexInSelection(rowNode.node);
                        this._selection = this.selection.filter((val, i) => i != selectionIndex);
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    else {
                        this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
        }
        this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
        this.rowTouched = true;
    }
    handleRowRightClick(event) {
        if (this.contextMenu) {
            const node = event.rowNode.node;
            if (this.contextMenuSelectionMode === 'separate') {
                this.contextMenuSelection = node;
                this.contextMenuSelectionChange.emit(node);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
                this.contextMenu.show(event.originalEvent);
                this.tableService.onContextMenu(node);
            }
            else if (this.contextMenuSelectionMode === 'joint') {
                this.preventSelectionSetterPropagation = true;
                let selected = this.isSelected(node);
                let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
                if (!selected) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = node;
                        this.selectionChange.emit(node);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        this.selection = [node];
                        this.selectionChange.emit(this.selection);
                    }
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                this.contextMenu.show(event.originalEvent);
                this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
            }
        }
    }
    toggleNodeWithCheckbox(event) {
        this.selection = this.selection || [];
        this.preventSelectionSetterPropagation = true;
        let node = event.rowNode.node;
        let selected = this.isSelected(node);
        if (selected) {
            this.propagateSelectionDown(node, false);
            if (event.rowNode.parent) {
                this.propagateSelectionUp(node.parent, false);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({ originalEvent: event, node: node });
        }
        else {
            this.propagateSelectionDown(node, true);
            if (event.rowNode.parent) {
                this.propagateSelectionUp(node.parent, true);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({ originalEvent: event, node: node });
        }
        this.tableService.onSelectionChange();
    }
    toggleNodesWithCheckbox(event, check) {
        let data = this.filteredNodes || this.value;
        this._selection = check && data ? data.slice() : [];
        if (check) {
            if (data && data.length) {
                for (let node of data) {
                    this.propagateSelectionDown(node, true);
                }
            }
        }
        else {
            this._selection = [];
            this.selectionKeys = {};
        }
        this.preventSelectionSetterPropagation = true;
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
    }
    propagateSelectionUp(node, select) {
        if (node.children && node.children.length) {
            let selectedChildCount = 0;
            let childPartialSelected = false;
            let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
            for (let child of node.children) {
                if (this.isSelected(child))
                    selectedChildCount++;
                else if (child.partialSelected)
                    childPartialSelected = true;
            }
            if (select && selectedChildCount == node.children.length) {
                this._selection = [...(this.selection || []), node];
                node.partialSelected = false;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
            }
            else {
                if (!select) {
                    let index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this._selection = this.selection.filter((val, i) => i != index);
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                }
                if (childPartialSelected || (selectedChildCount > 0 && selectedChildCount != node.children.length))
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        let parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }
    propagateSelectionDown(node, select) {
        let index = this.findIndexInSelection(node);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
        if (select && index == -1) {
            this._selection = [...(this.selection || []), node];
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        else if (!select && index > -1) {
            this._selection = this.selection.filter((val, i) => i != index);
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (let child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }
    isSelected(node) {
        if (node && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[ObjectUtils.resolveFieldData(node.data, this.dataKey)] !== undefined;
            }
            else {
                if (Array.isArray(this.selection))
                    return this.findIndexInSelection(node) > -1;
                else
                    return this.equals(node, this.selection);
            }
        }
        return false;
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selection && this.selection.length) {
            for (let i = 0; i < this.selection.length; i++) {
                if (this.equals(node, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    isSingleSelectionMode() {
        return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
        return this.selectionMode === 'multiple';
    }
    equals(node1, node2) {
        return this.compareSelectionBy === 'equals' ? node1 === node2 : ObjectUtils.equals(node1.data, node2.data, this.dataKey);
    }
    filter(value, field, matchMode) {
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this.filterTimeout = setTimeout(() => {
            this._filter();
            this.filterTimeout = null;
        }, this.filterDelay);
    }
    filterGlobal(value, matchMode) {
        this.filter(value, 'global', matchMode);
    }
    isFilterBlank(filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (Array.isArray(filter) && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    }
    _filter() {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredNodes = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                let globalFilterFieldsArray;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredNodes = [];
                const isStrictMode = this.filterMode === 'strict';
                let isValueChanged = false;
                for (let node of this.value) {
                    let copyNode = { ...node };
                    let localMatch = true;
                    let globalMatch = false;
                    let paramsWithoutNode;
                    for (let prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            let filterMeta = this.filters[prop];
                            let filterField = prop;
                            let filterValue = filterMeta.value;
                            let filterMatchMode = filterMeta.matchMode || 'startsWith';
                            let filterConstraint = this.filterService.filters[filterMatchMode];
                            paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode };
                            if ((isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                                (!isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        let copyNodeForGlobal = { ...copyNode };
                        let filterField = undefined;
                        let filterValue = this.filters['global'].value;
                        let filterConstraint = this.filterService.filters[this.filters['global'].matchMode];
                        paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode, globalFilterFieldsArray };
                        if ((isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode))) ||
                            (!isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode)))) {
                            globalMatch = true;
                            copyNode = copyNodeForGlobal;
                        }
                    }
                    let matches = localMatch;
                    if (this.filters['global']) {
                        matches = localMatch && globalMatch;
                    }
                    if (matches) {
                        this.filteredNodes.push(copyNode);
                    }
                    isValueChanged = isValueChanged || !localMatch || globalMatch || (localMatch && this.filteredNodes.length > 0) || (!globalMatch && this.filteredNodes.length === 0);
                }
                if (!isValueChanged) {
                    this.filteredNodes = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
                }
            }
            this.cd.markForCheck();
        }
        this.first = 0;
        const filteredValue = this.filteredNodes || this.value;
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: filteredValue
        });
        this.tableService.onUIUpdate(filteredValue);
        this.updateSerializedValue();
        if (this.scrollable) {
            this.resetScrollTop();
        }
    }
    findFilteredNodes(node, paramsWithoutNode) {
        if (node) {
            let matched = false;
            if (node.children) {
                let childNodes = [...node.children];
                node.children = [];
                for (let childNode of childNodes) {
                    let copyChildNode = { ...childNode };
                    if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                        matched = true;
                        node.children.push(copyChildNode);
                    }
                }
            }
            if (matched) {
                return true;
            }
        }
    }
    isFilterMatched(node, filterOptions) {
        let { filterField, filterValue, filterConstraint, isStrictMode, globalFilterFieldsArray } = filterOptions;
        let matched = false;
        const isMatched = (field) => filterConstraint(ObjectUtils.resolveFieldData(node.data, field), filterValue, this.filterLocale);
        matched = globalFilterFieldsArray?.length ? globalFilterFieldsArray.some((globalFilterField) => isMatched(globalFilterField.field || globalFilterField)) : isMatched(filterField);
        if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
            matched = this.findFilteredNodes(node, { filterField, filterValue, filterConstraint, isStrictMode, globalFilterFieldsArray }) || matched;
        }
        return matched;
    }
    isNodeLeaf(node) {
        return node.leaf === false ? false : !(node.children && node.children.length);
    }
    hasFilter() {
        let empty = true;
        for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    }
    /**
     * Clears the sort and paginator state.
     * @group Method
     */
    reset() {
        this._sortField = null;
        this._sortOrder = 1;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredNodes = null;
        this.filters = {};
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = this._value ? this._value.length : 0;
        }
    }
    updateEditingCell(cell, data, field) {
        this.editingCell = cell;
        this.editingCellData = data;
        this.editingCellField = field;
        this.bindDocumentEditListener();
    }
    isEditingCellValid() {
        return this.editingCell && DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
    }
    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = this.renderer.listen(this.document, 'click', (event) => {
                if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
                    DomHandler.removeClass(this.editingCell, 'p-cell-editing');
                    this.editingCell = null;
                    this.onEditComplete.emit({ field: this.editingCellField, data: this.editingCellData });
                    this.editingCellField = null;
                    this.editingCellData = null;
                    this.unbindDocumentEditListener();
                }
                this.editingCellClick = false;
            });
        }
    }
    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            this.documentEditListener();
            this.documentEditListener = null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentEditListener();
        this.editingCell = null;
        this.editingCellField = null;
        this.editingCellData = null;
        this.initialized = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTable, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: TreeTableService }, { token: i1.FilterService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TreeTable, selector: "p-treeTable", inputs: { columns: "columns", style: "style", styleClass: "styleClass", tableStyle: "tableStyle", tableStyleClass: "tableStyleClass", autoLayout: "autoLayout", lazy: "lazy", lazyLoadOnInit: "lazyLoadOnInit", paginator: "paginator", rows: "rows", first: "first", pageLinks: "pageLinks", rowsPerPageOptions: "rowsPerPageOptions", alwaysShowPaginator: "alwaysShowPaginator", paginatorPosition: "paginatorPosition", paginatorStyleClass: "paginatorStyleClass", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", currentPageReportTemplate: "currentPageReportTemplate", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", showFirstLastIcon: "showFirstLastIcon", showPageLinks: "showPageLinks", defaultSortOrder: "defaultSortOrder", sortMode: "sortMode", resetPageOnSort: "resetPageOnSort", customSort: "customSort", selectionMode: "selectionMode", contextMenuSelection: "contextMenuSelection", contextMenuSelectionMode: "contextMenuSelectionMode", dataKey: "dataKey", metaKeySelection: "metaKeySelection", compareSelectionBy: "compareSelectionBy", rowHover: "rowHover", loading: "loading", loadingIcon: "loadingIcon", showLoader: "showLoader", scrollable: "scrollable", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", virtualScrollItemSize: "virtualScrollItemSize", virtualScrollOptions: "virtualScrollOptions", virtualScrollDelay: "virtualScrollDelay", frozenWidth: "frozenWidth", frozenColumns: "frozenColumns", resizableColumns: "resizableColumns", columnResizeMode: "columnResizeMode", reorderableColumns: "reorderableColumns", contextMenu: "contextMenu", rowTrackBy: "rowTrackBy", filters: "filters", globalFilterFields: "globalFilterFields", filterDelay: "filterDelay", filterMode: "filterMode", filterLocale: "filterLocale", paginatorLocale: "paginatorLocale", totalRecords: "totalRecords", sortField: "sortField", sortOrder: "sortOrder", multiSortMeta: "multiSortMeta", selection: "selection", value: "value", virtualRowHeight: "virtualRowHeight" }, outputs: { selectionChange: "selectionChange", contextMenuSelectionChange: "contextMenuSelectionChange", onFilter: "onFilter", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse", onPage: "onPage", onSort: "onSort", onLazyLoad: "onLazyLoad", sortFunction: "sortFunction", onColResize: "onColResize", onColReorder: "onColReorder", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onContextMenuSelect: "onContextMenuSelect", onHeaderCheckboxToggle: "onHeaderCheckboxToggle", onEditInit: "onEditInit", onEditComplete: "onEditComplete", onEditCancel: "onEditCancel" }, host: { classAttribute: "p-element" }, providers: [TreeTableService], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "containerViewChild", first: true, predicate: ["container"], descendants: true }, { propertyName: "resizeHelperViewChild", first: true, predicate: ["resizeHelper"], descendants: true }, { propertyName: "reorderIndicatorUpViewChild", first: true, predicate: ["reorderIndicatorUp"], descendants: true }, { propertyName: "reorderIndicatorDownViewChild", first: true, predicate: ["reorderIndicatorDown"], descendants: true }, { propertyName: "tableViewChild", first: true, predicate: ["table"], descendants: true }, { propertyName: "scrollableViewChild", first: true, predicate: ["scrollableView"], descendants: true }, { propertyName: "scrollableFrozenViewChild", first: true, predicate: ["scrollableFrozenView"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            data-scrollselectors=".p-treetable-scrollable-body"
            [ngClass]="{
                'p-treetable p-component': true,
                'p-treetable-hoverable-rows': rowHover || selectionMode === 'single' || selectionMode === 'multiple',
                'p-treetable-auto-layout': autoLayout,
                'p-treetable-resizable': resizableColumns,
                'p-treetable-resizable-fit': resizableColumns && columnResizeMode === 'fit',
                'p-treetable-flex-scrollable': scrollable && scrollHeight === 'flex'
            }"
        >
            <div class="p-treetable-loading" *ngIf="loading && showLoader">
                <div class="p-treetable-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-treetable-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-treetable-loading-icon'" />
                        <span *ngIf="loadingIconTemplate" class="p-treetable-loading-icon">
                            <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <div *ngIf="captionTemplate" class="p-treetable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-top"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div class="p-treetable-wrapper" *ngIf="!scrollable">
                <table role="table" #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead role="rowgroup" class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                    <tbody class="p-treetable-tbody" role="rowgroup" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot class="p-treetable-tfoot" role="rowgroup">
                        <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="p-treetable-scrollable-wrapper" *ngIf="scrollable">
                <div
                    class="p-treetable-scrollable-view p-treetable-frozen-view"
                    *ngIf="frozenColumns || frozenBodyTemplate"
                    #scrollableFrozenView
                    [ttScrollableView]="frozenColumns"
                    [frozen]="true"
                    [ngStyle]="{ width: frozenWidth }"
                    [scrollHeight]="scrollHeight"
                ></div>
                <div class="p-treetable-scrollable-view" #scrollableView [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{ left: frozenWidth, width: 'calc(100% - ' + frozenWidth + ')' }"></div>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-bottom"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>
            <div *ngIf="summaryTemplate" class="p-treetable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="p-treetable-reorder-indicator-up" style="display: none;" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown class="p-treetable-reorder-indicator-down" style="display: none;" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden;flex-shrink:0}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i3.Paginator), selector: "p-paginator", inputs: ["pageLinkSize", "style", "styleClass", "alwaysShow", "dropdownAppendTo", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showFirstLastIcon", "totalRecords", "rows", "rowsPerPageOptions", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "locale", "dropdownItemTemplate", "first"], outputs: ["onPageChange"] }, { kind: "directive", type: i0.forwardRef(() => i1.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i0.forwardRef(() => SpinnerIcon), selector: "SpinnerIcon" }, { kind: "component", type: i0.forwardRef(() => ArrowDownIcon), selector: "ArrowDownIcon" }, { kind: "component", type: i0.forwardRef(() => ArrowUpIcon), selector: "ArrowUpIcon" }, { kind: "component", type: i0.forwardRef(() => TTScrollableView), selector: "[ttScrollableView]", inputs: ["ttScrollableView", "frozen", "scrollHeight"] }, { kind: "component", type: i0.forwardRef(() => TTBody), selector: "[pTreeTableBody]", inputs: ["pTreeTableBody", "pTreeTableBodyTemplate", "frozen", "serializedNodes", "scrollerOptions"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTable, decorators: [{
            type: Component,
            args: [{ selector: 'p-treeTable', template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            data-scrollselectors=".p-treetable-scrollable-body"
            [ngClass]="{
                'p-treetable p-component': true,
                'p-treetable-hoverable-rows': rowHover || selectionMode === 'single' || selectionMode === 'multiple',
                'p-treetable-auto-layout': autoLayout,
                'p-treetable-resizable': resizableColumns,
                'p-treetable-resizable-fit': resizableColumns && columnResizeMode === 'fit',
                'p-treetable-flex-scrollable': scrollable && scrollHeight === 'flex'
            }"
        >
            <div class="p-treetable-loading" *ngIf="loading && showLoader">
                <div class="p-treetable-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-treetable-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-treetable-loading-icon'" />
                        <span *ngIf="loadingIconTemplate" class="p-treetable-loading-icon">
                            <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <div *ngIf="captionTemplate" class="p-treetable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-top"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div class="p-treetable-wrapper" *ngIf="!scrollable">
                <table role="table" #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead role="rowgroup" class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                    <tbody class="p-treetable-tbody" role="rowgroup" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot class="p-treetable-tfoot" role="rowgroup">
                        <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="p-treetable-scrollable-wrapper" *ngIf="scrollable">
                <div
                    class="p-treetable-scrollable-view p-treetable-frozen-view"
                    *ngIf="frozenColumns || frozenBodyTemplate"
                    #scrollableFrozenView
                    [ttScrollableView]="frozenColumns"
                    [frozen]="true"
                    [ngStyle]="{ width: frozenWidth }"
                    [scrollHeight]="scrollHeight"
                ></div>
                <div class="p-treetable-scrollable-view" #scrollableView [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{ left: frozenWidth, width: 'calc(100% - ' + frozenWidth + ')' }"></div>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-bottom"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>
            <div *ngIf="summaryTemplate" class="p-treetable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="p-treetable-reorder-indicator-up" style="display: none;" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown class="p-treetable-reorder-indicator-down" style="display: none;" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `, providers: [TreeTableService], encapsulation: ViewEncapsulation.None, host: {
                        class: 'p-element'
                    }, styles: ["@layer primeng{.p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden;flex-shrink:0}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: TreeTableService }, { type: i1.FilterService }], propDecorators: { columns: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], tableStyle: [{
                type: Input
            }], tableStyleClass: [{
                type: Input
            }], autoLayout: [{
                type: Input
            }], lazy: [{
                type: Input
            }], lazyLoadOnInit: [{
                type: Input
            }], paginator: [{
                type: Input
            }], rows: [{
                type: Input
            }], first: [{
                type: Input
            }], pageLinks: [{
                type: Input
            }], rowsPerPageOptions: [{
                type: Input
            }], alwaysShowPaginator: [{
                type: Input
            }], paginatorPosition: [{
                type: Input
            }], paginatorStyleClass: [{
                type: Input
            }], paginatorDropdownAppendTo: [{
                type: Input
            }], currentPageReportTemplate: [{
                type: Input
            }], showCurrentPageReport: [{
                type: Input
            }], showJumpToPageDropdown: [{
                type: Input
            }], showFirstLastIcon: [{
                type: Input
            }], showPageLinks: [{
                type: Input
            }], defaultSortOrder: [{
                type: Input
            }], sortMode: [{
                type: Input
            }], resetPageOnSort: [{
                type: Input
            }], customSort: [{
                type: Input
            }], selectionMode: [{
                type: Input
            }], contextMenuSelection: [{
                type: Input
            }], contextMenuSelectionMode: [{
                type: Input
            }], dataKey: [{
                type: Input
            }], metaKeySelection: [{
                type: Input
            }], compareSelectionBy: [{
                type: Input
            }], rowHover: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingIcon: [{
                type: Input
            }], showLoader: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], scrollHeight: [{
                type: Input
            }], virtualScroll: [{
                type: Input
            }], virtualScrollItemSize: [{
                type: Input
            }], virtualScrollOptions: [{
                type: Input
            }], virtualScrollDelay: [{
                type: Input
            }], frozenWidth: [{
                type: Input
            }], frozenColumns: [{
                type: Input
            }], resizableColumns: [{
                type: Input
            }], columnResizeMode: [{
                type: Input
            }], reorderableColumns: [{
                type: Input
            }], contextMenu: [{
                type: Input
            }], rowTrackBy: [{
                type: Input
            }], filters: [{
                type: Input
            }], globalFilterFields: [{
                type: Input
            }], filterDelay: [{
                type: Input
            }], filterMode: [{
                type: Input
            }], filterLocale: [{
                type: Input
            }], paginatorLocale: [{
                type: Input
            }], totalRecords: [{
                type: Input
            }], sortField: [{
                type: Input
            }], sortOrder: [{
                type: Input
            }], multiSortMeta: [{
                type: Input
            }], selection: [{
                type: Input
            }], value: [{
                type: Input
            }], virtualRowHeight: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], contextMenuSelectionChange: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onNodeExpand: [{
                type: Output
            }], onNodeCollapse: [{
                type: Output
            }], onPage: [{
                type: Output
            }], onSort: [{
                type: Output
            }], onLazyLoad: [{
                type: Output
            }], sortFunction: [{
                type: Output
            }], onColResize: [{
                type: Output
            }], onColReorder: [{
                type: Output
            }], onNodeSelect: [{
                type: Output
            }], onNodeUnselect: [{
                type: Output
            }], onContextMenuSelect: [{
                type: Output
            }], onHeaderCheckboxToggle: [{
                type: Output
            }], onEditInit: [{
                type: Output
            }], onEditComplete: [{
                type: Output
            }], onEditCancel: [{
                type: Output
            }], containerViewChild: [{
                type: ViewChild,
                args: ['container']
            }], resizeHelperViewChild: [{
                type: ViewChild,
                args: ['resizeHelper']
            }], reorderIndicatorUpViewChild: [{
                type: ViewChild,
                args: ['reorderIndicatorUp']
            }], reorderIndicatorDownViewChild: [{
                type: ViewChild,
                args: ['reorderIndicatorDown']
            }], tableViewChild: [{
                type: ViewChild,
                args: ['table']
            }], scrollableViewChild: [{
                type: ViewChild,
                args: ['scrollableView']
            }], scrollableFrozenViewChild: [{
                type: ViewChild,
                args: ['scrollableFrozenView']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class TTBody {
    tt;
    treeTableService;
    cd;
    columns;
    template;
    frozen;
    serializedNodes;
    scrollerOptions;
    subscription;
    constructor(tt, treeTableService, cd) {
        this.tt = tt;
        this.treeTableService = treeTableService;
        this.cd = cd;
        this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
            if (this.tt.virtualScroll) {
                this.cd.detectChanges();
            }
        });
    }
    getScrollerOption(option, options) {
        if (this.tt.virtualScroll) {
            options = options || this.scrollerOptions;
            return options ? options[option] : null;
        }
        return null;
    }
    getRowIndex(rowIndex) {
        const getItemOptions = this.getScrollerOption('getItemOptions');
        return getItemOptions ? getItemOptions(rowIndex).index : rowIndex;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTBody, deps: [{ token: TreeTable }, { token: TreeTableService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TTBody, selector: "[pTreeTableBody]", inputs: { columns: ["pTreeTableBody", "columns"], template: ["pTreeTableBodyTemplate", "template"], frozen: "frozen", serializedNodes: "serializedNodes", scrollerOptions: "scrollerOptions" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="serializedNodes || tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
            <ng-container *ngIf="serializedNode.visible">
                <ng-container *ngTemplateOutlet="template; context: { $implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns }"></ng-container>
            </ng-container>
        </ng-template>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTBody, decorators: [{
            type: Component,
            args: [{
                    selector: '[pTreeTableBody]',
                    template: `
        <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="serializedNodes || tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
            <ng-container *ngIf="serializedNode.visible">
                <ng-container *ngTemplateOutlet="template; context: { $implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns }"></ng-container>
            </ng-container>
        </ng-template>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TreeTableService }, { type: i0.ChangeDetectorRef }], propDecorators: { columns: [{
                type: Input,
                args: ['pTreeTableBody']
            }], template: [{
                type: Input,
                args: ['pTreeTableBodyTemplate']
            }], frozen: [{
                type: Input
            }], serializedNodes: [{
                type: Input
            }], scrollerOptions: [{
                type: Input
            }] } });
export class TTScrollableView {
    platformId;
    renderer;
    tt;
    el;
    zone;
    columns;
    frozen;
    scrollHeaderViewChild;
    scrollHeaderBoxViewChild;
    scrollBodyViewChild;
    scrollTableViewChild;
    scrollLoadingTableViewChild;
    scrollFooterViewChild;
    scrollFooterBoxViewChild;
    scrollableAlignerViewChild;
    scroller;
    headerScrollListener;
    bodyScrollListener;
    footerScrollListener;
    frozenSiblingBody;
    totalRecordsSubscription;
    _scrollHeight;
    preventBodyScrollPropagation;
    get scrollHeight() {
        return this._scrollHeight;
    }
    set scrollHeight(val) {
        this._scrollHeight = val;
        if (val != null && (val.includes('%') || val.includes('calc'))) {
            console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
        }
    }
    constructor(platformId, renderer, tt, el, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.frozen) {
                if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
                    DomHandler.addClass(this.el.nativeElement, 'p-treetable-unfrozen-view');
                }
                let frozenView = this.el.nativeElement.previousElementSibling;
                if (frozenView) {
                    if (this.tt.virtualScroll)
                        this.frozenSiblingBody = DomHandler.findSingle(frozenView, '.p-scroller-viewport');
                    else
                        this.frozenSiblingBody = DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
                }
                let scrollBarWidth = DomHandler.calculateScrollbarWidth();
                this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
                if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                    this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
                }
            }
            else {
                if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
                    this.scrollableAlignerViewChild.nativeElement.style.height = DomHandler.calculateScrollbarHeight() + 'px';
                }
            }
            this.bindEvents();
        }
    }
    bindEvents() {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                    this.headerScrollListener = this.renderer.listen(this.scrollHeaderBoxViewChild?.nativeElement, 'scroll', this.onHeaderScroll.bind(this));
                }
                if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                    this.footerScrollListener = this.renderer.listen(this.scrollFooterViewChild.nativeElement, 'scroll', this.onFooterScroll.bind(this));
                }
                if (!this.frozen) {
                    if (this.tt.virtualScroll) {
                        this.bodyScrollListener = this.renderer.listen((this.scroller?.getElementRef()).nativeElement, 'scroll', this.onBodyScroll.bind(this));
                    }
                    else {
                        this.bodyScrollListener = this.renderer.listen(this.scrollBodyViewChild?.nativeElement, 'scroll', this.onBodyScroll.bind(this));
                    }
                }
            });
        }
    }
    unbindEvents() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                if (this.headerScrollListener) {
                    this.headerScrollListener();
                    this.headerScrollListener = null;
                }
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                if (this.footerScrollListener) {
                    this.footerScrollListener();
                    this.footerScrollListener = null;
                }
            }
            if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
                if (this.bodyScrollListener) {
                    this.bodyScrollListener();
                    this.bodyScrollListener = null;
                }
            }
            if (this.scroller && this.scroller.getElementRef()) {
                if (this.bodyScrollListener) {
                    this.bodyScrollListener();
                    this.bodyScrollListener = null;
                }
            }
        }
    }
    onHeaderScroll() {
        const scrollLeft = this.scrollHeaderViewChild?.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    }
    onFooterScroll() {
        const scrollLeft = this.scrollFooterViewChild?.nativeElement.scrollLeft;
        this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
        }
        this.preventBodyScrollPropagation = true;
    }
    onBodyScroll(event) {
        if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
        }
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = event.target.scrollTop;
        }
    }
    scrollToVirtualIndex(index) {
        if (this.scroller) {
            this.scroller.scrollToIndex(index);
        }
    }
    scrollTo(options) {
        if (this.scroller) {
            this.scroller.scrollTo(options);
        }
        else {
            if (this.scrollBodyViewChild?.nativeElement.scrollTo) {
                this.scrollBodyViewChild.nativeElement.scrollTo(options);
            }
            else {
                this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
                this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
            }
        }
    }
    ngOnDestroy() {
        this.unbindEvents();
        this.frozenSiblingBody = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTScrollableView, deps: [{ token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: TreeTable }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TTScrollableView, selector: "[ttScrollableView]", inputs: { columns: ["ttScrollableView", "columns"], frozen: "frozen", scrollHeight: "scrollHeight" }, host: { classAttribute: "p-element" }, viewQueries: [{ propertyName: "scrollHeaderViewChild", first: true, predicate: ["scrollHeader"], descendants: true }, { propertyName: "scrollHeaderBoxViewChild", first: true, predicate: ["scrollHeaderBox"], descendants: true }, { propertyName: "scrollBodyViewChild", first: true, predicate: ["scrollBody"], descendants: true }, { propertyName: "scrollTableViewChild", first: true, predicate: ["scrollTable"], descendants: true }, { propertyName: "scrollLoadingTableViewChild", first: true, predicate: ["loadingTable"], descendants: true }, { propertyName: "scrollFooterViewChild", first: true, predicate: ["scrollFooter"], descendants: true }, { propertyName: "scrollFooterBoxViewChild", first: true, predicate: ["scrollFooterBox"], descendants: true }, { propertyName: "scrollableAlignerViewChild", first: true, predicate: ["scrollableAligner"], descendants: true }, { propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }], ngImport: i0, template: `
        <div #scrollHeader class="p-treetable-scrollable-header">
            <div #scrollHeaderBox class="p-treetable-scrollable-header-box">
                <table class="p-treetable-scrollable-header-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead role="rowgroup" class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate || tt.headerTemplate : tt.headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                </table>
            </div>
        </div>

        <p-scroller
            *ngIf="tt.virtualScroll"
            #scroller
            [items]="tt.serializedValue"
            styleClass="p-treetable-scrollable-body"
            [style]="{ height: tt.scrollHeight !== 'flex' ? tt.scrollHeight : undefined }"
            [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
            [itemSize]="tt.virtualScrollItemSize || tt._virtualRowHeight"
            [lazy]="tt.lazy"
            (onLazyLoad)="tt.onLazyItemLoad($event)"
            [options]="tt.virtualScrollOptions"
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
        <ng-container *ngIf="!tt.virtualScroll">
            <div #scrollBody class="p-treetable-scrollable-body" [ngStyle]="{ 'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined }">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: serializedValue, options: {} }"></ng-container>
            </div>
        </ng-container>

        <ng-template #buildInItems let-items let-scrollerOptions="options">
            <table role="table" #scrollTable [class]="tt.tableStyleClass" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="tt.tableStyle" [style]="scrollerOptions.contentStyle">
                <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                <tbody role="rowgroup" class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate || tt.bodyTemplate : tt.bodyTemplate" [serializedNodes]="items" [frozen]="frozen"></tbody>
            </table>
            <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
        </ng-template>

        <div #scrollFooter *ngIf="tt.footerTemplate" class="p-treetable-scrollable-footer">
            <div #scrollFooterBox class="p-treetable-scrollable-footer-box">
                <table class="p-treetable-scrollable-footer-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <tfoot role="rowgroup" class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate || tt.footerTemplate : tt.footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i4.Scroller, selector: "p-scroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }, { kind: "component", type: TTBody, selector: "[pTreeTableBody]", inputs: ["pTreeTableBody", "pTreeTableBodyTemplate", "frozen", "serializedNodes", "scrollerOptions"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTScrollableView, decorators: [{
            type: Component,
            args: [{
                    selector: '[ttScrollableView]',
                    template: `
        <div #scrollHeader class="p-treetable-scrollable-header">
            <div #scrollHeaderBox class="p-treetable-scrollable-header-box">
                <table class="p-treetable-scrollable-header-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead role="rowgroup" class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate || tt.headerTemplate : tt.headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                </table>
            </div>
        </div>

        <p-scroller
            *ngIf="tt.virtualScroll"
            #scroller
            [items]="tt.serializedValue"
            styleClass="p-treetable-scrollable-body"
            [style]="{ height: tt.scrollHeight !== 'flex' ? tt.scrollHeight : undefined }"
            [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
            [itemSize]="tt.virtualScrollItemSize || tt._virtualRowHeight"
            [lazy]="tt.lazy"
            (onLazyLoad)="tt.onLazyItemLoad($event)"
            [options]="tt.virtualScrollOptions"
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
        <ng-container *ngIf="!tt.virtualScroll">
            <div #scrollBody class="p-treetable-scrollable-body" [ngStyle]="{ 'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined }">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: serializedValue, options: {} }"></ng-container>
            </div>
        </ng-container>

        <ng-template #buildInItems let-items let-scrollerOptions="options">
            <table role="table" #scrollTable [class]="tt.tableStyleClass" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="tt.tableStyle" [style]="scrollerOptions.contentStyle">
                <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                <tbody role="rowgroup" class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate || tt.bodyTemplate : tt.bodyTemplate" [serializedNodes]="items" [frozen]="frozen"></tbody>
            </table>
            <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
        </ng-template>

        <div #scrollFooter *ngIf="tt.footerTemplate" class="p-treetable-scrollable-footer">
            <div #scrollFooterBox class="p-treetable-scrollable-footer-box">
                <table class="p-treetable-scrollable-footer-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <tfoot role="rowgroup" class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate || tt.footerTemplate : tt.footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: TreeTable }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { columns: [{
                type: Input,
                args: ['ttScrollableView']
            }], frozen: [{
                type: Input
            }], scrollHeaderViewChild: [{
                type: ViewChild,
                args: ['scrollHeader']
            }], scrollHeaderBoxViewChild: [{
                type: ViewChild,
                args: ['scrollHeaderBox']
            }], scrollBodyViewChild: [{
                type: ViewChild,
                args: ['scrollBody']
            }], scrollTableViewChild: [{
                type: ViewChild,
                args: ['scrollTable']
            }], scrollLoadingTableViewChild: [{
                type: ViewChild,
                args: ['loadingTable']
            }], scrollFooterViewChild: [{
                type: ViewChild,
                args: ['scrollFooter']
            }], scrollFooterBoxViewChild: [{
                type: ViewChild,
                args: ['scrollFooterBox']
            }], scrollableAlignerViewChild: [{
                type: ViewChild,
                args: ['scrollableAligner']
            }], scroller: [{
                type: ViewChild,
                args: ['scroller']
            }], scrollHeight: [{
                type: Input
            }] } });
export class TTSortableColumn {
    tt;
    field;
    ttSortableColumnDisabled;
    sorted;
    subscription;
    get ariaSorted() {
        if (this.sorted && this.tt.sortOrder < 0)
            return 'descending';
        else if (this.sorted && this.tt.sortOrder > 0)
            return 'ascending';
        else
            return 'none';
    }
    constructor(tt) {
        this.tt = tt;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.sortSource$.subscribe((sortMeta) => {
                this.updateSortState();
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    }
    updateSortState() {
        this.sorted = this.tt.isSorted(this.field);
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.tt.sort({
                originalEvent: event,
                field: this.field
            });
            DomHandler.clearSelection();
        }
    }
    onEnterKey(event) {
        this.onClick(event);
    }
    isEnabled() {
        return this.ttSortableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSortableColumn, deps: [{ token: TreeTable }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTSortableColumn, selector: "[ttSortableColumn]", inputs: { field: ["ttSortableColumn", "field"], ttSortableColumnDisabled: "ttSortableColumnDisabled" }, host: { listeners: { "click": "onClick($event)", "keydown.enter": "onEnterKey($event)" }, properties: { "class.p-sortable-column": "isEnabled()", "class.p-highlight": "sorted", "attr.tabindex": "isEnabled() ? \"0\" : null", "attr.role": "\"columnheader\"", "attr.aria-sort": "ariaSorted" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSortableColumn, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttSortableColumn]',
                    host: {
                        class: 'p-element',
                        '[class.p-sortable-column]': 'isEnabled()',
                        '[class.p-highlight]': 'sorted',
                        '[attr.tabindex]': 'isEnabled() ? "0" : null',
                        '[attr.role]': '"columnheader"',
                        '[attr.aria-sort]': 'ariaSorted'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }], propDecorators: { field: [{
                type: Input,
                args: ['ttSortableColumn']
            }], ttSortableColumnDisabled: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onEnterKey: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }] } });
export class TTSortIcon {
    tt;
    cd;
    field;
    ariaLabelDesc;
    ariaLabelAsc;
    subscription;
    sortOrder;
    constructor(tt, cd) {
        this.tt = tt;
        this.cd = cd;
        this.subscription = this.tt.tableService.sortSource$.subscribe((sortMeta) => {
            this.updateSortState();
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
        this.updateSortState();
    }
    onClick(event) {
        event.preventDefault();
    }
    updateSortState() {
        if (this.tt.sortMode === 'single') {
            this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
        }
        else if (this.tt.sortMode === 'multiple') {
            let sortMeta = this.tt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSortIcon, deps: [{ token: TreeTable }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TTSortIcon, selector: "p-treeTableSortIcon", inputs: { field: "field", ariaLabelDesc: "ariaLabelDesc", ariaLabelAsc: "ariaLabelAsc" }, host: { classAttribute: "p-element" }, ngImport: i0, template: ` <ng-container *ngIf="!tt.sortIconTemplate">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0" />
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1" />
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="tt.sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="tt.sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>`, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i0.forwardRef(() => SortAltIcon), selector: "SortAltIcon" }, { kind: "component", type: i0.forwardRef(() => SortAmountUpAltIcon), selector: "SortAmountUpAltIcon" }, { kind: "component", type: i0.forwardRef(() => SortAmountDownIcon), selector: "SortAmountDownIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSortIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-treeTableSortIcon',
                    template: ` <ng-container *ngIf="!tt.sortIconTemplate">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0" />
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1" />
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="tt.sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="tt.sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>`,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: i0.ChangeDetectorRef }], propDecorators: { field: [{
                type: Input
            }], ariaLabelDesc: [{
                type: Input
            }], ariaLabelAsc: [{
                type: Input
            }] } });
export class TTResizableColumn {
    document;
    platformId;
    renderer;
    tt;
    el;
    zone;
    ttResizableColumnDisabled;
    resizer;
    resizerMouseDownListener;
    documentMouseMoveListener;
    documentMouseUpListener;
    constructor(document, platformId, renderer, tt, el, zone) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.isEnabled()) {
                DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
                this.resizer = this.renderer.createElement('span');
                this.renderer.addClass(this.resizer, 'p-column-resizer');
                this.renderer.appendChild(this.el.nativeElement, this.resizer);
                this.zone.runOutsideAngular(() => {
                    this.resizerMouseDownListener = this.renderer.listen(this.resizer, 'mousedown', this.onMouseDown.bind(this));
                });
            }
        }
    }
    bindDocumentEvents() {
        this.zone.runOutsideAngular(() => {
            this.documentMouseMoveListener = this.renderer.listen(this.document, 'mousemove', this.onDocumentMouseMove.bind(this));
            this.documentMouseUpListener = this.renderer.listen(this.document, 'mouseup', this.onDocumentMouseUp.bind(this));
        });
    }
    unbindDocumentEvents() {
        if (this.documentMouseMoveListener) {
            this.documentMouseMoveListener();
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            this.documentMouseUpListener();
            this.documentMouseUpListener = null;
        }
    }
    onMouseDown(event) {
        this.tt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    }
    onDocumentMouseMove(event) {
        this.tt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
        this.tt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    }
    isEnabled() {
        return this.ttResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
        if (this.resizerMouseDownListener) {
            this.resizerMouseDownListener();
            this.resizerMouseDownListener = null;
        }
        this.unbindDocumentEvents();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTResizableColumn, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: TreeTable }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTResizableColumn, selector: "[ttResizableColumn]", inputs: { ttResizableColumnDisabled: "ttResizableColumnDisabled" }, host: { classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTResizableColumn, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttResizableColumn]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: TreeTable }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { ttResizableColumnDisabled: [{
                type: Input
            }] } });
export class TTReorderableColumn {
    document;
    platformId;
    renderer;
    tt;
    el;
    zone;
    ttReorderableColumnDisabled;
    dragStartListener;
    dragOverListener;
    dragEnterListener;
    dragLeaveListener;
    mouseDownListener;
    constructor(document, platformId, renderer, tt, el, zone) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    }
    bindEvents() {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
                this.dragStartListener = this.renderer.listen(this.el.nativeElement, 'dragstart', this.onDragStart.bind(this));
                this.dragOverListener = this.renderer.listen(this.el.nativeElement, 'dragover', this.onDragEnter.bind(this));
                this.dragEnterListener = this.renderer.listen(this.el.nativeElement, 'dragenter', this.onDragEnter.bind(this));
                this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, 'dragleave', this.onDragLeave.bind(this));
            });
        }
    }
    unbindEvents() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.mouseDownListener) {
                this.mouseDownListener();
                this.mouseDownListener = null;
            }
            if (this.dragOverListener) {
                this.dragOverListener();
                this.dragOverListener = null;
            }
            if (this.dragEnterListener) {
                this.dragEnterListener();
                this.dragEnterListener = null;
            }
            if (this.dragLeaveListener) {
                this.dragLeaveListener();
                this.dragLeaveListener = null;
            }
        }
    }
    onMouseDown(event) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    }
    onDragStart(event) {
        this.tt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDragEnter(event) {
        this.tt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
        this.tt.onColumnDragLeave(event);
    }
    onDrop(event) {
        if (this.isEnabled()) {
            this.tt.onColumnDrop(event, this.el.nativeElement);
        }
    }
    isEnabled() {
        return this.ttReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
        this.unbindEvents();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTReorderableColumn, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: TreeTable }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTReorderableColumn, selector: "[ttReorderableColumn]", inputs: { ttReorderableColumnDisabled: "ttReorderableColumnDisabled" }, host: { listeners: { "drop": "onDrop($event)" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTReorderableColumn, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttReorderableColumn]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: TreeTable }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { ttReorderableColumnDisabled: [{
                type: Input
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });
export class TTSelectableRow {
    tt;
    tableService;
    rowNode;
    ttSelectableRowDisabled;
    selected;
    subscription;
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.tt.isSelected(this.rowNode.node);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.handleRowClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
    }
    onKeyDown(event) {
        switch (event.code) {
            case 'Enter':
            case 'Space':
                this.onEnterKey(event);
                break;
            default:
                break;
        }
    }
    onTouchEnd(event) {
        if (this.isEnabled()) {
            this.tt.handleRowTouchEnd(event);
        }
    }
    onEnterKey(event) {
        if (this.tt.selectionMode === 'checkbox') {
            this.tt.toggleNodeWithCheckbox({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
        else {
            this.onClick(event);
        }
        event.preventDefault();
    }
    isEnabled() {
        return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSelectableRow, deps: [{ token: TreeTable }, { token: TreeTableService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTSelectableRow, selector: "[ttSelectableRow]", inputs: { rowNode: ["ttSelectableRow", "rowNode"], ttSelectableRowDisabled: "ttSelectableRowDisabled" }, host: { listeners: { "click": "onClick($event)", "keydown": "onKeyDown($event)", "touchend": "onTouchEnd($event)" }, properties: { "class.p-highlight": "selected", "attr.data-p-highlight": "selected", "attr.aria-checked": "selected" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSelectableRow, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttSelectableRow]',
                    host: {
                        class: 'p-element',
                        '[class.p-highlight]': 'selected',
                        '[attr.data-p-highlight]': 'selected',
                        '[attr.aria-checked]': 'selected'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TreeTableService }], propDecorators: { rowNode: [{
                type: Input,
                args: ['ttSelectableRow']
            }], ttSelectableRowDisabled: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onTouchEnd: [{
                type: HostListener,
                args: ['touchend', ['$event']]
            }] } });
export class TTSelectableRowDblClick {
    tt;
    tableService;
    rowNode;
    ttSelectableRowDisabled;
    selected;
    subscription;
    constructor(tt, tableService) {
        this.tt = tt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
                this.selected = this.tt.isSelected(this.rowNode.node);
            });
        }
    }
    ngOnInit() {
        if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.handleRowClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
    }
    isEnabled() {
        return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSelectableRowDblClick, deps: [{ token: TreeTable }, { token: TreeTableService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTSelectableRowDblClick, selector: "[ttSelectableRowDblClick]", inputs: { rowNode: ["ttSelectableRowDblClick", "rowNode"], ttSelectableRowDisabled: "ttSelectableRowDisabled" }, host: { listeners: { "dblclick": "onClick($event)" }, properties: { "class.p-highlight": "selected" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTSelectableRowDblClick, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttSelectableRowDblClick]',
                    host: {
                        class: 'p-element',
                        '[class.p-highlight]': 'selected'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TreeTableService }], propDecorators: { rowNode: [{
                type: Input,
                args: ['ttSelectableRowDblClick']
            }], ttSelectableRowDisabled: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['dblclick', ['$event']]
            }] } });
export class TTContextMenuRow {
    tt;
    tableService;
    el;
    rowNode;
    ttContextMenuRowDisabled;
    selected;
    subscription;
    constructor(tt, tableService, el) {
        this.tt = tt;
        this.tableService = tableService;
        this.el = el;
        if (this.isEnabled()) {
            this.subscription = this.tt.tableService.contextMenuSource$.subscribe((node) => {
                this.selected = this.tt.equals(this.rowNode.node, node);
            });
        }
    }
    onContextMenu(event) {
        if (this.isEnabled()) {
            this.tt.handleRowRightClick({
                originalEvent: event,
                rowNode: this.rowNode
            });
            this.el.nativeElement.focus();
            event.preventDefault();
        }
    }
    isEnabled() {
        return this.ttContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTContextMenuRow, deps: [{ token: TreeTable }, { token: TreeTableService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTContextMenuRow, selector: "[ttContextMenuRow]", inputs: { rowNode: ["ttContextMenuRow", "rowNode"], ttContextMenuRowDisabled: "ttContextMenuRowDisabled" }, host: { listeners: { "contextmenu": "onContextMenu($event)" }, properties: { "class.p-highlight-contextmenu": "selected", "attr.tabindex": "isEnabled() ? 0 : undefined" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTContextMenuRow, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttContextMenuRow]',
                    host: {
                        class: 'p-element',
                        '[class.p-highlight-contextmenu]': 'selected',
                        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TreeTableService }, { type: i0.ElementRef }], propDecorators: { rowNode: [{
                type: Input,
                args: ['ttContextMenuRow']
            }], ttContextMenuRowDisabled: [{
                type: Input
            }], onContextMenu: [{
                type: HostListener,
                args: ['contextmenu', ['$event']]
            }] } });
export class TTCheckbox {
    tt;
    tableService;
    cd;
    disabled;
    rowNode;
    checked;
    focused;
    subscription;
    constructor(tt, tableService, cd) {
        this.tt = tt;
        this.tableService = tableService;
        this.cd = cd;
        this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.tt.isSelected(this.rowNode.node);
            this.cd.markForCheck();
        });
    }
    ngOnInit() {
        this.checked = this.tt.isSelected(this.rowNode.node);
    }
    onClick(event) {
        if (!this.disabled) {
            this.tt.toggleNodeWithCheckbox({
                originalEvent: event,
                rowNode: this.rowNode
            });
        }
        DomHandler.clearSelection();
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTCheckbox, deps: [{ token: TreeTable }, { token: TreeTableService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TTCheckbox, selector: "p-treeTableCheckbox", inputs: { disabled: "disabled", rowNode: ["value", "rowNode"] }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" tabindex="-1" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-indeterminate': rowNode.node.partialSelected, 'p-disabled': disabled }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.checkboxIconTemplate">
                    <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="checked" />
                    <MinusIcon [styleClass]="'p-checkbox-icon'" *ngIf="rowNode.node.partialSelected" />
                </ng-container>
                <span *ngIf="tt.checkboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.checkboxIconTemplate; context: { $implicit: checked, partialSelected: rowNode.node.partialSelected }"></ng-template>
                </span>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }, { kind: "component", type: i0.forwardRef(() => MinusIcon), selector: "MinusIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-treeTableCheckbox',
                    template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" tabindex="-1" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-indeterminate': rowNode.node.partialSelected, 'p-disabled': disabled }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.checkboxIconTemplate">
                    <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="checked" />
                    <MinusIcon [styleClass]="'p-checkbox-icon'" *ngIf="rowNode.node.partialSelected" />
                </ng-container>
                <span *ngIf="tt.checkboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.checkboxIconTemplate; context: { $implicit: checked, partialSelected: rowNode.node.partialSelected }"></ng-template>
                </span>
            </div>
        </div>
    `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TreeTableService }, { type: i0.ChangeDetectorRef }], propDecorators: { disabled: [{
                type: Input
            }], rowNode: [{
                type: Input,
                args: ['value']
            }] } });
export class TTHeaderCheckbox {
    tt;
    tableService;
    cd;
    boxViewChild;
    checked;
    focused;
    disabled;
    selectionChangeSubscription;
    valueChangeSubscription;
    constructor(tt, tableService, cd) {
        this.tt = tt;
        this.tableService = tableService;
        this.cd = cd;
        this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
            this.checked = this.updateCheckedState();
        });
    }
    ngOnInit() {
        this.checked = this.updateCheckedState();
    }
    onClick(event, checked) {
        if (this.tt.value && this.tt.value.length > 0) {
            this.tt.toggleNodesWithCheckbox(event, !checked);
        }
        DomHandler.clearSelection();
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    ngOnDestroy() {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
    updateCheckedState() {
        this.cd.markForCheck();
        let checked;
        const data = this.tt.filteredNodes || this.tt.value;
        if (data) {
            for (let node of data) {
                if (this.tt.isSelected(node)) {
                    checked = true;
                }
                else {
                    checked = false;
                    break;
                }
            }
        }
        else {
            checked = false;
        }
        return checked;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTHeaderCheckbox, deps: [{ token: TreeTable }, { token: TreeTableService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TTHeaderCheckbox, selector: "p-treeTableHeaderCheckbox", host: { classAttribute: "p-element" }, viewQueries: [{ propertyName: "boxViewChild", first: true, predicate: ["box"], descendants: true }], ngImport: i0, template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event, cb.checked)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="!tt.value || tt.value.length === 0" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': !tt.value || tt.value.length === 0 }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.headerCheckboxIconTemplate">
                    <CheckIcon *ngIf="checked" [styleClass]="'p-checkbox-icon'" />
                </ng-container>
                <span class="p-checkbox-icon" *ngIf="tt.headerCheckboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </span>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i0.forwardRef(() => CheckIcon), selector: "CheckIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTHeaderCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-treeTableHeaderCheckbox',
                    template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event, cb.checked)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="!tt.value || tt.value.length === 0" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': !tt.value || tt.value.length === 0 }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.headerCheckboxIconTemplate">
                    <CheckIcon *ngIf="checked" [styleClass]="'p-checkbox-icon'" />
                </ng-container>
                <span class="p-checkbox-icon" *ngIf="tt.headerCheckboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </span>
            </div>
        </div>
    `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TreeTableService }, { type: i0.ChangeDetectorRef }], propDecorators: { boxViewChild: [{
                type: ViewChild,
                args: ['box']
            }] } });
export class TTEditableColumn {
    tt;
    el;
    zone;
    data;
    field;
    ttEditableColumnDisabled;
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    ngAfterViewInit() {
        if (this.isEnabled()) {
            DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
        }
    }
    onClick(event) {
        if (this.isEnabled()) {
            this.tt.editingCellClick = true;
            if (this.tt.editingCell) {
                if (this.tt.editingCell !== this.el.nativeElement) {
                    if (!this.tt.isEditingCellValid()) {
                        return;
                    }
                    DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    }
    openCell() {
        this.tt.updateEditingCell(this.el.nativeElement, this.data, this.field);
        DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
        this.tt.onEditInit.emit({ field: this.field, data: this.data });
        this.tt.editingCellClick = true;
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                let focusable = DomHandler.findSingle(this.el.nativeElement, 'input, textarea');
                if (focusable) {
                    focusable.focus();
                }
            }, 50);
        });
    }
    closeEditingCell() {
        DomHandler.removeClass(this.tt.editingCell, 'p-checkbox-icon');
        this.tt.editingCell = null;
        this.tt.unbindDocumentEditListener();
    }
    onKeyDown(event) {
        if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13 && !event.shiftKey) {
                if (this.tt.isEditingCellValid()) {
                    DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                    this.closeEditingCell();
                    this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            //escape
            else if (event.keyCode == 27) {
                if (this.tt.isEditingCellValid()) {
                    DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                    this.closeEditingCell();
                    this.tt.onEditCancel.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            //tab
            else if (event.keyCode == 9) {
                this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    }
    findCell(element) {
        if (element) {
            let cell = element;
            while (cell && !DomHandler.hasClass(cell, 'p-cell-editing')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    }
    moveToPreviousCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            DomHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    moveToNextCell(event) {
        let currentCell = this.findCell(event.target);
        let row = currentCell.parentElement;
        let targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            DomHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    }
    findPreviousEditableColumn(cell) {
        let prevCell = cell.previousElementSibling;
        if (!prevCell) {
            let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (DomHandler.hasClass(prevCell, 'p-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    }
    findNextEditableColumn(cell) {
        let nextCell = cell.nextElementSibling;
        if (!nextCell) {
            let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (DomHandler.hasClass(nextCell, 'p-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    }
    isEnabled() {
        return this.ttEditableColumnDisabled !== true;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTEditableColumn, deps: [{ token: TreeTable }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTEditableColumn, selector: "[ttEditableColumn]", inputs: { data: ["ttEditableColumn", "data"], field: ["ttEditableColumnField", "field"], ttEditableColumnDisabled: "ttEditableColumnDisabled" }, host: { listeners: { "click": "onClick($event)", "keydown": "onKeyDown($event)" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTEditableColumn, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttEditableColumn]',
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { data: [{
                type: Input,
                args: ['ttEditableColumn']
            }], field: [{
                type: Input,
                args: ['ttEditableColumnField']
            }], ttEditableColumnDisabled: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
export class TreeTableCellEditor {
    tt;
    editableColumn;
    templates;
    inputTemplate;
    outputTemplate;
    constructor(tt, editableColumn) {
        this.tt = tt;
        this.editableColumn = editableColumn;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'input':
                    this.inputTemplate = item.template;
                    break;
                case 'output':
                    this.outputTemplate = item.template;
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableCellEditor, deps: [{ token: TreeTable }, { token: TTEditableColumn }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TreeTableCellEditor, selector: "p-treeTableCellEditor", host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableCellEditor, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-treeTableCellEditor',
                    template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: TTEditableColumn }], propDecorators: { templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class TTRow {
    tt;
    el;
    zone;
    get level() {
        return this.rowNode?.['level'] + 1;
    }
    get styleClass() {
        return this.rowNode?.node['styleClass'] || '';
    }
    get expanded() {
        return this.rowNode?.node['expanded'];
    }
    rowNode;
    constructor(tt, el, zone) {
        this.tt = tt;
        this.el = el;
        this.zone = zone;
    }
    onKeyDown(event) {
        switch (event.code) {
            case 'ArrowDown':
                this.onArrowDownKey(event);
                break;
            case 'ArrowUp':
                this.onArrowUpKey(event);
                break;
            case 'ArrowRight':
                this.onArrowRightKey(event);
                break;
            case 'ArrowLeft':
                this.onArrowLeftKey(event);
                break;
            case 'Tab':
                this.onTabKey(event);
                break;
            case 'Home':
                this.onHomeKey(event);
                break;
            case 'End':
                this.onEndKey(event);
                break;
            default:
                break;
        }
    }
    onArrowDownKey(event) {
        let nextRow = this.el?.nativeElement?.nextElementSibling;
        if (nextRow) {
            this.focusRowChange(event.currentTarget, nextRow);
        }
        event.preventDefault();
    }
    onArrowUpKey(event) {
        let prevRow = this.el?.nativeElement?.previousElementSibling;
        if (prevRow) {
            this.focusRowChange(event.currentTarget, prevRow);
        }
        event.preventDefault();
    }
    onArrowRightKey(event) {
        const currentTarget = event.currentTarget;
        const isHiddenIcon = DomHandler.findSingle(currentTarget, 'button').style.visibility === 'hidden';
        if (!isHiddenIcon && !this.expanded && this.rowNode.node['children']) {
            this.expand(event);
            currentTarget.tabIndex = -1;
        }
        event.preventDefault();
    }
    onArrowLeftKey(event) {
        const container = this.tt.containerViewChild?.nativeElement;
        const expandedRows = DomHandler.find(container, '[aria-expanded="true"]');
        const lastExpandedRow = expandedRows[expandedRows.length - 1];
        if (this.expanded) {
            this.collapse(event);
        }
        if (lastExpandedRow) {
            this.tt.toggleRowIndex = DomHandler.index(lastExpandedRow);
        }
        this.restoreFocus();
        event.preventDefault();
    }
    onHomeKey(event) {
        const firstElement = DomHandler.findSingle(this.tt.containerViewChild?.nativeElement, `tr[aria-level="${this.level}"]`);
        firstElement && DomHandler.focus(firstElement);
        event.preventDefault();
    }
    onEndKey(event) {
        const nodes = DomHandler.find(this.tt.containerViewChild?.nativeElement, `tr[aria-level="${this.level}"]`);
        const lastElement = nodes[nodes.length - 1];
        DomHandler.focus(lastElement);
        event.preventDefault();
    }
    onTabKey(event) {
        const rows = this.el.nativeElement ? [...DomHandler.find(this.el.nativeElement.parentNode, 'tr')] : undefined;
        if (rows && ObjectUtils.isNotEmpty(rows)) {
            const hasSelectedRow = rows.some((row) => DomHandler.getAttribute(row, 'data-p-highlight') || row.getAttribute('aria-checked') === 'true');
            rows.forEach((row) => {
                row.tabIndex = -1;
            });
            if (hasSelectedRow) {
                const selectedNodes = rows.filter((node) => DomHandler.getAttribute(node, 'data-p-highlight') || node.getAttribute('aria-checked') === 'true');
                selectedNodes[0].tabIndex = 0;
                return;
            }
            rows[0].tabIndex = 0;
        }
    }
    expand(event) {
        this.tt.toggleRowIndex = DomHandler.index(this.el.nativeElement);
        this.rowNode.node['expanded'] = true;
        this.tt.updateSerializedValue();
        this.tt.tableService.onUIUpdate(this.tt.value);
        this.rowNode.node['children'] ? this.restoreFocus(this.tt.toggleRowIndex + 1) : this.restoreFocus();
        this.tt.onNodeExpand.emit({
            originalEvent: event,
            node: this.rowNode.node
        });
    }
    collapse(event) {
        this.rowNode.node['expanded'] = false;
        this.tt.updateSerializedValue();
        this.tt.tableService.onUIUpdate(this.tt.value);
        this.tt.onNodeCollapse.emit({ originalEvent: event, node: this.rowNode.node });
    }
    focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
        firstFocusableRow.tabIndex = '-1';
        currentFocusedRow.tabIndex = '0';
        DomHandler.focus(currentFocusedRow);
    }
    restoreFocus(index) {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                const container = this.tt.containerViewChild?.nativeElement;
                const row = DomHandler.findSingle(container, '.p-treetable-tbody').children[index || this.tt.toggleRowIndex];
                const rows = [...DomHandler.find(container, 'tr')];
                rows &&
                    rows.forEach((r) => {
                        if (!row.isSameNode(r)) {
                            r.tabIndex = -1;
                        }
                    });
                if (row) {
                    row.tabIndex = 0;
                    row.focus();
                }
            }, 25);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTRow, deps: [{ token: TreeTable }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: TTRow, selector: "[ttRow]", inputs: { rowNode: ["ttRow", "rowNode"] }, host: { listeners: { "keydown": "onKeyDown($event)" }, properties: { "class": "'p-element ' + styleClass", "attr.tabindex": "'0'", "attr.aria-expanded": "expanded", "attr.aria-level": "level", "attr.data-pc-section": "row", "attr.role": "row" }, classAttribute: "p-element" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TTRow, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ttRow]',
                    host: {
                        class: 'p-element',
                        '[class]': `'p-element ' + styleClass`,
                        '[attr.tabindex]': "'0'",
                        '[attr.aria-expanded]': 'expanded',
                        '[attr.aria-level]': 'level',
                        '[attr.data-pc-section]': 'row',
                        '[attr.role]': 'row'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { rowNode: [{
                type: Input,
                args: ['ttRow']
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
export class TreeTableToggler {
    tt;
    config;
    rowNode;
    constructor(tt, config) {
        this.tt = tt;
        this.config = config;
    }
    get toggleButtonAriaLabel() {
        return this.config.translation ? (this.rowNode.expanded ? this.config.translation.aria.collapseRow : this.config.translation.aria.expandRow) : undefined;
    }
    onClick(event) {
        this.rowNode.node.expanded = !this.rowNode.node.expanded;
        if (this.rowNode.node.expanded) {
            this.tt.onNodeExpand.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        else {
            this.tt.onNodeCollapse.emit({
                originalEvent: event,
                node: this.rowNode.node
            });
        }
        this.tt.updateSerializedValue();
        this.tt.tableService.onUIUpdate(this.tt.value);
        event.preventDefault();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableToggler, deps: [{ token: TreeTable }, { token: i1.PrimeNGConfig }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: TreeTableToggler, selector: "p-treeTableToggler", inputs: { rowNode: "rowNode" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <button
            type="button"
            class="p-treetable-toggler p-link"
            (click)="onClick($event)"
            tabindex="-1"
            pRipple
            [style.visibility]="rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'"
            [style.marginLeft]="rowNode.level * 16 + 'px'"
            [attr.data-pc-section]="'rowtoggler'"
            [attr.data-pc-group-section]="'rowactionbutton'"
            [attr.aria-label]="toggleButtonAriaLabel"
        >
            <ng-container *ngIf="!tt.togglerIconTemplate">
                <ChevronDownIcon *ngIf="rowNode.node.expanded" [attr.aria-hidden]="true" />
                <ChevronRightIcon *ngIf="!rowNode.node.expanded" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-template *ngTemplateOutlet="tt.togglerIconTemplate; context: { $implicit: rowNode.node.expanded }"></ng-template>
        </button>
    `, isInline: true, dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i5.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => ChevronDownIcon), selector: "ChevronDownIcon" }, { kind: "component", type: i0.forwardRef(() => ChevronRightIcon), selector: "ChevronRightIcon" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableToggler, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-treeTableToggler',
                    template: `
        <button
            type="button"
            class="p-treetable-toggler p-link"
            (click)="onClick($event)"
            tabindex="-1"
            pRipple
            [style.visibility]="rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'"
            [style.marginLeft]="rowNode.level * 16 + 'px'"
            [attr.data-pc-section]="'rowtoggler'"
            [attr.data-pc-group-section]="'rowactionbutton'"
            [attr.aria-label]="toggleButtonAriaLabel"
        >
            <ng-container *ngIf="!tt.togglerIconTemplate">
                <ChevronDownIcon *ngIf="rowNode.node.expanded" [attr.aria-hidden]="true" />
                <ChevronRightIcon *ngIf="!rowNode.node.expanded" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-template *ngTemplateOutlet="tt.togglerIconTemplate; context: { $implicit: rowNode.node.expanded }"></ng-template>
        </button>
    `,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], ctorParameters: () => [{ type: TreeTable }, { type: i1.PrimeNGConfig }], propDecorators: { rowNode: [{
                type: Input
            }] } });
export class TreeTableModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: TreeTableModule, declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor], imports: [CommonModule, PaginatorModule, RippleModule, ScrollerModule, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon], exports: [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, ScrollerModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableModule, imports: [CommonModule, PaginatorModule, RippleModule, ScrollerModule, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon, SharedModule,
            ScrollerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: TreeTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PaginatorModule, RippleModule, ScrollerModule, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon],
                    exports: [
                        TreeTable,
                        SharedModule,
                        TreeTableToggler,
                        TTSortableColumn,
                        TTSortIcon,
                        TTResizableColumn,
                        TTRow,
                        TTReorderableColumn,
                        TTSelectableRow,
                        TTSelectableRowDblClick,
                        TTContextMenuRow,
                        TTCheckbox,
                        TTHeaderCheckbox,
                        TTEditableColumn,
                        TreeTableCellEditor,
                        ScrollerModule
                    ],
                    declarations: [
                        TreeTable,
                        TreeTableToggler,
                        TTScrollableView,
                        TTBody,
                        TTSortableColumn,
                        TTSortIcon,
                        TTResizableColumn,
                        TTRow,
                        TTReorderableColumn,
                        TTSelectableRow,
                        TTSelectableRowDblClick,
                        TTContextMenuRow,
                        TTCheckbox,
                        TTHeaderCheckbox,
                        TTEditableColumn,
                        TreeTableCellEditor
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3RyZWV0YWJsZS90cmVldGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBR0gsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUVULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUtSLE1BQU0sRUFDTixXQUFXLEVBS1gsU0FBUyxFQUNULGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTZELGFBQWEsRUFBbUIsWUFBWSxFQUFxQyxNQUFNLGFBQWEsQ0FBQztBQUN6SyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1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LGNBQWM7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDVixTQUFTO3dCQUNULGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixNQUFNO3dCQUNOLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixpQkFBaUI7d0JBQ2pCLEtBQUs7d0JBQ0wsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdCxcbiAgICBJbmplY3RhYmxlLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE5nWm9uZSxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUExBVEZPUk1fSUQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFJlbmRlcmVyMixcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJsb2NrYWJsZVVJLCBGaWx0ZXJNZXRhZGF0YSwgRmlsdGVyU2VydmljZSwgUHJpbWVOR0NvbmZpZywgUHJpbWVUZW1wbGF0ZSwgU2Nyb2xsZXJPcHRpb25zLCBTaGFyZWRNb2R1bGUsIFNvcnRNZXRhLCBUcmVlTm9kZSwgVHJlZVRhYmxlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBBcnJvd0Rvd25JY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9hcnJvd2Rvd24nO1xuaW1wb3J0IHsgQXJyb3dVcEljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2Fycm93dXAnO1xuaW1wb3J0IHsgQ2hlY2tJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9jaGVjayc7XG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZXZyb25kb3duJztcbmltcG9ydCB7IENoZXZyb25SaWdodEljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL2NoZXZyb25yaWdodCc7XG5pbXBvcnQgeyBNaW51c0ljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL21pbnVzJztcbmltcG9ydCB7IFNvcnRBbHRJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9zb3J0YWx0JztcbmltcG9ydCB7IFNvcnRBbW91bnREb3duSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvc29ydGFtb3VudGRvd24nO1xuaW1wb3J0IHsgU29ydEFtb3VudFVwQWx0SWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvc29ydGFtb3VudHVwYWx0JztcbmltcG9ydCB7IFNwaW5uZXJJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9zcGlubmVyJztcbmltcG9ydCB7IFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcGFnaW5hdG9yJztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7IFNjcm9sbGVyLCBTY3JvbGxlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc2Nyb2xsZXInO1xuaW1wb3J0IHsgTnVsbGFibGUsIFZvaWRMaXN0ZW5lciB9IGZyb20gJ3ByaW1lbmcvdHMtaGVscGVycyc7XG5pbXBvcnQgeyBPYmplY3RVdGlscyB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICAgIFRyZWVUYWJsZUNvbFJlc2l6ZUV2ZW50LFxuICAgIFRyZWVUYWJsZUNvbHVtblJlb3JkZXJFdmVudCxcbiAgICBUcmVlVGFibGVDb250ZXh0TWVudVNlbGVjdEV2ZW50LFxuICAgIFRyZWVUYWJsZUVkaXRFdmVudCxcbiAgICBUcmVlVGFibGVGaWx0ZXJFdmVudCxcbiAgICBUcmVlVGFibGVGaWx0ZXJPcHRpb25zLFxuICAgIFRyZWVUYWJsZUhlYWRlckNoZWNrYm94VG9nZ2xlRXZlbnQsXG4gICAgVHJlZVRhYmxlTGF6eUxvYWRFdmVudCxcbiAgICBUcmVlVGFibGVOb2RlQ29sbGFwc2VFdmVudCxcbiAgICBUcmVlVGFibGVOb2RlRXhwYW5kRXZlbnQsXG4gICAgVHJlZVRhYmxlTm9kZVVuU2VsZWN0RXZlbnQsXG4gICAgVHJlZVRhYmxlUGFnaW5hdG9yU3RhdGUsXG4gICAgVHJlZVRhYmxlU29ydEV2ZW50XG59IGZyb20gJy4vdHJlZXRhYmxlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNvcnRTb3VyY2UgPSBuZXcgU3ViamVjdDxTb3J0TWV0YSB8IFNvcnRNZXRhW10gfCBudWxsPigpO1xuICAgIHByaXZhdGUgc2VsZWN0aW9uU291cmNlID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIGNvbnRleHRNZW51U291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByaXZhdGUgdWlVcGRhdGVTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJpdmF0ZSB0b3RhbFJlY29yZHNTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBzb3J0U291cmNlJCA9IHRoaXMuc29ydFNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBzZWxlY3Rpb25Tb3VyY2UkID0gdGhpcy5zZWxlY3Rpb25Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgY29udGV4dE1lbnVTb3VyY2UkID0gdGhpcy5jb250ZXh0TWVudVNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICB1aVVwZGF0ZVNvdXJjZSQgPSB0aGlzLnVpVXBkYXRlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRvdGFsUmVjb3Jkc1NvdXJjZSQgPSB0aGlzLnRvdGFsUmVjb3Jkc1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIG9uU29ydChzb3J0TWV0YTogU29ydE1ldGEgfCBTb3J0TWV0YVtdIHwgbnVsbCkge1xuICAgICAgICB0aGlzLnNvcnRTb3VyY2UubmV4dChzb3J0TWV0YSk7XG4gICAgfVxuXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLm5leHQobnVsbCk7XG4gICAgfVxuXG4gICAgb25Db250ZXh0TWVudShub2RlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudVNvdXJjZS5uZXh0KG5vZGUpO1xuICAgIH1cblxuICAgIG9uVUlVcGRhdGUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnVpVXBkYXRlU291cmNlLm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIG9uVG90YWxSZWNvcmRzQ2hhbmdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b3RhbFJlY29yZHNTb3VyY2UubmV4dCh2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBUcmVlVGFibGUgaXMgdXNlZCB0byBkaXNwbGF5IGhpZXJhcmNoaWNhbCBkYXRhIGluIHRhYnVsYXIgZm9ybWF0LlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRyZWVUYWJsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgI2NvbnRhaW5lclxuICAgICAgICAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxuICAgICAgICAgICAgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgZGF0YS1zY3JvbGxzZWxlY3RvcnM9XCIucC10cmVldGFibGUtc2Nyb2xsYWJsZS1ib2R5XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAncC10cmVldGFibGUgcC1jb21wb25lbnQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdwLXRyZWV0YWJsZS1ob3ZlcmFibGUtcm93cyc6IHJvd0hvdmVyIHx8IHNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnIHx8IHNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScsXG4gICAgICAgICAgICAgICAgJ3AtdHJlZXRhYmxlLWF1dG8tbGF5b3V0JzogYXV0b0xheW91dCxcbiAgICAgICAgICAgICAgICAncC10cmVldGFibGUtcmVzaXphYmxlJzogcmVzaXphYmxlQ29sdW1ucyxcbiAgICAgICAgICAgICAgICAncC10cmVldGFibGUtcmVzaXphYmxlLWZpdCc6IHJlc2l6YWJsZUNvbHVtbnMgJiYgY29sdW1uUmVzaXplTW9kZSA9PT0gJ2ZpdCcsXG4gICAgICAgICAgICAgICAgJ3AtdHJlZXRhYmxlLWZsZXgtc2Nyb2xsYWJsZSc6IHNjcm9sbGFibGUgJiYgc2Nyb2xsSGVpZ2h0ID09PSAnZmxleCdcbiAgICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10cmVldGFibGUtbG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZyAmJiBzaG93TG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZXRhYmxlLWxvYWRpbmctb3ZlcmxheSBwLWNvbXBvbmVudC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibG9hZGluZ0ljb25cIiBbY2xhc3NdPVwiJ3AtdHJlZXRhYmxlLWxvYWRpbmctaWNvbiBwaS1zcGluICcgKyBsb2FkaW5nSWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nSWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXJJY29uICpuZ0lmPVwiIWxvYWRpbmdJY29uVGVtcGxhdGVcIiBbc3Bpbl09XCJ0cnVlXCIgW3N0eWxlQ2xhc3NdPVwiJ3AtdHJlZXRhYmxlLWxvYWRpbmctaWNvbidcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLXRyZWV0YWJsZS1sb2FkaW5nLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsb2FkaW5nSWNvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjYXB0aW9uVGVtcGxhdGVcIiBjbGFzcz1cInAtdHJlZXRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjYXB0aW9uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAtcGFnaW5hdG9yXG4gICAgICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICAgICAgW2ZpcnN0XT1cImZpcnN0XCJcbiAgICAgICAgICAgICAgICBbdG90YWxSZWNvcmRzXT1cInRvdGFsUmVjb3Jkc1wiXG4gICAgICAgICAgICAgICAgW3BhZ2VMaW5rU2l6ZV09XCJwYWdlTGlua3NcIlxuICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M9XCJwLXBhZ2luYXRvci10b3BcIlxuICAgICAgICAgICAgICAgIFthbHdheXNTaG93XT1cImFsd2F5c1Nob3dQYWdpbmF0b3JcIlxuICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInBhZ2luYXRvciAmJiAocGFnaW5hdG9yUG9zaXRpb24gPT09ICd0b3AnIHx8IHBhZ2luYXRvclBvc2l0aW9uID09ICdib3RoJylcIlxuICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZUxlZnRdPVwicGFnaW5hdG9yTGVmdFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbdGVtcGxhdGVSaWdodF09XCJwYWdpbmF0b3JSaWdodFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbZHJvcGRvd25BcHBlbmRUb109XCJwYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvXCJcbiAgICAgICAgICAgICAgICBbY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZV09XCJjdXJyZW50UGFnZVJlcG9ydFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbc2hvd0ZpcnN0TGFzdEljb25dPVwic2hvd0ZpcnN0TGFzdEljb25cIlxuICAgICAgICAgICAgICAgIFtkcm9wZG93bkl0ZW1UZW1wbGF0ZV09XCJwYWdpbmF0b3JEcm9wZG93bkl0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3Nob3dDdXJyZW50UGFnZVJlcG9ydF09XCJzaG93Q3VycmVudFBhZ2VSZXBvcnRcIlxuICAgICAgICAgICAgICAgIFtzaG93SnVtcFRvUGFnZURyb3Bkb3duXT1cInNob3dKdW1wVG9QYWdlRHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIFtzaG93UGFnZUxpbmtzXT1cInNob3dQYWdlTGlua3NcIlxuICAgICAgICAgICAgICAgIFtzdHlsZUNsYXNzXT1cInBhZ2luYXRvclN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwicGFnaW5hdG9yTG9jYWxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZmlyc3RwYWdlbGlua2ljb25cIiAqbmdJZj1cInBhZ2luYXRvckZpcnN0UGFnZUxpbmtJY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBhZ2luYXRvckZpcnN0UGFnZUxpbmtJY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cInByZXZpb3VzcGFnZWxpbmtpY29uXCIgKm5nSWY9XCJwYWdpbmF0b3JQcmV2aW91c1BhZ2VMaW5rSWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYWdpbmF0b3JQcmV2aW91c1BhZ2VMaW5rSWNvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJsYXN0cGFnZWxpbmtpY29uXCIgKm5nSWY9XCJwYWdpbmF0b3JMYXN0UGFnZUxpbmtJY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBhZ2luYXRvckxhc3RQYWdlTGlua0ljb25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwibmV4dHBhZ2VsaW5raWNvblwiICpuZ0lmPVwicGFnaW5hdG9yTmV4dFBhZ2VMaW5rSWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYWdpbmF0b3JOZXh0UGFnZUxpbmtJY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLXBhZ2luYXRvcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZXRhYmxlLXdyYXBwZXJcIiAqbmdJZj1cIiFzY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIHJvbGU9XCJ0YWJsZVwiICN0YWJsZSBbbmdDbGFzc109XCJ0YWJsZVN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJ0YWJsZVN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2xHcm91cFRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1ucyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCByb2xlPVwicm93Z3JvdXBcIiBjbGFzcz1cInAtdHJlZXRhYmxlLXRoZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwicC10cmVldGFibGUtdGJvZHlcIiByb2xlPVwicm93Z3JvdXBcIiBbcFRyZWVUYWJsZUJvZHldPVwiY29sdW1uc1wiIFtwVHJlZVRhYmxlQm9keVRlbXBsYXRlXT1cImJvZHlUZW1wbGF0ZVwiPjwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0Zm9vdCBjbGFzcz1cInAtdHJlZXRhYmxlLXRmb290XCIgcm9sZT1cInJvd2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLXdyYXBwZXJcIiAqbmdJZj1cInNjcm9sbGFibGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC10cmVldGFibGUtc2Nyb2xsYWJsZS12aWV3IHAtdHJlZXRhYmxlLWZyb3plbi12aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmcm96ZW5Db2x1bW5zIHx8IGZyb3plbkJvZHlUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICNzY3JvbGxhYmxlRnJvemVuVmlld1xuICAgICAgICAgICAgICAgICAgICBbdHRTY3JvbGxhYmxlVmlld109XCJmcm96ZW5Db2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zyb3plbl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyB3aWR0aDogZnJvemVuV2lkdGggfVwiXG4gICAgICAgICAgICAgICAgICAgIFtzY3JvbGxIZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtdmlld1wiICNzY3JvbGxhYmxlVmlldyBbdHRTY3JvbGxhYmxlVmlld109XCJjb2x1bW5zXCIgW2Zyb3plbl09XCJmYWxzZVwiIFtzY3JvbGxIZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCIgW25nU3R5bGVdPVwieyBsZWZ0OiBmcm96ZW5XaWR0aCwgd2lkdGg6ICdjYWxjKDEwMCUgLSAnICsgZnJvemVuV2lkdGggKyAnKScgfVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvclxuICAgICAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgICAgIFtmaXJzdF09XCJmaXJzdFwiXG4gICAgICAgICAgICAgICAgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIlxuICAgICAgICAgICAgICAgIFtwYWdlTGlua1NpemVdPVwicGFnZUxpbmtzXCJcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzPVwicC1wYWdpbmF0b3ItYm90dG9tXCJcbiAgICAgICAgICAgICAgICBbYWx3YXlzU2hvd109XCJhbHdheXNTaG93UGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbcm93c1BlclBhZ2VPcHRpb25zXT1cInJvd3NQZXJQYWdlT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJwYWdpbmF0b3IgJiYgKHBhZ2luYXRvclBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwYWdpbmF0b3JQb3NpdGlvbiA9PSAnYm90aCcpXCJcbiAgICAgICAgICAgICAgICBbdGVtcGxhdGVMZWZ0XT1cInBhZ2luYXRvckxlZnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3RlbXBsYXRlUmlnaHRdPVwicGFnaW5hdG9yUmlnaHRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW2Ryb3Bkb3duQXBwZW5kVG9dPVwicGFnaW5hdG9yRHJvcGRvd25BcHBlbmRUb1wiXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRQYWdlUmVwb3J0VGVtcGxhdGVdPVwiY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW3Nob3dGaXJzdExhc3RJY29uXT1cInNob3dGaXJzdExhc3RJY29uXCJcbiAgICAgICAgICAgICAgICBbZHJvcGRvd25JdGVtVGVtcGxhdGVdPVwicGFnaW5hdG9yRHJvcGRvd25JdGVtVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtzaG93Q3VycmVudFBhZ2VSZXBvcnRdPVwic2hvd0N1cnJlbnRQYWdlUmVwb3J0XCJcbiAgICAgICAgICAgICAgICBbc2hvd0p1bXBUb1BhZ2VEcm9wZG93bl09XCJzaG93SnVtcFRvUGFnZURyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICBbc2hvd1BhZ2VMaW5rc109XCJzaG93UGFnZUxpbmtzXCJcbiAgICAgICAgICAgICAgICBbc3R5bGVDbGFzc109XCJwYWdpbmF0b3JTdHlsZUNsYXNzXCJcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cInBhZ2luYXRvckxvY2FsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImZpcnN0cGFnZWxpbmtpY29uXCIgKm5nSWY9XCJwYWdpbmF0b3JGaXJzdFBhZ2VMaW5rSWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYWdpbmF0b3JGaXJzdFBhZ2VMaW5rSWNvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJwcmV2aW91c3BhZ2VsaW5raWNvblwiICpuZ0lmPVwicGFnaW5hdG9yUHJldmlvdXNQYWdlTGlua0ljb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGFnaW5hdG9yUHJldmlvdXNQYWdlTGlua0ljb25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwibGFzdHBhZ2VsaW5raWNvblwiICpuZ0lmPVwicGFnaW5hdG9yTGFzdFBhZ2VMaW5rSWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYWdpbmF0b3JMYXN0UGFnZUxpbmtJY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cIm5leHRwYWdlbGlua2ljb25cIiAqbmdJZj1cInBhZ2luYXRvck5leHRQYWdlTGlua0ljb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGFnaW5hdG9yTmV4dFBhZ2VMaW5rSWNvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1wYWdpbmF0b3I+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3VtbWFyeVRlbXBsYXRlXCIgY2xhc3M9XCJwLXRyZWV0YWJsZS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3VtbWFyeVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAjcmVzaXplSGVscGVyIGNsYXNzPVwicC1jb2x1bW4tcmVzaXplci1oZWxwZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiICpuZ0lmPVwicmVzaXphYmxlQ29sdW1uc1wiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gI3Jlb3JkZXJJbmRpY2F0b3JVcCBjbGFzcz1cInAtdHJlZXRhYmxlLXJlb3JkZXItaW5kaWNhdG9yLXVwXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiICpuZ0lmPVwicmVvcmRlcmFibGVDb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPEFycm93RG93bkljb24gKm5nSWY9XCIhcmVvcmRlckluZGljYXRvclVwSWNvblRlbXBsYXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyZW9yZGVySW5kaWNhdG9yVXBJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gI3Jlb3JkZXJJbmRpY2F0b3JEb3duIGNsYXNzPVwicC10cmVldGFibGUtcmVvcmRlci1pbmRpY2F0b3ItZG93blwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiAqbmdJZj1cInJlb3JkZXJhYmxlQ29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxBcnJvd1VwSWNvbiAqbmdJZj1cIiFyZW9yZGVySW5kaWNhdG9yRG93bkljb25UZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVvcmRlckluZGljYXRvckRvd25JY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1RyZWVUYWJsZVNlcnZpY2VdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vdHJlZXRhYmxlLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgQmxvY2thYmxlVUksIE9uQ2hhbmdlcyB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB0byByZXByZXNlbnQgZHluYW1pYyBjb2x1bW5zLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgdGFibGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdGFibGVTdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgdGFibGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdGFibGVTdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgY2VsbCB3aWR0aHMgc2NhbGUgYWNjb3JkaW5nIHRvIHRoZWlyIGNvbnRlbnQgb3Igbm90LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGF1dG9MYXlvdXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBpZiBkYXRhIGlzIGxvYWRlZCBhbmQgaW50ZXJhY3RlZCB3aXRoIGluIGxhenkgbWFubmVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxhenk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGNhbGwgbGF6eSBsb2FkaW5nIG9uIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxhenlMb2FkT25Jbml0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCBhcyB0cnVlLCBlbmFibGVzIHRoZSBwYWdpbmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhZ2luYXRvcjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHBlciBwYWdlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiB0aGUgZmlyc3Qgcm93IHRvIGJlIGRpc3BsYXllZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaXJzdDogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgcGFnZSBsaW5rcyB0byBkaXNwbGF5IGluIHBhZ2luYXRvci5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwYWdlTGlua3M6IG51bWJlciA9IDU7XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgaW50ZWdlci9vYmplY3QgdmFsdWVzIHRvIGRpc3BsYXkgaW5zaWRlIHJvd3MgcGVyIHBhZ2UgZHJvcGRvd24gb2YgcGFnaW5hdG9yXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcm93c1BlclBhZ2VPcHRpb25zOiBhbnlbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNob3cgaXQgZXZlbiB0aGVyZSBpcyBvbmx5IG9uZSBwYWdlLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFsd2F5c1Nob3dQYWdpbmF0b3I6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFBvc2l0aW9uIG9mIHRoZSBwYWdpbmF0b3IuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFnaW5hdG9yUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcbiAgICAvKipcbiAgICAgKiBDdXN0b20gc3R5bGUgY2xhc3MgZm9yIHBhZ2luYXRvclxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHBhZ2luYXRvclN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUYXJnZXQgZWxlbWVudCB0byBhdHRhY2ggdGhlIHBhZ2luYXRvciBkcm9wZG93biBvdmVybGF5LCB2YWxpZCB2YWx1ZXMgYXJlIFwiYm9keVwiIG9yIGEgbG9jYWwgbmctdGVtcGxhdGUgdmFyaWFibGUgb2YgYW5vdGhlciBlbGVtZW50IChub3RlOiB1c2UgYmluZGluZyB3aXRoIGJyYWNrZXRzIGZvciB0ZW1wbGF0ZSB2YXJpYWJsZXMsIGUuZy4gW2FwcGVuZFRvXT1cIm15ZGl2XCIgZm9yIGEgZGl2IGVsZW1lbnQgaGF2aW5nICNteWRpdiBhcyB2YXJpYWJsZSBuYW1lKS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JEcm9wZG93bkFwcGVuZFRvOiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB8IGFueTtcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBvZiB0aGUgY3VycmVudCBwYWdlIHJlcG9ydCBlbGVtZW50LiBBdmFpbGFibGUgcGxhY2Vob2xkZXJzIGFyZSB7Y3VycmVudFBhZ2V9LHt0b3RhbFBhZ2VzfSx7cm93c30se2ZpcnN0fSx7bGFzdH0gYW5kIHt0b3RhbFJlY29yZHN9XG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgY3VycmVudFBhZ2VSZXBvcnRUZW1wbGF0ZTogc3RyaW5nID0gJ3tjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9JztcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgY3VycmVudCBwYWdlIHJlcG9ydC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzaG93Q3VycmVudFBhZ2VSZXBvcnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBkaXNwbGF5IGEgZHJvcGRvd24gdG8gbmF2aWdhdGUgdG8gYW55IHBhZ2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0p1bXBUb1BhZ2VEcm9wZG93bjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIGVuYWJsZWQsIGljb25zIGFyZSBkaXNwbGF5ZWQgb24gcGFnaW5hdG9yIHRvIGdvIGZpcnN0IGFuZCBsYXN0IHBhZ2UuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0ZpcnN0TGFzdEljb246IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyBwYWdlIGxpbmtzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNob3dQYWdlTGlua3M6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFNvcnQgb3JkZXIgdG8gdXNlIHdoZW4gYW4gdW5zb3J0ZWQgY29sdW1uIGdldHMgc29ydGVkIGJ5IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZGVmYXVsdFNvcnRPcmRlcjogbnVtYmVyID0gMTtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgc29ydGluZyB3b3JrcyBvbiBzaW5nbGUgY29sdW1uIG9yIG9uIG11bHRpcGxlIGNvbHVtbnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc29ydE1vZGU6ICdzaW5nbGUnIHwgJ211bHRpcGxlJyA9ICdzaW5nbGUnO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgcmVzZXRzIHBhZ2luYXRvciB0byBmaXJzdCBwYWdlIGFmdGVyIHNvcnRpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcmVzZXRQYWdlT25Tb3J0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgZGVmYXVsdCBzb3J0aW5nIG9yIGEgY3VzdG9tIG9uZSB1c2luZyBzb3J0RnVuY3Rpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgY3VzdG9tU29ydDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHNlbGVjdGlvbiBtb2RlLCB2YWxpZCB2YWx1ZXMgYXJlIFwic2luZ2xlXCIgYW5kIFwibXVsdGlwbGVcIi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZWxlY3Rpb25Nb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogU2VsZWN0ZWQgcm93IHdpdGggYSBjb250ZXh0IG1lbnUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgY29udGV4dE1lbnVTZWxlY3Rpb246IGFueTtcbiAgICAvKipcbiAgICAgKiBNb2RlIG9mIHRoZSBjb250ZXQgbWVudSBzZWxlY3Rpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgY29udGV4dE1lbnVTZWxlY3Rpb25Nb2RlOiBzdHJpbmcgPSAnc2VwYXJhdGUnO1xuICAgIC8qKlxuICAgICAqIEEgcHJvcGVydHkgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYSByZWNvcmQgaW4gZGF0YS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIG1ldGFLZXkgaXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgZm9yIHRoZSBzZWxlY3Rpb24uIE9uIHRvdWNoIGVuYWJsZWQgZGV2aWNlcywgbWV0YUtleVNlbGVjdGlvbiBpcyB0dXJuZWQgb2ZmIGF1dG9tYXRpY2FsbHkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbWV0YUtleVNlbGVjdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEFsZ29yaXRobSB0byBkZWZpbmUgaWYgYSByb3cgaXMgc2VsZWN0ZWQsIHZhbGlkIHZhbHVlcyBhcmUgXCJlcXVhbHNcIiB0aGF0IGNvbXBhcmVzIGJ5IHJlZmVyZW5jZSBhbmQgXCJkZWVwRXF1YWxzXCIgdGhhdCBjb21wYXJlcyBhbGwgZmllbGRzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGNvbXBhcmVTZWxlY3Rpb25CeTogc3RyaW5nID0gJ2RlZXBFcXVhbHMnO1xuICAgIC8qKlxuICAgICAqIEFkZHMgaG92ZXIgZWZmZWN0IHRvIHJvd3Mgd2l0aG91dCB0aGUgbmVlZCBmb3Igc2VsZWN0aW9uTW9kZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByb3dIb3ZlcjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyBhIGxvYWRlciB0byBpbmRpY2F0ZSBkYXRhIGxvYWQgaXMgaW4gcHJvZ3Jlc3MuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUaGUgaWNvbiB0byBzaG93IHdoaWxlIGluZGljYXRpbmcgZGF0YSBsb2FkIGlzIGluIHByb2dyZXNzLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBzaG93IHRoZSBsb2FkaW5nIG1hc2sgd2hlbiBsb2FkaW5nIHByb3BlcnR5IGlzIHRydWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc2hvd0xvYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICogV2hlbiBzcGVjaWZpZXMsIGVuYWJsZXMgaG9yaXpvbnRhbCBhbmQvb3IgdmVydGljYWwgc2Nyb2xsaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNjcm9sbGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSBzY3JvbGwgdmlld3BvcnQgaW4gZml4ZWQgcGl4ZWxzIG9yIHRoZSBcImZsZXhcIiBrZXl3b3JkIGZvciBhIGR5bmFtaWMgc2l6ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzY3JvbGxIZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBkYXRhIHNob3VsZCBiZSBsb2FkZWQgb24gZGVtYW5kIGR1cmluZyBzY3JvbGwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgYSByb3cgdG8gdXNlIGluIGNhbGN1bGF0aW9ucyBvZiB2aXJ0dWFsIHNjcm9sbGluZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgc2Nyb2xsZXIgZmVhdHVyZS4gVGhlIHByb3BlcnRpZXMgb2Ygc2Nyb2xsZXIgY29tcG9uZW50IGNhbiBiZSB1c2VkIGxpa2UgYW4gb2JqZWN0IGluIGl0LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGxPcHRpb25zOiBTY3JvbGxlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGhlIGRlbGF5IChpbiBtaWxsaXNlY29uZHMpIGJlZm9yZSB0cmlnZ2VyaW5nIHRoZSB2aXJ0dWFsIHNjcm9sbC4gVGhpcyBkZXRlcm1pbmVzIHRoZSB0aW1lIGdhcCBiZXR3ZWVuIHRoZSB1c2VyJ3Mgc2Nyb2xsIGFjdGlvbiBhbmQgdGhlIGFjdHVhbCByZW5kZXJpbmcgb2YgdGhlIG5leHQgc2V0IG9mIGl0ZW1zIGluIHRoZSB2aXJ0dWFsIHNjcm9sbC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsRGVsYXk6IG51bWJlciA9IDE1MDtcbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgZnJvemVuIGNvbHVtbnMgY29udGFpbmVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGZyb3plbldpZHRoOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB0byByZXByZXNlbnQgZHluYW1pYyBjb2x1bW5zIHRoYXQgYXJlIGZyb3plbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmcm96ZW5Db2x1bW5zOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZW5hYmxlZCwgY29sdW1ucyBjYW4gYmUgcmVzaXplZCB1c2luZyBkcmFnIGFuZCBkcm9wLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHJlc2l6YWJsZUNvbHVtbnM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoZSBvdmVyYWxsIHRhYmxlIHdpZHRoIHNob3VsZCBjaGFuZ2Ugb24gY29sdW1uIHJlc2l6ZSwgdmFsaWQgdmFsdWVzIGFyZSBcImZpdFwiIGFuZCBcImV4cGFuZFwiLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGNvbHVtblJlc2l6ZU1vZGU6IHN0cmluZyA9ICdmaXQnO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZW5hYmxlZCwgY29sdW1ucyBjYW4gYmUgcmVvcmRlcmVkIHVzaW5nIGRyYWcgYW5kIGRyb3AuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcmVvcmRlcmFibGVDb2x1bW5zOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIExvY2FsIG5nLXRlbXBsYXRlIHZhcmlsYWJsZSBvZiBhIENvbnRleHRNZW51LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGNvbnRleHRNZW51OiBhbnk7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gb3B0aW1pemUgdGhlIGRvbSBvcGVyYXRpb25zIGJ5IGRlbGVnYXRpbmcgdG8gbmdGb3JUcmFja0J5LCBkZWZhdWx0IGFsZ29yaXRobSBjaGVja3MgZm9yIG9iamVjdCBpZGVudGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSByb3dUcmFja0J5OiBGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IGl0ZW07XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgRmlsdGVyTWV0YWRhdGEgb2JqZWN0cyB0byBwcm92aWRlIGV4dGVybmFsIGZpbHRlcnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyczogeyBbczogc3RyaW5nXTogRmlsdGVyTWV0YWRhdGEgfCB1bmRlZmluZWQgfSA9IHt9O1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGZpZWxkcyBhcyBzdHJpbmcgdG8gdXNlIGluIGdsb2JhbCBmaWx0ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2xvYmFsRmlsdGVyRmllbGRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIGZpbHRlcmluZyB0aGUgZGF0YS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJEZWxheTogbnVtYmVyID0gMzAwO1xuICAgIC8qKlxuICAgICAqIE1vZGUgZm9yIGZpbHRlcmluZyB2YWxpZCB2YWx1ZXMgYXJlIFwibGVuaWVudFwiIGFuZCBcInN0cmljdFwiLiBEZWZhdWx0IGlzIGxlbmllbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZmlsdGVyTW9kZTogc3RyaW5nID0gJ2xlbmllbnQnO1xuICAgIC8qKlxuICAgICAqIExvY2FsZSB0byB1c2UgaW4gZmlsdGVyaW5nLiBUaGUgZGVmYXVsdCBsb2NhbGUgaXMgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBmaWx0ZXJMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMb2NhbGUgdG8gYmUgdXNlZCBpbiBwYWdpbmF0b3IgZm9ybWF0dGluZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwYWdpbmF0b3JMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgdG90YWwgcmVjb3JkcywgZGVmYXVsdHMgdG8gbGVuZ3RoIG9mIHZhbHVlIHdoZW4gbm90IGRlZmluZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IHRvdGFsUmVjb3JkcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxSZWNvcmRzO1xuICAgIH1cbiAgICBzZXQgdG90YWxSZWNvcmRzKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsUmVjb3JkcyA9IHZhbDtcbiAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25Ub3RhbFJlY29yZHNDaGFuZ2UodGhpcy5fdG90YWxSZWNvcmRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgZmllbGQgdG8gc29ydCBkYXRhIGJ5IGRlZmF1bHQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IHNvcnRGaWVsZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRGaWVsZDtcbiAgICB9XG4gICAgc2V0IHNvcnRGaWVsZCh2YWw6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc29ydEZpZWxkID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcmRlciB0byBzb3J0IHdoZW4gZGVmYXVsdCBzb3J0aW5nIGlzIGVuYWJsZWQuXG4gICAgICogQGRlZmF1bHRWYWx1ZSAxXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZ2V0IHNvcnRPcmRlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyO1xuICAgIH1cbiAgICBzZXQgc29ydE9yZGVyKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NvcnRPcmRlciA9IHZhbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgU29ydE1ldGEgb2JqZWN0cyB0byBzb3J0IHRoZSBkYXRhIGJ5IGRlZmF1bHQgaW4gbXVsdGlwbGUgc29ydCBtb2RlLlxuICAgICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBtdWx0aVNvcnRNZXRhKCk6IFNvcnRNZXRhW10gfCB1bmRlZmluZWQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpU29ydE1ldGE7XG4gICAgfVxuICAgIHNldCBtdWx0aVNvcnRNZXRhKHZhbDogU29ydE1ldGFbXSB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5fbXVsdGlTb3J0TWV0YSA9IHZhbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VsZWN0ZWQgcm93IGluIHNpbmdsZSBtb2RlIG9yIGFuIGFycmF5IG9mIHZhbHVlcyBpbiBtdWx0aXBsZSBtb2RlLlxuICAgICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBzZWxlY3Rpb24oKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbih2YWw6IGFueSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB2YWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG9iamVjdHMgdG8gZGlzcGxheS5cbiAgICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgdmFsdWUoKTogVHJlZU5vZGU8YW55PltdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodmFsOiBUcmVlTm9kZTxhbnk+W10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgaGVpZ2h0IG9mIHJvd3MgdG8gYmUgc2Nyb2xsZWQuXG4gICAgICogQGRlZmF1bHRWYWx1ZSAyOFxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZXByZWNhdGVkIHVzZSB2aXJ0dWFsU2Nyb2xsSXRlbVNpemUgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBnZXQgdmlydHVhbFJvd0hlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFJvd0hlaWdodDtcbiAgICB9XG4gICAgc2V0IHZpcnR1YWxSb3dIZWlnaHQodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFJvd0hlaWdodCA9IHZhbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgdmlydHVhbFJvd0hlaWdodCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLCB1c2UgdmlydHVhbFNjcm9sbEl0ZW1TaXplIHByb3BlcnR5IGluc3RlYWQuJyk7XG4gICAgfVxuICAgIF92aXJ0dWFsUm93SGVpZ2h0OiBudW1iZXIgPSAyODtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gc2VsZWN0ZWQgbm9kZSBjaGFuZ2UuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVOb2RlfSBvYmplY3QgLSBOb2RlIGluc3RhbmNlLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVOb2RlPGFueT4gfCBUcmVlVGFibGVOb2RlPGFueT5bXSB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVOb2RlPGFueT4gfCBUcmVlVGFibGVOb2RlPGFueT5bXSB8IG51bGw+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIGNvbnRleHQgbWVudSBzZWxlY3Rpb24gY2hhbmdlLlxuICAgICAqIEBwYXJhbSB7VHJlZVRhYmxlTm9kZX0gb2JqZWN0IC0gTm9kZSBpbnN0YW5jZS5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgY29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTm9kZT4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBkYXRhIGlzIGZpbHRlcmVkLlxuICAgICAqIEBwYXJhbSB7VHJlZVRhYmxlRmlsdGVyRXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGZpbHRlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVGaWx0ZXJFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVUYWJsZUZpbHRlckV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgbm9kZSBpcyBleHBhbmRlZC5cbiAgICAgKiBAcGFyYW0ge1RyZWVUYWJsZU5vZGVFeHBhbmRFdmVudH0gZXZlbnQgLSBOb2RlIGV4cGFuZCBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Ob2RlRXhwYW5kOiBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTm9kZUV4cGFuZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTm9kZUV4cGFuZEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgbm9kZSBpcyBjb2xsYXBzZWQuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVOb2RlQ29sbGFwc2VFdmVudH0gZXZlbnQgLSBOb2RlIGNvbGxhcHNlIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbk5vZGVDb2xsYXBzZTogRXZlbnRFbWl0dGVyPFRyZWVUYWJsZU5vZGVDb2xsYXBzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTm9kZUNvbGxhcHNlRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gcGFnaW5hdGlvbiBvY2N1cnMuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVQYWdpbmF0b3JTdGF0ZX0gb2JqZWN0IC0gUGFnaW5hdG9yIHN0YXRlLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblBhZ2U6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVQYWdpbmF0b3JTdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVUYWJsZVBhZ2luYXRvclN0YXRlPigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgY29sdW1uIGdldHMgc29ydGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBPYmplY3QgLSBTb3J0IGRhdGEuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uU29ydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBwYWdpbmcsIHNvcnRpbmcgb3IgZmlsdGVyaW5nIGhhcHBlbnMgaW4gbGF6eSBtb2RlLlxuICAgICAqIEBwYXJhbSB7VHJlZVRhYmxlTGF6eUxvYWRFdmVudH0gZXZlbnQgLSBDdXN0b20gbGF6eSBsb2FkIGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkxhenlMb2FkOiBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTGF6eUxvYWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVUYWJsZUxhenlMb2FkRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlciB0byBpbnZva2Ugb24gY3VzdG9tIHNvcnRpbmcsIHJlZmVyIHRvIHNvcnRpbmcgc2VjdGlvbiBmb3IgZGV0YWlscy5cbiAgICAgKiBAcGFyYW0ge1RyZWVUYWJsZVNvcnRFdmVudH0gZXZlbnQgLSBDdXN0b20gc29ydCBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgc29ydEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlU29ydEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlU29ydEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgY29sdW1uIGlzIHJlc2l6ZWQuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVDb2xSZXNpemVFdmVudH0gZXZlbnQgLSBDdXN0b20gY29sdW1uIHJlc2l6ZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Db2xSZXNpemU6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVDb2xSZXNpemVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVUYWJsZUNvbFJlc2l6ZUV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgY29sdW1uIGlzIHJlb3JkZXJlZC5cbiAgICAgKiBAcGFyYW0ge1RyZWVUYWJsZUNvbHVtblJlb3JkZXJFdmVudH0gZXZlbnQgLSBDdXN0b20gY29sdW1uIHJlb3JkZXIuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uQ29sUmVvcmRlcjogRXZlbnRFbWl0dGVyPFRyZWVUYWJsZUNvbHVtblJlb3JkZXJFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVUYWJsZUNvbHVtblJlb3JkZXJFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIG5vZGUgaXMgc2VsZWN0ZWQuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVOb2RlfSBvYmplY3QgLSBOb2RlIGluc3RhbmNlLlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbk5vZGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTm9kZT4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIG5vZGUgaXMgdW5zZWxlY3RlZC5cbiAgICAgKiBAcGFyYW0ge1RyZWVUYWJsZU5vZGVVblNlbGVjdEV2ZW50fSBldmVudCAtIEN1c3RvbSBub2RlIHVuc2VsZWN0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbk5vZGVVbnNlbGVjdDogRXZlbnRFbWl0dGVyPFRyZWVUYWJsZU5vZGVVblNlbGVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlTm9kZVVuU2VsZWN0RXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBub2RlIGlzIHNlbGVjdGVkIHdpdGggcmlnaHQgY2xpY2suXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVDb250ZXh0TWVudVNlbGVjdEV2ZW50fSBldmVudCAtIEN1c3RvbSBjb250ZXh0IG1lbnUgc2VsZWN0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51U2VsZWN0OiBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlQ29udGV4dE1lbnVTZWxlY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVUYWJsZUNvbnRleHRNZW51U2VsZWN0RXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gc3RhdGUgb2YgaGVhZGVyIGNoZWNrYm94IGNoYW5nZXMuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVIZWFkZXJDaGVja2JveFRvZ2dsZUV2ZW50fSBldmVudCAtIEN1c3RvbSBjaGVja2JveCB0b2dnbGUgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uSGVhZGVyQ2hlY2tib3hUb2dnbGU6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVIZWFkZXJDaGVja2JveFRvZ2dsZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlSGVhZGVyQ2hlY2tib3hUb2dnbGVFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIGNlbGwgc3dpdGNoZXMgdG8gZWRpdCBtb2RlLlxuICAgICAqIEBwYXJhbSB7VHJlZVRhYmxlRWRpdEV2ZW50fSBldmVudCAtIEN1c3RvbSBlZGl0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkVkaXRJbml0OiBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlRWRpdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlRWRpdEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGNlbGwgZWRpdCBpcyBjb21wbGV0ZWQuXG4gICAgICogQHBhcmFtIHtUcmVlVGFibGVFZGl0RXZlbnR9IGV2ZW50IC0gQ3VzdG9tIGVkaXQgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uRWRpdENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlRWRpdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZVRhYmxlRWRpdEV2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGNlbGwgZWRpdCBpcyBjYW5jZWxsZWQgd2l0aCBlc2NhcGUga2V5LlxuICAgICAqIEBwYXJhbSB7VHJlZVRhYmxlRWRpdEV2ZW50fSBldmVudCAtIEN1c3RvbSBlZGl0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkVkaXRDYW5jZWw6IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVFZGl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmVlVGFibGVFZGl0RXZlbnQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgncmVzaXplSGVscGVyJykgcmVzaXplSGVscGVyVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Jlb3JkZXJJbmRpY2F0b3JVcCcpIHJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdyZW9yZGVySW5kaWNhdG9yRG93bicpIHJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3RhYmxlJykgdGFibGVWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZVZpZXcnKSBzY3JvbGxhYmxlVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGVGcm96ZW5WaWV3Jykgc2Nyb2xsYWJsZUZyb3plblZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogTnVsbGFibGU8UXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+PjtcblxuICAgIF92YWx1ZTogVHJlZU5vZGU8YW55PltdIHwgdW5kZWZpbmVkID0gW107XG5cbiAgICBzZXJpYWxpemVkVmFsdWU6IGFueVtdIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIF90b3RhbFJlY29yZHM6IG51bWJlciA9IDA7XG5cbiAgICBfbXVsdGlTb3J0TWV0YTogU29ydE1ldGFbXSB8IHVuZGVmaW5lZCB8IG51bGw7XG5cbiAgICBfc29ydEZpZWxkOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsO1xuXG4gICAgX3NvcnRPcmRlcjogbnVtYmVyID0gMTtcblxuICAgIGZpbHRlcmVkTm9kZXM6IE51bGxhYmxlPGFueVtdPjtcblxuICAgIGZpbHRlclRpbWVvdXQ6IGFueTtcblxuICAgIGNvbEdyb3VwVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgY2FwdGlvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGhlYWRlclRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGJvZHlUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBmb290ZXJUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBzdW1tYXJ5VGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZW1wdHlNZXNzYWdlVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcGFnaW5hdG9yTGVmdFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHBhZ2luYXRvclJpZ2h0VGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcGFnaW5hdG9yRHJvcGRvd25JdGVtVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZnJvemVuSGVhZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZnJvemVuQm9keVRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGZyb3plbkZvb3RlclRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGZyb3plbkNvbEdyb3VwVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgbG9hZGluZ0ljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICByZW9yZGVySW5kaWNhdG9yVXBJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcmVvcmRlckluZGljYXRvckRvd25JY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgc29ydEljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBjaGVja2JveEljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBoZWFkZXJDaGVja2JveEljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICB0b2dnbGVySWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHBhZ2luYXRvckZpcnN0UGFnZUxpbmtJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcGFnaW5hdG9yTGFzdFBhZ2VMaW5rSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHBhZ2luYXRvclByZXZpb3VzUGFnZUxpbmtJY29uVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgcGFnaW5hdG9yTmV4dFBhZ2VMaW5rSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGxhc3RSZXNpemVySGVscGVyWDogTnVsbGFibGU8bnVtYmVyPjtcblxuICAgIHJlb3JkZXJJY29uV2lkdGg6IE51bGxhYmxlPG51bWJlcj47XG5cbiAgICByZW9yZGVySWNvbkhlaWdodDogTnVsbGFibGU8bnVtYmVyPjtcblxuICAgIGRyYWdnZWRDb2x1bW46IE51bGxhYmxlPGFueVtdPjtcblxuICAgIGRyb3BQb3NpdGlvbjogTnVsbGFibGU8bnVtYmVyPjtcblxuICAgIHByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbjogTnVsbGFibGU8Ym9vbGVhbj47XG5cbiAgICBfc2VsZWN0aW9uOiBhbnk7XG5cbiAgICBzZWxlY3Rpb25LZXlzOiBhbnkgPSB7fTtcblxuICAgIHJvd1RvdWNoZWQ6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgZWRpdGluZ0NlbGw6IE51bGxhYmxlPEVsZW1lbnQ+O1xuXG4gICAgZWRpdGluZ0NlbGxEYXRhOiBhbnkgfCB1bmRlZmluZWQgfCBudWxsO1xuXG4gICAgZWRpdGluZ0NlbGxGaWVsZDogYW55IHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIGVkaXRpbmdDZWxsQ2xpY2s6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgZG9jdW1lbnRFZGl0TGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIGluaXRpYWxpemVkOiBOdWxsYWJsZTxib29sZWFuPjtcblxuICAgIHRvZ2dsZVJvd0luZGV4OiBOdWxsYWJsZTxudW1iZXI+O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhenkgJiYgdGhpcy5sYXp5TG9hZE9uSW5pdCAmJiAhdGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLm9uTGF6eUxvYWQuZW1pdCh0aGlzLmNyZWF0ZUxhenlMb2FkTWV0YWRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAodGhpcy50ZW1wbGF0ZXMgYXMgUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FwdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdGlvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3N1bW1hcnknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY29sZ3JvdXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbEdyb3VwVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5bWVzc2FnZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2luYXRvcmxlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvckxlZnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnaW5hdG9ycmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvclJpZ2h0VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2luYXRvcmRyb3Bkb3duaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yRHJvcGRvd25JdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb3plbmhlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuSGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb3plbmJvZHknOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plbkJvZHlUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZnJvemVuZm9vdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5Gb290ZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZnJvemVuY29sZ3JvdXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb3plbkNvbEdyb3VwVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xvYWRpbmdpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyZW9yZGVyaW5kaWNhdG9ydXBpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVySW5kaWNhdG9yVXBJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jlb3JkZXJpbmRpY2F0b3Jkb3duaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlckluZGljYXRvckRvd25JY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3NvcnRpY29uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0SWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveGljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94SWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXJjaGVja2JveGljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlckNoZWNrYm94SWNvblRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGVyaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlckljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnaW5hdG9yZmlyc3RwYWdlbGlua2ljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvckZpcnN0UGFnZUxpbmtJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2luYXRvcmxhc3RwYWdlbGlua2ljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvckxhc3RQYWdlTGlua0ljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnaW5hdG9ycHJldmlvdXNwYWdlbGlua2ljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvclByZXZpb3VzUGFnZUxpbmtJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2luYXRvcm5leHRwYWdlbGlua2ljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvck5leHRQYWdlTGlua0ljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UsIHB1YmxpYyBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2UudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gc2ltcGxlQ2hhbmdlLnZhbHVlLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMuX3ZhbHVlID8gdGhpcy5fdmFsdWUubGVuZ3RoIDogMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRNb2RlID09ICdzaW5nbGUnICYmIHRoaXMuc29ydEZpZWxkKSB0aGlzLnNvcnRTaW5nbGUoKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNvcnRNb2RlID09ICdtdWx0aXBsZScgJiYgdGhpcy5tdWx0aVNvcnRNZXRhKSB0aGlzLnNvcnRNdWx0aXBsZSgpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzRmlsdGVyKCkpXG4gICAgICAgICAgICAgICAgICAgIC8vc29ydCBhbHJlYWR5IGZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblVJVXBkYXRlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpbXBsZUNoYW5nZS5zb3J0RmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnRGaWVsZCA9IHNpbXBsZUNoYW5nZS5zb3J0RmllbGQuY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICAvL2F2b2lkIHRyaWdnZXJpbmcgbGF6eSBsb2FkIHByaW9yIHRvIGxhenkgaW5pdGlhbGl6YXRpb24gYXQgb25Jbml0XG4gICAgICAgICAgICBpZiAoIXRoaXMubGF6eSB8fCB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFNpbmdsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaW1wbGVDaGFuZ2Uuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPSBzaW1wbGVDaGFuZ2Uuc29ydE9yZGVyLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgLy9hdm9pZCB0cmlnZ2VyaW5nIGxhenkgbG9hZCBwcmlvciB0byBsYXp5IGluaXRpYWxpemF0aW9uIGF0IG9uSW5pdFxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhenkgfHwgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRTaW5nbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLm11bHRpU29ydE1ldGEpIHtcbiAgICAgICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEgPSBzaW1wbGVDaGFuZ2UubXVsdGlTb3J0TWV0YS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydE11bHRpcGxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gc2ltcGxlQ2hhbmdlLnNlbGVjdGlvbi5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbktleXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNlcmlhbGl6ZWRWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVkVmFsdWUgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0b3IpIHRoaXMuc2VyaWFsaXplUGFnZU5vZGVzKCk7XG4gICAgICAgIGVsc2UgdGhpcy5zZXJpYWxpemVOb2RlcyhudWxsLCB0aGlzLmZpbHRlcmVkTm9kZXMgfHwgdGhpcy52YWx1ZSwgMCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplTm9kZXMocGFyZW50OiBOdWxsYWJsZTxUcmVlVGFibGVOb2RlPiwgbm9kZXM6IE51bGxhYmxlPFRyZWVOb2RlW10+LCBsZXZlbDogTnVsbGFibGU8bnVtYmVyPiwgdmlzaWJsZTogTnVsbGFibGU8Ym9vbGVhbj4pIHtcbiAgICAgICAgaWYgKG5vZGVzICYmIG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gPFRyZWVUYWJsZU5vZGU+cGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd05vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHZpc2libGUgJiYgKHBhcmVudCA/IHBhcmVudC5leHBhbmRlZCA6IHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAoPFRyZWVOb2RlW10+dGhpcy5zZXJpYWxpemVkVmFsdWUpLnB1c2goPFRyZWVUYWJsZU5vZGU+cm93Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocm93Tm9kZS52aXNpYmxlICYmIG5vZGUuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVOb2Rlcyhub2RlLCBub2RlLmNoaWxkcmVuLCA8bnVtYmVyPmxldmVsICsgMSwgcm93Tm9kZS52aXNpYmxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXJpYWxpemVQYWdlTm9kZXMoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5maWx0ZXJlZE5vZGVzIHx8IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlID0gW107XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMubGF6eSA/IDAgOiB0aGlzLmZpcnN0O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZmlyc3Q7IGkgPCBmaXJzdCArIDxudW1iZXI+dGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVkVmFsdWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiA8YW55Pm51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVOb2Rlcyhub2RlLCBub2RlLmNoaWxkcmVuLCAxLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3Rpb25LZXlzKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhS2V5ICYmIHRoaXMuX3NlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9zZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLl9zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW1N0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUuZGF0YSwgdGhpcy5kYXRhS2V5KSldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YSgoPGFueT50aGlzLl9zZWxlY3Rpb24pLmRhdGEsIHRoaXMuZGF0YUtleSkpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBhZ2VDaGFuZ2UoZXZlbnQ6IFRyZWVUYWJsZVBhZ2luYXRvclN0YXRlKSB7XG4gICAgICAgIHRoaXMuZmlyc3QgPSA8bnVtYmVyPmV2ZW50LmZpcnN0O1xuICAgICAgICB0aGlzLnJvd3MgPSA8bnVtYmVyPmV2ZW50LnJvd3M7XG5cbiAgICAgICAgaWYgKHRoaXMubGF6eSkgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICBlbHNlIHRoaXMuc2VyaWFsaXplUGFnZU5vZGVzKCk7XG5cbiAgICAgICAgdGhpcy5vblBhZ2UuZW1pdCh7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5maXJzdCxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblVJVXBkYXRlKHRoaXMudmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnQoZXZlbnQ6IFRyZWVUYWJsZVNvcnRFdmVudCkge1xuICAgICAgICBsZXQgb3JpZ2luYWxFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0T3JkZXIgPSB0aGlzLnNvcnRGaWVsZCA9PT0gZXZlbnQuZmllbGQgPyB0aGlzLnNvcnRPcmRlciAqIC0xIDogdGhpcy5kZWZhdWx0U29ydE9yZGVyO1xuICAgICAgICAgICAgdGhpcy5fc29ydEZpZWxkID0gZXZlbnQuZmllbGQ7XG4gICAgICAgICAgICB0aGlzLnNvcnRTaW5nbGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVzZXRQYWdlT25Tb3J0ICYmIHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgbGV0IG1ldGFLZXkgPSAoPEtleWJvYXJkRXZlbnQ+b3JpZ2luYWxFdmVudCkubWV0YUtleSB8fCAoPEtleWJvYXJkRXZlbnQ+b3JpZ2luYWxFdmVudCkuY3RybEtleTtcbiAgICAgICAgICAgIGxldCBzb3J0TWV0YSA9IHRoaXMuZ2V0U29ydE1ldGEoPHN0cmluZz5ldmVudC5maWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChzb3J0TWV0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tdWx0aVNvcnRNZXRhID0gW3sgZmllbGQ6IDxzdHJpbmc+ZXZlbnQuZmllbGQsIG9yZGVyOiBzb3J0TWV0YS5vcmRlciAqIC0xIH1dO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0UGFnZU9uU29ydCAmJiB0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRNZXRhLm9yZGVyID0gc29ydE1ldGEub3JkZXIgKiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbWV0YUtleSB8fCAhdGhpcy5tdWx0aVNvcnRNZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldFBhZ2VPblNvcnQgJiYgdGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKDxTb3J0TWV0YVtdPnRoaXMubXVsdGlTb3J0TWV0YSkucHVzaCh7IGZpZWxkOiA8c3RyaW5nPmV2ZW50LmZpZWxkLCBvcmRlcjogdGhpcy5kZWZhdWx0U29ydE9yZGVyIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNvcnRNdWx0aXBsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydFNpbmdsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEZpZWxkICYmIHRoaXMuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0Tm9kZXModGhpcy52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNGaWx0ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzb3J0TWV0YTogU29ydE1ldGEgPSB7XG4gICAgICAgICAgICAgICAgZmllbGQ6IHRoaXMuc29ydEZpZWxkLFxuICAgICAgICAgICAgICAgIG9yZGVyOiB0aGlzLnNvcnRPcmRlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblNvcnQuZW1pdChzb3J0TWV0YSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNvcnQoc29ydE1ldGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnROb2Rlcyhub2RlczogVHJlZU5vZGVbXSkge1xuICAgICAgICBpZiAoIW5vZGVzIHx8IG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU29ydCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0RnVuY3Rpb24uZW1pdCh7XG4gICAgICAgICAgICAgICAgZGF0YTogbm9kZXMsXG4gICAgICAgICAgICAgICAgbW9kZTogdGhpcy5zb3J0TW9kZSxcbiAgICAgICAgICAgICAgICBmaWVsZDogPHN0cmluZz50aGlzLnNvcnRGaWVsZCxcbiAgICAgICAgICAgICAgICBvcmRlcjogdGhpcy5zb3J0T3JkZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZXMuc29ydCgobm9kZTEsIG5vZGUyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlMSA9IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobm9kZTEuZGF0YSwgdGhpcy5zb3J0RmllbGQpO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTIgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUyLmRhdGEsIHRoaXMuc29ydEZpZWxkKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbCkgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMiwgdW5kZWZpbmVkLCB7IG51bWVyaWM6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXN1bHQgPSB2YWx1ZTEgPCB2YWx1ZTIgPyAtMSA6IHZhbHVlMSA+IHZhbHVlMiA/IDEgOiAwO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydE9yZGVyICogcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnROb2Rlcyhub2RlLmNoaWxkcmVuIGFzIFRyZWVOb2RlW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydE11bHRpcGxlKCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0TXVsdGlwbGVOb2Rlcyh0aGlzLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZpbHRlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vblNvcnQuZW1pdCh7XG4gICAgICAgICAgICAgICAgbXVsdGlzb3J0bWV0YTogdGhpcy5tdWx0aVNvcnRNZXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNvcnQodGhpcy5tdWx0aVNvcnRNZXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRNdWx0aXBsZU5vZGVzKG5vZGVzOiBUcmVlTm9kZVtdKSB7XG4gICAgICAgIGlmICghbm9kZXMgfHwgbm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXN0b21Tb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRGdW5jdGlvbi5lbWl0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIG1vZGU6IHRoaXMuc29ydE1vZGUsXG4gICAgICAgICAgICAgICAgbXVsdGlTb3J0TWV0YTogdGhpcy5tdWx0aVNvcnRNZXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzLnNvcnQoKG5vZGUxLCBub2RlMikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpc29ydEZpZWxkKG5vZGUxLCBub2RlMiwgPFNvcnRNZXRhW10+dGhpcy5tdWx0aVNvcnRNZXRhLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgdGhpcy5zb3J0TXVsdGlwbGVOb2Rlcyhub2RlLmNoaWxkcmVuIGFzIFRyZWVOb2RlW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbXVsdGlzb3J0RmllbGQobm9kZTE6IFRyZWVUYWJsZU5vZGUsIG5vZGUyOiBUcmVlVGFibGVOb2RlLCBtdWx0aVNvcnRNZXRhOiBTb3J0TWV0YVtdLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKE9iamVjdFV0aWxzLmlzRW1wdHkodGhpcy5tdWx0aVNvcnRNZXRhKSB8fCBPYmplY3RVdGlscy5pc0VtcHR5KG11bHRpU29ydE1ldGFbaW5kZXhdKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUxID0gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlMS5kYXRhLCBtdWx0aVNvcnRNZXRhW2luZGV4XS5maWVsZCk7XG4gICAgICAgIGxldCB2YWx1ZTIgPSBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUyLmRhdGEsIG11bHRpU29ydE1ldGFbaW5kZXhdLmZpZWxkKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHZhbHVlMSA9PSBudWxsICYmIHZhbHVlMiAhPSBudWxsKSByZXN1bHQgPSAtMTtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDE7XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlMSA9PSBudWxsICYmIHZhbHVlMiA9PSBudWxsKSByZXN1bHQgPSAwO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlMSA9PSAnc3RyaW5nJyB8fCB2YWx1ZTEgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZTEubG9jYWxlQ29tcGFyZSAmJiB2YWx1ZTEgIT0gdmFsdWUyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG11bHRpU29ydE1ldGFbaW5kZXhdLm9yZGVyICogdmFsdWUxLmxvY2FsZUNvbXBhcmUodmFsdWUyLCB1bmRlZmluZWQsIHsgbnVtZXJpYzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlMSA8IHZhbHVlMiA/IC0xIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZTEgPT0gdmFsdWUyKSB7XG4gICAgICAgICAgICByZXR1cm4gbXVsdGlTb3J0TWV0YS5sZW5ndGggLSAxID4gaW5kZXggPyB0aGlzLm11bHRpc29ydEZpZWxkKG5vZGUxLCBub2RlMiwgbXVsdGlTb3J0TWV0YSwgaW5kZXggKyAxKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbXVsdGlTb3J0TWV0YVtpbmRleF0ub3JkZXIgKiA8bnVtYmVyPnJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRTb3J0TWV0YShmaWVsZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGEgJiYgdGhpcy5tdWx0aVNvcnRNZXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm11bHRpU29ydE1ldGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhW2ldLmZpZWxkID09PSBmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aVNvcnRNZXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzU29ydGVkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RmllbGQgJiYgdGhpcy5zb3J0RmllbGQgPT09IGZpZWxkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc29ydE1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgIGxldCBzb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpU29ydE1ldGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubXVsdGlTb3J0TWV0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNvcnRNZXRhW2ldLmZpZWxkID09IGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc29ydGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3Q6IHRoaXMuZmlyc3QsXG4gICAgICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgICAgICBzb3J0RmllbGQ6IHRoaXMuc29ydEZpZWxkLFxuICAgICAgICAgICAgc29ydE9yZGVyOiB0aGlzLnNvcnRPcmRlcixcbiAgICAgICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgICAgICAgIGdsb2JhbEZpbHRlcjogdGhpcy5maWx0ZXJzICYmIHRoaXMuZmlsdGVyc1snZ2xvYmFsJ10gPyB0aGlzLmZpbHRlcnNbJ2dsb2JhbCddLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgIG11bHRpU29ydE1ldGE6IHRoaXMubXVsdGlTb3J0TWV0YSxcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlOiAoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uTGF6eUl0ZW1Mb2FkKGV2ZW50OiBUcmVlVGFibGVMYXp5TG9hZEV2ZW50KSB7XG4gICAgICAgIHRoaXMub25MYXp5TG9hZC5lbWl0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuY3JlYXRlTGF6eUxvYWRNZXRhZGF0YSgpLFxuICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICByb3dzOiBldmVudC5sYXN0IC0gZXZlbnQuZmlyc3RcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBzY3JvbGwgdG8gdG9wLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRTY3JvbGxUb3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHRoaXMuc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoMCk7XG4gICAgICAgIGVsc2UgdGhpcy5zY3JvbGxUbyh7IHRvcDogMCB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0byBnaXZlbiBpbmRleCB3aGVuIHVzaW5nIHZpcnR1YWwgc2Nyb2xsLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9WaXJ0dWFsSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlVmlld0NoaWxkKSB7XG4gICAgICAgICAgICAoPGFueT50aGlzLnNjcm9sbGFibGVWaWV3Q2hpbGQpLnNjcm9sbFRvVmlydHVhbEluZGV4KDxudW1iZXI+aW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZUZyb3plblZpZXdDaGlsZCkge1xuICAgICAgICAgICAgKDxhbnk+dGhpcy5zY3JvbGxhYmxlVmlld0NoaWxkKS5zY3JvbGxUb1ZpcnR1YWxJbmRleChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0byBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge1Njcm9sbFRvT3B0aW9uc30gb3B0aW9ucyAtIFNjcm9sbCBvcHRpb25zLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG8ob3B0aW9uczogU2Nyb2xsVG9PcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGVWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgICg8YW55PnRoaXMuc2Nyb2xsYWJsZVZpZXdDaGlsZCkuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlRnJvemVuVmlld0NoaWxkKSB7XG4gICAgICAgICAgICAoPGFueT50aGlzLnNjcm9sbGFibGVWaWV3Q2hpbGQpLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmZpbHRlcmVkTm9kZXMgfHwgdGhpcy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PSAwO1xuICAgIH1cblxuICAgIGdldEJsb2NrYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIG9uQ29sdW1uUmVzaXplQmVnaW4oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckxlZnQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCkubGVmdDtcbiAgICAgICAgdGhpcy5sYXN0UmVzaXplckhlbHBlclggPSBldmVudC5wYWdlWCAtIGNvbnRhaW5lckxlZnQgKyB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uQ29sdW1uUmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGxldCBjb250YWluZXJMZWZ0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5jb250YWluZXJWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQpLmxlZnQ7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5jb250YWluZXJWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsICdwLXVuc2VsZWN0YWJsZS10ZXh0Jyk7XG4gICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZCkubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAoPEVsZW1lbnRSZWY+dGhpcy5yZXNpemVIZWxwZXJWaWV3Q2hpbGQpLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gMCArICdweCc7XG4gICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZCkubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gZXZlbnQucGFnZVggLSBjb250YWluZXJMZWZ0ICsgdGhpcy5jb250YWluZXJWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArICdweCc7XG5cbiAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMucmVzaXplSGVscGVyVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIG9uQ29sdW1uUmVzaXplRW5kKGV2ZW50OiBNb3VzZUV2ZW50LCBjb2x1bW46IGFueSkge1xuICAgICAgICBsZXQgZGVsdGEgPSAoPEVsZW1lbnRSZWY+dGhpcy5yZXNpemVIZWxwZXJWaWV3Q2hpbGQpLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCAtIDxudW1iZXI+dGhpcy5sYXN0UmVzaXplckhlbHBlclg7XG4gICAgICAgIGxldCBjb2x1bW5XaWR0aCA9IGNvbHVtbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IG5ld0NvbHVtbldpZHRoID0gY29sdW1uV2lkdGggKyBkZWx0YTtcbiAgICAgICAgbGV0IG1pbldpZHRoID0gY29sdW1uLnN0eWxlLm1pbldpZHRoIHx8IDE1O1xuXG4gICAgICAgIGlmIChjb2x1bW5XaWR0aCArIGRlbHRhID4gcGFyc2VJbnQobWluV2lkdGgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZml0Jykge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q29sdW1uID0gY29sdW1uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW5leHRDb2x1bW4ub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDb2x1bW4gPSBuZXh0Q29sdW1uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dENvbHVtbldpZHRoID0gbmV4dENvbHVtbi5vZmZzZXRXaWR0aCAtIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dENvbHVtbk1pbldpZHRoID0gbmV4dENvbHVtbi5zdHlsZS5taW5XaWR0aCB8fCAxNTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q29sdW1uV2lkdGggPiAxNSAmJiBuZXh0Q29sdW1uV2lkdGggPiBwYXJzZUludChuZXh0Q29sdW1uTWluV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVWaWV3ID0gdGhpcy5maW5kUGFyZW50U2Nyb2xsYWJsZVZpZXcoY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsYWJsZUJvZHlUYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJy5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWJvZHkgdGFibGUnKSB8fCBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICcucC1zY3JvbGxlci12aWV3cG9ydCB0YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlSGVhZGVyVGFibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICd0YWJsZS5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWhlYWRlci10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlRm9vdGVyVGFibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICd0YWJsZS5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWZvb3Rlci10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNpemVDb2x1bW5JbmRleCA9IERvbUhhbmRsZXIuaW5kZXgoY29sdW1uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplQ29sR3JvdXAoc2Nyb2xsYWJsZUhlYWRlclRhYmxlLCByZXNpemVDb2x1bW5JbmRleCwgbmV3Q29sdW1uV2lkdGgsIG5leHRDb2x1bW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlQm9keVRhYmxlLCByZXNpemVDb2x1bW5JbmRleCwgbmV3Q29sdW1uV2lkdGgsIG5leHRDb2x1bW5XaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlRm9vdGVyVGFibGUsIHJlc2l6ZUNvbHVtbkluZGV4LCBuZXdDb2x1bW5XaWR0aCwgbmV4dENvbHVtbldpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlLndpZHRoID0gbmV3Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDb2x1bW4uc3R5bGUud2lkdGggPSBuZXh0Q29sdW1uV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5SZXNpemVNb2RlID09PSAnZXhwYW5kJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVWaWV3ID0gdGhpcy5maW5kUGFyZW50U2Nyb2xsYWJsZVZpZXcoY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbGFibGVCb2R5ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnLnAtdHJlZXRhYmxlLXNjcm9sbGFibGUtYm9keScpIHx8IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJy5wLXNjcm9sbGVyLXZpZXdwb3J0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlSGVhZGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnLnAtdHJlZXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlRm9vdGVyID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnLnAtdHJlZXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlQm9keVRhYmxlID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAnLnAtdHJlZXRhYmxlLXNjcm9sbGFibGUtYm9keSB0YWJsZScpIHx8IERvbUhhbmRsZXIuZmluZFNpbmdsZShzY3JvbGxhYmxlVmlldywgJy5wLXNjcm9sbGVyLXZpZXdwb3J0IHRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxhYmxlSGVhZGVyVGFibGUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoc2Nyb2xsYWJsZVZpZXcsICd0YWJsZS5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWhlYWRlci10YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsYWJsZUZvb3RlclRhYmxlID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHNjcm9sbGFibGVWaWV3LCAndGFibGUucC10cmVldGFibGUtc2Nyb2xsYWJsZS1mb290ZXItdGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUJvZHlUYWJsZS5zdHlsZS53aWR0aCA9IHNjcm9sbGFibGVCb2R5VGFibGUub2Zmc2V0V2lkdGggKyBkZWx0YSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGVIZWFkZXJUYWJsZS5zdHlsZS53aWR0aCA9IHNjcm9sbGFibGVIZWFkZXJUYWJsZS5vZmZzZXRXaWR0aCArIGRlbHRhICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbGFibGVGb290ZXJUYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZUZvb3RlclRhYmxlLnN0eWxlLndpZHRoID0gc2Nyb2xsYWJsZUZvb3RlclRhYmxlLm9mZnNldFdpZHRoICsgZGVsdGEgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNpemVDb2x1bW5JbmRleCA9IERvbUhhbmRsZXIuaW5kZXgoY29sdW1uKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQm9keVRhYmxlV2lkdGggPSBjb2x1bW4gPyBzY3JvbGxhYmxlQm9keVRhYmxlLm9mZnNldFdpZHRoICsgZGVsdGEgOiBuZXdDb2x1bW5XaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUhlYWRlclRhYmxlV2lkdGggPSBjb2x1bW4gPyBzY3JvbGxhYmxlSGVhZGVyVGFibGUub2Zmc2V0V2lkdGggKyBkZWx0YSA6IG5ld0NvbHVtbldpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NvbnRhaW5lckluVmlld3BvcnQgPSB0aGlzLmNvbnRhaW5lclZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCA+PSBzY3JvbGxhYmxlQm9keVRhYmxlV2lkdGg7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNldFdpZHRoID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRhYmxlOiBIVE1MRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaXNDb250YWluZXJJblZpZXdwb3J0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyICYmIHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gaXNDb250YWluZXJJblZpZXdwb3J0ID8gd2lkdGggKyBEb21IYW5kbGVyLmNhbGN1bGF0ZVNjcm9sbGJhcldpZHRoKHNjcm9sbGFibGVCb2R5KSArICdweCcgOiAnYXV0byc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkdGgoc2Nyb2xsYWJsZUJvZHksIHNjcm9sbGFibGVCb2R5VGFibGUsIHNjcm9sbGFibGVCb2R5VGFibGVXaWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkdGgoc2Nyb2xsYWJsZUhlYWRlciwgc2Nyb2xsYWJsZUhlYWRlclRhYmxlLCBzY3JvbGxhYmxlSGVhZGVyVGFibGVXaWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkdGgoc2Nyb2xsYWJsZUZvb3Rlciwgc2Nyb2xsYWJsZUZvb3RlclRhYmxlLCBzY3JvbGxhYmxlSGVhZGVyVGFibGVXaWR0aCwgaXNDb250YWluZXJJblZpZXdwb3J0KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVIZWFkZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVDb2xHcm91cChzY3JvbGxhYmxlQm9keVRhYmxlLCByZXNpemVDb2x1bW5JbmRleCwgbmV3Q29sdW1uV2lkdGgsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUNvbEdyb3VwKHNjcm9sbGFibGVGb290ZXJUYWJsZSwgcmVzaXplQ29sdW1uSW5kZXgsIG5ld0NvbHVtbldpZHRoLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAoPEVsZW1lbnRSZWY+dGhpcy50YWJsZVZpZXdDaGlsZCkubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMudGFibGVWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyBkZWx0YSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZS53aWR0aCA9IG5ld0NvbHVtbldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gdGhpcy50YWJsZVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMuY29udGFpbmVyVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gY29udGFpbmVyV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vbkNvbFJlc2l6ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZGVsdGE6IGRlbHRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICh0aGlzLnJlc2l6ZUhlbHBlclZpZXdDaGlsZCBhcyBFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5jb250YWluZXJWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsICdwLXVuc2VsZWN0YWJsZS10ZXh0Jyk7XG4gICAgfVxuXG4gICAgZmluZFBhcmVudFNjcm9sbGFibGVWaWV3KGNvbHVtbjogYW55KSB7XG4gICAgICAgIGlmIChjb2x1bW4pIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBjb2x1bW4ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIURvbUhhbmRsZXIuaGFzQ2xhc3MocGFyZW50LCAncC10cmVldGFibGUtc2Nyb2xsYWJsZS12aWV3JykpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplQ29sR3JvdXAodGFibGU6IE51bGxhYmxlPEhUTUxFbGVtZW50PiwgcmVzaXplQ29sdW1uSW5kZXg6IE51bGxhYmxlPG51bWJlcj4sIG5ld0NvbHVtbldpZHRoOiBOdWxsYWJsZTxudW1iZXI+LCBuZXh0Q29sdW1uV2lkdGg6IE51bGxhYmxlPG51bWJlcj4pIHtcbiAgICAgICAgaWYgKHRhYmxlKSB7XG4gICAgICAgICAgICBsZXQgY29sR3JvdXAgPSB0YWJsZS5jaGlsZHJlblswXS5ub2RlTmFtZSA9PT0gJ0NPTEdST1VQJyA/IHRhYmxlLmNoaWxkcmVuWzBdIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNvbEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGNvbEdyb3VwLmNoaWxkcmVuWzxudW1iZXI+cmVzaXplQ29sdW1uSW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q29sID0gY29sLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmNvbCkuc3R5bGUud2lkdGggPSBuZXdDb2x1bW5XaWR0aCArICdweCc7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dENvbCAmJiBuZXh0Q29sdW1uV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgKDxIVE1MRWxlbWVudD5uZXh0Q29sKS5zdHlsZS53aWR0aCA9IG5leHRDb2x1bW5XaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnU2Nyb2xsYWJsZSB0YWJsZXMgcmVxdWlyZSBhIGNvbGdyb3VwIHRvIHN1cHBvcnQgcmVzaXphYmxlIGNvbHVtbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db2x1bW5EcmFnU3RhcnQoZXZlbnQ6IERyYWdFdmVudCwgY29sdW1uRWxlbWVudDogYW55KSB7XG4gICAgICAgIHRoaXMucmVvcmRlckljb25XaWR0aCA9IERvbUhhbmRsZXIuZ2V0SGlkZGVuRWxlbWVudE91dGVyV2lkdGgodGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnJlb3JkZXJJY29uSGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRIaWRkZW5FbGVtZW50T3V0ZXJIZWlnaHQodGhpcy5yZW9yZGVySW5kaWNhdG9yRG93blZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbiA9IGNvbHVtbkVsZW1lbnQ7XG4gICAgICAgICg8YW55PmV2ZW50KS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdiJyk7IC8vIEZvciBmaXJlZm94XG4gICAgfVxuXG4gICAgb25Db2x1bW5EcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCwgZHJvcEhlYWRlcjogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnJlb3JkZXJhYmxlQ29sdW1ucyAmJiB0aGlzLmRyYWdnZWRDb2x1bW4gJiYgZHJvcEhlYWRlcikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBjb250YWluZXJPZmZzZXQgPSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLmNvbnRhaW5lclZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgZHJvcEhlYWRlck9mZnNldCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KGRyb3BIZWFkZXIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2VkQ29sdW1uICE9IGRyb3BIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0TGVmdCA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCAtIGNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRUb3AgPSBjb250YWluZXJPZmZzZXQudG9wIC0gZHJvcEhlYWRlck9mZnNldC50b3A7XG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtbkNlbnRlciA9IGRyb3BIZWFkZXJPZmZzZXQubGVmdCArIGRyb3BIZWFkZXIub2Zmc2V0V2lkdGggLyAyO1xuXG4gICAgICAgICAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMucmVvcmRlckluZGljYXRvclVwVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGRyb3BIZWFkZXJPZmZzZXQudG9wIC0gY29udGFpbmVyT2Zmc2V0LnRvcCAtICg8bnVtYmVyPnRoaXMucmVvcmRlckljb25IZWlnaHQgLSAxKSArICdweCc7XG4gICAgICAgICAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMucmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQpLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gZHJvcEhlYWRlck9mZnNldC50b3AgLSBjb250YWluZXJPZmZzZXQudG9wICsgZHJvcEhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYID4gY29sdW1uQ2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZCkubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gdGFyZ2V0TGVmdCArIGRyb3BIZWFkZXIub2Zmc2V0V2lkdGggLSBNYXRoLmNlaWwoPG51bWJlcj50aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB0YXJnZXRMZWZ0ICsgZHJvcEhlYWRlci5vZmZzZXRXaWR0aCAtIE1hdGguY2VpbCg8bnVtYmVyPnRoaXMucmVvcmRlckljb25XaWR0aCAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wUG9zaXRpb24gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZCkubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gdGFyZ2V0TGVmdCAtIE1hdGguY2VpbCg8bnVtYmVyPnRoaXMucmVvcmRlckljb25XaWR0aCAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMucmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQpLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHRhcmdldExlZnQgLSBNYXRoLmNlaWwoPG51bWJlcj50aGlzLnJlb3JkZXJJY29uV2lkdGggLyAyKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcFBvc2l0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMucmVvcmRlckluZGljYXRvclVwVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoPGFueT5ldmVudCkuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbHVtbkRyYWdMZWF2ZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlb3JkZXJhYmxlQ29sdW1ucyAmJiB0aGlzLmRyYWdnZWRDb2x1bW4pIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoPEVsZW1lbnRSZWY+dGhpcy5yZW9yZGVySW5kaWNhdG9yVXBWaWV3Q2hpbGQpLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlb3JkZXJJbmRpY2F0b3JEb3duVmlld0NoaWxkKS5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbHVtbkRyb3AoZXZlbnQ6IERyYWdFdmVudCwgZHJvcENvbHVtbjogYW55KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmRyYWdnZWRDb2x1bW4pIHtcbiAgICAgICAgICAgIGxldCBkcmFnSW5kZXggPSBEb21IYW5kbGVyLmluZGV4V2l0aGluR3JvdXAodGhpcy5kcmFnZ2VkQ29sdW1uLCAndHRyZW9yZGVyYWJsZWNvbHVtbicpO1xuICAgICAgICAgICAgbGV0IGRyb3BJbmRleCA9IERvbUhhbmRsZXIuaW5kZXhXaXRoaW5Hcm91cChkcm9wQ29sdW1uLCAndHRyZW9yZGVyYWJsZWNvbHVtbicpO1xuICAgICAgICAgICAgbGV0IGFsbG93RHJvcCA9IGRyYWdJbmRleCAhPSBkcm9wSW5kZXg7XG4gICAgICAgICAgICBpZiAoYWxsb3dEcm9wICYmICgoZHJvcEluZGV4IC0gZHJhZ0luZGV4ID09IDEgJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IC0xKSB8fCAoZHJhZ0luZGV4IC0gZHJvcEluZGV4ID09IDEgJiYgdGhpcy5kcm9wUG9zaXRpb24gPT09IDEpKSkge1xuICAgICAgICAgICAgICAgIGFsbG93RHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dEcm9wICYmIGRyb3BJbmRleCA8IGRyYWdJbmRleCAmJiB0aGlzLmRyb3BQb3NpdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGRyb3BJbmRleCA9IGRyb3BJbmRleCArIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd0Ryb3AgJiYgZHJvcEluZGV4ID4gZHJhZ0luZGV4ICYmIHRoaXMuZHJvcFBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGRyb3BJbmRleCA9IGRyb3BJbmRleCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd0Ryb3ApIHtcbiAgICAgICAgICAgICAgICBPYmplY3RVdGlscy5yZW9yZGVyQXJyYXkoPGFueVtdPnRoaXMuY29sdW1ucywgZHJhZ0luZGV4LCBkcm9wSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbFJlb3JkZXIuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdJbmRleDogZHJhZ0luZGV4LFxuICAgICAgICAgICAgICAgICAgICBkcm9wSW5kZXg6IGRyb3BJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb2x1bW5zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICg8RWxlbWVudFJlZj50aGlzLnJlb3JkZXJJbmRpY2F0b3JVcFZpZXdDaGlsZCkubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgKDxFbGVtZW50UmVmPnRoaXMucmVvcmRlckluZGljYXRvckRvd25WaWV3Q2hpbGQpLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICh0aGlzLmRyYWdnZWRDb2x1bW4gYXMgYW55KS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRyb3BQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVSb3dDbGljayhldmVudDogYW55KSB7XG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gKDxIVE1MRWxlbWVudD5ldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldCkubm9kZU5hbWU7XG4gICAgICAgIGlmICh0YXJnZXROb2RlID09ICdJTlBVVCcgfHwgdGFyZ2V0Tm9kZSA9PSAnQlVUVE9OJyB8fCB0YXJnZXROb2RlID09ICdBJyB8fCBEb21IYW5kbGVyLmhhc0NsYXNzKGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0LCAncC1jbGlja2FibGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHJvd05vZGUgPSBldmVudC5yb3dOb2RlO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKCg8YW55PnJvd05vZGUpLm5vZGUpO1xuICAgICAgICAgICAgbGV0IG1ldGFTZWxlY3Rpb24gPSB0aGlzLnJvd1RvdWNoZWQgPyBmYWxzZSA6IHRoaXMubWV0YUtleVNlbGVjdGlvbjtcbiAgICAgICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YSgoPFRyZWVUYWJsZU5vZGU+cm93Tm9kZS5ub2RlKS5kYXRhLCB0aGlzLmRhdGFLZXkpKSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChtZXRhU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleWJvYXJkRXZlbnQgPSA8S2V5Ym9hcmRFdmVudD5ldmVudC5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgICAgIGxldCBtZXRhS2V5ID0ga2V5Ym9hcmRFdmVudC5tZXRhS2V5IHx8IGtleWJvYXJkRXZlbnQuY3RybEtleTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbkluZGV4ID0gdGhpcy5maW5kSW5kZXhJblNlbGVjdGlvbihyb3dOb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZmlsdGVyKCh2YWw6IFRyZWVUYWJsZU5vZGUsIGk6IG51bWJlcikgPT4gaSAhPSBzZWxlY3Rpb25JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVVuc2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBub2RlOiA8VHJlZVRhYmxlTm9kZT5yb3dOb2RlLm5vZGUsIHR5cGU6ICdyb3cnIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSByb3dOb2RlLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHJvd05vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNNdWx0aXBsZVNlbGVjdGlvbk1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGlvbiwgcm93Tm9kZS5ub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBub2RlOiByb3dOb2RlLm5vZGUsIHR5cGU6ICdyb3cnLCBpbmRleDogKDxhbnk+ZXZlbnQpLnJvd0luZGV4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlVW5zZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsIG5vZGU6IDxUcmVlVGFibGVOb2RlPnJvd05vZGUubm9kZSwgdHlwZTogJ3JvdycgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSByb3dOb2RlLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LCBub2RlOiByb3dOb2RlLm5vZGUsIHR5cGU6ICdyb3cnLCBpbmRleDogZXZlbnQucm93SW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uSW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKHJvd05vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbDogVHJlZVRhYmxlTm9kZSwgaTogbnVtYmVyKSA9PiBpICE9IHNlbGVjdGlvbkluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVVbnNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgbm9kZTogcm93Tm9kZS5ub2RlLCB0eXBlOiAncm93JyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA/IFsuLi50aGlzLnNlbGVjdGlvbiwgcm93Tm9kZS5ub2RlXSA6IFtyb3dOb2RlLm5vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgbm9kZTogcm93Tm9kZS5ub2RlLCB0eXBlOiAncm93JywgaW5kZXg6IGV2ZW50LnJvd0luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm93VG91Y2hlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd1RvdWNoRW5kKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLnJvd1RvdWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd1JpZ2h0Q2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0TWVudSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50LnJvd05vZGUubm9kZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnVTZWxlY3Rpb25Nb2RlID09PSAnc2VwYXJhdGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudVNlbGVjdGlvbiA9IG5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZS5lbWl0KG5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZXh0TWVudVNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51LnNob3coZXZlbnQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZVNlcnZpY2Uub25Db250ZXh0TWVudShub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZXh0TWVudVNlbGVjdGlvbk1vZGUgPT09ICdqb2ludCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhS2V5VmFsdWUgPSB0aGlzLmRhdGFLZXkgPyBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLmRhdGEsIHRoaXMuZGF0YUtleSkpIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25Nb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudS5zaG93KGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZXh0TWVudVNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCwgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU5vZGVXaXRoQ2hlY2tib3goZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uIHx8IFtdO1xuICAgICAgICB0aGlzLnByZXZlbnRTZWxlY3Rpb25TZXR0ZXJQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIGxldCBub2RlID0gZXZlbnQucm93Tm9kZS5ub2RlO1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQobm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd24obm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJvd05vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVTZWxlY3Rpb25VcChub2RlLnBhcmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm9uTm9kZVVuc2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlU2VsZWN0aW9uRG93bihub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChldmVudC5yb3dOb2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlU2VsZWN0aW9uVXAobm9kZS5wYXJlbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLm9uTm9kZVNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZU5vZGVzV2l0aENoZWNrYm94KGV2ZW50OiBFdmVudCwgY2hlY2s6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmZpbHRlcmVkTm9kZXMgfHwgdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gY2hlY2sgJiYgZGF0YSA/IGRhdGEuc2xpY2UoKSA6IFtdO1xuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlU2VsZWN0aW9uRG93bihub2RlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5cyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2ZW50U2VsZWN0aW9uU2V0dGVyUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMub25IZWFkZXJDaGVja2JveFRvZ2dsZS5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIGNoZWNrZWQ6IGNoZWNrIH0pO1xuICAgIH1cblxuICAgIHByb3BhZ2F0ZVNlbGVjdGlvblVwKG5vZGU6IFRyZWVUYWJsZU5vZGUsIHNlbGVjdDogYm9vbGVhbikge1xuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ2hpbGRDb3VudDogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGxldCBjaGlsZFBhcnRpYWxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGRhdGFLZXlWYWx1ZSA9IHRoaXMuZGF0YUtleSA/IFN0cmluZyhPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG5vZGUuZGF0YSwgdGhpcy5kYXRhS2V5KSkgOiBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZChjaGlsZCkpIHNlbGVjdGVkQ2hpbGRDb3VudCsrO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLnBhcnRpYWxTZWxlY3RlZCkgY2hpbGRQYXJ0aWFsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ICYmIHNlbGVjdGVkQ2hpbGRDb3VudCA9PSBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IFsuLi4odGhpcy5zZWxlY3Rpb24gfHwgW10pLCBub2RlXTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcnRpYWxTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhJblNlbGVjdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsOiBhbnksIGk6IG51bWJlcikgPT4gaSAhPSBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3Rpb25LZXlzW2RhdGFLZXlWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRQYXJ0aWFsU2VsZWN0ZWQgfHwgKHNlbGVjdGVkQ2hpbGRDb3VudCA+IDAgJiYgc2VsZWN0ZWRDaGlsZENvdW50ICE9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSkgbm9kZS5wYXJ0aWFsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2Ugbm9kZS5wYXJ0aWFsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVTZWxlY3Rpb25VcChwYXJlbnQsIHNlbGVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wYWdhdGVTZWxlY3Rpb25Eb3duKG5vZGU6IFRyZWVUYWJsZU5vZGUsIHNlbGVjdDogYm9vbGVhbikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICBsZXQgZGF0YUtleVZhbHVlID0gdGhpcy5kYXRhS2V5ID8gU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobm9kZS5kYXRhLCB0aGlzLmRhdGFLZXkpKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHNlbGVjdCAmJiBpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gWy4uLih0aGlzLnNlbGVjdGlvbiB8fCBbXSksIG5vZGVdO1xuICAgICAgICAgICAgaWYgKGRhdGFLZXlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghc2VsZWN0ICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsOiBhbnksIGk6IG51bWJlcikgPT4gaSAhPSBpbmRleCk7XG4gICAgICAgICAgICBpZiAoZGF0YUtleVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0aW9uS2V5c1tkYXRhS2V5VmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5wYXJ0aWFsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlU2VsZWN0aW9uRG93bihjaGlsZCwgc2VsZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQobm9kZTogVHJlZVRhYmxlTm9kZSkge1xuICAgICAgICBpZiAobm9kZSAmJiB0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbktleXNbT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLmRhdGEsIHRoaXMuZGF0YUtleSldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0aW9uKSkgcmV0dXJuIHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSkgPiAtMTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmVxdWFscyhub2RlLCB0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZTogYW55KSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gLTE7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcXVhbHMobm9kZSwgdGhpcy5zZWxlY3Rpb25baV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGlzU2luZ2xlU2VsZWN0aW9uTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gJ3NpbmdsZSc7XG4gICAgfVxuXG4gICAgaXNNdWx0aXBsZVNlbGVjdGlvbk1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZSc7XG4gICAgfVxuXG4gICAgZXF1YWxzKG5vZGUxOiBUcmVlVGFibGVOb2RlLCBub2RlMjogVHJlZVRhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlU2VsZWN0aW9uQnkgPT09ICdlcXVhbHMnID8gbm9kZTEgPT09IG5vZGUyIDogT2JqZWN0VXRpbHMuZXF1YWxzKG5vZGUxLmRhdGEsIG5vZGUyLmRhdGEsIHRoaXMuZGF0YUtleSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgZmllbGQ6IHN0cmluZywgbWF0Y2hNb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNGaWx0ZXJCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyc1tmaWVsZF0gPSB7IHZhbHVlOiB2YWx1ZSwgbWF0Y2hNb2RlOiBtYXRjaE1vZGUgfTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlcnNbZmllbGRdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJzW2ZpZWxkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyKCk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlclRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCB0aGlzLmZpbHRlckRlbGF5KTtcbiAgICB9XG5cbiAgICBmaWx0ZXJHbG9iYWwodmFsdWU6IHN0cmluZywgbWF0Y2hNb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIodmFsdWUsICdnbG9iYWwnLCBtYXRjaE1vZGUpO1xuICAgIH1cblxuICAgIGlzRmlsdGVyQmxhbmsoZmlsdGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiBmaWx0ZXIudHJpbSgpLmxlbmd0aCA9PSAwKSB8fCAoQXJyYXkuaXNBcnJheShmaWx0ZXIpICYmIGZpbHRlci5sZW5ndGggPT0gMCkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2ZpbHRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF6eSkge1xuICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRmlsdGVyKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyc1snZ2xvYmFsJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbHVtbnMgJiYgIXRoaXMuZ2xvYmFsRmlsdGVyRmllbGRzKSB0aHJvdyBuZXcgRXJyb3IoJ0dsb2JhbCBmaWx0ZXJpbmcgcmVxdWlyZXMgZHluYW1pYyBjb2x1bW5zIG9yIGdsb2JhbEZpbHRlckZpZWxkcyB0byBiZSBkZWZpbmVkLicpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGdsb2JhbEZpbHRlckZpZWxkc0FycmF5ID0gdGhpcy5nbG9iYWxGaWx0ZXJGaWVsZHMgfHwgdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWROb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU3RyaWN0TW9kZSA9IHRoaXMuZmlsdGVyTW9kZSA9PT0gJ3N0cmljdCc7XG4gICAgICAgICAgICAgICAgbGV0IGlzVmFsdWVDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlOb2RlID0geyAuLi5ub2RlIH07XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdsb2JhbE1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXNXaXRob3V0Tm9kZTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuZmlsdGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBwcm9wICE9PSAnZ2xvYmFsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJNZXRhID0gPEZpbHRlck1ldGFkYXRhPnRoaXMuZmlsdGVyc1twcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyRmllbGQgPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGZpbHRlck1ldGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlck1hdGNoTW9kZSA9IGZpbHRlck1ldGEubWF0Y2hNb2RlIHx8ICdzdGFydHNXaXRoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ29uc3RyYWludCA9ICg8YW55PnRoaXMuZmlsdGVyU2VydmljZSkuZmlsdGVyc1tmaWx0ZXJNYXRjaE1vZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1dpdGhvdXROb2RlID0geyBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUsIGZpbHRlckNvbnN0cmFpbnQsIGlzU3RyaWN0TW9kZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzU3RyaWN0TW9kZSAmJiAhKHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFpc1N0cmljdE1vZGUgJiYgISh0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpIHx8IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2FsTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyc1snZ2xvYmFsJ10gJiYgIWdsb2JhbE1hdGNoICYmIGdsb2JhbEZpbHRlckZpZWxkc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29weU5vZGVGb3JHbG9iYWwgPSB7IC4uLmNvcHlOb2RlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyRmllbGQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlcnNbJ2dsb2JhbCddLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlckNvbnN0cmFpbnQgPSAoPGFueT50aGlzLmZpbHRlclNlcnZpY2UpLmZpbHRlcnNbKDxhbnk+dGhpcy5maWx0ZXJzKVsnZ2xvYmFsJ10ubWF0Y2hNb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1dpdGhvdXROb2RlID0geyBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUsIGZpbHRlckNvbnN0cmFpbnQsIGlzU3RyaWN0TW9kZSwgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc1N0cmljdE1vZGUgJiYgKHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGVGb3JHbG9iYWwsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZUZvckdsb2JhbCwgcGFyYW1zV2l0aG91dE5vZGUpKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWlzU3RyaWN0TW9kZSAmJiAodGhpcy5pc0ZpbHRlck1hdGNoZWQoY29weU5vZGVGb3JHbG9iYWwsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmZpbmRGaWx0ZXJlZE5vZGVzKGNvcHlOb2RlRm9yR2xvYmFsLCBwYXJhbXNXaXRob3V0Tm9kZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlOb2RlID0gY29weU5vZGVGb3JHbG9iYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IGxvY2FsTWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcnNbJ2dsb2JhbCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0gbG9jYWxNYXRjaCAmJiBnbG9iYWxNYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMucHVzaChjb3B5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpc1ZhbHVlQ2hhbmdlZCA9IGlzVmFsdWVDaGFuZ2VkIHx8ICFsb2NhbE1hdGNoIHx8IGdsb2JhbE1hdGNoIHx8IChsb2NhbE1hdGNoICYmIHRoaXMuZmlsdGVyZWROb2Rlcy5sZW5ndGggPiAwKSB8fCAoIWdsb2JhbE1hdGNoICYmIHRoaXMuZmlsdGVyZWROb2Rlcy5sZW5ndGggPT09IDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaXNWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZE5vZGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFJlY29yZHMgPSB0aGlzLmZpbHRlcmVkTm9kZXMgPyB0aGlzLmZpbHRlcmVkTm9kZXMubGVuZ3RoIDogdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJzdCA9IDA7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRWYWx1ZSA9IHRoaXMuZmlsdGVyZWROb2RlcyB8fCB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdCh7XG4gICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlOiBmaWx0ZXJlZFZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFibGVTZXJ2aWNlLm9uVUlVcGRhdGUoZmlsdGVyZWRWYWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFNjcm9sbFRvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEZpbHRlcmVkTm9kZXMobm9kZTogVHJlZVRhYmxlTm9kZSwgcGFyYW1zV2l0aG91dE5vZGU6IGFueSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBbLi4ubm9kZS5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkTm9kZSBvZiBjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5Q2hpbGROb2RlID0geyAuLi5jaGlsZE5vZGUgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJNYXRjaGVkKGNvcHlDaGlsZE5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29weUNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0ZpbHRlck1hdGNoZWQobm9kZTogVHJlZVRhYmxlTm9kZSwgZmlsdGVyT3B0aW9uczogVHJlZVRhYmxlRmlsdGVyT3B0aW9ucykge1xuICAgICAgICBsZXQgeyBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUsIGZpbHRlckNvbnN0cmFpbnQsIGlzU3RyaWN0TW9kZSwgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkgfSA9IDxhbnk+ZmlsdGVyT3B0aW9ucztcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXNNYXRjaGVkID0gKGZpZWxkOiBzdHJpbmcpID0+IGZpbHRlckNvbnN0cmFpbnQoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLmRhdGEsIGZpZWxkKSwgZmlsdGVyVmFsdWUsIDxzdHJpbmc+dGhpcy5maWx0ZXJMb2NhbGUpO1xuXG4gICAgICAgIG1hdGNoZWQgPSBnbG9iYWxGaWx0ZXJGaWVsZHNBcnJheT8ubGVuZ3RoID8gZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkuc29tZSgoZ2xvYmFsRmlsdGVyRmllbGQpID0+IGlzTWF0Y2hlZChnbG9iYWxGaWx0ZXJGaWVsZC5maWVsZCB8fCBnbG9iYWxGaWx0ZXJGaWVsZCkpIDogaXNNYXRjaGVkKGZpbHRlckZpZWxkKTtcblxuICAgICAgICBpZiAoIW1hdGNoZWQgfHwgKGlzU3RyaWN0TW9kZSAmJiAhdGhpcy5pc05vZGVMZWFmKG5vZGUpKSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMobm9kZSwgeyBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUsIGZpbHRlckNvbnN0cmFpbnQsIGlzU3RyaWN0TW9kZSwgZ2xvYmFsRmlsdGVyRmllbGRzQXJyYXkgfSkgfHwgbWF0Y2hlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cblxuICAgIGlzTm9kZUxlYWYobm9kZTogVHJlZVRhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5sZWFmID09PSBmYWxzZSA/IGZhbHNlIDogIShub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBoYXNGaWx0ZXIoKSB7XG4gICAgICAgIGxldCBlbXB0eSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5maWx0ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhZW1wdHk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgc29ydCBhbmQgcGFnaW5hdG9yIHN0YXRlLlxuICAgICAqIEBncm91cCBNZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3NvcnRGaWVsZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NvcnRPcmRlciA9IDE7XG4gICAgICAgIHRoaXMuX211bHRpU29ydE1ldGEgPSBudWxsO1xuICAgICAgICB0aGlzLnRhYmxlU2VydmljZS5vblNvcnQobnVsbCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZE5vZGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XG5cbiAgICAgICAgdGhpcy5maXJzdCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMubGF6eSkge1xuICAgICAgICAgICAgdGhpcy5vbkxhenlMb2FkLmVtaXQodGhpcy5jcmVhdGVMYXp5TG9hZE1ldGFkYXRhKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b3RhbFJlY29yZHMgPSB0aGlzLl92YWx1ZSA/IHRoaXMuX3ZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0aW5nQ2VsbChjZWxsOiBhbnksIGRhdGE6IGFueSwgZmllbGQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsID0gY2VsbDtcbiAgICAgICAgdGhpcy5lZGl0aW5nQ2VsbERhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBpc0VkaXRpbmdDZWxsVmFsaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRpbmdDZWxsICYmIERvbUhhbmRsZXIuZmluZCh0aGlzLmVkaXRpbmdDZWxsLCAnLm5nLWludmFsaWQubmctZGlydHknKS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50RWRpdExpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRFZGl0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmRvY3VtZW50LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGl0aW5nQ2VsbCAmJiAhdGhpcy5lZGl0aW5nQ2VsbENsaWNrICYmIHRoaXMuaXNFZGl0aW5nQ2VsbFZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLmVkaXRpbmdDZWxsLCAncC1jZWxsLWVkaXRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nQ2VsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FZGl0Q29tcGxldGUuZW1pdCh7IGZpZWxkOiB0aGlzLmVkaXRpbmdDZWxsRmllbGQsIGRhdGE6IHRoaXMuZWRpdGluZ0NlbGxEYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRmllbGQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdDZWxsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRFZGl0TGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RWRpdExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50RWRpdExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZWRpdGluZ0NlbGwgPSBudWxsO1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRmllbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmVkaXRpbmdDZWxsRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBudWxsO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbcFRyZWVUYWJsZUJvZHldJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXNlcmlhbGl6ZWROb2RlIGxldC1yb3dJbmRleD1cImluZGV4XCIgW25nRm9yT2ZdPVwic2VyaWFsaXplZE5vZGVzIHx8IHR0LnNlcmlhbGl6ZWRWYWx1ZVwiIFtuZ0ZvclRyYWNrQnldPVwidHQucm93VHJhY2tCeVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcmlhbGl6ZWROb2RlLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBzZXJpYWxpemVkTm9kZSwgbm9kZTogc2VyaWFsaXplZE5vZGUubm9kZSwgcm93RGF0YTogc2VyaWFsaXplZE5vZGUubm9kZS5kYXRhLCBjb2x1bW5zOiBjb2x1bW5zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHQuaXNFbXB0eSgpXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHQuZW1wdHlNZXNzYWdlVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zLCBmcm96ZW46IGZyb3plbiB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRCb2R5IHtcbiAgICBASW5wdXQoJ3BUcmVlVGFibGVCb2R5JykgY29sdW1uczogYW55W10gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoJ3BUcmVlVGFibGVCb2R5VGVtcGxhdGUnKSB0ZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBASW5wdXQoKSBmcm96ZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBzZXJpYWxpemVkTm9kZXM6IGFueTtcblxuICAgIEBJbnB1dCgpIHNjcm9sbGVyT3B0aW9uczogYW55O1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHQ6IFRyZWVUYWJsZSwgcHVibGljIHRyZWVUYWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS51aVVwZGF0ZVNvdXJjZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR0LnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsZXJPcHRpb24ob3B0aW9uOiBhbnksIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudHQudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgdGhpcy5zY3JvbGxlck9wdGlvbnM7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucyA/IG9wdGlvbnNbb3B0aW9uXSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRSb3dJbmRleChyb3dJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdldEl0ZW1PcHRpb25zID0gdGhpcy5nZXRTY3JvbGxlck9wdGlvbignZ2V0SXRlbU9wdGlvbnMnKTtcbiAgICAgICAgcmV0dXJuIGdldEl0ZW1PcHRpb25zID8gZ2V0SXRlbU9wdGlvbnMocm93SW5kZXgpLmluZGV4IDogcm93SW5kZXg7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbdHRTY3JvbGxhYmxlVmlld10nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI3Njcm9sbEhlYWRlciBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2ICNzY3JvbGxIZWFkZXJCb3ggY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWhlYWRlci1ib3hcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWhlYWRlci10YWJsZVwiIFtuZ0NsYXNzXT1cInR0LnRhYmxlU3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInR0LnRhYmxlU3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZyb3plbiA/IHR0LmZyb3plbkNvbEdyb3VwVGVtcGxhdGUgfHwgdHQuY29sR3JvdXBUZW1wbGF0ZSA6IHR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIHJvbGU9XCJyb3dncm91cFwiIGNsYXNzPVwicC10cmVldGFibGUtdGhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmcm96ZW4gPyB0dC5mcm96ZW5IZWFkZXJUZW1wbGF0ZSB8fCB0dC5oZWFkZXJUZW1wbGF0ZSA6IHR0LmhlYWRlclRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1ucyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cC1zY3JvbGxlclxuICAgICAgICAgICAgKm5nSWY9XCJ0dC52aXJ0dWFsU2Nyb2xsXCJcbiAgICAgICAgICAgICNzY3JvbGxlclxuICAgICAgICAgICAgW2l0ZW1zXT1cInR0LnNlcmlhbGl6ZWRWYWx1ZVwiXG4gICAgICAgICAgICBzdHlsZUNsYXNzPVwicC10cmVldGFibGUtc2Nyb2xsYWJsZS1ib2R5XCJcbiAgICAgICAgICAgIFtzdHlsZV09XCJ7IGhlaWdodDogdHQuc2Nyb2xsSGVpZ2h0ICE9PSAnZmxleCcgPyB0dC5zY3JvbGxIZWlnaHQgOiB1bmRlZmluZWQgfVwiXG4gICAgICAgICAgICBbc2Nyb2xsSGVpZ2h0XT1cInNjcm9sbEhlaWdodCAhPT0gJ2ZsZXgnID8gdW5kZWZpbmVkIDogJzEwMCUnXCJcbiAgICAgICAgICAgIFtpdGVtU2l6ZV09XCJ0dC52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgfHwgdHQuX3ZpcnR1YWxSb3dIZWlnaHRcIlxuICAgICAgICAgICAgW2xhenldPVwidHQubGF6eVwiXG4gICAgICAgICAgICAob25MYXp5TG9hZCk9XCJ0dC5vbkxhenlJdGVtTG9hZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtvcHRpb25zXT1cInR0LnZpcnR1YWxTY3JvbGxPcHRpb25zXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNvbnRlbnRcIiBsZXQtaXRlbXMgbGV0LXNjcm9sbGVyT3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnVpbGRJbkl0ZW1zOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogaXRlbXMsIG9wdGlvbnM6IHNjcm9sbGVyT3B0aW9ucyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImxvYWRlclwiIGxldC1zY3JvbGxlck9wdGlvbnM9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsb2FkZXJUZW1wbGF0ZTsgY29udGV4dDogeyBvcHRpb25zOiBzY3JvbGxlck9wdGlvbnMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9wLXNjcm9sbGVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXR0LnZpcnR1YWxTY3JvbGxcIj5cbiAgICAgICAgICAgIDxkaXYgI3Njcm9sbEJvZHkgY2xhc3M9XCJwLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWJvZHlcIiBbbmdTdHlsZV09XCJ7ICdtYXgtaGVpZ2h0JzogdHQuc2Nyb2xsSGVpZ2h0ICE9PSAnZmxleCcgPyBzY3JvbGxIZWlnaHQgOiB1bmRlZmluZWQsICdvdmVyZmxvdy15JzogIWZyb3plbiAmJiB0dC5zY3JvbGxIZWlnaHQgPyAnc2Nyb2xsJyA6IHVuZGVmaW5lZCB9XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1aWxkSW5JdGVtczsgY29udGV4dDogeyAkaW1wbGljaXQ6IHNlcmlhbGl6ZWRWYWx1ZSwgb3B0aW9uczoge30gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjYnVpbGRJbkl0ZW1zIGxldC1pdGVtcyBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgPHRhYmxlIHJvbGU9XCJ0YWJsZVwiICNzY3JvbGxUYWJsZSBbY2xhc3NdPVwidHQudGFibGVTdHlsZUNsYXNzXCIgW25nQ2xhc3NdPVwic2Nyb2xsZXJPcHRpb25zLmNvbnRlbnRTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwidHQudGFibGVTdHlsZVwiIFtzdHlsZV09XCJzY3JvbGxlck9wdGlvbnMuY29udGVudFN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZyb3plbiA/IHR0LmZyb3plbkNvbEdyb3VwVGVtcGxhdGUgfHwgdHQuY29sR3JvdXBUZW1wbGF0ZSA6IHR0LmNvbEdyb3VwVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8dGJvZHkgcm9sZT1cInJvd2dyb3VwXCIgY2xhc3M9XCJwLXRyZWV0YWJsZS10Ym9keVwiIFtwVHJlZVRhYmxlQm9keV09XCJjb2x1bW5zXCIgW3BUcmVlVGFibGVCb2R5VGVtcGxhdGVdPVwiZnJvemVuID8gdHQuZnJvemVuQm9keVRlbXBsYXRlIHx8IHR0LmJvZHlUZW1wbGF0ZSA6IHR0LmJvZHlUZW1wbGF0ZVwiIFtzZXJpYWxpemVkTm9kZXNdPVwiaXRlbXNcIiBbZnJvemVuXT1cImZyb3plblwiPjwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPGRpdiAjc2Nyb2xsYWJsZUFsaWduZXIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50XCIgKm5nSWY9XCJmcm96ZW5cIj48L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8ZGl2ICNzY3JvbGxGb290ZXIgKm5nSWY9XCJ0dC5mb290ZXJUZW1wbGF0ZVwiIGNsYXNzPVwicC10cmVldGFibGUtc2Nyb2xsYWJsZS1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgI3Njcm9sbEZvb3RlckJveCBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLWJveFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInAtdHJlZXRhYmxlLXNjcm9sbGFibGUtZm9vdGVyLXRhYmxlXCIgW25nQ2xhc3NdPVwidHQudGFibGVTdHlsZUNsYXNzXCIgW25nU3R5bGVdPVwidHQudGFibGVTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZnJvemVuID8gdHQuZnJvemVuQ29sR3JvdXBUZW1wbGF0ZSB8fCB0dC5jb2xHcm91cFRlbXBsYXRlIDogdHQuY29sR3JvdXBUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbHVtbnMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8dGZvb3Qgcm9sZT1cInJvd2dyb3VwXCIgY2xhc3M9XCJwLXRyZWV0YWJsZS10Zm9vdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZyb3plbiA/IHR0LmZyb3plbkZvb3RlclRlbXBsYXRlIHx8IHR0LmZvb3RlclRlbXBsYXRlIDogdHQuZm9vdGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRTY3JvbGxhYmxlVmlldyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCd0dFNjcm9sbGFibGVWaWV3JykgY29sdW1uczogYW55W10gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBmcm96ZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxIZWFkZXInKSBzY3JvbGxIZWFkZXJWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsSGVhZGVyQm94Jykgc2Nyb2xsSGVhZGVyQm94Vmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEJvZHknKSBzY3JvbGxCb2R5Vmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbFRhYmxlJykgc2Nyb2xsVGFibGVWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnbG9hZGluZ1RhYmxlJykgc2Nyb2xsTG9hZGluZ1RhYmxlVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbEZvb3RlcicpIHNjcm9sbEZvb3RlclZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxGb290ZXJCb3gnKSBzY3JvbGxGb290ZXJCb3hWaWV3Q2hpbGQ6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsYWJsZUFsaWduZXInKSBzY3JvbGxhYmxlQWxpZ25lclZpZXdDaGlsZDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxlcicpIHNjcm9sbGVyOiBOdWxsYWJsZTxTY3JvbGxlcj47XG5cbiAgICBoZWFkZXJTY3JvbGxMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgYm9keVNjcm9sbExpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICBmb290ZXJTY3JvbGxMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgZnJvemVuU2libGluZ0JvZHk6IE51bGxhYmxlPEVsZW1lbnQ+O1xuXG4gICAgdG90YWxSZWNvcmRzU3Vic2NyaXB0aW9uOiBOdWxsYWJsZTxTdWJzY3JpcHRpb24+O1xuXG4gICAgX3Njcm9sbEhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICAgIHByZXZlbnRCb2R5U2Nyb2xsUHJvcGFnYXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBnZXQgc2Nyb2xsSGVpZ2h0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsSGVpZ2h0KHZhbDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB2YWw7XG4gICAgICAgIGlmICh2YWwgIT0gbnVsbCAmJiAodmFsLmluY2x1ZGVzKCclJykgfHwgdmFsLmluY2x1ZGVzKCdjYWxjJykpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGVyY2VudGFnZSBzY3JvbGwgaGVpZ2h0IGNhbGN1bGF0aW9uIGlzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIG1vcmUgcGVyZm9ybWFudCBDU1MgYmFzZWQgZmxleCBtb2RlLCB1c2Ugc2Nyb2xsSGVpZ2h0PVwiZmxleFwiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgdHQ6IFRyZWVUYWJsZSwgcHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZyb3plbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LmZyb3plbkNvbHVtbnMgfHwgdGhpcy50dC5mcm96ZW5Cb2R5VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdwLXRyZWV0YWJsZS11bmZyb3plbi12aWV3Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGZyb3plblZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoZnJvemVuVmlldykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50dC52aXJ0dWFsU2Nyb2xsKSB0aGlzLmZyb3plblNpYmxpbmdCb2R5ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKGZyb3plblZpZXcsICcucC1zY3JvbGxlci12aWV3cG9ydCcpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZnJvemVuU2libGluZ0JvZHkgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoZnJvemVuVmlldywgJy5wLXRyZWV0YWJsZS1zY3JvbGxhYmxlLWJvZHknKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsQmFyV2lkdGggPSBEb21IYW5kbGVyLmNhbGN1bGF0ZVNjcm9sbGJhcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgKHRoaXMuc2Nyb2xsSGVhZGVyQm94Vmlld0NoaWxkIGFzIEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRm9vdGVyQm94Vmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsRm9vdGVyQm94Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxGb290ZXJCb3hWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxhYmxlQWxpZ25lclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbGFibGVBbGlnbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQWxpZ25lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IERvbUhhbmRsZXIuY2FsY3VsYXRlU2Nyb2xsYmFySGVpZ2h0KCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclNjcm9sbExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5zY3JvbGxIZWFkZXJCb3hWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCB0aGlzLm9uSGVhZGVyU2Nyb2xsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgdGhpcy5vbkZvb3RlclNjcm9sbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZnJvemVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oKHRoaXMuc2Nyb2xsZXI/LmdldEVsZW1lbnRSZWYoKSBhcyBFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgdGhpcy5vbkJvZHlTY3JvbGwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlTY3JvbGxMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcsIHRoaXMub25Cb2R5U2Nyb2xsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxGb290ZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvb3RlclNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJTY3JvbGxMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGVyICYmIHRoaXMuc2Nyb2xsZXIuZ2V0RWxlbWVudFJlZigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVNjcm9sbExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhlYWRlclNjcm9sbCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsSGVhZGVyVmlld0NoaWxkPy5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG5cbiAgICAgICAgKHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZCBhcyBFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZCAmJiB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEZvb3RlclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkZvb3RlclNjcm9sbCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkPy5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICh0aGlzLnNjcm9sbEJvZHlWaWV3Q2hpbGQgYXMgRWxlbWVudFJlZikubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmVudEJvZHlTY3JvbGxQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Cb2R5U2Nyb2xsKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldmVudEJvZHlTY3JvbGxQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50Qm9keVNjcm9sbFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQgJiYgdGhpcy5zY3JvbGxIZWFkZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgKHRoaXMuc2Nyb2xsSGVhZGVyQm94Vmlld0NoaWxkIGFzIEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IC0xICogZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkICYmIHRoaXMuc2Nyb2xsRm9vdGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICh0aGlzLnNjcm9sbEZvb3RlckJveFZpZXdDaGlsZCBhcyBFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAtMSAqIGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZyb3plblNpYmxpbmdCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLmZyb3plblNpYmxpbmdCb2R5LnNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb1ZpcnR1YWxJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvSW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG8ob3B0aW9uczogU2Nyb2xsVG9PcHRpb25zKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5zY3JvbGxUbykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm9keVZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAodGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkIGFzIEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IG9wdGlvbnMubGVmdDtcbiAgICAgICAgICAgICAgICAodGhpcy5zY3JvbGxCb2R5Vmlld0NoaWxkIGFzIEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gb3B0aW9ucy50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICB0aGlzLmZyb3plblNpYmxpbmdCb2R5ID0gbnVsbDtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0U29ydGFibGVDb2x1bW5dJyxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50JyxcbiAgICAgICAgJ1tjbGFzcy5wLXNvcnRhYmxlLWNvbHVtbl0nOiAnaXNFbmFibGVkKCknLFxuICAgICAgICAnW2NsYXNzLnAtaGlnaGxpZ2h0XSc6ICdzb3J0ZWQnLFxuICAgICAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2lzRW5hYmxlZCgpID8gXCIwXCIgOiBudWxsJyxcbiAgICAgICAgJ1thdHRyLnJvbGVdJzogJ1wiY29sdW1uaGVhZGVyXCInLFxuICAgICAgICAnW2F0dHIuYXJpYS1zb3J0XSc6ICdhcmlhU29ydGVkJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRTb3J0YWJsZUNvbHVtbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoJ3R0U29ydGFibGVDb2x1bW4nKSBmaWVsZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgdHRTb3J0YWJsZUNvbHVtbkRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgc29ydGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XG5cbiAgICBnZXQgYXJpYVNvcnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydGVkICYmIHRoaXMudHQuc29ydE9yZGVyIDwgMCkgcmV0dXJuICdkZXNjZW5kaW5nJztcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zb3J0ZWQgJiYgdGhpcy50dC5zb3J0T3JkZXIgPiAwKSByZXR1cm4gJ2FzY2VuZGluZyc7XG4gICAgICAgIGVsc2UgcmV0dXJuICdub25lJztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHQ6IFRyZWVUYWJsZSkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS5zb3J0U291cmNlJC5zdWJzY3JpYmUoKHNvcnRNZXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0U3RhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU29ydFN0YXRlKCkge1xuICAgICAgICB0aGlzLnNvcnRlZCA9IHRoaXMudHQuaXNTb3J0ZWQoPHN0cmluZz50aGlzLmZpZWxkKSBhcyBib29sZWFuO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy50dC5zb3J0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBmaWVsZDogdGhpcy5maWVsZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIERvbUhhbmRsZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICAgIG9uRW50ZXJLZXkoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR0U29ydGFibGVDb2x1bW5EaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdHJlZVRhYmxlU29ydEljb24nLFxuICAgIHRlbXBsYXRlOiBgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdHQuc29ydEljb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPFNvcnRBbHRJY29uIFtzdHlsZUNsYXNzXT1cIidwLXNvcnRhYmxlLWNvbHVtbi1pY29uJ1wiICpuZ0lmPVwic29ydE9yZGVyID09PSAwXCIgLz5cbiAgICAgICAgICAgIDxTb3J0QW1vdW50VXBBbHRJY29uIFtzdHlsZUNsYXNzXT1cIidwLXNvcnRhYmxlLWNvbHVtbi1pY29uJ1wiICpuZ0lmPVwic29ydE9yZGVyID09PSAxXCIgLz5cbiAgICAgICAgICAgIDxTb3J0QW1vdW50RG93bkljb24gW3N0eWxlQ2xhc3NdPVwiJ3Atc29ydGFibGUtY29sdW1uLWljb24nXCIgKm5nSWY9XCJzb3J0T3JkZXIgPT09IC0xXCIgLz5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwidHQuc29ydEljb25UZW1wbGF0ZVwiIGNsYXNzPVwicC1zb3J0YWJsZS1jb2x1bW4taWNvblwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidHQuc29ydEljb25UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHNvcnRPcmRlciB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPmAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVFRTb3J0SWNvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBmaWVsZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsQXNjOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIHNvcnRPcmRlcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS5zb3J0U291cmNlJC5zdWJzY3JpYmUoKHNvcnRNZXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU29ydFN0YXRlKCk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTb3J0U3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR0LnNvcnRNb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSB0aGlzLnR0LmlzU29ydGVkKDxzdHJpbmc+dGhpcy5maWVsZCkgPyB0aGlzLnR0LnNvcnRPcmRlciA6IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50dC5zb3J0TW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgbGV0IHNvcnRNZXRhID0gdGhpcy50dC5nZXRTb3J0TWV0YSg8c3RyaW5nPnRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSBzb3J0TWV0YSA/IHNvcnRNZXRhLm9yZGVyIDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0UmVzaXphYmxlQ29sdW1uXScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFRUUmVzaXphYmxlQ29sdW1uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB0dFJlc2l6YWJsZUNvbHVtbkRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgcmVzaXplcjogSFRNTFNwYW5FbGVtZW50IHwgdW5kZWZpbmVkO1xuXG4gICAgcmVzaXplck1vdXNlRG93bkxpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICBkb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICBkb2N1bWVudE1vdXNlVXBMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1yZXNpemFibGUtY29sdW1uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnJlc2l6ZXIsICdwLWNvbHVtbi1yZXNpemVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVzaXplcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZXJNb3VzZURvd25MaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMucmVzaXplciwgJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5vbkRvY3VtZW50TW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNlVXBMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5vbkRvY3VtZW50TW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50TW91c2VVcExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TW91c2VVcExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMudHQub25Db2x1bW5SZXNpemVCZWdpbihldmVudCk7XG4gICAgICAgIHRoaXMuYmluZERvY3VtZW50RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb25Eb2N1bWVudE1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLnR0Lm9uQ29sdW1uUmVzaXplKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50TW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLnR0Lm9uQ29sdW1uUmVzaXplRW5kKGV2ZW50LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dFJlc2l6YWJsZUNvbHVtbkRpc2FibGVkICE9PSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemVyTW91c2VEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplck1vdXNlRG93bkxpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZXJNb3VzZURvd25MaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50RXZlbnRzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0dFJlb3JkZXJhYmxlQ29sdW1uXScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFRUUmVvcmRlcmFibGVDb2x1bW4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHR0UmVvcmRlcmFibGVDb2x1bW5EaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIGRyYWdTdGFydExpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICBkcmFnT3Zlckxpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICBkcmFnRW50ZXJMaXN0ZW5lcjogVm9pZExpc3RlbmVyO1xuXG4gICAgZHJhZ0xlYXZlTGlzdGVuZXI6IFZvaWRMaXN0ZW5lcjtcblxuICAgIG1vdXNlRG93bkxpc3RlbmVyOiBWb2lkTGlzdGVuZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnksIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSkge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd25MaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcsIHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnT3Zlckxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInLCB0aGlzLm9uRHJhZ0VudGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW50ZXInLCB0aGlzLm9uRHJhZ0VudGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnLCB0aGlzLm9uRHJhZ0xlYXZlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd25MaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ092ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdFbnRlckxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRW50ZXJMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnTGVhdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMZWF2ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBldmVudC50YXJnZXQubm9kZU5hbWUgPT09ICdURVhUQVJFQScgfHwgRG9tSGFuZGxlci5oYXNDbGFzcyhldmVudC50YXJnZXQsICdwLWNvbHVtbi1yZXNpemVyJykpIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgZWxzZSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkRyYWdTdGFydChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIHRoaXMudHQub25Db2x1bW5EcmFnU3RhcnQoZXZlbnQsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgb25EcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25EcmFnRW50ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICB0aGlzLnR0Lm9uQ29sdW1uRHJhZ0VudGVyKGV2ZW50LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIG9uRHJhZ0xlYXZlKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgdGhpcy50dC5vbkNvbHVtbkRyYWdMZWF2ZShldmVudCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gICAgb25Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudHQub25Db2x1bW5Ecm9wKGV2ZW50LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dFJlb3JkZXJhYmxlQ29sdW1uRGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0dFNlbGVjdGFibGVSb3ddJyxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50JyxcbiAgICAgICAgJ1tjbGFzcy5wLWhpZ2hsaWdodF0nOiAnc2VsZWN0ZWQnLFxuICAgICAgICAnW2F0dHIuZGF0YS1wLWhpZ2hsaWdodF0nOiAnc2VsZWN0ZWQnLFxuICAgICAgICAnW2F0dHIuYXJpYS1jaGVja2VkXSc6ICdzZWxlY3RlZCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFRUU2VsZWN0YWJsZVJvdyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoJ3R0U2VsZWN0YWJsZVJvdycpIHJvd05vZGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHR0U2VsZWN0YWJsZVJvd0Rpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgdGFibGVTZXJ2aWNlOiBUcmVlVGFibGVTZXJ2aWNlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudHQudGFibGVTZXJ2aWNlLnNlbGVjdGlvblNvdXJjZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50dC5pc1NlbGVjdGVkKHRoaXMucm93Tm9kZS5ub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50dC5pc1NlbGVjdGVkKHRoaXMucm93Tm9kZS5ub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50dC5oYW5kbGVSb3dDbGljayh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgcm93Tm9kZTogdGhpcy5yb3dOb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW50ZXJLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmhhbmRsZVJvd1RvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW50ZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudHQuc2VsZWN0aW9uTW9kZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgdGhpcy50dC50b2dnbGVOb2RlV2l0aENoZWNrYm94KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByb3dOb2RlOiB0aGlzLnJvd05vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHRTZWxlY3RhYmxlUm93RGlzYWJsZWQgIT09IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdHRTZWxlY3RhYmxlUm93RGJsQ2xpY2tdJyxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50JyxcbiAgICAgICAgJ1tjbGFzcy5wLWhpZ2hsaWdodF0nOiAnc2VsZWN0ZWQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVFNlbGVjdGFibGVSb3dEYmxDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoJ3R0U2VsZWN0YWJsZVJvd0RibENsaWNrJykgcm93Tm9kZTogYW55O1xuXG4gICAgQElucHV0KCkgdHRTZWxlY3RhYmxlUm93RGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBzZWxlY3RlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2Uuc2VsZWN0aW9uU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnR0LmlzU2VsZWN0ZWQodGhpcy5yb3dOb2RlLm5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnR0LmlzU2VsZWN0ZWQodGhpcy5yb3dOb2RlLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmhhbmRsZVJvd0NsaWNrKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByb3dOb2RlOiB0aGlzLnJvd05vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50dFNlbGVjdGFibGVSb3dEaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0dENvbnRleHRNZW51Um93XScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCcsXG4gICAgICAgICdbY2xhc3MucC1oaWdobGlnaHQtY29udGV4dG1lbnVdJzogJ3NlbGVjdGVkJyxcbiAgICAgICAgJ1thdHRyLnRhYmluZGV4XSc6ICdpc0VuYWJsZWQoKSA/IDAgOiB1bmRlZmluZWQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVENvbnRleHRNZW51Um93IHtcbiAgICBASW5wdXQoJ3R0Q29udGV4dE1lbnVSb3cnKSByb3dOb2RlOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSB0dENvbnRleHRNZW51Um93RGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBzZWxlY3RlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2UuY29udGV4dE1lbnVTb3VyY2UkLnN1YnNjcmliZSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnR0LmVxdWFscyh0aGlzLnJvd05vZGUubm9kZSwgbm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgICBvbkNvbnRleHRNZW51KGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50dC5oYW5kbGVSb3dSaWdodENsaWNrKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICByb3dOb2RlOiB0aGlzLnJvd05vZGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHRDb250ZXh0TWVudVJvd0Rpc2FibGVkICE9PSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10cmVlVGFibGVDaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3ggcC1jb21wb25lbnRcIiBbbmdDbGFzc109XCJ7ICdwLWNoZWNrYm94LWZvY3VzZWQnOiBmb2N1c2VkIH1cIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCIgdGFiaW5kZXg9XCItMVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI2JveCBbbmdDbGFzc109XCJ7ICdwLWNoZWNrYm94LWJveCc6IHRydWUsICdwLWhpZ2hsaWdodCc6IGNoZWNrZWQsICdwLWZvY3VzJzogZm9jdXNlZCwgJ3AtaW5kZXRlcm1pbmF0ZSc6IHJvd05vZGUubm9kZS5wYXJ0aWFsU2VsZWN0ZWQsICdwLWRpc2FibGVkJzogZGlzYWJsZWQgfVwiIHJvbGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJjaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0dC5jaGVja2JveEljb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIFtzdHlsZUNsYXNzXT1cIidwLWNoZWNrYm94LWljb24nXCIgKm5nSWY9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE1pbnVzSWNvbiBbc3R5bGVDbGFzc109XCIncC1jaGVja2JveC1pY29uJ1wiICpuZ0lmPVwicm93Tm9kZS5ub2RlLnBhcnRpYWxTZWxlY3RlZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0dC5jaGVja2JveEljb25UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0dC5jaGVja2JveEljb25UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNoZWNrZWQsIHBhcnRpYWxTZWxlY3RlZDogcm93Tm9kZS5ub2RlLnBhcnRpYWxTZWxlY3RlZCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVENoZWNrYm94IHtcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgndmFsdWUnKSByb3dOb2RlOiBhbnk7XG5cbiAgICBjaGVja2VkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS5zZWxlY3Rpb25Tb3VyY2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnR0LmlzU2VsZWN0ZWQodGhpcy5yb3dOb2RlLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMudHQuaXNTZWxlY3RlZCh0aGlzLnJvd05vZGUubm9kZSk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnR0LnRvZ2dsZU5vZGVXaXRoQ2hlY2tib3goe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHJvd05vZGU6IHRoaXMucm93Tm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgRG9tSGFuZGxlci5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdHJlZVRhYmxlSGVhZGVyQ2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94IHAtY29tcG9uZW50XCIgW25nQ2xhc3NdPVwieyAncC1jaGVja2JveC1mb2N1c2VkJzogZm9jdXNlZCB9XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50LCBjYi5jaGVja2VkKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaGlkZGVuLWFjY2Vzc2libGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2NiIHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIiBbZGlzYWJsZWRdPVwiIXR0LnZhbHVlIHx8IHR0LnZhbHVlLmxlbmd0aCA9PT0gMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgI2JveCBbbmdDbGFzc109XCJ7ICdwLWNoZWNrYm94LWJveCc6IHRydWUsICdwLWhpZ2hsaWdodCc6IGNoZWNrZWQsICdwLWZvY3VzJzogZm9jdXNlZCwgJ3AtZGlzYWJsZWQnOiAhdHQudmFsdWUgfHwgdHQudmFsdWUubGVuZ3RoID09PSAwIH1cIiByb2xlPVwiY2hlY2tib3hcIiBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiY2hlY2tlZFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdHQuaGVhZGVyQ2hlY2tib3hJY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiAqbmdJZj1cImNoZWNrZWRcIiBbc3R5bGVDbGFzc109XCIncC1jaGVja2JveC1pY29uJ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWNoZWNrYm94LWljb25cIiAqbmdJZj1cInR0LmhlYWRlckNoZWNrYm94SWNvblRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cInR0LmhlYWRlckNoZWNrYm94SWNvblRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY2hlY2tlZCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVEhlYWRlckNoZWNrYm94IHtcbiAgICBAVmlld0NoaWxkKCdib3gnKSBib3hWaWV3Q2hpbGQ6IEVsZW1lbnRSZWYgfCB1bmRlZmluZWQ7XG5cbiAgICBjaGVja2VkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICB2YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyB0YWJsZVNlcnZpY2U6IFRyZWVUYWJsZVNlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnR0LnRhYmxlU2VydmljZS51aVVwZGF0ZVNvdXJjZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMudXBkYXRlQ2hlY2tlZFN0YXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy50dC50YWJsZVNlcnZpY2Uuc2VsZWN0aW9uU291cmNlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy51cGRhdGVDaGVja2VkU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMudXBkYXRlQ2hlY2tlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMudHQudmFsdWUgJiYgdGhpcy50dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnR0LnRvZ2dsZU5vZGVzV2l0aENoZWNrYm94KGV2ZW50LCAhY2hlY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBEb21IYW5kbGVyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ2hlY2tlZFN0YXRlKCkge1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICBsZXQgY2hlY2tlZCE6IGJvb2xlYW47XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnR0LmZpbHRlcmVkTm9kZXMgfHwgdGhpcy50dC52YWx1ZTtcblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHQuaXNTZWxlY3RlZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdHRFZGl0YWJsZUNvbHVtbl0nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUVEVkaXRhYmxlQ29sdW1uIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCd0dEVkaXRhYmxlQ29sdW1uJykgZGF0YTogYW55O1xuXG4gICAgQElucHV0KCd0dEVkaXRhYmxlQ29sdW1uRmllbGQnKSBmaWVsZDogYW55O1xuXG4gICAgQElucHV0KCkgdHRFZGl0YWJsZUNvbHVtbkRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSkge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1lZGl0YWJsZS1jb2x1bW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnR0LmVkaXRpbmdDZWxsQ2xpY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50dC5lZGl0aW5nQ2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LmVkaXRpbmdDZWxsICE9PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnR0LmlzRWRpdGluZ0NlbGxWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudHQuZWRpdGluZ0NlbGwsICdwLWNlbGwtZWRpdGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DZWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5DZWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuQ2VsbCgpIHtcbiAgICAgICAgdGhpcy50dC51cGRhdGVFZGl0aW5nQ2VsbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZGF0YSwgdGhpcy5maWVsZCk7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1jZWxsLWVkaXRpbmcnKTtcbiAgICAgICAgdGhpcy50dC5vbkVkaXRJbml0LmVtaXQoeyBmaWVsZDogdGhpcy5maWVsZCwgZGF0YTogdGhpcy5kYXRhIH0pO1xuICAgICAgICB0aGlzLnR0LmVkaXRpbmdDZWxsQ2xpY2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZvY3VzYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpbnB1dCwgdGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VFZGl0aW5nQ2VsbCgpIHtcbiAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLnR0LmVkaXRpbmdDZWxsLCAncC1jaGVja2JveC1pY29uJyk7XG4gICAgICAgIHRoaXMudHQuZWRpdGluZ0NlbGwgPSBudWxsO1xuICAgICAgICB0aGlzLnR0LnVuYmluZERvY3VtZW50RWRpdExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAvL2VudGVyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dC5pc0VkaXRpbmdDZWxsVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMudHQuZWRpdGluZ0NlbGwsICdwLWNlbGwtZWRpdGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdGluZ0NlbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dC5vbkVkaXRDb21wbGV0ZS5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2VzY2FwZVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR0LmlzRWRpdGluZ0NlbGxWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy50dC5lZGl0aW5nQ2VsbCwgJ3AtY2VsbC1lZGl0aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0aW5nQ2VsbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR0Lm9uRWRpdENhbmNlbC5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3RhYlxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50dC5vbkVkaXRDb21wbGV0ZS5lbWl0KHsgZmllbGQ6IHRoaXMuZmllbGQsIGRhdGE6IHRoaXMuZGF0YSB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkgdGhpcy5tb3ZlVG9QcmV2aW91c0NlbGwoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5tb3ZlVG9OZXh0Q2VsbChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kQ2VsbChlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZWxlbWVudDtcbiAgICAgICAgICAgIHdoaWxlIChjZWxsICYmICFEb21IYW5kbGVyLmhhc0NsYXNzKGNlbGwsICdwLWNlbGwtZWRpdGluZycpKSB7XG4gICAgICAgICAgICAgICAgY2VsbCA9IGNlbGwucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVUb1ByZXZpb3VzQ2VsbChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBsZXQgY3VycmVudENlbGwgPSB0aGlzLmZpbmRDZWxsKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGxldCByb3cgPSBjdXJyZW50Q2VsbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgdGFyZ2V0Q2VsbCA9IHRoaXMuZmluZFByZXZpb3VzRWRpdGFibGVDb2x1bW4oY3VycmVudENlbGwpO1xuXG4gICAgICAgIGlmICh0YXJnZXRDZWxsKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmludm9rZUVsZW1lbnRNZXRob2QodGFyZ2V0Q2VsbCwgJ2NsaWNrJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVRvTmV4dENlbGwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDZWxsID0gdGhpcy5maW5kQ2VsbChldmVudC50YXJnZXQpO1xuICAgICAgICBsZXQgcm93ID0gY3VycmVudENlbGwucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHRhcmdldENlbGwgPSB0aGlzLmZpbmROZXh0RWRpdGFibGVDb2x1bW4oY3VycmVudENlbGwpO1xuXG4gICAgICAgIGlmICh0YXJnZXRDZWxsKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmludm9rZUVsZW1lbnRNZXRob2QodGFyZ2V0Q2VsbCwgJ2NsaWNrJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFByZXZpb3VzRWRpdGFibGVDb2x1bW4oY2VsbDogYW55KTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBsZXQgcHJldkNlbGwgPSBjZWxsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKCFwcmV2Q2VsbCkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzUm93ID0gY2VsbC5wYXJlbnRFbGVtZW50ID8gY2VsbC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzUm93KSB7XG4gICAgICAgICAgICAgICAgcHJldkNlbGwgPSBwcmV2aW91c1Jvdy5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZDZWxsKSB7XG4gICAgICAgICAgICBpZiAoRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2Q2VsbCwgJ3AtZWRpdGFibGUtY29sdW1uJykpIHJldHVybiBwcmV2Q2VsbDtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuZmluZFByZXZpb3VzRWRpdGFibGVDb2x1bW4ocHJldkNlbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTmV4dEVkaXRhYmxlQ29sdW1uKGNlbGw6IEVsZW1lbnQpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGxldCBuZXh0Q2VsbCA9IGNlbGwubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmICghbmV4dENlbGwpIHtcbiAgICAgICAgICAgIGxldCBuZXh0Um93ID0gY2VsbC5wYXJlbnRFbGVtZW50ID8gY2VsbC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyA6IG51bGw7XG4gICAgICAgICAgICBpZiAobmV4dFJvdykge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsID0gbmV4dFJvdy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Q2VsbCkge1xuICAgICAgICAgICAgaWYgKERvbUhhbmRsZXIuaGFzQ2xhc3MobmV4dENlbGwsICdwLWVkaXRhYmxlLWNvbHVtbicpKSByZXR1cm4gbmV4dENlbGw7XG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmZpbmROZXh0RWRpdGFibGVDb2x1bW4obmV4dENlbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR0RWRpdGFibGVDb2x1bW5EaXNhYmxlZCAhPT0gdHJ1ZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10cmVlVGFibGVDZWxsRWRpdG9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHQuZWRpdGluZ0NlbGwgPT09IGVkaXRhYmxlQ29sdW1uLmVsLm5hdGl2ZUVsZW1lbnRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXR0LmVkaXRpbmdDZWxsIHx8IHR0LmVkaXRpbmdDZWxsICE9PSBlZGl0YWJsZUNvbHVtbi5lbC5uYXRpdmVFbGVtZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwib3V0cHV0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdwLWVsZW1lbnQnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVDZWxsRWRpdG9yIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IE51bGxhYmxlPFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPj47XG5cbiAgICBpbnB1dFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIG91dHB1dFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgZWRpdGFibGVDb2x1bW46IFRURWRpdGFibGVDb2x1bW4pIHt9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgICh0aGlzLnRlbXBsYXRlcyBhcyBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnb3V0cHV0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3R0Um93XScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCcsXG4gICAgICAgICdbY2xhc3NdJzogYCdwLWVsZW1lbnQgJyArIHN0eWxlQ2xhc3NgLFxuICAgICAgICAnW2F0dHIudGFiaW5kZXhdJzogXCInMCdcIixcbiAgICAgICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ2V4cGFuZGVkJyxcbiAgICAgICAgJ1thdHRyLmFyaWEtbGV2ZWxdJzogJ2xldmVsJyxcbiAgICAgICAgJ1thdHRyLmRhdGEtcGMtc2VjdGlvbl0nOiAncm93JyxcbiAgICAgICAgJ1thdHRyLnJvbGVdJzogJ3JvdydcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFRUUm93IHtcbiAgICBnZXQgbGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd05vZGU/LlsnbGV2ZWwnXSArIDE7XG4gICAgfVxuXG4gICAgZ2V0IHN0eWxlQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd05vZGU/Lm5vZGVbJ3N0eWxlQ2xhc3MnXSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZXhwYW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd05vZGU/Lm5vZGVbJ2V4cGFuZGVkJ107XG4gICAgfVxuXG4gICAgQElucHV0KCd0dFJvdycpIHJvd05vZGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0dDogVHJlZVRhYmxlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dVcEtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1JpZ2h0S2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dMZWZ0S2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhvbWVLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25FbmRLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd0Rvd25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgbGV0IG5leHRSb3cgPSB0aGlzLmVsPy5uYXRpdmVFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChuZXh0Um93KSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzUm93Q2hhbmdlKDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0LCBuZXh0Um93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25BcnJvd1VwS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGxldCBwcmV2Um93ID0gdGhpcy5lbD8ubmF0aXZlRWxlbWVudD8ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgaWYgKHByZXZSb3cpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSb3dDaGFuZ2UoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQsIHByZXZSb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkFycm93UmlnaHRLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBpc0hpZGRlbkljb24gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUoY3VycmVudFRhcmdldCwgJ2J1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xuXG4gICAgICAgIGlmICghaXNIaWRkZW5JY29uICYmICF0aGlzLmV4cGFuZGVkICYmIHRoaXMucm93Tm9kZS5ub2RlWydjaGlsZHJlbiddKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZChldmVudCk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQudGFiSW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uQXJyb3dMZWZ0S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMudHQuY29udGFpbmVyVmlld0NoaWxkPy5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBleHBhbmRlZFJvd3MgPSBEb21IYW5kbGVyLmZpbmQoY29udGFpbmVyLCAnW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdJyk7XG4gICAgICAgIGNvbnN0IGxhc3RFeHBhbmRlZFJvdyA9IGV4cGFuZGVkUm93c1tleHBhbmRlZFJvd3MubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0RXhwYW5kZWRSb3cpIHtcbiAgICAgICAgICAgIHRoaXMudHQudG9nZ2xlUm93SW5kZXggPSBEb21IYW5kbGVyLmluZGV4KGxhc3RFeHBhbmRlZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkhvbWVLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RFbGVtZW50ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMudHQuY29udGFpbmVyVmlld0NoaWxkPy5uYXRpdmVFbGVtZW50LCBgdHJbYXJpYS1sZXZlbD1cIiR7dGhpcy5sZXZlbH1cIl1gKTtcbiAgICAgICAgZmlyc3RFbGVtZW50ICYmIERvbUhhbmRsZXIuZm9jdXMoZmlyc3RFbGVtZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkVuZEtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IERvbUhhbmRsZXIuZmluZCh0aGlzLnR0LmNvbnRhaW5lclZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCwgYHRyW2FyaWEtbGV2ZWw9XCIke3RoaXMubGV2ZWx9XCJdYCk7XG4gICAgICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIERvbUhhbmRsZXIuZm9jdXMobGFzdEVsZW1lbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uVGFiS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgPyBbLi4uRG9tSGFuZGxlci5maW5kKHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLCAndHInKV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHJvd3MgJiYgT2JqZWN0VXRpbHMuaXNOb3RFbXB0eShyb3dzKSkge1xuICAgICAgICAgICAgY29uc3QgaGFzU2VsZWN0ZWRSb3cgPSByb3dzLnNvbWUoKHJvdykgPT4gRG9tSGFuZGxlci5nZXRBdHRyaWJ1dGUocm93LCAnZGF0YS1wLWhpZ2hsaWdodCcpIHx8IHJvdy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcpID09PSAndHJ1ZScpO1xuICAgICAgICAgICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICByb3cudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzU2VsZWN0ZWRSb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE5vZGVzID0gcm93cy5maWx0ZXIoKG5vZGUpID0+IERvbUhhbmRsZXIuZ2V0QXR0cmlidXRlKG5vZGUsICdkYXRhLXAtaGlnaGxpZ2h0JykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcpID09PSAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTm9kZXNbMF0udGFiSW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dzWzBdLnRhYkluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGFuZChldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy50dC50b2dnbGVSb3dJbmRleCA9IERvbUhhbmRsZXIuaW5kZXgodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5yb3dOb2RlLm5vZGVbJ2V4cGFuZGVkJ10gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHQudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG4gICAgICAgIHRoaXMudHQudGFibGVTZXJ2aWNlLm9uVUlVcGRhdGUodGhpcy50dC52YWx1ZSk7XG4gICAgICAgIHRoaXMucm93Tm9kZS5ub2RlWydjaGlsZHJlbiddID8gdGhpcy5yZXN0b3JlRm9jdXModGhpcy50dC50b2dnbGVSb3dJbmRleCArIDEpIDogdGhpcy5yZXN0b3JlRm9jdXMoKTtcblxuICAgICAgICB0aGlzLnR0Lm9uTm9kZUV4cGFuZC5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgbm9kZTogdGhpcy5yb3dOb2RlLm5vZGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMucm93Tm9kZS5ub2RlWydleHBhbmRlZCddID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50dC51cGRhdGVTZXJpYWxpemVkVmFsdWUoKTtcbiAgICAgICAgdGhpcy50dC50YWJsZVNlcnZpY2Uub25VSVVwZGF0ZSh0aGlzLnR0LnZhbHVlKTtcblxuICAgICAgICB0aGlzLnR0Lm9uTm9kZUNvbGxhcHNlLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogdGhpcy5yb3dOb2RlLm5vZGUgfSk7XG4gICAgfVxuXG4gICAgZm9jdXNSb3dDaGFuZ2UoZmlyc3RGb2N1c2FibGVSb3csIGN1cnJlbnRGb2N1c2VkUm93LCBsYXN0VmlzaWJsZURlc2NlbmRhbnQ/KSB7XG4gICAgICAgIGZpcnN0Rm9jdXNhYmxlUm93LnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgY3VycmVudEZvY3VzZWRSb3cudGFiSW5kZXggPSAnMCc7XG5cbiAgICAgICAgRG9tSGFuZGxlci5mb2N1cyhjdXJyZW50Rm9jdXNlZFJvdyk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUZvY3VzKGluZGV4Pykge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy50dC5jb250YWluZXJWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKGNvbnRhaW5lciwgJy5wLXRyZWV0YWJsZS10Ym9keScpLmNoaWxkcmVuWzxudW1iZXI+aW5kZXggfHwgdGhpcy50dC50b2dnbGVSb3dJbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IFsuLi5Eb21IYW5kbGVyLmZpbmQoY29udGFpbmVyLCAndHInKV07XG5cbiAgICAgICAgICAgICAgICByb3dzICYmXG4gICAgICAgICAgICAgICAgICAgIHJvd3MuZm9yRWFjaCgocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyb3cuaXNTYW1lTm9kZShyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDI1KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdHJlZVRhYmxlVG9nZ2xlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cInAtdHJlZXRhYmxlLXRvZ2dsZXIgcC1saW5rXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBwUmlwcGxlXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJyb3dOb2RlLm5vZGUubGVhZiA9PT0gZmFsc2UgfHwgKHJvd05vZGUubm9kZS5jaGlsZHJlbiAmJiByb3dOb2RlLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cInJvd05vZGUubGV2ZWwgKiAxNiArICdweCdcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1wYy1zZWN0aW9uXT1cIidyb3d0b2dnbGVyJ1wiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLXBjLWdyb3VwLXNlY3Rpb25dPVwiJ3Jvd2FjdGlvbmJ1dHRvbidcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJ0b2dnbGVCdXR0b25BcmlhTGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXR0LnRvZ2dsZXJJY29uVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uICpuZ0lmPVwicm93Tm9kZS5ub2RlLmV4cGFuZGVkXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gKm5nSWY9XCIhcm93Tm9kZS5ub2RlLmV4cGFuZGVkXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cInR0LnRvZ2dsZXJJY29uVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiByb3dOb2RlLm5vZGUuZXhwYW5kZWQgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlVG9nZ2xlciB7XG4gICAgQElucHV0KCkgcm93Tm9kZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHR0OiBUcmVlVGFibGUsIHByaXZhdGUgY29uZmlnOiBQcmltZU5HQ29uZmlnKSB7fVxuXG4gICAgZ2V0IHRvZ2dsZUJ1dHRvbkFyaWFMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uID8gKHRoaXMucm93Tm9kZS5leHBhbmRlZCA/IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9uLmFyaWEuY29sbGFwc2VSb3cgOiB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5hcmlhLmV4cGFuZFJvdykgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5yb3dOb2RlLm5vZGUuZXhwYW5kZWQgPSAhdGhpcy5yb3dOb2RlLm5vZGUuZXhwYW5kZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucm93Tm9kZS5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnR0Lm9uTm9kZUV4cGFuZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnJvd05vZGUubm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR0Lm9uTm9kZUNvbGxhcHNlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMucm93Tm9kZS5ub2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHQudXBkYXRlU2VyaWFsaXplZFZhbHVlKCk7XG4gICAgICAgIHRoaXMudHQudGFibGVTZXJ2aWNlLm9uVUlVcGRhdGUodGhpcy50dC52YWx1ZSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGFnaW5hdG9yTW9kdWxlLCBSaXBwbGVNb2R1bGUsIFNjcm9sbGVyTW9kdWxlLCBTcGlubmVySWNvbiwgQXJyb3dEb3duSWNvbiwgQXJyb3dVcEljb24sIFNvcnRBbHRJY29uLCBTb3J0QW1vdW50VXBBbHRJY29uLCBTb3J0QW1vdW50RG93bkljb24sIENoZWNrSWNvbiwgTWludXNJY29uLCBDaGV2cm9uRG93bkljb24sIENoZXZyb25SaWdodEljb25dLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHJlZVRhYmxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIFRyZWVUYWJsZVRvZ2dsZXIsXG4gICAgICAgIFRUU29ydGFibGVDb2x1bW4sXG4gICAgICAgIFRUU29ydEljb24sXG4gICAgICAgIFRUUmVzaXphYmxlQ29sdW1uLFxuICAgICAgICBUVFJvdyxcbiAgICAgICAgVFRSZW9yZGVyYWJsZUNvbHVtbixcbiAgICAgICAgVFRTZWxlY3RhYmxlUm93LFxuICAgICAgICBUVFNlbGVjdGFibGVSb3dEYmxDbGljayxcbiAgICAgICAgVFRDb250ZXh0TWVudVJvdyxcbiAgICAgICAgVFRDaGVja2JveCxcbiAgICAgICAgVFRIZWFkZXJDaGVja2JveCxcbiAgICAgICAgVFRFZGl0YWJsZUNvbHVtbixcbiAgICAgICAgVHJlZVRhYmxlQ2VsbEVkaXRvcixcbiAgICAgICAgU2Nyb2xsZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUcmVlVGFibGUsXG4gICAgICAgIFRyZWVUYWJsZVRvZ2dsZXIsXG4gICAgICAgIFRUU2Nyb2xsYWJsZVZpZXcsXG4gICAgICAgIFRUQm9keSxcbiAgICAgICAgVFRTb3J0YWJsZUNvbHVtbixcbiAgICAgICAgVFRTb3J0SWNvbixcbiAgICAgICAgVFRSZXNpemFibGVDb2x1bW4sXG4gICAgICAgIFRUUm93LFxuICAgICAgICBUVFJlb3JkZXJhYmxlQ29sdW1uLFxuICAgICAgICBUVFNlbGVjdGFibGVSb3csXG4gICAgICAgIFRUU2VsZWN0YWJsZVJvd0RibENsaWNrLFxuICAgICAgICBUVENvbnRleHRNZW51Um93LFxuICAgICAgICBUVENoZWNrYm94LFxuICAgICAgICBUVEhlYWRlckNoZWNrYm94LFxuICAgICAgICBUVEVkaXRhYmxlQ29sdW1uLFxuICAgICAgICBUcmVlVGFibGVDZWxsRWRpdG9yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVNb2R1bGUge31cbiJdfQ==