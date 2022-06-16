import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onAddHero = new EventEmitter<Hero>();

  heroName = '';
  heroDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  isDisabled() {
    return this.heroName === '';
  }

  addHero() {
    if (this.heroName !== '') {
      this.onAddHero.emit(new Hero(this.heroName, this.heroDescription));
      this.heroName = ''; 
      this.heroDescription = '';
    }
  }


}
