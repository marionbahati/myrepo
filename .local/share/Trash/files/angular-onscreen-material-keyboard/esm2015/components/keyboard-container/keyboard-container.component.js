import { animate, state, style, transition, trigger } from '@angular/animations';
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, NgZone, ViewChild } from '@angular/core';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { KeyboardAnimationState } from '../../enums/keyboard-animation-state.enum';
import { KeyboardAnimationTransition } from '../../enums/keyboard-animation-transition.enum';
// TODO: we can't use constants from animation.ts here because you can't use
// a text interpolation in anything that is analyzed statically with ngc (for AoT compile).
export const SHOW_ANIMATION = `${AnimationDurations.ENTERING} ${AnimationCurves.DECELERATION_CURVE}`;
export const HIDE_ANIMATION = `${AnimationDurations.EXITING} ${AnimationCurves.ACCELERATION_CURVE}`;
/**
 * Internal component that wraps user-provided keyboard content.
 * @docs-private
 */
export class MatKeyboardContainerComponent extends BasePortalOutlet {
    constructor(_ngZone, _changeDetectorRef) {
        super();
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /** Whether the component has been destroyed. */
        this._destroyed = false;
        /** The state of the keyboard animations. */
        this._animationState = KeyboardAnimationState.Void;
        /** Subject for notifying that the keyboard has exited from view. */
        this.onExit = new Subject();
        /** Subject for notifying that the keyboard has finished entering the view. */
        this.onEnter = new Subject();
        this.attrRole = 'alert';
    }
    onMousedown(event) {
        event.preventDefault();
    }
    /** Attach a component portal as content to this keyboard container. */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach keyboard content after content is already attached');
        }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    // Attach a template portal as content to this keyboard container
    attachTemplatePortal() {
        throw Error('Not yet implemented');
    }
    /** Handle end of animations, updating the state of the keyboard. */
    onAnimationEnd(event) {
        const { fromState, toState } = event;
        if ((toState === KeyboardAnimationState.Void && fromState !== KeyboardAnimationState.Void) || toState.startsWith('hidden')) {
            this._completeExit();
        }
        if (toState === KeyboardAnimationState.Visible) {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            const onEnter = this.onEnter;
            this._ngZone.run(() => {
                onEnter.next();
                onEnter.complete();
            });
        }
    }
    /** Begin animation of keyboard entrance into view. */
    enter() {
        if (!this._destroyed) {
            this._animationState = KeyboardAnimationState.Visible;
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Begin animation of the snack bar exiting from view. */
    exit() {
        this._animationState = KeyboardAnimationState.Hidden;
        return this.onExit;
    }
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     */
    ngOnDestroy() {
        this._destroyed = true;
        this._completeExit();
    }
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    _completeExit() {
        this._ngZone.onMicrotaskEmpty
            .asObservable()
            .pipe(first())
            .subscribe(() => {
            this.onExit.next();
            this.onExit.complete();
        });
    }
}
MatKeyboardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-keyboard-container',
                template: "<ng-template cdkPortalHost></ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                // animations: [
                //   trigger('state', [
                //     state('visible', style({transform: 'translateY(0%)'})),
                //     transition('visible => hidden', animate(HIDE_ANIMATION)),
                //     transition('void => visible', animate(SHOW_ANIMATION)),
                //   ])
                // ]
                animations: [
                    trigger('state', [
                        state(`${KeyboardAnimationState.Visible}`, style({ transform: 'translateY(0%)' })),
                        transition(`${KeyboardAnimationTransition.Hide}`, animate(HIDE_ANIMATION)),
                        transition(`${KeyboardAnimationTransition.Show}`, animate(SHOW_ANIMATION))
                    ])
                ],
                styles: [":host{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:2px;box-sizing:border-box;display:block;margin:0 auto;max-width:960px;min-width:568px;transform:translateY(100%)}.cdk-high-contrast-active :host,.cdk-high-contrast-active :host :host{border:1px solid}"]
            },] }
];
MatKeyboardContainerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
MatKeyboardContainerComponent.propDecorators = {
    _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
    _animationState: [{ type: HostBinding, args: ['@state',] }],
    attrRole: [{ type: HostBinding, args: ['attr.role',] }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onAnimationEnd: [{ type: HostListener, args: ['@state.done', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWtCLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQW1CLE1BQU0scUJBQXFCLENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBaUMsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlLLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUU3Riw0RUFBNEU7QUFDNUUsMkZBQTJGO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNyRyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFFcEc7OztHQUdHO0FBc0JILE1BQU0sT0FBTyw2QkFB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U0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHVEQUFrRDtnQkFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGdCQUFnQjtnQkFDaEIsdUJBQXVCO2dCQUN2Qiw4REFBOEQ7Z0JBQzlELGdFQUFnRTtnQkFDaEUsOERBQThEO2dCQUM5RCxPQUFPO2dCQUNQLElBQUk7Z0JBQ0osVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxPQUFPLEVBQUU7d0JBQ2YsS0FBSyxDQUFDLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzt3QkFDbEYsVUFBVSxDQUFDLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUMxRSxVQUFVLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzNFLENBQUM7aUJBQ0g7O2FBQ0Y7OztZQXJDeUgsTUFBTTtZQUE5RixpQkFBaUI7Ozs0QkE0Q2hELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUkzQyxXQUFXLFNBQUMsUUFBUTt1QkFTcEIsV0FBVyxTQUFDLFdBQVc7MEJBV3ZCLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBb0JwQyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbE91dGxldCwgQ2RrUG9ydGFsT3V0bGV0LCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgTmdab25lLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzLCBBbmltYXRpb25EdXJhdGlvbnMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWdzL2tleWJvYXJkLmNvbmZpZyc7XG5pbXBvcnQgeyBLZXlib2FyZEFuaW1hdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQtYW5pbWF0aW9uLXN0YXRlLmVudW0nO1xuaW1wb3J0IHsgS2V5Ym9hcmRBbmltYXRpb25UcmFuc2l0aW9uIH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQtYW5pbWF0aW9uLXRyYW5zaXRpb24uZW51bSc7XG5cbi8vIFRPRE86IHdlIGNhbid0IHVzZSBjb25zdGFudHMgZnJvbSBhbmltYXRpb24udHMgaGVyZSBiZWNhdXNlIHlvdSBjYW4ndCB1c2Vcbi8vIGEgdGV4dCBpbnRlcnBvbGF0aW9uIGluIGFueXRoaW5nIHRoYXQgaXMgYW5hbHl6ZWQgc3RhdGljYWxseSB3aXRoIG5nYyAoZm9yIEFvVCBjb21waWxlKS5cbmV4cG9ydCBjb25zdCBTSE9XX0FOSU1BVElPTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9ucy5FTlRFUklOR30gJHtBbmltYXRpb25DdXJ2ZXMuREVDRUxFUkFUSU9OX0NVUlZFfWA7XG5leHBvcnQgY29uc3QgSElERV9BTklNQVRJT04gPSBgJHtBbmltYXRpb25EdXJhdGlvbnMuRVhJVElOR30gJHtBbmltYXRpb25DdXJ2ZXMuQUNDRUxFUkFUSU9OX0NVUlZFfWA7XG5cbi8qKlxuICogSW50ZXJuYWwgY29tcG9uZW50IHRoYXQgd3JhcHMgdXNlci1wcm92aWRlZCBrZXlib2FyZCBjb250ZW50LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQta2V5Ym9hcmQtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2tleWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tleWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIC8vIGFuaW1hdGlvbnM6IFtcbiAgLy8gICB0cmlnZ2VyKCdzdGF0ZScsIFtcbiAgLy8gICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKSxcbiAgLy8gICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgYW5pbWF0ZShISURFX0FOSU1BVElPTikpLFxuICAvLyAgICAgdHJhbnNpdGlvbigndm9pZCA9PiB2aXNpYmxlJywgYW5pbWF0ZShTSE9XX0FOSU1BVElPTikpLFxuICAvLyAgIF0pXG4gIC8vIF1cbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xuICAgICAgc3RhdGUoYCR7S2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5WaXNpYmxlfWAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oYCR7S2V5Ym9hcmRBbmltYXRpb25UcmFuc2l0aW9uLkhpZGV9YCwgYW5pbWF0ZShISURFX0FOSU1BVElPTikpLFxuICAgICAgdHJhbnNpdGlvbihgJHtLZXlib2FyZEFuaW1hdGlvblRyYW5zaXRpb24uU2hvd31gLCBhbmltYXRlKFNIT1dfQU5JTUFUSU9OKSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgcG9ydGFsIG91dGxldCBpbnNpZGUgb2YgdGhpcyBjb250YWluZXIgaW50byB3aGljaCB0aGUga2V5Ym9hcmQgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cbiAgQFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgX3BvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xuXG4gIC8qKiBUaGUgc3RhdGUgb2YgdGhlIGtleWJvYXJkIGFuaW1hdGlvbnMuICovXG4gIEBIb3N0QmluZGluZygnQHN0YXRlJylcbiAgX2FuaW1hdGlvblN0YXRlOiBLZXlib2FyZEFuaW1hdGlvblN0YXRlID0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5Wb2lkO1xuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhhdCB0aGUga2V5Ym9hcmQgaGFzIGV4aXRlZCBmcm9tIHZpZXcuICovXG4gIG9uRXhpdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIGtleWJvYXJkIGhhcyBmaW5pc2hlZCBlbnRlcmluZyB0aGUgdmlldy4gKi9cbiAgb25FbnRlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIGF0dHJSb2xlID0gJ2FsZXJ0JztcblxuICAvLyB0aGUga2V5Ym9hcmQgY29uZmlndXJhdGlvblxuICBrZXlib2FyZENvbmZpZzogTWF0S2V5Ym9hcmRDb25maWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKiogQXR0YWNoIGEgY29tcG9uZW50IHBvcnRhbCBhcyBjb250ZW50IHRvIHRoaXMga2V5Ym9hcmQgY29udGFpbmVyLiAqL1xuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGlmICh0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIGtleWJvYXJkIGNvbnRlbnQgYWZ0ZXIgY29udGVudCBpcyBhbHJlYWR5IGF0dGFjaGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgfVxuXG4gIC8vIEF0dGFjaCBhIHRlbXBsYXRlIHBvcnRhbCBhcyBjb250ZW50IHRvIHRoaXMga2V5Ym9hcmQgY29udGFpbmVyXG4gIGF0dGFjaFRlbXBsYXRlUG9ydGFsKCk6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcbiAgICB0aHJvdyBFcnJvcignTm90IHlldCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBlbmQgb2YgYW5pbWF0aW9ucywgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIHRoZSBrZXlib2FyZC4gKi9cbiAgQEhvc3RMaXN0ZW5lcignQHN0YXRlLmRvbmUnLCBbJyRldmVudCddKVxuICBvbkFuaW1hdGlvbkVuZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBjb25zdCB7IGZyb21TdGF0ZSwgdG9TdGF0ZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoKHRvU3RhdGUgPT09IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVm9pZCAmJiBmcm9tU3RhdGUgIT09IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVm9pZCkgfHwgdG9TdGF0ZS5zdGFydHNXaXRoKCdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5fY29tcGxldGVFeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRvU3RhdGUgPT09IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVmlzaWJsZSkge1xuICAgICAgLy8gTm90ZTogd2Ugc2hvdWxkbid0IHVzZSBgdGhpc2AgaW5zaWRlIHRoZSB6b25lIGNhbGxiYWNrLFxuICAgICAgLy8gYmVjYXVzZSBpdCBjYW4gY2F1c2UgYSBtZW1vcnkgbGVhay5cbiAgICAgIGNvbnN0IG9uRW50ZXIgPSB0aGlzLm9uRW50ZXI7XG5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBvbkVudGVyLm5leHQoKTtcbiAgICAgICAgb25FbnRlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEJlZ2luIGFuaW1hdGlvbiBvZiBrZXlib2FyZCBlbnRyYW5jZSBpbnRvIHZpZXcuICovXG4gIGVudGVyKCkge1xuICAgIGlmICghdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25TdGF0ZSA9IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVmlzaWJsZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQmVnaW4gYW5pbWF0aW9uIG9mIHRoZSBzbmFjayBiYXIgZXhpdGluZyBmcm9tIHZpZXcuICovXG4gIGV4aXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhdGUgPSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLkhpZGRlbjtcbiAgICByZXR1cm4gdGhpcy5vbkV4aXQ7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgc3VyZSB0aGUgZXhpdCBjYWxsYmFja3MgaGF2ZSBiZWVuIGludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NvbXBsZXRlRXhpdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzZXR0bGUgYmVmb3JlIHJlbW92aW5nIHRoZSBlbGVtZW50LiBIZWxwcyBwcmV2ZW50XG4gICAqIGVycm9ycyB3aGVyZSB3ZSBlbmQgdXAgcmVtb3ZpbmcgYW4gZWxlbWVudCB3aGljaCBpcyBpbiB0aGUgbWlkZGxlIG9mIGFuIGFuaW1hdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2NvbXBsZXRlRXhpdCgpIHtcbiAgICB0aGlzLl9uZ1pvbmUub25NaWNyb3Rhc2tFbXB0eVxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FeGl0Lm5leHQoKTtcbiAgICAgICAgdGhpcy5vbkV4aXQuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=