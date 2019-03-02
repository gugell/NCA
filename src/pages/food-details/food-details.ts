import {Component} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FoodService} from "../../services/food-service";
import {Food} from "../../models/food.model";
import {FOOD_GROUPS, FOOD_STORAGE_KEY} from "../../app/constants";
import {FoodGroup} from "../../models/food-group.model";
/**
 * Generated class for the FoodDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-details',
  templateUrl: 'food-details.html',
})
export class FoodDetailsPage {

  public food: any;
  public isFetching: boolean = true;
  public energyNutrient: any;
  public measureIndex: string = '';
  public quantity: string = '';
  public selectedFoodGroupId: number;
  public foodGroupsOptions: Array<FoodGroup> = FOOD_GROUPS;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private foodService: FoodService,
    private storage: Storage,) {
  }

  ionViewDidLoad() {
    const foodId = this.navParams.get('id');

    this.foodService.getDetails(foodId).subscribe(response => {
      this.food = response.report.food;
      this.energyNutrient = this.food.nutrients.filter(nutrient => nutrient.unit === 'kcal')[0];
      if (this.energyNutrient.measures.length === 1) {
        this.measureIndex = '0';
      }
      // this.measures = this.energyNutrient.measures;
      this.isFetching = false;
    });
  }

  get calories() {
    const quantity = parseFloat(this.quantity);
    if (this.measureIndex && quantity > 0) {
      const measure = this.energyNutrient.measures[this.measureIndex];
      if (measure) {
        return parseFloat(measure.value) * quantity;
      }
    }
    return 0;
  }

  get value() {
    const quantity = parseFloat(this.quantity);
    if (this.measureIndex && quantity > 0) {
      const measure = this.energyNutrient.measures[this.measureIndex];
      if (measure) {
        return parseFloat(measure.eqv) * quantity;
      }
    }
    return 0;
  }

  close() {
    this.viewCtrl.dismiss();
  }

  async add() {
    const food = new Food(
      this.food.name,
      this.energyNutrient.measures[this.measureIndex],
      parseFloat(this.quantity),
      this.calories
    );
    if (food.name && food.measure && food.calories && food.quantity && this.selectedFoodGroupId) {
      let foodGroupsList: Array<FoodGroup> = await this.storage.get(FOOD_STORAGE_KEY);
      if (!foodGroupsList || !foodGroupsList.length) {
        foodGroupsList = FOOD_GROUPS;
      }

      const selectedFoodGroupId = Number(this.selectedFoodGroupId);
      const groupIndex = foodGroupsList.findIndex(group => group.id === selectedFoodGroupId);

      if (groupIndex > -1) {
        foodGroupsList[groupIndex].foodList.push(food);
        this.storage.set(FOOD_STORAGE_KEY, foodGroupsList)
          .then(() => this.close());
      }
    }
  }

}
