import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodSearchPage } from './food-search';
import { FoodListSearchModule } from '../../components/food-list-search/food-list-search.module';

@NgModule({
  declarations: [
    FoodSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodSearchPage),
    FoodListSearchModule,
  ],
})
export class FoodSearchPageModule {}
