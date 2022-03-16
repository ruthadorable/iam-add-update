import { Pipe, PipeTransform } from '@angular/core';
import { Cbus } from '../models/cbus';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Cbus[],searchFilter: number): Cbus[] {
    if(searchFilter.toString()==="")
    {
      return value;
    }else{
      const cbusArray:Cbus[]=[];
      for(let i=0;i<=value.length;i++)
      {
        let cbusId:string=(value[i].crestra).toString();
        if(cbusId.startsWith(searchFilter.toString()))
        {
          cbusArray.push(value[i]);
        }
      }
      return cbusArray;
    }
  }

}
