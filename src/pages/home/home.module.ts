import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { RecipeCardModule } from '../../components/recipe-card/recipe-card.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    RecipeCardModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
