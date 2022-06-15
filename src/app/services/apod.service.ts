import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private apodData!: any;
  public $apod = new Subject<any>();

  constructor(private http: HttpClient) { }

  getApod() {
    let observer = {
      next: (data: any) => {
        console.log(data);
        this.apodData = data;
        this.$apod.next(data);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    }
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(observer);   
  
  }
}
