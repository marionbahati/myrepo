import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, forwardRef, Component, Input, ContentChildren, viewChild, ElementRef, effect, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';

class MeterGroupLabel {
    value = null;
    labelPosition = 'end';
    labelOrientation = 'horizontal';
    min;
    max;
    iconTemplate;
    templates;
    get labelClass() {
        return {
            'p-metergroup-labels p-component': true,
            'p-metergroup-labels-vertical': this.labelOrientation === 'vertical',
            'p-metergroup-labels-horizontal': this.labelOrientation === 'horizontal'
        };
    }
    parentInstance = inject(forwardRef(() => MeterGroup));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroupLabel, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: MeterGroupLabel, selector: "p-meterGroupLabel", inputs: { value: "value", labelPosition: "labelPosition", labelOrientation: "labelOrientation", min: "min", max: "max", iconTemplate: "iconTemplate" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <ol [ngClass]="labelClass">
            <li *ngFor="let labelItem of value; let index = index; trackBy: parentInstance.trackByFn" class="p-metergroup-label">
                <ng-container *ngIf="!iconTemplate">
                    <i *ngIf="labelItem.icon" [class]="labelItem.icon" [ngClass]="{ 'p-metergroup-label-icon': true }" [ngStyle]="{ color: labelItem.color }"></i>
                    <span *ngIf="!labelItem.icon" class="p-metergroup-label-marker" [ngStyle]="{ backgroundColor: labelItem.color }"></span>
                </ng-container>
                <ng-container *ngTemplateOutlet="iconTemplate; context: { $implicit: labelItem, icon: labelItem.icon }"></ng-container>
                <span class="p-metergroup-label-text">{{ labelItem.label }} ({{ parentInstance?.percentValue(labelItem.value) }})</span>
            </li>
        </ol>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroupLabel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-meterGroupLabel',
                    template: `
        <ol [ngClass]="labelClass">
            <li *ngFor="let labelItem of value; let index = index; trackBy: parentInstance.trackByFn" class="p-metergroup-label">
                <ng-container *ngIf="!iconTemplate">
                    <i *ngIf="labelItem.icon" [class]="labelItem.icon" [ngClass]="{ 'p-metergroup-label-icon': true }" [ngStyle]="{ color: labelItem.color }"></i>
                    <span *ngIf="!labelItem.icon" class="p-metergroup-label-marker" [ngStyle]="{ backgroundColor: labelItem.color }"></span>
                </ng-container>
                <ng-container *ngTemplateOutlet="iconTemplate; context: { $implicit: labelItem, icon: labelItem.icon }"></ng-container>
                <span class="p-metergroup-label-text">{{ labelItem.label }} ({{ parentInstance?.percentValue(labelItem.value) }})</span>
            </li>
        </ol>
    `
                }]
        }], propDecorators: { value: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], labelOrientation: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], iconTemplate: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
/**
 * MeterGroup displays scalar measurements within a known range.
 * @group Components
 */
