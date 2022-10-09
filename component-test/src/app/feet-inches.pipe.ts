import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feetInches'
})
export class FeetInchesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number{
    
    return value*12;
  }

}