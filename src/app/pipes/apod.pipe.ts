import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'apod'
})
export class ApodPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // get moment from string yyyy-mm-dd
    const date = moment(value, 'YYYY-MM-DD');
    date.locale('en');
    console.log(date);
    if (!date.isValid()) {
      console.error('invalid date: ' + value);
      return 'Invalid date: ' + value;
    }
    return date.format('LL');

  }

}
