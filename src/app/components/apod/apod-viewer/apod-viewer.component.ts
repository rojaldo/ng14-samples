import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-viewer',
  templateUrl: './apod-viewer.component.html',
  styleUrls: ['./apod-viewer.component.scss']
})
export class ApodViewerComponent implements OnInit, OnChanges {

  @Input() apodDate!: string;

  apodInfo!: any;
  
  constructor(private service: ApodService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['apodDate'].currentValue) {
      this.service.getApod(changes['apodDate'].currentValue);
    }
  }

  ngOnInit(): void {
    this.service.$apod.subscribe(data => {
      this.apodInfo = data;
    });

    this.service.getApod();
  }

}
