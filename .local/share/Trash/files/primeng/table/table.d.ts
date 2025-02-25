import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { BlockableUI, FilterMetadata, FilterService, LazyLoadMeta, OverlayService, PrimeNGConfig, PrimeTemplate, ScrollerOptions, SelectItem, SortMeta, TableState } from 'primeng/api';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { Scroller } from 'primeng/scroller';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import { Subscription } from 'rxjs';
import { ExportCSVOptions, TableColResizeEvent, TableColumnReorderEvent, TableContextMenuSelectEvent, TableEditCancelEvent, TableEditCompleteEvent, TableEditInitEvent, TableFilterEvent, TableHeaderCheckboxToggleEvent, TableLazyLoadEvent, TablePageEvent, TableRowCollapseEvent, TableRowExpandEvent, TableRowReorderEvent, TableRowSelectEvent, TableRowUnSelectEvent, TableSelectAllChangeEvent } from './table.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/paginator";
import * as i3 from "primeng/inputtext";
import * as i4 from "primeng/dropdown";
import * as i5 from "@angular/forms";
import * as i6 from "primeng/button";
import * as i7 from "primeng/selectbutton";
import * as i8 from "primeng/calendar";
import * as i9 from "primeng/inputnumber";
import * as i10 from "primeng/tristatecheckbox";
import * as i11 from "primeng/scroller";
import * as i12 from "primeng/icons/arrowdown";
import * as i13 from "primeng/icons/arrowup";
import * as i14 from "primeng/icons/spinner";
import * as i15 from "primeng/icons/sortalt";
import * as i16 from "primeng/icons/sortamountupalt";
import * as i17 from "primeng/icons/sortamountdown";
import * as i18 from "primeng/icons/check";
import * as i19 from "primeng/icons/filter";
import * as i20 from "primeng/icons/filterslash";
import * as i21 from "primeng/icons/plus";
import * as i22 from "primeng/icons/trash";
import * as i23 from "primeng/api";
export declare class TableService {
    private sortSource;
    private selectionSource;
    private contextMenuSource;
    private valueSource;
    private totalRecordsSource;
    private columnsSource;
    sortSource$: import("rxjs").Observable<SortMeta | SortMeta[]>;
    selectionSource$: import("rxjs").Observable<unknown>;
    contextMenuSource$: import("rxjs").Observable<any>;
    valueSource$: import("rxjs").Observable<any>;
    totalRecordsSource$: import("rxjs").Observable<any>;
    columnsSource$: import("rxjs").Observable<unknown>;
    onSort(sortMeta: SortMeta | SortMeta[] | null): void;
    onSelectionChange(): void;
    onContextMenu(data: any): void;
    onValueChange(value: any): void;
    onTotalRecordsChange(value: number): void;
    onColumnsChange(columns: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TableService>;
}
/**
 * Table displays data in tabular format.
 * @group Components
 */
export declare class Table implements OnInit, AfterViewInit, AfterContentInit, BlockableUI, OnChanges {
    private document;
    private platformId;
    private renderer;
    el: ElementRef;
    zone: NgZone;
    tableService: TableService;
    cd: ChangeDetectorRef;
    filterService: FilterService;
    overlayService: OverlayService;
    config: PrimeNGConfig;
    /**
     * An array of objects to represent dynamic columns that are frozen.
     * @group Props
     */
    frozenColumns: any[] | undefined;
    /**
     * An array of objects to display as frozen.
     * @group Props
     */
    frozenValue: any[] | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the table.
     * @group Props
     */
    tableStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the table.
     * @group Props
     */
    tableStyleClass: string | undefined;
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    paginator: boolean | undefined;
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    pageLinks: number;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    rowsPerPageOptions: any[] | undefined;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShowPaginator: boolean;
    /**
     * Position of the paginator, options are "top", "bottom" or "both".
     * @group Props
     */
    paginatorPosition: 'top' | 'bottom' | 'both';
    /**
     * Custom style class for paginator
     * @group Props
     */
    paginatorStyleClass: string | undefined;
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    paginatorDropdownAppendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    paginatorDropdownScrollHeight: string;
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate: string;
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport: boolean | undefined;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown: boolean | undefined;
    /**
     * Whether to display a input to navigate to any page.
     * @group Props
     */
    showJumpToPageInput: boolean | undefined;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon: boolean;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks: boolean;
    /**
     * Sort order to use when an unsorted column gets sorted by user interaction.
     * @group Props
     */
    defaultSortOrder: number;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @group Props
     */
    sortMode: 'single' | 'multiple';
    /**
     * When true, resets paginator to first page after sorting. Available only when sortMode is set to single.
     * @group Props
     */
    resetPageOnSort: boolean;
    /**
     * Specifies the selection mode, valid values are "single" and "multiple".
     * @group Props
     */
    selectionMode: 'single' | 'multiple' | undefined | null;
    /**
     * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
     * @group Props
     */
    selectionPageOnly: boolean | undefined;
    /**
     * Selected row with a context menu.
     * @group Props
     */
    contextMenuSelection: any;
    /**
     * Callback to invoke on context menu selection change.
     * @param {*} object - row data.
     * @group Emits
     */
    contextMenuSelectionChange: EventEmitter<any>;
    /**
     *  Defines the behavior of context menu selection, in "separate" mode context menu updates contextMenuSelection property whereas in joint mode selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.
     * @group Props
     */
    contextMenuSelectionMode: string;
    /**
     * A property to uniquely identify a record in data.
     * @group Props
     */
    dataKey: string | undefined;
    /**
     * Defines whether metaKey should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection: boolean | undefined;
    /**
     * Defines if the row is selectable.
     * @group Props
     */
    rowSelectable: boolean | undefined | any;
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    rowTrackBy: Function;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy: boolean;
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    lazyLoadOnInit: boolean;
    /**
     * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
     * @group Props
     */
    compareSelectionBy: 'equals' | 'deepEquals';
    /**
     * Character to use as the csv separator.
     * @group Props
     */
    csvSeparator: string;
    /**
     * Name of the exported file.
     * @group Props
     */
    exportFilename: string;
    /**
     * An array of FilterMetadata objects to provide external filters.
     * @group Props
     */
    filters: {
        [s: string]: FilterMetadata | FilterMetadata[];
    };
    /**
     * An array of fields as string to use in global filtering.
     * @group Props
     */
    globalFilterFields: string[] | undefined;
    /**
     * Delay in milliseconds before filtering the data.
     * @group Props
     */
    filterDelay: number;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale: string | undefined;
    /**
     * Map instance to keep the expanded rows where key of the map is the data key of the row.
     * @group Props
     */
    expandedRowKeys: {
        [s: string]: boolean;
    };
    /**
     * Map instance to keep the rows being edited where key of the map is the data key of the row.
     * @group Props
     */
    editingRowKeys: {
        [s: string]: boolean;
    };
    /**
     * Whether multiple rows can be expanded at any time. Valid values are "multiple" and "single".
     * @group Props
     */
    rowExpandMode: 'multiple' | 'single';
    /**
     * Enables scrollable tables.
     * @group Props
     */
    scrollable: boolean | undefined;
    /**
     * Orientation of the scrolling, options are "vertical", "horizontal" and "both".
     * @group Props
     * @deprecated Property is obselete since v14.2.0.
     */
    scrollDirection: 'vertical' | 'horizontal' | 'both';
    /**
     * Type of the row grouping, valid values are "subheader" and "rowspan".
     * @group Props
     */
    rowGroupMode: 'subheader' | 'rowspan' | undefined;
    /**
     * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
     * @group Props
     */
    scrollHeight: string | undefined;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll: boolean | undefined;
    /**
     * Height of a row to use in calculations of virtual scrolling.
     * @group Props
     */
    virtualScrollItemSize: number | undefined;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions: ScrollerOptions | undefined;
    /**
     * Threshold in milliseconds to delay lazy loading during scrolling.
     * @group Props
     */
    virtualScrollDelay: number;
    /**
     * Width of the frozen columns container.
     * @group Props
     */
    frozenWidth: string | undefined;
    /**
     * Defines if the table is responsive.
     * @group Props
     * @deprecated table is always responsive with scrollable behavior.
     */
    get responsive(): boolean | undefined | null;
    set responsive(val: boolean | undefined | null);
    _responsive: boolean | undefined | null;
    /**
     * Local ng-template varilable of a ContextMenu.
     * @group Props
     */
    contextMenu: any;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @group Props
     */
    resizableColumns: boolean | undefined;
    /**
     * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
     * @group Props
     */
    columnResizeMode: string;
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @group Props
     */
    reorderableColumns: boolean | undefined;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading: boolean | undefined;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon: string | undefined;
    /**
     * Whether to show the loading mask when loading property is true.
     * @group Props
     */
    showLoader: boolean;
    /**
     * Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have "p-selectable-row" class for rowHover to work.
     * @group Props
     */
    rowHover: boolean | undefined;
    /**
     * Whether to use the default sorting or a custom one using sortFunction.
     * @group Props
     */
    customSort: boolean | undefined;
    /**
     * Whether to use the initial sort badge or not.
     * @group Props
     */
    showInitialSortBadge: boolean;
    /**
     * Whether the cell widths scale according to their content or not.  Deprecated:  Table layout is always "auto".
     * @group Props
     */
    autoLayout: boolean | undefined;
    /**
     * Export function.
     * @group Props
     */
    exportFunction: Function | undefined;
    /**
     * Custom export header of the column to be exported as CSV.
     * @group Props
     */
    exportHeader: string | undefined;
    /**
     * Unique identifier of a stateful table to use in state storage.
     * @group Props
     */
    stateKey: string | undefined;
    /**
     * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
     * @group Props
     */
    stateStorage: 'session' | 'local';
    /**
     * Defines the editing mode, valid values are "cell" and "row".
     * @group Props
     */
    editMode: 'cell' | 'row';
    /**
     * Field name to use in row grouping.
     * @group Props
     */
    groupRowsBy: any;
    /**
     * Order to sort when default row grouping is enabled.
     * @group Props
     */
    groupRowsByOrder: number;
    /**
     * Defines the responsive mode, valid options are "stack" and "scroll".
     * @group Props
     */
    responsiveLayout: string;
    /**
     * The breakpoint to define the maximum width boundary when using stack responsive layout.
     * @group Props
     */
    breakpoint: string;
    /**
     * Locale to be used in paginator formatting.
     * @group Props
     */
    paginatorLocale: string | undefined;
    /**
     * An array of objects to display.
     * @group Props
     */
    get value(): any[];
    set value(val: any[]);
    /**
     * An array of objects to represent dynamic columns.
     * @group Props
     */
    get columns(): any[] | undefined;
    set columns(cols: any[] | undefined);
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    get first(): number | null | undefined;
    set first(val: number | null | undefined);
    /**
     * Number of rows to display per page.
     * @group Props
     */
    get rows(): number | undefined;
    set rows(val: number | undefined);
    /**
     * Number of total records, defaults to length of value when not defined.
     * @group Props
     */
    get totalRecords(): number;
    set totalRecords(val: number);
    /**
     * Name of the field to sort data by default.
     * @group Props
     */
    get sortField(): string | undefined | null;
    set sortField(val: string | undefined | null);
    /**
     * Order to sort when default sorting is enabled.
     * @group Props
     */
    get sortOrder(): number;
    set sortOrder(val: number);
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     * @group Props
     */
    get multiSortMeta(): SortMeta[] | undefined | null;
    set multiSortMeta(val: SortMeta[] | undefined | null);
    /**
     * Selected row in single mode or an array of values in multiple mode.
     * @group Props
     */
    get selection(): any;
    set selection(val: any);
    /**
     * Whether all data is selected.
     * @group Props
     */
    get selectAll(): boolean | null;
    set selectAll(val: boolean | null);
    /**
     * Emits when the all of the items selected or unselected.
     * @param {TableSelectAllChangeEvent} event - custom  all selection change event.
     * @group Emits
     */
    selectAllChange: EventEmitter<TableSelectAllChangeEvent>;
    /**
     * Callback to invoke on selection changed.
     * @param {any | null} value - selected data.
     * @group Emits
     */
    selectionChange: EventEmitter<any | null>;
    /**
     * Callback to invoke when a row is selected.
     * @param {TableRowSelectEvent} event - custom select event.
     * @group Emits
     */
    onRowSelect: EventEmitter<TableRowSelectEvent>;
    /**
     * Callback to invoke when a row is unselected.
     * @param {TableRowUnSelectEvent} event - custom unselect event.
     * @group Emits
     */
    onRowUnselect: EventEmitter<TableRowUnSelectEvent>;
    /**
     * Callback to invoke when pagination occurs.
     * @param {TablePageEvent} event - custom pagination event.
     * @group Emits
     */
    onPage: EventEmitter<TablePageEvent>;
    /**
     * Callback to invoke when a column gets sorted.
     * @param {Object} object - sort meta.
     * @group Emits
     */
    onSort: EventEmitter<{
        multisortmeta: SortMeta[];
    } | any>;
    /**
     * Callback to invoke when data is filtered.
     * @param {TableFilterEvent} event - custom filtering event.
     * @group Emits
     */
    onFilter: EventEmitter<TableFilterEvent>;
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {TableLazyLoadEvent} event - custom lazy loading event.
     * @group Emits
     */
    onLazyLoad: EventEmitter<TableLazyLoadEvent>;
    /**
     * Callback to invoke when a row is expanded.
     * @param {TableRowExpandEvent} event - custom row expand event.
     * @group Emits
     */
    onRowExpand: EventEmitter<TableRowExpandEvent>;
    /**
     * Callback to invoke when a row is collapsed.
     * @param {TableRowCollapseEvent} event - custom row collapse event.
     * @group Emits
     */
    onRowCollapse: EventEmitter<TableRowCollapseEvent>;
    /**
     * Callback to invoke when a row is selected with right click.
     * @param {TableContextMenuSelectEvent} event - custom context menu select event.
     * @group Emits
     */
    onContextMenuSelect: EventEmitter<TableContextMenuSelectEvent>;
    /**
     * Callback to invoke when a column is resized.
     * @param {TableColResizeEvent} event - custom column resize event.
     * @group Emits
     */
    onColResize: EventEmitter<TableColResizeEvent>;
    /**
     * Callback to invoke when a column is reordered.
     * @param {TableColumnReorderEvent} event - custom column reorder event.
     * @group Emits
     */
    onColReorder: EventEmitter<TableColumnReorderEvent>;
    /**
     * Callback to invoke when a row is reordered.
     * @param {TableRowReorderEvent} event - custom row reorder event.
     * @group Emits
     */
    onRowReorder: EventEmitter<TableRowReorderEvent>;
    /**
     * Callback to invoke when a cell switches to edit mode.
     * @param {TableEditInitEvent} event - custom edit init event.
     * @group Emits
     */
    onEditInit: EventEmitter<TableEditInitEvent>;
    /**
     * Callback to invoke when cell edit is completed.
     * @param {TableEditCompleteEvent} event - custom edit complete event.
     * @group Emits
     */
    onEditComplete: EventEmitter<TableEditCompleteEvent>;
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {TableEditCancelEvent} event - custom edit cancel event.
     * @group Emits
     */
    onEditCancel: EventEmitter<TableEditCancelEvent>;
    /**
     * Callback to invoke when state of header checkbox changes.
     * @param {TableHeaderCheckboxToggleEvent} event - custom header checkbox event.
     * @group Emits
     */
    onHeaderCheckboxToggle: EventEmitter<TableHeaderCheckboxToggleEvent>;
    /**
     * A function to implement custom sorting, refer to sorting section for details.
     * @param {any} any - sort meta.
     * @group Emits
     */
    sortFunction: EventEmitter<any>;
    /**
     * Callback to invoke on pagination.
     * @param {number} number - first element.
     * @group Emits
     */
    firstChange: EventEmitter<number>;
    /**
     * Callback to invoke on rows change.
     * @param {number} number - Row count.
     * @group Emits
     */
    rowsChange: EventEmitter<number>;
    /**
     * Callback to invoke table state is saved.
     * @param {TableState} object - table state.
     * @group Emits
     */
    onStateSave: EventEmitter<TableState>;
    /**
     * Callback to invoke table state is restored.
     * @param {TableState} object - table state.
     * @group Emits
     */
    onStateRestore: EventEmitter<TableState>;
    containerViewChild: Nullable<ElementRef>;
    resizeHelperViewChild: Nullable<ElementRef>;
    reorderIndicatorUpViewChild: Nullable<ElementRef>;
    reorderIndicatorDownViewChild: Nullable<ElementRef>;
    wrapperViewChild: Nullable<ElementRef>;
    tableViewChild: Nullable<ElementRef>;
    tableHeaderViewChild: Nullable<ElementRef>;
    tableFooterViewChild: Nullable<ElementRef>;
    scroller: Nullable<Scroller>;
    templates: Nullable<QueryList<PrimeTemplate>>;
    /**
     * Indicates the height of rows to be scrolled.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get virtualRowHeight(): number;
    set virtualRowHeight(val: number);
    _virtualRowHeight: number;
    _value: any[];
    _columns: any[] | undefined;
    _totalRecords: number;
    _first: number | null | undefined;
    _rows: number | undefined;
    filteredValue: any[] | undefined | null;
    headerTemplate: Nullable<TemplateRef<any>>;
    headerGroupedTemplate: Nullable<TemplateRef<any>>;
    bodyTemplate: Nullable<TemplateRef<any>>;
    loadingBodyTemplate: Nullable<TemplateRef<any>>;
    captionTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    footerGroupedTemplate: Nullable<TemplateRef<any>>;
    summaryTemplate: Nullable<TemplateRef<any>>;
    colGroupTemplate: Nullable<TemplateRef<any>>;
    expandedRowTemplate: Nullable<TemplateRef<any>>;
    groupHeaderTemplate: Nullable<TemplateRef<any>>;
    groupFooterTemplate: Nullable<TemplateRef<any>>;
    frozenExpandedRowTemplate: Nullable<TemplateRef<any>>;
    frozenHeaderTemplate: Nullable<TemplateRef<any>>;
    frozenBodyTemplate: Nullable<TemplateRef<any>>;
    frozenFooterTemplate: Nullable<TemplateRef<any>>;
    frozenColGroupTemplate: Nullable<TemplateRef<any>>;
    emptyMessageTemplate: Nullable<TemplateRef<any>>;
    paginatorLeftTemplate: Nullable<TemplateRef<any>>;
    paginatorRightTemplate: Nullable<TemplateRef<any>>;
    paginatorDropdownItemTemplate: Nullable<TemplateRef<any>>;
    loadingIconTemplate: Nullable<TemplateRef<any>>;
    reorderIndicatorUpIconTemplate: Nullable<TemplateRef<any>>;
    reorderIndicatorDownIconTemplate: Nullable<TemplateRef<any>>;
    sortIconTemplate: Nullable<TemplateRef<any>>;
    checkboxIconTemplate: Nullable<TemplateRef<any>>;
    headerCheckboxIconTemplate: Nullable<TemplateRef<any>>;
    paginatorDropdownIconTemplate: Nullable<TemplateRef<any>>;
    paginatorFirstPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    paginatorLastPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    paginatorPreviousPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    paginatorNextPageLinkIconTemplate: Nullable<TemplateRef<any>>;
    selectionKeys: any;
    lastResizerHelperX: number | undefined;
    reorderIconWidth: number | undefined;
    reorderIconHeight: number | undefined;
    draggedColumn: any;
    draggedRowIndex: number | undefined | null;
    droppedRowIndex: number | undefined | null;
    rowDragging: boolean | undefined | null;
    dropPosition: number | undefined | null;
    editingCell: Element | undefined | null;
    editingCellData: any;
    editingCellField: any;
    editingCellRowIndex: number | undefined | null;
    selfClick: boolean | undefined | null;
    documentEditListener: any;
    _multiSortMeta: SortMeta[] | undefined | null;
    _sortField: string | undefined | null;
    _sortOrder: number;
    preventSelectionSetterPropagation: boolean | undefined;
    _selection: any;
    _selectAll: boolean | null;
    anchorRowIndex: number | undefined | null;
    rangeRowIndex: number | undefined;
    filterTimeout: any;
    initialized: boolean | undefined | null;
    rowTouched: boolean | undefined;
    restoringSort: boolean | undefined;
    restoringFilter: boolean | undefined;
    stateRestored: boolean | undefined;
    columnOrderStateRestored: boolean | undefined;
    columnWidthsState: string | undefined;
    tableWidthState: string | undefined;
    overlaySubscription: Subscription | undefined;
    resizeColumnElement: any;
    columnResizing: boolean;
    rowGroupHeaderStyleObject: any;
    id: string;
    styleElement: any;
    responsiveStyleElement: any;
    private window;
    constructor(document: Document, platformId: any, renderer: Renderer2, el: ElementRef, zone: NgZone, tableService: TableService, cd: ChangeDetectorRef, filterService: FilterService, overlayService: OverlayService, config: PrimeNGConfig);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(simpleChange: SimpleChanges): void;
    get processedData(): any[];
    private _initialColWidths;
    dataToRender(data: any): any;
    updateSelectionKeys(): void;
    onPageChange(event: TablePageEvent): void;
    sort(event: any): void;
    sortSingle(): void;
    sortMultiple(): void;
    multisortField(data1: any, data2: any, multiSortMeta: SortMeta[], index: number): any;
    compareValuesOnSort(value1: any, value2: any, order: any): number;
    getSortMeta(field: string): SortMeta;
    isSorted(field: string): boolean;
    handleRowClick(event: any): void;
    handleRowTouchEnd(event: Event): void;
    handleRowRightClick(event: any): void;
    selectRange(event: MouseEvent | KeyboardEvent, rowIndex: number): void;
    clearSelectionRange(event: MouseEvent | KeyboardEvent): void;
    isSelected(rowData: any): boolean;
    findIndexInSelection(rowData: any): number;
    isRowSelectable(data: any, index: number): boolean;
    toggleRowWithRadio(event: any, rowData: any): void;
    toggleRowWithCheckbox(event: any, rowData: any): void;
    toggleRowsWithCheckbox(event: Event, check: boolean): void;
    equals(data1: any, data2: any): boolean;
    filter(value: any, field: string, matchMode: string): void;
    filterGlobal(value: any, matchMode: string): void;
    isFilterBlank(filter: any): boolean;
    _filter(): void;
    executeLocalFilter(field: string, rowData: any, filterMeta: FilterMetadata): boolean;
    hasFilter(): boolean;
    createLazyLoadMetadata(): any;
    clear(): void;
    clearFilterValues(): void;
    reset(): void;
    getExportHeader(column: any): any;
    /**
     * Data export method.
     * @param {ExportCSVOptions} object - Export options.
     * @group Method
     */
    exportCSV(options?: ExportCSVOptions): void;
    onLazyItemLoad(event: LazyLoadMeta): void;
    /**
     * Resets scroll to top.
     * @group Method
     */
    resetScrollTop(): void;
    /**
     * Scrolls to given index when using virtual scroll.
     * @param {number} index - index of the element.
     * @group Method
     */
    scrollToVirtualIndex(index: number): void;
    /**
     * Scrolls to given index.
     * @param {ScrollToOptions} options - scroll options.
     * @group Method
     */
    scrollTo(options: any): void;
    updateEditingCell(cell: any, data: any, field: string, index: number): void;
    isEditingCellValid(): boolean;
    bindDocumentEditListener(): void;
    unbindDocumentEditListener(): void;
    initRowEdit(rowData: any): void;
    saveRowEdit(rowData: any, rowElement: HTMLTableRowElement): void;
    cancelRowEdit(rowData: any): void;
    toggleRow(rowData: any, event?: Event): void;
    isRowExpanded(rowData: any): boolean;
    isRowEditing(rowData: any): boolean;
    isSingleSelectionMode(): boolean;
    isMultipleSelectionMode(): boolean;
    onColumnResizeBegin(event: any): void;
    onColumnResize(event: any): void;
    onColumnResizeEnd(): void;
    private _totalTableWidth;
    onColumnDragStart(event: any, columnElement: any): void;
    onColumnDragEnter(event: any, dropHeader: any): void;
    onColumnDragLeave(event: Event): void;
    onColumnDrop(event: Event, dropColumn: any): void;
    resizeTableCells(newColumnWidth: number, nextColumnWidth: number | null): void;
    updateStyleElement(width: number[], colIndex: number, newColumnWidth: number, nextColumnWidth: number | null): void;
    onRowDragStart(event: any, index: number): void;
    onRowDragOver(event: MouseEvent, index: number, rowElement: any): void;
    onRowDragLeave(event: Event, rowElement: any): void;
    onRowDragEnd(event: Event): void;
    onRowDrop(event: Event, rowElement: any): void;
    isEmpty(): boolean;
    getBlockableElement(): HTMLElement;
    getStorage(): Storage;
    isStateful(): boolean;
    saveState(): void;
    clearState(): void;
    restoreState(): void;
    saveColumnWidths(state: any): void;
    setResizeTableWidth(width: string): void;
    restoreColumnWidths(): void;
    saveColumnOrder(state: any): void;
    restoreColumnOrder(): void;
    findColumnByKey(key: any): any;
    createStyleElement(): void;
    getGroupRowsMeta(): {
        field: any;
        order: number;
    };
    createResponsiveStyle(): void;
    destroyResponsiveStyle(): void;
    destroyStyleElement(): void;
    ngOnDestroy(): void;
    getPaginatorStyleClasses(className?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Table, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Table, "p-table", never, { "frozenColumns": { "alias": "frozenColumns"; "required": false; }; "frozenValue": { "alias": "frozenValue"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "tableStyle": { "alias": "tableStyle"; "required": false; }; "tableStyleClass": { "alias": "tableStyleClass"; "required": false; }; "paginator": { "alias": "paginator"; "required": false; }; "pageLinks": { "alias": "pageLinks"; "required": false; }; "rowsPerPageOptions": { "alias": "rowsPerPageOptions"; "required": false; }; "alwaysShowPaginator": { "alias": "alwaysShowPaginator"; "required": false; }; "paginatorPosition": { "alias": "paginatorPosition"; "required": false; }; "paginatorStyleClass": { "alias": "paginatorStyleClass"; "required": false; }; "paginatorDropdownAppendTo": { "alias": "paginatorDropdownAppendTo"; "required": false; }; "paginatorDropdownScrollHeight": { "alias": "paginatorDropdownScrollHeight"; "required": false; }; "currentPageReportTemplate": { "alias": "currentPageReportTemplate"; "required": false; }; "showCurrentPageReport": { "alias": "showCurrentPageReport"; "required": false; }; "showJumpToPageDropdown": { "alias": "showJumpToPageDropdown"; "required": false; }; "showJumpToPageInput": { "alias": "showJumpToPageInput"; "required": false; }; "showFirstLastIcon": { "alias": "showFirstLastIcon"; "required": false; }; "showPageLinks": { "alias": "showPageLinks"; "required": false; }; "defaultSortOrder": { "alias": "defaultSortOrder"; "required": false; }; "sortMode": { "alias": "sortMode"; "required": false; }; "resetPageOnSort": { "alias": "resetPageOnSort"; "required": false; }; "selectionMode": { "alias": "selectionMode"; "required": false; }; "selectionPageOnly": { "alias": "selectionPageOnly"; "required": false; }; "contextMenuSelection": { "alias": "contextMenuSelection"; "required": false; }; "contextMenuSelectionMode": { "alias": "contextMenuSelectionMode"; "required": false; }; "dataKey": { "alias": "dataKey"; "required": false; }; "metaKeySelection": { "alias": "metaKeySelection"; "required": false; }; "rowSelectable": { "alias": "rowSelectable"; "required": false; }; "rowTrackBy": { "alias": "rowTrackBy"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "lazyLoadOnInit": { "alias": "lazyLoadOnInit"; "required": false; }; "compareSelectionBy": { "alias": "compareSelectionBy"; "required": false; }; "csvSeparator": { "alias": "csvSeparator"; "required": false; }; "exportFilename": { "alias": "exportFilename"; "required": false; }; "filters": { "alias": "filters"; "required": false; }; "globalFilterFields": { "alias": "globalFilterFields"; "required": false; }; "filterDelay": { "alias": "filterDelay"; "required": false; }; "filterLocale": { "alias": "filterLocale"; "required": false; }; "expandedRowKeys": { "alias": "expandedRowKeys"; "required": false; }; "editingRowKeys": { "alias": "editingRowKeys"; "required": false; }; "rowExpandMode": { "alias": "rowExpandMode"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "scrollDirection": { "alias": "scrollDirection"; "required": false; }; "rowGroupMode": { "alias": "rowGroupMode"; "required": false; }; "scrollHeight": { "alias": "scrollHeight"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "virtualScrollItemSize": { "alias": "virtualScrollItemSize"; "required": false; }; "virtualScrollOptions": { "alias": "virtualScrollOptions"; "required": false; }; "virtualScrollDelay": { "alias": "virtualScrollDelay"; "required": false; }; "frozenWidth": { "alias": "frozenWidth"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "contextMenu": { "alias": "contextMenu"; "required": false; }; "resizableColumns": { "alias": "resizableColumns"; "required": false; }; "columnResizeMode": { "alias": "columnResizeMode"; "required": false; }; "reorderableColumns": { "alias": "reorderableColumns"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingIcon": { "alias": "loadingIcon"; "required": false; }; "showLoader": { "alias": "showLoader"; "required": false; }; "rowHover": { "alias": "rowHover"; "required": false; }; "customSort": { "alias": "customSort"; "required": false; }; "showInitialSortBadge": { "alias": "showInitialSortBadge"; "required": false; }; "autoLayout": { "alias": "autoLayout"; "required": false; }; "exportFunction": { "alias": "exportFunction"; "required": false; }; "exportHeader": { "alias": "exportHeader"; "required": false; }; "stateKey": { "alias": "stateKey"; "required": false; }; "stateStorage": { "alias": "stateStorage"; "required": false; }; "editMode": { "alias": "editMode"; "required": false; }; "groupRowsBy": { "alias": "groupRowsBy"; "required": false; }; "groupRowsByOrder": { "alias": "groupRowsByOrder"; "required": false; }; "responsiveLayout": { "alias": "responsiveLayout"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; "paginatorLocale": { "alias": "paginatorLocale"; "required": false; }; "value": { "alias": "value"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "first": { "alias": "first"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "totalRecords": { "alias": "totalRecords"; "required": false; }; "sortField": { "alias": "sortField"; "required": false; }; "sortOrder": { "alias": "sortOrder"; "required": false; }; "multiSortMeta": { "alias": "multiSortMeta"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; "selectAll": { "alias": "selectAll"; "required": false; }; "virtualRowHeight": { "alias": "virtualRowHeight"; "required": false; }; }, { "contextMenuSelectionChange": "contextMenuSelectionChange"; "selectAllChange": "selectAllChange"; "selectionChange": "selectionChange"; "onRowSelect": "onRowSelect"; "onRowUnselect": "onRowUnselect"; "onPage": "onPage"; "onSort": "onSort"; "onFilter": "onFilter"; "onLazyLoad": "onLazyLoad"; "onRowExpand": "onRowExpand"; "onRowCollapse": "onRowCollapse"; "onContextMenuSelect": "onContextMenuSelect"; "onColResize": "onColResize"; "onColReorder": "onColReorder"; "onRowReorder": "onRowReorder"; "onEditInit": "onEditInit"; "onEditComplete": "onEditComplete"; "onEditCancel": "onEditCancel"; "onHeaderCheckboxToggle": "onHeaderCheckboxToggle"; "sortFunction": "sortFunction"; "firstChange": "firstChange"; "rowsChange": "rowsChange"; "onStateSave": "onStateSave"; "onStateRestore": "onStateRestore"; }, ["templates"], never, false, never>;
}
export declare class TableBody implements AfterViewInit, OnDestroy {
    dt: Table;
    tableService: TableService;
    cd: ChangeDetectorRef;
    el: ElementRef;
    columns: any[] | undefined;
    template: Nullable<TemplateRef<any>>;
    get value(): any[] | undefined;
    set value(val: any[] | undefined);
    frozen: boolean | undefined;
    frozenRows: boolean | undefined;
    scrollerOptions: any;
    subscription: Subscription;
    _value: any[] | undefined;
    ngAfterViewInit(): void;
    constructor(dt: Table, tableService: TableService, cd: ChangeDetectorRef, el: ElementRef);
    shouldRenderRowGroupHeader(value: any, rowData: any, i: number): boolean;
    shouldRenderRowGroupFooter(value: any, rowData: any, i: number): boolean;
    shouldRenderRowspan(value: any, rowData: any, i: number): boolean;
    calculateRowGroupSize(value: any, rowData: any, index: number): number;
    ngOnDestroy(): void;
    updateFrozenRowStickyPosition(): void;
    updateFrozenRowGroupHeaderStickyPosition(): void;
    getScrollerOption(option: any, options?: any): any;
    getRowIndex(rowIndex: number): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBody, "[pTableBody]", never, { "columns": { "alias": "pTableBody"; "required": false; }; "template": { "alias": "pTableBodyTemplate"; "required": false; }; "value": { "alias": "value"; "required": false; }; "frozen": { "alias": "frozen"; "required": false; }; "frozenRows": { "alias": "frozenRows"; "required": false; }; "scrollerOptions": { "alias": "scrollerOptions"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class RowGroupHeader {
    dt: Table;
    constructor(dt: Table);
    get getFrozenRowGroupHeaderStickyPosition(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowGroupHeader, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowGroupHeader, "[pRowGroupHeader]", never, {}, {}, never, never, false, never>;
}
export declare class FrozenColumn implements AfterViewInit {
    private el;
    private zone;
    get frozen(): boolean;
    set frozen(val: boolean);
    alignFrozen: string;
    constructor(el: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    _frozen: boolean;
    updateStickyPosition(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FrozenColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FrozenColumn, "[pFrozenColumn]", never, { "frozen": { "alias": "frozen"; "required": false; }; "alignFrozen": { "alias": "alignFrozen"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class SortableColumn implements OnInit, OnDestroy {
    dt: Table;
    field: string | undefined;
    pSortableColumnDisabled: boolean | undefined;
    sorted: boolean | undefined;
    sortOrder: string | undefined;
    subscription: Subscription | undefined;
    constructor(dt: Table);
    ngOnInit(): void;
    updateSortState(): void;
    onClick(event: MouseEvent): void;
    onEnterKey(event: MouseEvent): void;
    isEnabled(): boolean;
    isFilterElement(element: HTMLElement): boolean;
    private isFilterElementIconOrButton;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SortableColumn, "[pSortableColumn]", never, { "field": { "alias": "pSortableColumn"; "required": false; }; "pSortableColumnDisabled": { "alias": "pSortableColumnDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class SortIcon implements OnInit, OnDestroy {
    dt: Table;
    cd: ChangeDetectorRef;
    field: string | undefined;
    subscription: Subscription | undefined;
    sortOrder: number | undefined;
    constructor(dt: Table, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onClick(event: Event): void;
    updateSortState(): void;
    getMultiSortMetaIndex(): number;
    getBadgeValue(): number;
    isMultiSorted(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortIcon, "p-sortIcon", never, { "field": { "alias": "field"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class SelectableRow implements OnInit, OnDestroy {
    dt: Table;
    tableService: TableService;
    private el;
    data: any;
    index: number | undefined;
    pSelectableRowDisabled: boolean | undefined;
    selected: boolean | undefined;
    subscription: Subscription | undefined;
    constructor(dt: Table, tableService: TableService, el: ElementRef);
    setRowTabIndex(): 0 | -1;
    ngOnInit(): void;
    onClick(event: Event): void;
    onTouchEnd(event: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    onArrowDownKey(event: KeyboardEvent): void;
    onArrowUpKey(event: KeyboardEvent): void;
    onEnterKey(event: KeyboardEvent): void;
    onEndKey(event: KeyboardEvent): void;
    onHomeKey(event: KeyboardEvent): void;
    onSpaceKey(event: any): void;
    focusRowChange(firstFocusableRow: any, currentFocusedRow: any): void;
    findLastSelectableRow(): any;
    findFirstSelectableRow(): any;
    findNextSelectableRow(row: HTMLTableRowElement): HTMLTableRowElement | null;
    findPrevSelectableRow(row: HTMLTableRowElement): HTMLTableRowElement | null;
    isEnabled(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectableRow, "[pSelectableRow]", never, { "data": { "alias": "pSelectableRow"; "required": false; }; "index": { "alias": "pSelectableRowIndex"; "required": false; }; "pSelectableRowDisabled": { "alias": "pSelectableRowDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class SelectableRowDblClick implements OnInit, OnDestroy {
    dt: Table;
    tableService: TableService;
    data: any;
    index: number | undefined;
    pSelectableRowDisabled: boolean | undefined;
    selected: boolean | undefined;
    subscription: Subscription | undefined;
    constructor(dt: Table, tableService: TableService);
    ngOnInit(): void;
    onClick(event: Event): void;
    isEnabled(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectableRowDblClick, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectableRowDblClick, "[pSelectableRowDblClick]", never, { "data": { "alias": "pSelectableRowDblClick"; "required": false; }; "index": { "alias": "pSelectableRowIndex"; "required": false; }; "pSelectableRowDisabled": { "alias": "pSelectableRowDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ContextMenuRow {
    dt: Table;
    tableService: TableService;
    private el;
    data: any;
    index: number | undefined;
    pContextMenuRowDisabled: boolean | undefined;
    selected: boolean | undefined;
    subscription: Subscription | undefined;
    constructor(dt: Table, tableService: TableService, el: ElementRef);
    onContextMenu(event: Event): void;
    isEnabled(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContextMenuRow, "[pContextMenuRow]", never, { "data": { "alias": "pContextMenuRow"; "required": false; }; "index": { "alias": "pContextMenuRowIndex"; "required": false; }; "pContextMenuRowDisabled": { "alias": "pContextMenuRowDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class RowToggler {
    dt: Table;
    data: any;
    pRowTogglerDisabled: boolean | undefined;
    constructor(dt: Table);
    onClick(event: Event): void;
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowToggler, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowToggler, "[pRowToggler]", never, { "data": { "alias": "pRowToggler"; "required": false; }; "pRowTogglerDisabled": { "alias": "pRowTogglerDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ResizableColumn implements AfterViewInit, OnDestroy {
    private document;
    private platformId;
    private renderer;
    dt: Table;
    el: ElementRef;
    zone: NgZone;
    pResizableColumnDisabled: boolean | undefined;
    resizer: HTMLSpanElement | undefined;
    resizerMouseDownListener: VoidListener;
    documentMouseMoveListener: VoidListener;
    documentMouseUpListener: VoidListener;
    constructor(document: Document, platformId: any, renderer: Renderer2, dt: Table, el: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    bindDocumentEvents(): void;
    unbindDocumentEvents(): void;
    onMouseDown(event: MouseEvent): void;
    onDocumentMouseMove(event: MouseEvent): void;
    onDocumentMouseUp(event: MouseEvent): void;
    isEnabled(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizableColumn, "[pResizableColumn]", never, { "pResizableColumnDisabled": { "alias": "pResizableColumnDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ReorderableColumn implements AfterViewInit, OnDestroy {
    private platformId;
    private renderer;
    dt: Table;
    el: ElementRef;
    zone: NgZone;
    pReorderableColumnDisabled: boolean | undefined;
    dragStartListener: VoidListener;
    dragOverListener: VoidListener;
    dragEnterListener: VoidListener;
    dragLeaveListener: VoidListener;
    mouseDownListener: VoidListener;
    constructor(platformId: any, renderer: Renderer2, dt: Table, el: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    bindEvents(): void;
    unbindEvents(): void;
    onMouseDown(event: any): void;
    onDragStart(event: any): void;
    onDragOver(event: any): void;
    onDragEnter(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
    isEnabled(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReorderableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReorderableColumn, "[pReorderableColumn]", never, { "pReorderableColumnDisabled": { "alias": "pReorderableColumnDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class EditableColumn implements OnChanges, AfterViewInit, OnDestroy {
    dt: Table;
    el: ElementRef;
    zone: NgZone;
    data: any;
    field: any;
    rowIndex: number | undefined;
    pEditableColumnDisabled: boolean | undefined;
    pFocusCellSelector: string | undefined;
    overlayEventListener: any;
    constructor(dt: Table, el: ElementRef, zone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    onClick(event: MouseEvent): void;
    openCell(): void;
    closeEditingCell(completed: any, event: Event): void;
    onEnterKeyDown(event: KeyboardEvent): void;
    onTabKeyDown(event: KeyboardEvent): void;
    onEscapeKeyDown(event: KeyboardEvent): void;
    onShiftKeyDown(event: KeyboardEvent): void;
    onArrowDown(event: KeyboardEvent): void;
    onArrowUp(event: KeyboardEvent): void;
    onArrowLeft(event: KeyboardEvent): void;
    onArrowRight(event: KeyboardEvent): void;
    findCell(element: any): any;
    moveToPreviousCell(event: KeyboardEvent): void;
    moveToNextCell(event: KeyboardEvent): void;
    findPreviousEditableColumn(cell: any): HTMLTableCellElement | null;
    findNextEditableColumn(cell: any): HTMLTableCellElement | null;
    findNextEditableColumnByIndex(cell: Element, index: number): Element;
    findPrevEditableColumnByIndex(cell: Element, index: number): Element;
    isEnabled(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditableColumn, "[pEditableColumn]", never, { "data": { "alias": "pEditableColumn"; "required": false; }; "field": { "alias": "pEditableColumnField"; "required": false; }; "rowIndex": { "alias": "pEditableColumnRowIndex"; "required": false; }; "pEditableColumnDisabled": { "alias": "pEditableColumnDisabled"; "required": false; }; "pFocusCellSelector": { "alias": "pFocusCellSelector"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class EditableRow {
    el: ElementRef;
    data: any;
    pEditableRowDisabled: boolean | undefined;
    constructor(el: ElementRef);
    isEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditableRow, "[pEditableRow]", never, { "data": { "alias": "pEditableRow"; "required": false; }; "pEditableRowDisabled": { "alias": "pEditableRowDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class InitEditableRow {
    dt: Table;
    editableRow: EditableRow;
    constructor(dt: Table, editableRow: EditableRow);
    onClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InitEditableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InitEditableRow, "[pInitEditableRow]", never, {}, {}, never, never, false, never>;
}
export declare class SaveEditableRow {
    dt: Table;
    editableRow: EditableRow;
    constructor(dt: Table, editableRow: EditableRow);
    onClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveEditableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SaveEditableRow, "[pSaveEditableRow]", never, {}, {}, never, never, false, never>;
}
export declare class CancelEditableRow {
    dt: Table;
    editableRow: EditableRow;
    constructor(dt: Table, editableRow: EditableRow);
    onClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CancelEditableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CancelEditableRow, "[pCancelEditableRow]", never, {}, {}, never, never, false, never>;
}
export declare class CellEditor implements AfterContentInit {
    dt: Table;
    editableColumn: EditableColumn;
    editableRow: EditableRow;
    templates: Nullable<QueryList<PrimeTemplate>>;
    inputTemplate: Nullable<TemplateRef<any>>;
    outputTemplate: Nullable<TemplateRef<any>>;
    constructor(dt: Table, editableColumn: EditableColumn, editableRow: EditableRow);
    ngAfterContentInit(): void;
    get editing(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellEditor, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CellEditor, "p-cellEditor", never, {}, {}, ["templates"], never, false, never>;
}
export declare class TableRadioButton {
    dt: Table;
    cd: ChangeDetectorRef;
    disabled: boolean | undefined;
    value: any;
    index: number | undefined;
    inputId: string | undefined;
    name: string | undefined;
    ariaLabel: string | undefined;
    inputViewChild: Nullable<ElementRef>;
    checked: boolean | undefined;
    focused: boolean | undefined;
    subscription: Subscription;
    constructor(dt: Table, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onClick(event: Event): void;
    onFocus(): void;
    onBlur(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRadioButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRadioButton, "p-tableRadioButton", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "index": { "alias": "index"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class TableCheckbox {
    dt: Table;
    tableService: TableService;
    cd: ChangeDetectorRef;
    disabled: boolean | undefined;
    value: any;
    index: number | undefined;
    inputId: string | undefined;
    name: string | undefined;
    required: boolean | undefined;
    ariaLabel: string | undefined;
    checked: boolean | undefined;
    focused: boolean | undefined;
    subscription: Subscription;
    constructor(dt: Table, tableService: TableService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onClick(event: Event): void;
    onFocus(): void;
    onBlur(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableCheckbox, "p-tableCheckbox", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "index": { "alias": "index"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class TableHeaderCheckbox {
    dt: Table;
    tableService: TableService;
    cd: ChangeDetectorRef;
    disabled: boolean | undefined;
    inputId: string | undefined;
    name: string | undefined;
    ariaLabel: string | undefined;
    checked: boolean | undefined;
    focused: boolean | undefined;
    selectionChangeSubscription: Subscription;
    valueChangeSubscription: Subscription;
    constructor(dt: Table, tableService: TableService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onClick(event: Event): void;
    onFocus(): void;
    onBlur(): void;
    isDisabled(): boolean;
    ngOnDestroy(): void;
    updateCheckedState(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHeaderCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHeaderCheckbox, "p-tableHeaderCheckbox", never, { "disabled": { "alias": "disabled"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class ReorderableRowHandle implements AfterViewInit {
    el: ElementRef;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReorderableRowHandle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReorderableRowHandle, "[pReorderableRowHandle]", never, {}, {}, never, never, false, never>;
}
export declare class ReorderableRow implements AfterViewInit {
    private renderer;
    dt: Table;
    el: ElementRef;
    zone: NgZone;
    index: number | undefined;
    pReorderableRowDisabled: boolean | undefined;
    mouseDownListener: VoidListener;
    dragStartListener: VoidListener;
    dragEndListener: VoidListener;
    dragOverListener: VoidListener;
    dragLeaveListener: VoidListener;
    dropListener: VoidListener;
    constructor(renderer: Renderer2, dt: Table, el: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    bindEvents(): void;
    unbindEvents(): void;
    onMouseDown(event: Event): void;
    isHandleElement(element: HTMLElement): boolean;
    onDragStart(event: DragEvent): void;
    onDragEnd(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    isEnabled(): boolean;
    onDrop(event: DragEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReorderableRow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ReorderableRow, "[pReorderableRow]", never, { "index": { "alias": "pReorderableRow"; "required": false; }; "pReorderableRowDisabled": { "alias": "pReorderableRowDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
/**
 * Column Filter element of Table.
 * @group Components
 */
export declare class ColumnFilter implements AfterContentInit {
    private document;
    el: ElementRef;
    dt: Table;
    renderer: Renderer2;
    config: PrimeNGConfig;
    overlayService: OverlayService;
    private cd;
    /**
     * Property represented by the column.
     * @group Props
     */
    field: string | undefined;
    /**
     * Type of the input.
     * @group Props
     */
    type: string;
    /**
     * Filter display.
     * @group Props
     */
    display: string;
    /**
     * Decides whether to display filter menu popup.
     * @group Props
     */
    showMenu: boolean;
    /**
     * Filter match mode.
     * @group Props
     */
    matchMode: string | undefined;
    /**
     * Filter operator.
     * @defaultValue 'AND'
     * @group Props
     */
    operator: string;
    /**
     * Decides whether to display filter operator.
     * @group Props
     */
    showOperator: boolean;
    /**
     * Decides whether to display clear filter button.
     * @group Props
     */
    showClearButton: boolean;
    /**
     * Decides whether to display apply filter button.
     * @group Props
     */
    showApplyButton: boolean;
    /**
     * Decides whether to display filter match modes.
     * @group Props
     */
    showMatchModes: boolean;
    /**
     * Decides whether to display add filter button.
     * @group Props
     */
    showAddButton: boolean;
    /**
     * Decides whether to close popup on clear button click.
     * @group Props
     */
    hideOnClear: boolean;
    /**
     * Filter placeholder.
     * @group Props
     */
    placeholder: string | undefined;
    /**
     * Filter match mode options.
     * @group Props
     */
    matchModeOptions: SelectItem[] | undefined;
    /**
     * Defines maximum amount of constraints.
     * @group Props
     */
    maxConstraints: number;
    /**
     * Defines minimum fraction of digits.
     * @group Props
     */
    minFractionDigits: number | undefined;
    /**
     * Defines maximum fraction of digits.
     * @group Props
     */
    maxFractionDigits: number | undefined;
    /**
     * Defines prefix of the filter.
     * @group Props
     */
    prefix: string | undefined;
    /**
     * Defines suffix of the filter.
     * @group Props
     */
    suffix: string | undefined;
    /**
     * Defines filter locale.
     * @group Props
     */
    locale: string | undefined;
    /**
     * Defines filter locale matcher.
     * @group Props
     */
    localeMatcher: string | undefined;
    /**
     * Enables currency input.
     * @group Props
     */
    currency: string | undefined;
    /**
     * Defines the display of the currency input.
     * @group Props
     */
    currencyDisplay: string | undefined;
    /**
     * Defines if filter grouping will be enabled.
     * @group Props
     */
    useGrouping: boolean;
    /**
     * Defines the visibility of buttons.
     * @group Props
     */
    showButtons: boolean;
    icon: Nullable<ElementRef>;
    clearButtonViewChild: Nullable<ElementRef>;
    templates: Nullable<QueryList<any>>;
    overlaySubscription: Subscription | undefined;
    headerTemplate: Nullable<TemplateRef<any>>;
    filterTemplate: Nullable<TemplateRef<any>>;
    footerTemplate: Nullable<TemplateRef<any>>;
    filterIconTemplate: Nullable<TemplateRef<any>>;
    removeRuleIconTemplate: Nullable<TemplateRef<any>>;
    addRuleIconTemplate: Nullable<TemplateRef<any>>;
    clearFilterIconTemplate: Nullable<TemplateRef<any>>;
    operatorOptions: any[] | undefined;
    overlayVisible: boolean | undefined;
    overlay: HTMLElement | undefined | null;
    scrollHandler: ConnectedOverlayScrollHandler | null | undefined;
    documentClickListener: VoidListener;
    documentResizeListener: VoidListener;
    matchModes: SelectItem[] | undefined;
    translationSubscription: Subscription | undefined;
    resetSubscription: Subscription | undefined;
    selfClick: boolean | undefined;
    overlayEventListener: any;
    private window;
    overlayId: any;
    get fieldConstraints(): FilterMetadata[] | undefined | null;
    get showRemoveIcon(): boolean;
    get showMenuButton(): boolean;
    get isShowOperator(): boolean;
    get isShowAddConstraint(): boolean | undefined | null;
    get showMenuButtonLabel(): any;
    get applyButtonLabel(): string;
    get clearButtonLabel(): string;
    get addRuleButtonLabel(): string;
    get removeRuleButtonLabel(): string;
    get noFilterLabel(): string;
    get filterMenuButtonAriaLabel(): string;
    get removeRuleButtonAriaLabel(): string;
    get filterOperatorAriaLabel(): string;
    get filterConstraintAriaLabel(): string;
    constructor(document: Document, el: ElementRef, dt: Table, renderer: Renderer2, config: PrimeNGConfig, overlayService: OverlayService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    generateMatchModeOptions(): void;
    generateOperatorOptions(): void;
    ngAfterContentInit(): void;
    initFieldFilterConstraint(): void;
    onMenuMatchModeChange(value: any, filterMeta: FilterMetadata): void;
    onRowMatchModeChange(matchMode: string): void;
    onRowMatchModeKeyDown(event: KeyboardEvent): void;
    onRowClearItemClick(): void;
    isRowMatchModeSelected(matchMode: string): boolean;
    addConstraint(): void;
    removeConstraint(filterMeta: FilterMetadata): void;
    onOperatorChange(value: any): void;
    toggleMenu(): void;
    onToggleButtonKeyDown(event: KeyboardEvent): void;
    onEscape(): void;
    findNextItem(item: HTMLLIElement): any;
    findPrevItem(item: HTMLLIElement): any;
    onContentClick(): void;
    onOverlayAnimationStart(event: AnimationEvent): void;
    onOverlayAnimationEnd(event: AnimationEvent): void;
    focusOnFirstElement(): void;
    getDefaultMatchMode(): string;
    getDefaultOperator(): string | undefined;
    hasRowFilter(): boolean;
    hasFilter(): boolean;
    isOutsideClicked(event: any): boolean;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    hide(): void;
    onOverlayHide(): void;
    clearFilter(): void;
    applyFilter(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnFilter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnFilter, "p-columnFilter", never, { "field": { "alias": "field"; "required": false; }; "type": { "alias": "type"; "required": false; }; "display": { "alias": "display"; "required": false; }; "showMenu": { "alias": "showMenu"; "required": false; }; "matchMode": { "alias": "matchMode"; "required": false; }; "operator": { "alias": "operator"; "required": false; }; "showOperator": { "alias": "showOperator"; "required": false; }; "showClearButton": { "alias": "showClearButton"; "required": false; }; "showApplyButton": { "alias": "showApplyButton"; "required": false; }; "showMatchModes": { "alias": "showMatchModes"; "required": false; }; "showAddButton": { "alias": "showAddButton"; "required": false; }; "hideOnClear": { "alias": "hideOnClear"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "matchModeOptions": { "alias": "matchModeOptions"; "required": false; }; "maxConstraints": { "alias": "maxConstraints"; "required": false; }; "minFractionDigits": { "alias": "minFractionDigits"; "required": false; }; "maxFractionDigits": { "alias": "maxFractionDigits"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "localeMatcher": { "alias": "localeMatcher"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "currencyDisplay": { "alias": "currencyDisplay"; "required": false; }; "useGrouping": { "alias": "useGrouping"; "required": false; }; "showButtons": { "alias": "showButtons"; "required": false; }; }, {}, ["templates"], never, false, never>;
}
export declare class ColumnFilterFormElement implements OnInit {
    dt: Table;
    private colFilter;
    field: string | undefined;
    type: string | undefined;
    filterConstraint: FilterMetadata | undefined;
    filterTemplate: Nullable<TemplateRef<any>>;
    placeholder: string | undefined;
    minFractionDigits: number | undefined;
    maxFractionDigits: number | undefined;
    prefix: string | undefined;
    suffix: string | undefined;
    locale: string | undefined;
    localeMatcher: string | undefined;
    currency: string | undefined;
    currencyDisplay: string | undefined;
    useGrouping: boolean;
    get showButtons(): boolean;
    filterCallback: any;
    constructor(dt: Table, colFilter: ColumnFilter);
    ngOnInit(): void;
    onModelChange(value: any): void;
    onTextInputEnterKeyDown(event: KeyboardEvent): void;
    onNumericInputKeyDown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnFilterFormElement, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnFilterFormElement, "p-columnFilterFormElement", never, { "field": { "alias": "field"; "required": false; }; "type": { "alias": "type"; "required": false; }; "filterConstraint": { "alias": "filterConstraint"; "required": false; }; "filterTemplate": { "alias": "filterTemplate"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "minFractionDigits": { "alias": "minFractionDigits"; "required": false; }; "maxFractionDigits": { "alias": "maxFractionDigits"; "required": false; }; "prefix": { "alias": "prefix"; "required": false; }; "suffix": { "alias": "suffix"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "localeMatcher": { "alias": "localeMatcher"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "currencyDisplay": { "alias": "currencyDisplay"; "required": false; }; "useGrouping": { "alias": "useGrouping"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class TableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TableModule, [typeof Table, typeof SortableColumn, typeof FrozenColumn, typeof RowGroupHeader, typeof SelectableRow, typeof RowToggler, typeof ContextMenuRow, typeof ResizableColumn, typeof ReorderableColumn, typeof EditableColumn, typeof CellEditor, typeof TableBody, typeof SortIcon, typeof TableRadioButton, typeof TableCheckbox, typeof TableHeaderCheckbox, typeof ReorderableRowHandle, typeof ReorderableRow, typeof SelectableRowDblClick, typeof EditableRow, typeof InitEditableRow, typeof SaveEditableRow, typeof CancelEditableRow, typeof ColumnFilter, typeof ColumnFilterFormElement], [typeof i1.CommonModule, typeof i2.PaginatorModule, typeof i3.InputTextModule, typeof i4.DropdownModule, typeof i5.FormsModule, typeof i6.ButtonModule, typeof i7.SelectButtonModule, typeof i8.CalendarModule, typeof i9.InputNumberModule, typeof i10.TriStateCheckboxModule, typeof i11.ScrollerModule, typeof i12.ArrowDownIcon, typeof i13.ArrowUpIcon, typeof i14.SpinnerIcon, typeof i15.SortAltIcon, typeof i16.SortAmountUpAltIcon, typeof i17.SortAmountDownIcon, typeof i18.CheckIcon, typeof i19.FilterIcon, typeof i20.FilterSlashIcon, typeof i21.PlusIcon, typeof i22.TrashIcon], [typeof Table, typeof i23.SharedModule, typeof SortableColumn, typeof FrozenColumn, typeof RowGroupHeader, typeof SelectableRow, typeof RowToggler, typeof ContextMenuRow, typeof ResizableColumn, typeof ReorderableColumn, typeof EditableColumn, typeof CellEditor, typeof SortIcon, typeof TableRadioButton, typeof TableCheckbox, typeof TableHeaderCheckbox, typeof ReorderableRowHandle, typeof ReorderableRow, typeof SelectableRowDblClick, typeof EditableRow, typeof InitEditableRow, typeof SaveEditableRow, typeof CancelEditableRow, typeof ColumnFilter, typeof ColumnFilterFormElement, typeof i11.ScrollerModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TableModule>;
}
