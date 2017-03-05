import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './hero.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService)
                ],
    //The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. The AppComponent can use that service to get heroes and so can every child component of its component tree.
    providers: [HeroService],
    declarations: [AppComponent, 
                   HeroesComponent, HeroDetailComponent, DashboardComponent,
                  HeroSearchComponent], //this is our root component
    bootstrap: [AppComponent] //lets bootstrap our root component
})
export class AppModule { }
