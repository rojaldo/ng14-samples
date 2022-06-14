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
  heroName = '';
  heroDescription = '';

  isDisabled() {
    return this.heroName === '';
  }
  constructor(private service: HeroesService) { 
    this.heroes = service.heroes;
  }

  addHero() {
    if (this.heroName !== '') {
      this.service.addHero(new Hero(this.heroName, this.heroDescription));
      this.heroName = '';
      this.heroDescription = '';

    } else {
      alert('Please enter a name');
    }
  }

  ngOnInit(): void {
  }

}
