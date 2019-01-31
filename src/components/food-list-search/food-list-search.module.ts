import { NgModule } from '@angular/core';
import { FoodListSearchComponent } from './food-list-search';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
		FoodListSearchComponent,
	],
	imports: [
		IonicModule,
	],
	exports: [
		FoodListSearchComponent
	]
})
export class FoodListSearchModule { }
