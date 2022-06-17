import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beers-range',
  templateUrl: './beers-range.component.html',
  styleUrls: ['./beers-range.component.scss']
})
export class BeersRangeComponent implements OnInit {

  @Output() onRangeChange = new EventEmitter<number[]>();

  minValue: number = 3;
  maxValue: number = 6;

  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    this.onRangeChange.emit([event.value, event.highValue]);

  }

}
