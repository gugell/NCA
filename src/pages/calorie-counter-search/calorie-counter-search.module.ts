import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalorieCounterSearchPage } from './calorie-counter-search';
import { FoodListSearchModule } from '../../components/food-list-search/food-list-search.module';

@NgModule({
  declarations: [
    CalorieCounterSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CalorieCounterSearchPage),
    FoodListSearchModule
  ],
})
export class CalorieCounterSearchPageModule {}
