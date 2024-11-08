import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>,args: any[]): any{

    const sortedField=args[0];

    const sortDirection=args[1];

    let multiplier=1;
    if(sortDirection ==='desc'){
      multiplier = -1;
    }

    value.sort((a:any,b:any) => {
      if(a[sortedField] < b[sortedField]){
        return -1 *multiplier;

      }else if(a[sortedField] > b[sortedField]){
        return 1 * multiplier;
        
      }else{
        return 0;
      }
    }
    );
    return value;
  }

}
