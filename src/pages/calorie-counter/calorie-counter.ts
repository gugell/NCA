import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Food } from "../../models/food.model";

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

  foodList: Array<Food> = [];

  constructor(public navCtrl: NavController, private storage: Storage,) {
  }

  ionViewWillEnter() {
    this.getFoodList();
  }

  async getFoodList() {
    const foodList = await this.storage.get('foodList');
    this.foodList = foodList || [];
  }

  get totalCalories() {
    if (!this.foodList.length) {
      return 0;
    }
    return this.foodList
      .map(food => food.calories)
      .reduce((total, calories) => total + calories, 0)
  }

  onAdd() {
    this.navCtrl.push('FoodSearchPage');
  }

  onClear() {
    this.storage.remove('foodList').then(() => this.getFoodList())
  }

}
