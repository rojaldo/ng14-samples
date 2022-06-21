import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import {HttpClientModule} from '@angular/common/http';
import { BeersComponent } from './components/beers/beers/beers.component';
import { FormComponent } from './components/heroes/form/form.component';
import { ListComponent } from './components/heroes/list/list.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BeersListComponent } from './components/beers/beers-list/beers-list.component';
import { BeersRangeComponent } from './components/beers/beers-range/beers-range.component';
import { AbvPipe } from './pipes/abv.pipe';
import { ApodPipe } from './pipes/apod.pipe';
import { ApodPickerComponent } from './components/apod/apod-picker/apod-picker.component';
import { ApodViewerComponent } from './components/apod/apod-viewer/apod-viewer.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { ErrorComponent } from './components/error/error/error.component'; // CLI imports AppRoutingModule
import { CalculatorService } from './services/calculator.service';
import { TemplateFormComponent } from './components/form/template-form/template-form.component';
import { ReactiveFormComponent } from './components/form/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeroesComponent,
    DisplayComponent,
    KeyboardComponent,
    ApodComponent,
    BeersComponent,
    FormComponent,
    ListComponent,
    BeersListComponent,
    BeersRangeComponent,
    AbvPipe,
    ApodPipe,
    ApodPickerComponent,
    ApodViewerComponent,
    ErrorComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSliderModule,
    AppRoutingModule 
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
