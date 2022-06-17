import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: any[] = [];
  showBeers: any[] = [];

  minValue: number = 3;
  maxValue: number = 6;

  rangeView = [this.minValue, this.maxValue];



  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.$beers.subscribe(data => {
      this.beers = data;
      this.showBeers = this.getFilteredBeers();
    });
      this.service.getBeers();
  }
  handleChange(event: number[]) {
    console.log(event);
    this.rangeView[0] = event[0];
    this.rangeView[1] = event[1];
    this.showBeers = this.getFilteredBeers();
  }

  getFilteredBeers() {
    return this.beers
    .filter(beer => beer.abv >= this.rangeView[0] && beer.abv <= this.rangeView[1])
    .sort((a, b) => a.abv - b.abv);
  }

}
