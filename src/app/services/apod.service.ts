import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private apodData: any = null;
  public $apod = new Subject<any>();

  constructor(private http: HttpClient) { }

  getApod(date?: string) {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    if (date) {
      url += '&date=' + date;
    }
    if (this.apodData === null || this.apodData.date !== date) {

      let observer = {
        next: (data: any) => {
          console.log(data);
          this.apodData = data;
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
      this.$apod.next(this.apodData);
    }
  }
}
