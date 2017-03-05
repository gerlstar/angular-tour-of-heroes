/**
 * This is our root component
 */
import { Component, OnInit } from '@angular/core';
import {  Router }   from '@angular/router';
//import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
  selector: 'my-heroes',
 templateUrl: 'hero.component.html',
   styleUrls: ['hero.component.css']
})
export class HeroesComponent implements OnInit{
//    title = 'Tour of Heroes';
    heroes: Array<Hero>;
//    heroes: Hero[];
    selectedHero: Hero;
    
//    heroes = HEROES;
//
    constructor(
      private heroService: HeroService,
      private router: Router
    ) { }
//
//    //this is where we call the getHeroes. It's because we dont want the constructor to do the calling of the web service. Constructors shouldnt do any heavy lifting.
//    //constructor is for simple initializations like wiring constructor parameters to properties. It's not for heavy lifting. 
    ngOnInit(): void {
        this.getHeroes();
    }
//    
    onSelect(hero: Hero): void {
        console.log('You clicked onSelect(hero) ');
        this.selectedHero = hero;
        console.log(hero);
        
    }
//
    getHeroes(): void {
//        this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

     gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
     }
    
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }

    delete(hero: Hero): void {
//        this.selectedHero = hero;
//        console.log(hero);
      this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }

    
}

