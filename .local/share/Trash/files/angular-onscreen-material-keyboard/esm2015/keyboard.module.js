// External modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Angular CDK
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
// Angular material
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// Configs
import { keyboardDeadkeys, MAT_KEYBOARD_DEADKEYS } from './configs/keyboard-deadkey.config';
import { keyboardLayouts, MAT_KEYBOARD_LAYOUTS } from './configs/keyboard-layouts.config';
// Components and directives
import { MatKeyboardContainerComponent } from './components/keyboard-container/keyboard-container.component';
import { MatKeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';
import { MatKeyboardComponent } from './components/keyboard/keyboard.component';
import { MatKeyboardDirective } from './directives/keyboard.directive';
// Providers
import { MatKeyboardKebabCasePipe } from './pipes/kebab-case.pipe';
import { MatKeyboardService } from './services/keyboard.service';
const ɵ0 = keyboardDeadkeys, ɵ1 = keyboardLayouts;
export class MatKeyboardModule {
}
MatKeyboardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    // Angular modules
                    CommonModule,
                    OverlayModule,
                    // Cdk modules
                    PortalModule,
                    // Material modules
                    MatButtonModule,
                    MatCommonModule,
                    MatIconModule,
                    MatInputModule
                ],
                exports: [
                    MatKeyboardComponent,
                    MatKeyboardContainerComponent,
                    MatKeyboardKeyComponent,
                    MatKeyboardDirective
                ],
                declarations: [
                    MatKeyboardKebabCasePipe,
                    MatKeyboardComponent,
                    MatKeyboardContainerComponent,
                    MatKeyboardKeyComponent,
                    MatKeyboardDirective
                ],
                entryComponents: [
                    MatKeyboardComponent,
                    MatKeyboardContainerComponent,
                    MatKeyboardKeyComponent
                ],
                providers: [
                    MatKeyboardService,
                    { provide: MAT_KEYBOARD_DEADKEYS, useValue: ɵ0 },
                    { provide: MAT_KEYBOARD_LAYOUTS, useValue: ɵ1 }
                ]
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2tleWJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsY0FBYztBQUNkLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsbUJBQW1CO0FBQ25CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxVQUFVO0FBQ1YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFGLDRCQUE0QjtBQUM1QixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxZQUFZO0FBQ1osT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7V0FxQ2pCLGdCQUFnQixPQUNqQixlQUFlO0FBRzlELE1BQU0sT0FBTyxpQkFBaUI7OztZQXZDN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osYUFBYTtvQkFFYixjQUFjO29CQUNkLFlBQVk7b0JBRVosbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLDZCQUE2QjtvQkFDN0IsdUJBQXVCO29CQUN2QixvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDWix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsNkJBQTZCO29CQUM3Qix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLG9CQUFvQjtvQkFDcEIsNkJBQTZCO29CQUM3Qix1QkFBdUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxrQkFBa0I7b0JBQ2xCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsSUFBa0IsRUFBRTtvQkFDOUQsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxJQUFpQixFQUFFO2lCQUM3RDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0ZXJuYWwgbW9kdWxlc1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBbmd1bGFyIENES1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuLy8gQW5ndWxhciBtYXRlcmlhbFxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG4vLyBDb25maWdzXG5pbXBvcnQgeyBrZXlib2FyZERlYWRrZXlzLCBNQVRfS0VZQk9BUkRfREVBREtFWVMgfSBmcm9tICcuL2NvbmZpZ3Mva2V5Ym9hcmQtZGVhZGtleS5jb25maWcnO1xuaW1wb3J0IHsga2V5Ym9hcmRMYXlvdXRzLCBNQVRfS0VZQk9BUkRfTEFZT1VUUyB9IGZyb20gJy4vY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZyc7XG4vLyBDb21wb25lbnRzIGFuZCBkaXJlY3RpdmVzXG5pbXBvcnQgeyBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rZXlib2FyZC1jb250YWluZXIva2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRLZXlib2FyZEtleUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rZXlib2FyZC1rZXkva2V5Ym9hcmQta2V5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRLZXlib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0S2V5Ym9hcmREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMva2V5Ym9hcmQuZGlyZWN0aXZlJztcbi8vIFByb3ZpZGVyc1xuaW1wb3J0IHsgTWF0S2V5Ym9hcmRLZWJhYkNhc2VQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWJhYi1jYXNlLnBpcGUnO1xuaW1wb3J0IHsgTWF0S2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9rZXlib2FyZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC8vIEFuZ3VsYXIgbW9kdWxlc1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuXG4gICAgLy8gQ2RrIG1vZHVsZXNcbiAgICBQb3J0YWxNb2R1bGUsXG5cbiAgICAvLyBNYXRlcmlhbCBtb2R1bGVzXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRLZXlib2FyZENvbXBvbmVudCxcbiAgICBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBNYXRLZXlib2FyZEtleUNvbXBvbmVudCxcbiAgICBNYXRLZXlib2FyZERpcmVjdGl2ZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRLZXlib2FyZEtlYmFiQ2FzZVBpcGUsXG4gICAgTWF0S2V5Ym9hcmRDb21wb25lbnQsXG4gICAgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQsXG4gICAgTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQsXG4gICAgTWF0S2V5Ym9hcmREaXJlY3RpdmVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTWF0S2V5Ym9hcmRDb21wb25lbnQsXG4gICAgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQsXG4gICAgTWF0S2V5Ym9hcmRLZXlDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWF0S2V5Ym9hcmRTZXJ2aWNlLFxuICAgIHsgcHJvdmlkZTogTUFUX0tFWUJPQVJEX0RFQURLRVlTLCB1c2VWYWx1ZToga2V5Ym9hcmREZWFka2V5cyB9LFxuICAgIHsgcHJvdmlkZTogTUFUX0tFWUJPQVJEX0xBWU9VVFMsIHVzZVZhbHVlOiBrZXlib2FyZExheW91dHMgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkTW9kdWxlIHt9XG4iXX0=