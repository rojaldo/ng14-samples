import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/Card';


@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  cards: Card[] = [];
  $cards = new BehaviorSubject<Card[]>([]);

  constructor(private http: HttpClient) { }

  getTrivial() {
    let observer = {
      next: (data: any) => {
        console.log(data);
        for (const cardJson of data.results) {
          let card = new Card(cardJson);
          this.cards.push(card);
        }
        this.$cards.next(this.cards);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    
    }
    this.http.get('https://opentdb.com/api.php?amount=10').subscribe(observer);
  }
}
