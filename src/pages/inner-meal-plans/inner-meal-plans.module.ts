import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnerMealPlansPage } from './inner-meal-plans';

@NgModule({
  declarations: [
    InnerMealPlansPage,
  ],
  imports: [
    IonicPageModule.forChild(InnerMealPlansPage),
  ],
})
export class InnerMealPlansPageModule {}
