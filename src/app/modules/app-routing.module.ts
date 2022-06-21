import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from '../components/apod/apod/apod.component';
import { BeersComponent } from '../components/beers/beers/beers.component';
import { CalculatorComponent } from '../components/calculator/calculator/calculator.component';
import { ErrorComponent } from '../components/error/error/error.component';
import { TemplateFormComponent } from '../components/form/template-form/template-form.component';
import { SampleGuard } from '../guards/sample.guard';

const routes: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes.module').then(m => m.HeroesModule),
        canActivate: [SampleGuard]
    },
    { path: 'apod', component: ApodComponent },
    { path: 'beers', component: BeersComponent },
    { path: 'form', component: TemplateFormComponent },
    { path: '**', component: ErrorComponent },
]; // sets up routes constant where you define your routes    

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes), ],
    exports: [RouterModule]
})
export class AppRoutingModule { }