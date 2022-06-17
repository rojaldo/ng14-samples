import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import momentjs
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private apodData: any = null;
  public $apod = new Subject<any>();
  private apodStack: any[] = [];

  constructor(private http: HttpClient) { }

  getApod(date?: string) {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    if (date) {
      url += '&date=' + date;
    }

    console.log('Find: ' + this.findByDate(date));
    console.log(this.apodStack);

    let index = this.findByDate(date)
    console.log('Index: ' + index);

    if (this.apodData === null || index === -1) {

      let observer = {
        next: (data: any) => {
          console.log(data);
          this.apodData = data;
          this.apodStack.push(data);
          this.$apod.next(data);
        },
        error: (err: any) => {
          console.error(err);
        },
        complete: () => {
          console.log('complete');
        }
      }
      this.http.get(url).subscribe(observer);
    }
    else {
      // find in stack apod

      this.apodStack.forEach(apod => {
        let dateMoment = moment(date, 'YYYY-MM-DD');
        let apodDateMoment = moment(apod.date, 'YYYY-MM-DD');
        console.log(dateMoment + ' : ' + apodDateMoment);
        if (dateMoment.isSame(apodDateMoment)) {
          this.apodData = apod;
          this.$apod.next(apod);
        }
      }
      );

    }
  }

  findByDate(date: string | undefined): number {
    // string to date using momentjs

    let resultIndex = -1;
    this.apodStack.forEach((apod, index) => {
      let dateMoment = moment(date, 'YYYY-MM-DD');
      let apodDateMoment = moment(apod.date, 'YYYY-MM-DD');
      console.log(dateMoment + ' : ' + apodDateMoment);
      if (dateMoment.isSame(apodDateMoment)) {
        resultIndex = index;
        return;
      }
    });
    return resultIndex;

  }
}
