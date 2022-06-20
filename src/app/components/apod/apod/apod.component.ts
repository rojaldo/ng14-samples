import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {


  dateString = '';

  constructor() { }

  ngOnInit(): void {

  }

  onDateSelected(value: any) {
    // date to string
    this.dateString = value.year + '-' + value.month + '-' + value.day;
    console.log(this.dateString);
    
  }

}
