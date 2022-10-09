import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringWords'
})
export class StringWordsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return value.split('').slize(0,2).join('');
    
  }

}
