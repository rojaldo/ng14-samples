import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private service: HeroesService) { 
    this.heroes = service.heroes;
  }

  addHero(hero: Hero) {
      this.service.addHero(hero);
  }

  ngOnInit(): void {
  }

}
