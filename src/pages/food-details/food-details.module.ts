import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodDetailsPage } from './food-details';

@NgModule({
  declarations: [
    FoodDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodDetailsPage),
  ],
  exports: [
    FoodDetailsPage,
  ]
})
export class FoodDetailsPageModule {}
