import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AbvPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0] === 'es') {
      // get natural part of value
      const natural = value.toString().split('.')[0];
      // get decimal part of value
      const decimal = value.toString().split('.')[1];
      // return natural part + ',' + decimal part
      return natural + ',' + decimal + '%';
    }

    return value + '%';
  }

}
