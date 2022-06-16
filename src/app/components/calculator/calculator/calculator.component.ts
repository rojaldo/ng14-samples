import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
    console.log('CalculatorComponent ngOnInit');
    this.service.$display.subscribe(value => {
      this.display = value;
    }
    );
    
  }

  ngOnDestroy(): void {
    console.log('CalculatorComponent ngOnDestroy');
    
  }

  display = '';

  handleClick(value: string | number) {
    if (typeof value === 'string') {
      this.service.handleString(value);
    } else if (typeof value === 'number') {
      this.service.handleNumber(value);
    }
  }


}
