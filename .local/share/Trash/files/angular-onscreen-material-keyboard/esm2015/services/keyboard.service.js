import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Inject, Injectable, LOCALE_ID, Optional, SkipSelf } from '@angular/core';
import { MatKeyboardRef } from '../classes/keyboard-ref.class';
import { MatKeyboardContainerComponent } from '../components/keyboard-container/keyboard-container.component';
import { MatKeyboardComponent } from '../components/keyboard/keyboard.component';
import { MAT_KEYBOARD_LAYOUTS } from '../configs/keyboard-layouts.config';
import { _applyAvailableLayouts, _applyConfigDefaults } from '../utils/keyboard.utils';
/**
 * Service to dispatch Material Design keyboard.
 */
export class MatKeyboardService {
    constructor(_overlay, _live, _defaultLocale, _layouts, _parentKeyboard) {
        this._overlay = _overlay;
        this._live = _live;
        this._defaultLocale = _defaultLocale;
        this._layouts = _layouts;
        this._parentKeyboard = _parentKeyboard;
        /**
         * Reference to the current keyboard in the view *at this level* (in the Angular injector tree).
         * If there is a parent keyboard service, all operations should delegate to that parent
         * via `_openedKeyboardRef`.
         */
        this._keyboardRefAtThisLevel = null;
        this._availableLocales = {};
        // prepare available layouts mapping
        this._availableLocales = _applyAvailableLayouts(_layouts);
    }
    /** Reference to the currently opened keyboard at *any* level. */
    get _openedKeyboardRef() {
        const parent = this._parentKeyboard;
        return parent ? parent._openedKeyboardRef : this._keyboardRefAtThisLevel;
    }
    set _openedKeyboardRef(value) {
        if (this._parentKeyboard) {
            this._parentKeyboard._openedKeyboardRef = value;
        }
        else {
            this._keyboardRefAtThisLevel = value;
        }
    }
    get availableLocales() {
        return this._availableLocales;
    }
    get isOpened() {
        return !!this._openedKeyboardRef;
    }
    /**
     * Creates and dispatches a keyboard with a custom component for the content, removing any
     * currently opened keyboards.
     *
     * @param layoutOrLocale layout or locale to use.
     * @param config Extra configuration for the keyboard.
     */
    openFromComponent(layoutOrLocale, config) {
        const keyboardRef = this._attachKeyboardContent(config);
        keyboardRef.instance.darkTheme = config.darkTheme;
        keyboardRef.instance.isDebug = config.isDebug;
        // a locale is provided
        if (this.availableLocales[layoutOrLocale]) {
            keyboardRef.instance.locale = layoutOrLocale;
            keyboardRef.instance.layout = this.getLayoutForLocale(layoutOrLocale);
        }
        // a layout name is provided
        if (this._layouts[layoutOrLocale]) {
            keyboardRef.instance.layout = this._layouts[layoutOrLocale];
            keyboardRef.instance.locale = this._layouts[layoutOrLocale].lang && this._layouts[layoutOrLocale].lang.pop();
        }
        if (config.customIcons) {
            keyboardRef.instance.icons = config.customIcons;
        }
        // When the keyboard is dismissed, lower the keyboard counter.
        keyboardRef
            .afterDismissed()
            .subscribe(() => {
            // Clear the keyboard ref if it hasn't already been replaced by a newer keyboard.
            if (this._openedKeyboardRef === keyboardRef) {
                this._openedKeyboardRef = null;
            }
        });
        if (this._openedKeyboardRef) {
            // If a keyboard is already in view, dismiss it and enter the
            // new keyboard after exit animation is complete.
            this._openedKeyboardRef
                .afterDismissed()
                .subscribe(() => {
                keyboardRef.containerInstance.enter();
            });
            this._openedKeyboardRef.dismiss();
        }
        else {
            // If no keyboard is in view, enter the new keyboard.
            keyboardRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the keyboard is opened.
        // if (configs.duration > 0) {
        //   keyboardRef.afterOpened().subscribe(() => {
        //     setTimeout(() => keyboardRef.dismiss(), configs.duration);
        //   });
        // }
        if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
        }
        this._openedKeyboardRef = keyboardRef;
        return this._openedKeyboardRef;
    }
    /**
     * Opens a keyboard with a message and an optional action.
     * @param layoutOrLocale A string representing the locale or the layout name to be used.
     * @param config Additional configuration options for the keyboard.
     */
    open(layoutOrLocale = this._defaultLocale, config = {}) {
        const _config = _applyConfigDefaults(config);
        return this.openFromComponent(layoutOrLocale, _config);
    }
    /**
     * Dismisses the currently-visible keyboard.
     */
    dismiss() {
        if (this._openedKeyboardRef) {
            this._openedKeyboardRef.dismiss();
        }
    }
    /**
     * Map a given locale to a layout name.
     * @param locale The layout name
     */
    mapLocale(locale = this._defaultLocale) {
        let layout;
        const country = locale
            .split('-')
            .shift();
        // search for layout matching the
        // first part, the country code
        if (this.availableLocales[country]) {
            layout = this.availableLocales[locale];
        }
        // look if the detailed locale matches any layout
        if (this.availableLocales[locale]) {
            layout = this.availableLocales[locale];
        }
        if (!layout) {
            throw Error(`No layout found for locale ${locale}`);
        }
        return layout;
    }
    getLayoutForLocale(locale) {
        return this._layouts[this.mapLocale(locale)];
    }
    /**
     * Attaches the keyboard container component to the overlay.
     */
    _attachKeyboardContainer(overlayRef, config) {
        const containerPortal = new ComponentPortal(MatKeyboardContainerComponent, config.viewContainerRef);
        const containerRef = overlayRef.attach(containerPortal);
        // set config
        containerRef.instance.keyboardConfig = config;
        return containerRef.instance;
    }
    /**
     * Places a new component as the content of the keyboard container.
     */
    _attachKeyboardContent(config) {
        const overlayRef = this._createOverlay();
        const container = this._attachKeyboardContainer(overlayRef, config);
        const portal = new ComponentPortal(MatKeyboardComponent);
        const contentRef = container.attachComponentPortal(portal);
        return new MatKeyboardRef(contentRef.instance, container, overlayRef);
    }
    /**
     * Creates a new overlay and places it in the correct location.
     */
    _createOverlay() {
        const state = new OverlayConfig({
            width: '100%'
        });
        state.positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .bottom('0');
        return this._overlay.create(state);
    }
}
MatKeyboardService.decorators = [
    { type: Injectable }
];
MatKeyboardService.ctorParameters = () => [
    { type: Overlay },
    { type: LiveAnnouncer },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_KEYBOARD_LAYOUTS,] }] },
    { type: MatKeyboardService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9zZXJ2aWNlcy9rZXlib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZGOztHQUVHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQWdDN0IsWUFBb0IsUUFBaUIsRUFDakIsS0FBb0IsRUFDRCxjQUFzQixFQUNYLFFBQTBCLEVBQ2hDLGVBQW1DO1FBSjNELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNELG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBbkMvRTs7OztXQUlHO1FBQ0ssNEJBQXVCLEdBQWdELElBQUksQ0FBQztRQUU1RSxzQkFBaUIsR0FBZSxFQUFF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LENBQUM7SUFFRDs7T0FFRztJQUNLLGNBQWM7UUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDOUIsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDbkMsUUFBUSxFQUFFO2FBQ1YsTUFBTSxFQUFFO2FBQ1Isa0JBQWtCLEVBQUU7YUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUF6TUYsVUFBVTs7O1lBakJGLE9BQU87WUFEUCxhQUFhO3lDQXFEUCxNQUFNLFNBQUMsU0FBUzs0Q0FDaEIsTUFBTSxTQUFDLG9CQUFvQjtZQUNxQixrQkFBa0IsdUJBQWxFLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl2ZUFubm91bmNlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUQsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9rZXlib2FyZC1jb250YWluZXIva2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRLZXlib2FyZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE1BVF9LRVlCT0FSRF9MQVlPVVRTIH0gZnJvbSAnLi4vY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZyc7XG5pbXBvcnQgeyBNYXRLZXlib2FyZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZ3Mva2V5Ym9hcmQuY29uZmlnJztcbmltcG9ydCB7IElLZXlib2FyZExheW91dCB9IGZyb20gJy4uL2ludGVyZmFjZXMva2V5Ym9hcmQtbGF5b3V0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBJS2V5Ym9hcmRMYXlvdXRzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXRzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTG9jYWxlTWFwIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sb2NhbGUtbWFwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBfYXBwbHlBdmFpbGFibGVMYXlvdXRzLCBfYXBwbHlDb25maWdEZWZhdWx0cyB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkLnV0aWxzJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGRpc3BhdGNoIE1hdGVyaWFsIERlc2lnbiBrZXlib2FyZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkU2VydmljZSB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQga2V5Ym9hcmQgaW4gdGhlIHZpZXcgKmF0IHRoaXMgbGV2ZWwqIChpbiB0aGUgQW5ndWxhciBpbmplY3RvciB0cmVlKS5cbiAgICogSWYgdGhlcmUgaXMgYSBwYXJlbnQga2V5Ym9hcmQgc2VydmljZSwgYWxsIG9wZXJhdGlvbnMgc2hvdWxkIGRlbGVnYXRlIHRvIHRoYXQgcGFyZW50XG4gICAqIHZpYSBgX29wZW5lZEtleWJvYXJkUmVmYC5cbiAgICovXG4gIHByaXZhdGUgX2tleWJvYXJkUmVmQXRUaGlzTGV2ZWw6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX2F2YWlsYWJsZUxvY2FsZXM6IElMb2NhbGVNYXAgPSB7fTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgb3BlbmVkIGtleWJvYXJkIGF0ICphbnkqIGxldmVsLiAqL1xuICBwcml2YXRlIGdldCBfb3BlbmVkS2V5Ym9hcmRSZWYoKTogTWF0S2V5Ym9hcmRSZWY8TWF0S2V5Ym9hcmRDb21wb25lbnQ+IHwgbnVsbCB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fcGFyZW50S2V5Ym9hcmQ7XG4gICAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5fb3BlbmVkS2V5Ym9hcmRSZWYgOiB0aGlzLl9rZXlib2FyZFJlZkF0VGhpc0xldmVsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQgX29wZW5lZEtleWJvYXJkUmVmKHZhbHVlOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4pIHtcbiAgICBpZiAodGhpcy5fcGFyZW50S2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuX3BhcmVudEtleWJvYXJkLl9vcGVuZWRLZXlib2FyZFJlZiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9rZXlib2FyZFJlZkF0VGhpc0xldmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGF2YWlsYWJsZUxvY2FsZXMoKTogSUxvY2FsZU1hcCB7XG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZUxvY2FsZXM7XG4gIH1cblxuICBnZXQgaXNPcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWY7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9saXZlOiBMaXZlQW5ub3VuY2VyLFxuICAgICAgICAgICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfZGVmYXVsdExvY2FsZTogc3RyaW5nLFxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9LRVlCT0FSRF9MQVlPVVRTKSBwcml2YXRlIF9sYXlvdXRzOiBJS2V5Ym9hcmRMYXlvdXRzLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIF9wYXJlbnRLZXlib2FyZDogTWF0S2V5Ym9hcmRTZXJ2aWNlKSB7XG4gICAgLy8gcHJlcGFyZSBhdmFpbGFibGUgbGF5b3V0cyBtYXBwaW5nXG4gICAgdGhpcy5fYXZhaWxhYmxlTG9jYWxlcyA9IF9hcHBseUF2YWlsYWJsZUxheW91dHMoX2xheW91dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGRpc3BhdGNoZXMgYSBrZXlib2FyZCB3aXRoIGEgY3VzdG9tIGNvbXBvbmVudCBmb3IgdGhlIGNvbnRlbnQsIHJlbW92aW5nIGFueVxuICAgKiBjdXJyZW50bHkgb3BlbmVkIGtleWJvYXJkcy5cbiAgICpcbiAgICogQHBhcmFtIGxheW91dE9yTG9jYWxlIGxheW91dCBvciBsb2NhbGUgdG8gdXNlLlxuICAgKiBAcGFyYW0gY29uZmlnIEV4dHJhIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBrZXlib2FyZC5cbiAgICovXG4gIG9wZW5Gcm9tQ29tcG9uZW50KGxheW91dE9yTG9jYWxlOiBzdHJpbmcsIGNvbmZpZzogTWF0S2V5Ym9hcmRDb25maWcpOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4ge1xuICAgIGNvbnN0IGtleWJvYXJkUmVmOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD4gPSB0aGlzLl9hdHRhY2hLZXlib2FyZENvbnRlbnQoY29uZmlnKTtcblxuICAgIGtleWJvYXJkUmVmLmluc3RhbmNlLmRhcmtUaGVtZSA9IGNvbmZpZy5kYXJrVGhlbWU7XG4gICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UuaXNEZWJ1ZyA9IGNvbmZpZy5pc0RlYnVnO1xuXG4gICAgLy8gYSBsb2NhbGUgaXMgcHJvdmlkZWRcbiAgICBpZiAodGhpcy5hdmFpbGFibGVMb2NhbGVzW2xheW91dE9yTG9jYWxlXSkge1xuICAgICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UubG9jYWxlID0gbGF5b3V0T3JMb2NhbGU7XG4gICAgICBrZXlib2FyZFJlZi5pbnN0YW5jZS5sYXlvdXQgPSB0aGlzLmdldExheW91dEZvckxvY2FsZShsYXlvdXRPckxvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gYSBsYXlvdXQgbmFtZSBpcyBwcm92aWRlZFxuICAgIGlmICh0aGlzLl9sYXlvdXRzW2xheW91dE9yTG9jYWxlXSkge1xuICAgICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UubGF5b3V0ID0gdGhpcy5fbGF5b3V0c1tsYXlvdXRPckxvY2FsZV07XG4gICAgICBrZXlib2FyZFJlZi5pbnN0YW5jZS5sb2NhbGUgPSB0aGlzLl9sYXlvdXRzW2xheW91dE9yTG9jYWxlXS5sYW5nICYmIHRoaXMuX2xheW91dHNbbGF5b3V0T3JMb2NhbGVdLmxhbmcucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jdXN0b21JY29ucykge1xuICAgICAga2V5Ym9hcmRSZWYuaW5zdGFuY2UuaWNvbnMgPSBjb25maWcuY3VzdG9tSWNvbnM7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUga2V5Ym9hcmQgaXMgZGlzbWlzc2VkLCBsb3dlciB0aGUga2V5Ym9hcmQgY291bnRlci5cbiAgICBrZXlib2FyZFJlZlxuICAgICAgLmFmdGVyRGlzbWlzc2VkKClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyBDbGVhciB0aGUga2V5Ym9hcmQgcmVmIGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gcmVwbGFjZWQgYnkgYSBuZXdlciBrZXlib2FyZC5cbiAgICAgICAgaWYgKHRoaXMuX29wZW5lZEtleWJvYXJkUmVmID09PSBrZXlib2FyZFJlZikge1xuICAgICAgICAgIHRoaXMuX29wZW5lZEtleWJvYXJkUmVmID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWYpIHtcbiAgICAgIC8vIElmIGEga2V5Ym9hcmQgaXMgYWxyZWFkeSBpbiB2aWV3LCBkaXNtaXNzIGl0IGFuZCBlbnRlciB0aGVcbiAgICAgIC8vIG5ldyBrZXlib2FyZCBhZnRlciBleGl0IGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgIHRoaXMuX29wZW5lZEtleWJvYXJkUmVmXG4gICAgICAgIC5hZnRlckRpc21pc3NlZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGtleWJvYXJkUmVmLmNvbnRhaW5lckluc3RhbmNlLmVudGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWYuZGlzbWlzcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBubyBrZXlib2FyZCBpcyBpbiB2aWV3LCBlbnRlciB0aGUgbmV3IGtleWJvYXJkLlxuICAgICAga2V5Ym9hcmRSZWYuY29udGFpbmVySW5zdGFuY2UuZW50ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhIGRpc21pc3MgdGltZW91dCBpcyBwcm92aWRlZCwgc2V0IHVwIGRpc21pc3MgYmFzZWQgb24gYWZ0ZXIgdGhlIGtleWJvYXJkIGlzIG9wZW5lZC5cbiAgICAvLyBpZiAoY29uZmlncy5kdXJhdGlvbiA+IDApIHtcbiAgICAvLyAgIGtleWJvYXJkUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlib2FyZFJlZi5kaXNtaXNzKCksIGNvbmZpZ3MuZHVyYXRpb24pO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgaWYgKGNvbmZpZy5hbm5vdW5jZW1lbnRNZXNzYWdlKSB7XG4gICAgICB0aGlzLl9saXZlLmFubm91bmNlKGNvbmZpZy5hbm5vdW5jZW1lbnRNZXNzYWdlLCBjb25maWcucG9saXRlbmVzcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWYgPSBrZXlib2FyZFJlZjtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkS2V5Ym9hcmRSZWY7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBrZXlib2FyZCB3aXRoIGEgbWVzc2FnZSBhbmQgYW4gb3B0aW9uYWwgYWN0aW9uLlxuICAgKiBAcGFyYW0gbGF5b3V0T3JMb2NhbGUgQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBsb2NhbGUgb3IgdGhlIGxheW91dCBuYW1lIHRvIGJlIHVzZWQuXG4gICAqIEBwYXJhbSBjb25maWcgQWRkaXRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBrZXlib2FyZC5cbiAgICovXG4gIG9wZW4obGF5b3V0T3JMb2NhbGU6IHN0cmluZyA9IHRoaXMuX2RlZmF1bHRMb2NhbGUsIGNvbmZpZzogTWF0S2V5Ym9hcmRDb25maWcgPSB7fSk6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PiB7XG4gICAgY29uc3QgX2NvbmZpZyA9IF9hcHBseUNvbmZpZ0RlZmF1bHRzKGNvbmZpZyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcGVuRnJvbUNvbXBvbmVudChsYXlvdXRPckxvY2FsZSwgX2NvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogRGlzbWlzc2VzIHRoZSBjdXJyZW50bHktdmlzaWJsZSBrZXlib2FyZC5cbiAgICovXG4gIGRpc21pc3MoKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZEtleWJvYXJkUmVmKSB7XG4gICAgICB0aGlzLl9vcGVuZWRLZXlib2FyZFJlZi5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcCBhIGdpdmVuIGxvY2FsZSB0byBhIGxheW91dCBuYW1lLlxuICAgKiBAcGFyYW0gbG9jYWxlIFRoZSBsYXlvdXQgbmFtZVxuICAgKi9cbiAgbWFwTG9jYWxlKGxvY2FsZTogc3RyaW5nID0gdGhpcy5fZGVmYXVsdExvY2FsZSk6IHN0cmluZyB7XG4gICAgbGV0IGxheW91dDogc3RyaW5nO1xuICAgIGNvbnN0IGNvdW50cnkgPSBsb2NhbGVcbiAgICAgIC5zcGxpdCgnLScpXG4gICAgICAuc2hpZnQoKTtcblxuICAgIC8vIHNlYXJjaCBmb3IgbGF5b3V0IG1hdGNoaW5nIHRoZVxuICAgIC8vIGZpcnN0IHBhcnQsIHRoZSBjb3VudHJ5IGNvZGVcbiAgICBpZiAodGhpcy5hdmFpbGFibGVMb2NhbGVzW2NvdW50cnldKSB7XG4gICAgICBsYXlvdXQgPSB0aGlzLmF2YWlsYWJsZUxvY2FsZXNbbG9jYWxlXTtcbiAgICB9XG5cbiAgICAvLyBsb29rIGlmIHRoZSBkZXRhaWxlZCBsb2NhbGUgbWF0Y2hlcyBhbnkgbGF5b3V0XG4gICAgaWYgKHRoaXMuYXZhaWxhYmxlTG9jYWxlc1tsb2NhbGVdKSB7XG4gICAgICBsYXlvdXQgPSB0aGlzLmF2YWlsYWJsZUxvY2FsZXNbbG9jYWxlXTtcbiAgICB9XG5cbiAgICBpZiAoIWxheW91dCkge1xuICAgICAgdGhyb3cgRXJyb3IoYE5vIGxheW91dCBmb3VuZCBmb3IgbG9jYWxlICR7bG9jYWxlfWApO1xuICAgIH1cblxuICAgIHJldHVybiBsYXlvdXQ7XG4gIH1cblxuICBnZXRMYXlvdXRGb3JMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBJS2V5Ym9hcmRMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXRzW3RoaXMubWFwTG9jYWxlKGxvY2FsZSldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHRoZSBrZXlib2FyZCBjb250YWluZXIgY29tcG9uZW50IHRvIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoS2V5Ym9hcmRDb250YWluZXIob3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgY29uZmlnOiBNYXRLZXlib2FyZENvbmZpZyk6IE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50LCBjb25maWcudmlld0NvbnRhaW5lclJlZik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8TWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQ+ID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcblxuICAgIC8vIHNldCBjb25maWdcbiAgICBjb250YWluZXJSZWYuaW5zdGFuY2Uua2V5Ym9hcmRDb25maWcgPSBjb25maWc7XG5cbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsYWNlcyBhIG5ldyBjb21wb25lbnQgYXMgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkIGNvbnRhaW5lci5cbiAgICovXG4gIHByaXZhdGUgX2F0dGFjaEtleWJvYXJkQ29udGVudChjb25maWc6IE1hdEtleWJvYXJkQ29uZmlnKTogTWF0S2V5Ym9hcmRSZWY8TWF0S2V5Ym9hcmRDb21wb25lbnQ+IHtcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheSgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2F0dGFjaEtleWJvYXJkQ29udGFpbmVyKG92ZXJsYXlSZWYsIGNvbmZpZyk7XG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChNYXRLZXlib2FyZENvbXBvbmVudCk7XG4gICAgY29uc3QgY29udGVudFJlZiA9IGNvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgICByZXR1cm4gbmV3IE1hdEtleWJvYXJkUmVmKGNvbnRlbnRSZWYuaW5zdGFuY2UsIGNvbnRhaW5lciwgb3ZlcmxheVJlZikgYXMgTWF0S2V5Ym9hcmRSZWY8TWF0S2V5Ym9hcmRDb21wb25lbnQ+O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgb3ZlcmxheSBhbmQgcGxhY2VzIGl0IGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9KTtcblxuICAgIHN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmdsb2JhbCgpXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcbiAgICAgIC5ib3R0b20oJzAnKTtcblxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LmNyZWF0ZShzdGF0ZSk7XG4gIH1cbn1cbiJdfQ==