import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Hero[] = [
    new Hero('Windstorm', 'Windonstorm hero description'),
    new Hero('Magneta', 'Magneta hero description'),
    new Hero('Bombasto', 'Bombasto hero description'),
    new Hero('Magneta', 'Magneta hero description')
  ];

  constructor() { }

  get heroes(): Hero[] {
    return this._heroes;
  }

  addHero(hero: Hero) {
    this._heroes.push(hero);
  }
}
