import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AbvPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0] === 'es') {
      if(value < 0 || value > 100) {
        console.error('value must be between 0 and 100: ' + value);
        return 'Impossible value: ' + value;
      }
      // get natural part of value
      const natural = value.toString().split('.')[0];
      // get decimal part of value
      let decimal = value.toString().split('.')[1];
      if (decimal === undefined) {
        decimal = '0';
      }
      // return natural part + ',' + decimal part
      return natural + ',' + decimal + '%';
    }

    return value + '%';
  }

}
