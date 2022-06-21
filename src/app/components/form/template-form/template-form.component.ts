import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  hero = {name: 'Thor', description: 'God of Thunder'};

  submitted = false;

  nameRegex = /^[a-zA-Z]{3,10}$/


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.hero = new Hero('', '');
  }


}
