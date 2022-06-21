import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  hero = {name: '', description: '', email: '', phone: 0, postalCode: 0};

  submitted = false;

  nameRegex = /^[a-zA-Z]{3,10}$/
  // regex from 0 to 10 characters long
  descriptionRegex = /[\w\W]{1,10}$/

  // email regex
  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  // phone regex
  phoneRegex = /^[0-9]{9}$/

  postalCodeRegex = /^[0-9]{5}$/



  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() { 
    this.submitted = true; 
  }

  newHero() {
    this.hero = {name: '', description: '', email: '', phone: 0, postalCode: 0}
  }


}
