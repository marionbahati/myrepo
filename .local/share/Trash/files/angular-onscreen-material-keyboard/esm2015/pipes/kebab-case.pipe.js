import { Pipe } from '@angular/core';
export class MatKeyboardKebabCasePipe {
    transform(value) {
        return value.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .toLowerCase();
    }
}
MatKeyboardKebabCasePipe.decorators = [
    { type: Pipe, args: [{
                name: 'matKeyboardKebabCase',
                pure: false
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ViYWItY2FzZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvc3JjL3BpcGVzL2tlYmFiLWNhc2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUM7YUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7YUFDcEIsV0FBVyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ21hdEtleWJvYXJkS2ViYWJDYXNlJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWF0S2V5Ym9hcmRLZWJhYkNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxufVxuIl19