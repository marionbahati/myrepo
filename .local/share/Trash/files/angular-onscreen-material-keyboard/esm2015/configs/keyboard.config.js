export class MatKeyboardConfig {
    constructor() {
        /** The politeness level for the MatAriaLiveAnnouncer announcement. */
        this.politeness = 'assertive';
        /** Message to be announced by the MatAriaLiveAnnouncer */
        this.announcementMessage = '';
        /** The view container to place the overlay for the keyboard into. */
        this.viewContainerRef = null;
        /** The length of time in milliseconds to wait before automatically dismissing the keyboard after blur. */
        this.duration = 0;
        /** Enable a dark keyboard */
        this.darkTheme = null;
        /** Enable the debug view */
        this.isDebug = false;
        /** Custom icon overrides */
        this.customIcons = {};
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL2NvbmZpZ3Mva2V5Ym9hcmQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDRSxzRUFBc0U7UUFDdEUsZUFBVSxHQUF3QixXQUFXLENBQUM7UUFFOUMsMERBQTBEO1FBQzFELHdCQUFtQixHQUFJLEVBQUUsQ0FBQztRQUUxQixxRUFBcUU7UUFDckUscUJBQWdCLEdBQXNCLElBQUksQ0FBQztRQUUzQywwR0FBMEc7UUFDMUcsYUFBUSxHQUFJLENBQUMsQ0FBQztRQUVkLDZCQUE2QjtRQUM3QixjQUFTLEdBQUksSUFBSSxDQUFDO1FBRWxCLDRCQUE0QjtRQUM1QixZQUFPLEdBQUksS0FBSyxDQUFDO1FBS2pCLDRCQUE0QjtRQUM1QixnQkFBVyxHQUFvQixFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJpYUxpdmVQb2xpdGVuZXNzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUtleWJvYXJkSWNvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2tleWJvYXJkLWljb25zLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZENvbmZpZyB7XG4gIC8qKiBUaGUgcG9saXRlbmVzcyBsZXZlbCBmb3IgdGhlIE1hdEFyaWFMaXZlQW5ub3VuY2VyIGFubm91bmNlbWVudC4gKi9cbiAgcG9saXRlbmVzcz86IEFyaWFMaXZlUG9saXRlbmVzcyA9ICdhc3NlcnRpdmUnO1xuXG4gIC8qKiBNZXNzYWdlIHRvIGJlIGFubm91bmNlZCBieSB0aGUgTWF0QXJpYUxpdmVBbm5vdW5jZXIgKi9cbiAgYW5ub3VuY2VtZW50TWVzc2FnZT8gPSAnJztcblxuICAvKiogVGhlIHZpZXcgY29udGFpbmVyIHRvIHBsYWNlIHRoZSBvdmVybGF5IGZvciB0aGUga2V5Ym9hcmQgaW50by4gKi9cbiAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWYgPSBudWxsO1xuXG4gIC8qKiBUaGUgbGVuZ3RoIG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2luZyB0aGUga2V5Ym9hcmQgYWZ0ZXIgYmx1ci4gKi9cbiAgZHVyYXRpb24/ID0gMDtcblxuICAvKiogRW5hYmxlIGEgZGFyayBrZXlib2FyZCAqL1xuICBkYXJrVGhlbWU/ID0gbnVsbDtcblxuICAvKiogRW5hYmxlIHRoZSBkZWJ1ZyB2aWV3ICovXG4gIGlzRGVidWc/ID0gZmFsc2U7XG5cbiAgLyoqIEVuYWJsZSB0aGUgZGVidWcgdmlldyAqL1xuICBuZ0NvbnRyb2w/OiBOZ0NvbnRyb2w7XG5cbiAgLyoqIEN1c3RvbSBpY29uIG92ZXJyaWRlcyAqL1xuICBjdXN0b21JY29ucz86IElLZXlib2FyZEljb25zID0ge307XG59XG4iXX0=