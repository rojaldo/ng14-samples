import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum States {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Injectable()
export class CalculatorService {

  private currentState = States.Init;
  private firstFigure = 0;
  private secondFigure = 0;
  private operator = '';
  private result = 0;
  private display = '';
  public $display = new BehaviorSubject<string>('');

  get myDisplay(): string {
    return this.display;
  }


  constructor() { }

    handleString(value: string) {
    switch (this.currentState) {
      case States.Init:
        break;
      case States.FirstFigure:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.currentState = States.SecondFigure;
          this.display += value;
        }
        break;
      case States.SecondFigure:
        if(value === '=') {
          this.result = this.resolve()
          this.currentState = States.Result;
          this.display += (value + this.result.toString());
        }
        break;
      case States.Result:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.currentState = States.SecondFigure;
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.display = this.firstFigure.toString() + this.operator;
        }
        break;
      default:
        break;
    }
    this.$display.next(this.display);
  }

  private resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        return Infinity;
    }
  }


  handleNumber(value: number) {
    switch (this.currentState) {
      case States.Init:
        this.firstFigure = value;
        this.currentState = States.FirstFigure;
        this.display = value.toString();
        break;
      case States.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        break;
      case States.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        break;
      case States.Result:
        this.firstFigure = value;
        this.currentState = States.FirstFigure;
        this.display = value.toString();
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        break;
      default:
        break;
    }
    this.$display.next(this.display);
  }


}
