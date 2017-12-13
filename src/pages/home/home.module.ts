import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';

@NgModule({
  declarations: [
    HomePage,
    RecipeCardComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
