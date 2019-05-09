import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import { Storage } from "@ionic/storage";
import {FoodGroup} from "../../models/food-group.model";
import {Food} from "../../models/food.model";
import {FOOD_GROUPS, FOOD_STORAGE_KEY} from "../../app/constants";
import {EmailComposer} from "@ionic-native/email-composer";

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

  foodGroups: Array<FoodGroup> = [];
  shouldShowHint: Boolean = true;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController,
    private emailComposer: EmailComposer) {
  }

  ionViewWillEnter() {
    this.getFoodList();
  }

  async getFoodList() {
    const foodGroups: Array<FoodGroup> = await this.storage.get(FOOD_STORAGE_KEY) || [];

    this.foodGroups = foodGroups.filter(group => group.foodList.length);
  }

  hideInstructions(){
    this.shouldShowHint = false;
  }
  getTotalCalories() {
    if (!this.foodGroups || !this.foodGroups.length) {
      return 0;
    }

    return this.foodGroups.reduce((total, group) => {
      return total + this.getGroupTotalCalories(group.foodList)
    }, 0)
  }

  getGroupTotalCalories(foodList: Array<Food>) {
    if (!foodList.length) {
      return 0;
    }
    return foodList
      .map(food => food.calories)
      .reduce((total, calories) => total + calories, 0)
  }

  clearGroup(groupId: number) {
    const foodGroupIndex = this.foodGroups.findIndex(group => group.id === groupId);
    this.foodGroups[foodGroupIndex].foodList = [];

    this.storage.set(FOOD_STORAGE_KEY, this.foodGroups).then(() => {
      this.getFoodList();
    });
  }

  onAdd() {
    this.navCtrl.push('FoodSearchPage');
  }

  onSave() {
    let emailBody = '<h1>Calorie counter</h1>';
    console.log('this.foodGroups', this.foodGroups);

    this.foodGroups.forEach(group => {
      emailBody += `<h3>${group.name}</h3>`;
      group.foodList.forEach(food => {
        emailBody += `<div>${food.name} (${food.quantity*food.measure.qty} ${food.measure.label}): <strong>${food.calories} kcal</strong></div>`;
      });
      emailBody += `<div>Total: ${this.getGroupTotalCalories(group.foodList)} kcal</div>`;
      emailBody += '<br>';
    });
    emailBody += '<br>';
    emailBody += `<h2>Total calories: ${this.getTotalCalories()} kcal</h2>`;

    const email = {
      to: '',
      subject: 'Calorie Counter',
      body: emailBody,
      isHtml: true,
    };
    this.emailComposer.open(email)
  }

  async onClear() {
    const alert = await this.alertController.create({
      title: 'Are you sure you want to clear all logs?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'OK',
          handler: () => {
            this.foodGroups = FOOD_GROUPS;
            this.storage.set(FOOD_STORAGE_KEY, FOOD_GROUPS).then(() => {
              this.getFoodList();
            })
            this.shouldShowHint = true;
          }
        }
      ]
    });

    await alert.present();


  }

}
