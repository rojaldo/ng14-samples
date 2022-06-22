import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  cards: Card[] = [];
  points = 0;

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.$cards.subscribe((cards: Card[]) => {
      console.log(cards);
      this.cards = cards;
    });
    this.service.getTrivial();
  }

  handleResponse(rightResponded: boolean) {
    if (rightResponded) {
      this.points += 2;
    } else {
      this.points -= 1;
    }
    // check if there are more cards to reponse
    if (!this.checkAnyCardsLeft()) {
      this.service.getTrivial();
    }
  }

  checkAnyCardsLeft() {
    let anyLeft = false;
    for (const card of this.cards) {
      if (!card.answered) {
        anyLeft = true;
        break;
      }
    }
    return anyLeft;
  }


}
