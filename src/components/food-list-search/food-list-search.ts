import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the FoodListSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'food-list-search',
  templateUrl: 'food-list-search.html'
})
export class FoodListSearchComponent {

  @Input() list: Array<any>;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  onBoxClick(item){
    this.onSelect.emit(item)
  }
}
