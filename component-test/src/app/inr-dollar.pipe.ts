import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrDollar'
})
export class InrDollarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number{
    return value*82;
  }

}
