import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>,args: any[]): any{

    const sortedField=args[0];

    value.sort((a:any,b:any) => {
      if(a[sortedField] < b[sortedField]){
        return -1;

      }else if(a[sortedField] > b[sortedField]){
        return 1;
      }else{
        return 0;
      }
    }
    );
    return value;
  }

}
