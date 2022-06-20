import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/Hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private service: HeroesService, private route: ActivatedRoute) { 
    this.heroes = service.heroes;
      
  }

  addHero(hero: Hero) {
      this.service.addHero(hero);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
  });

  }

}
