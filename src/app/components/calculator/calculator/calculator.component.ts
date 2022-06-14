import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
  }

  display = '';

  handleClick(value: string | number) {
    if (typeof value === 'string') {
      this.display = this.service.handleString(value);
    } else if (typeof value === 'number') {
      this.display = this.service.handleNumber(value);
    }
  }


}
