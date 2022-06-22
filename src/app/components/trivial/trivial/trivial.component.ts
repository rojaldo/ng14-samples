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

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.$cards.subscribe((cards: Card[]) => {
      console.log(cards);
      this.cards = cards;
    });
    this.service.getTrivial();
  }

}
