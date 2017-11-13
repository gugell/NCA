import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeadToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'head-toolbar',
  templateUrl: 'head-toolbar.html'
})
export class HeadToolbarComponent {

  @Input() title: string;
  @Input() customClass: string;
  @Input() backBtn: boolean;

  constructor() {
    console.log('Hello HeadToolbarComponent Component', this);
    // this.title = 'Hello World';
    this.backBtn = false;
  }

}
