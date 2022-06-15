import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  beers: any[] = [];
  $beers = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  getBeers() {
    let observer = {
      next: (data: any) => {
        console.log(data);
        this.beers = data;
        this.$beers.next(data);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    }
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(observer);

  }
}
