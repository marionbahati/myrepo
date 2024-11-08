import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondstohours'
})
export class SecondstohoursPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor(value % 3600);
    return hours + ':' + minutes;
 }

}
