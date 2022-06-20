import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apod-picker',
  templateUrl: './apod-picker.component.html',
  styleUrls: ['./apod-picker.component.scss']
})
export class ApodPickerComponent implements OnInit {

  @Output() onDatePicked = new EventEmitter<any>();
  selectedDate!: any;
  constructor() { }

  ngOnInit(): void {
  }

  onDateChanged() {
    this.onDatePicked.emit(this.selectedDate);
  }

}
