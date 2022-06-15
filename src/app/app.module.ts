import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import {HttpClientModule} from '@angular/common/http';
import { BeersComponent } from './components/beers/beers/beers.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeroesComponent,
    DisplayComponent,
    KeyboardComponent,
    ApodComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
