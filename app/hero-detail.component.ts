import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';


import { Hero } from './hero';

/**
 * Usage: <my-hero-detail [hero]="Hero Obj"></my-hero-detail>
 */
@Component({
     moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
     styleUrls: [ 'hero-detail.component.css' ]

})
export class HeroDetailComponent implements OnInit{
    //this is our input 
    @Input()
    hero: Hero;
    
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
        //note route params are always string!
      this.route.params.forEach((params: Params) => {
          //convert the route parameter value to a number with the JavaScript (+) operator.
        let id = +params['id'];
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      });
    }

    goBack(): void {
      this.location.back();
    }
    
    save(): void {
      this.heroService.update(this.hero)
        .then(() => this.goBack());
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


}
