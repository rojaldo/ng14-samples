import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodData!: any;
  selectedDate!: any;

  constructor(private service: ApodService) { }

  ngOnInit(): void {

    this.service.$apod.subscribe(data => {
      this.apodData = data;
    });

    this.service.getApod();

  }

  onDateSelected() {
    // date to string
    let date = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    console.log(date);
    this.service.getApod(date);
  }

}
