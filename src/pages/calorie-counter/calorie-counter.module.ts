import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalorieCounterPage } from './calorie-counter';
import { FoodListSearchModule } from '../../components/food-list-search/food-list-search.module';

@NgModule({
  declarations: [
    CalorieCounterPage,
  ],
  imports: [
    IonicPageModule.forChild(CalorieCounterPage),
    FoodListSearchModule
  ],
})
export class CalorieCounterPageModule {}
