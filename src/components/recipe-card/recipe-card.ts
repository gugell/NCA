import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'recipe-card',
  templateUrl: 'recipe-card.html'
})
export class RecipeCardComponent {

  @Input() title: string;
  @Input() imgUrl: string;

  constructor( public navParams: NavParams ) {
  }

}
