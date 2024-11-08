import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string):any {
   if (value.lenghth=== 0){
    return value;

   }
   const users =[];
   for(const user of value){
    if(user['name'] === filterString){
      users.push(user);
    }
   }
  }

}
