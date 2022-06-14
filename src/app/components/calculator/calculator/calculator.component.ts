import { Component, OnInit } from '@angular/core';

enum States {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display = '';
  currentState = States.Init;
  firstFigure = 0;
  secondFigure = 0;
  operator = '';
  result = 0;

  handleClick(value: string | number) {
    if (typeof value === 'string') {
      this.handleString(value);
    } else if (typeof value === 'number') {
      this.handleNumber(value);
    }
  }

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
  }

  resolve(): number {
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
  }


}
