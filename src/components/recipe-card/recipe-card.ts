import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
/**
 * Generated class for the RecipeCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recipe-card',
  templateUrl: 'recipe-card.html'
})
export class RecipeCardComponent {

  @Input() title: string;
  @Input() imgUrl: string;

  constructor( public navParams: NavParams ) {
    console.log('Hello RecipeCardComponent Component', this);
  }

}
