import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { FoodService } from '../../services/food-service';

/**
 * Generated class for the CalorieCounterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calorie-counter',
  templateUrl: 'calorie-counter.html',
})
export class CalorieCounterPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalorieCounterPage');

    // this.foodService.search('butter').subscribe(data => {
    //   console.log('data', data)
    // });
  }

  onAdd() {
    this.navCtrl.push('CalorieCounterSearchPage');
  }

}
