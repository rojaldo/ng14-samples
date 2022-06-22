import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardInfo!: Card;
  @Output() onResponse = new EventEmitter<boolean>();

  classes = [
    'btn btn-primary',
    'btn btn-primary',
    'btn btn-primary',
    'btn btn-primary'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(answer: string, i: number) {
    this.cardInfo.answered = true;
    this.cardInfo.response = answer;
    console.log(answer, i);
    this.onResponse.emit(answer === this.cardInfo.correctAnswer);

    this.classes = [];
    for (let i = 0; i < this.cardInfo.answers.length; i++) {
      this.classes.push(this.getClass(this.cardInfo.answers[i], i));
    }

  }

  getClass(answer: string, i: number) {
    console.log('getClass');
    
    if (this.cardInfo.answered) {
      if (answer === this.cardInfo.correctAnswer) {
        return 'btn btn-success';
      } else if (answer === this.cardInfo.response && answer !== this.cardInfo.correctAnswer) {
        return 'btn btn-danger';
      } else {
        return 'btn btn-secondary';
      }
    } else {
      return 'btn btn-primary';
    }
  }

}