class MeterGroup {
    /**
     * Current value of the metergroup.
     * @group Props
     */
    value;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min = 0;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max = 100;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Specifies the label position of the component, valid values are 'start' and 'end'.
     * @group Props
     */
    labelPosition = 'end';
    /**
     * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    labelOrientation = 'horizontal';
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
    templates;
    get vertical() {
        return this.orientation === 'vertical';
    }
    get containerClass() {
        return {
            'p-metergroup p-component': true,
            'p-metergroup-horizontal': this.orientation === 'horizontal',
            'p-metergroup-vertical': this.orientation === 'vertical'
        };
    }
    labelTemplate;
    meterTemplate;
    endTemplate;
    startTemplate;
    iconTemplate;
    container = viewChild('container', { read: ElementRef });
    containerEffect = effect(() => {
        const _container = this.container();
        const height = DomHandler.getOuterHeight(_container.nativeElement);
        this.vertical && (this.container().nativeElement.style.height = height + 'px');
    });
    ngAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'label':
                    this.labelTemplate = item.template;
                    break;
                case 'meter':
                    this.meterTemplate = item.template;
                    break;
                case 'icon':
                    this.iconTemplate = item.template;
                    break;
                case 'start':
                    this.startTemplate = item.template;
                    break;
                case 'end':
                    this.endTemplate = item.template;
                    break;
                default:
                    break;
            }
        });
    }
    percent(meter = 0) {
        const percentOfItem = ((meter - this.min) / (this.max - this.min)) * 100;
        return Math.round(Math.max(0, Math.min(100, percentOfItem)));
    }
    percentValue(meter) {
        return this.percent(meter) + '%';
    }
    meterStyle(val) {
        return {
            backgroundColor: val.color,
            width: this.orientation === 'horizontal' && this.percentValue(val.value),
            height: this.orientation === 'vertical' && this.percentValue(val.value)
        };
    }
    totalPercent() {
        return this.percent(this.value.reduce((total, val) => total + val.value, 0));
    }
    percentages() {
        let sum = 0;
        const sumsArray = [];
        this.value.forEach((item) => {
            sum += item.value;
            sumsArray.push(sum);
        });
        return sumsArray;
    }
    trackByFn(index) {
        return index;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.2", type: MeterGroup, selector: "p-meterGroup", inputs: { value: "value", min: "min", max: "max", orientation: "orientation", labelPosition: "labelPosition", labelOrientation: "labelOrientation", style: "style", styleClass: "styleClass" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, read: ElementRef, isSignal: true }], ngImport: i0, template: `
        <div #container [ngClass]="containerClass" role="meter" [attr.aria-valuemin]="min" [attr.aria-valuemax]="max" [attr.aria-valuenow]="totalPercent()" [ngStyle]="style" [class]="styleClass">
            @if(labelPosition ==='start') {
            <p-meterGroupLabel *ngIf="!labelTemplate" [value]="value" [labelPosition]="labelPosition" [labelOrientation]="labelOrientation" [min]="min" [max]="max" [iconTemplate]="iconTemplate" />
            <ng-container *ngTemplateOutlet="labelTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            }
            <ng-container *ngTemplateOutlet="startTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            <div class="p-metergroup-meters">
                <ng-container *ngFor="let meterItem of value; let index = index; trackBy: trackByFn">
                    <ng-container *ngTemplateOutlet="meterTemplate; context: { $implicit: meterItem, index: index, orientation: this.orientation, class: 'p-metergroup-meter', size: percentValue(meterItem.value), totalPercent: totalPercent() }">
                    </ng-container>
                    <ng-container *ngIf="!meterTemplate">
                        <span class="p-metergroup-meter" [ngStyle]="meterStyle(meterItem)"></span>
                    </ng-container>
                </ng-container>
            </div>
            <ng-container *ngTemplateOutlet="endTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            @if(labelPosition === 'end') {
            <p-meterGroupLabel *ngIf="!labelTemplate" [value]="value" [labelPosition]="labelPosition" [labelOrientation]="labelOrientation" [min]="min" [max]="max" [iconTemplate]="iconTemplate" />
            <ng-container *ngTemplateOutlet="labelTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            }
        </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: MeterGroupLabel, selector: "p-meterGroupLabel", inputs: ["value", "labelPosition", "labelOrientation", "min", "max", "iconTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-meterGroup',
                    template: `
        <div #container [ngClass]="containerClass" role="meter" [attr.aria-valuemin]="min" [attr.aria-valuemax]="max" [attr.aria-valuenow]="totalPercent()" [ngStyle]="style" [class]="styleClass">
            @if(labelPosition ==='start') {
            <p-meterGroupLabel *ngIf="!labelTemplate" [value]="value" [labelPosition]="labelPosition" [labelOrientation]="labelOrientation" [min]="min" [max]="max" [iconTemplate]="iconTemplate" />
            <ng-container *ngTemplateOutlet="labelTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            }
            <ng-container *ngTemplateOutlet="startTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            <div class="p-metergroup-meters">
                <ng-container *ngFor="let meterItem of value; let index = index; trackBy: trackByFn">
                    <ng-container *ngTemplateOutlet="meterTemplate; context: { $implicit: meterItem, index: index, orientation: this.orientation, class: 'p-metergroup-meter', size: percentValue(meterItem.value), totalPercent: totalPercent() }">
                    </ng-container>
                    <ng-container *ngIf="!meterTemplate">
                        <span class="p-metergroup-meter" [ngStyle]="meterStyle(meterItem)"></span>
                    </ng-container>
                </ng-container>
            </div>
            <ng-container *ngTemplateOutlet="endTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            @if(labelPosition === 'end') {
            <p-meterGroupLabel *ngIf="!labelTemplate" [value]="value" [labelPosition]="labelPosition" [labelOrientation]="labelOrientation" [min]="min" [max]="max" [iconTemplate]="iconTemplate" />
            <ng-container *ngTemplateOutlet="labelTemplate; context: { $implicit: value, totalPercent: totalPercent(), percentages: percentages() }"></ng-container>
            }
        </div>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { value: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], orientation: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], labelOrientation: [{
                type: Input
            }], style: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class MeterGroupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.2", ngImport: i0, type: MeterGroupModule, declarations: [MeterGroup, MeterGroupLabel], imports: [CommonModule, SharedModule], exports: [MeterGroup, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroupModule, imports: [CommonModule, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: MeterGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [MeterGroup, SharedModule],
                    declarations: [MeterGroup, MeterGroupLabel]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MeterGroup, MeterGroupLabel, MeterGroupModule };
//# sourceMappingURL=primeng-metergroup.mjs.map
