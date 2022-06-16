import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() myHeroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
