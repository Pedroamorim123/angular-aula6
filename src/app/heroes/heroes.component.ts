import { Component, OnInit } from '@angular/core';
import { Hero } from '../doamain/hero';
import { HEROES } from '../doamain/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

hero : Hero = {
  id: 1,
  name: "Superman"
}

heroes : Hero[] = HEROES;
selectedHero : Hero;


  ngOnInit() {
  }
onSelect(hero : Hero) : void {
  this.selectedHero = hero;
}

}
