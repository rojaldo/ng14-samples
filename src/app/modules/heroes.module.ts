import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HeroesComponent } from '../components/heroes/heroes/heroes.component';


const routes: Routes = [
    {
        path: '',
        component: HeroesComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesModule { }