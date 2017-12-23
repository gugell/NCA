import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipesPage } from './recipes';
import { InnerVideoPage } from '../inner-video/inner-video';
import { RecipeCardModule } from '../../components/recipe-card/recipe-card.module';

@NgModule({
  declarations: [
    RecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipesPage),
    RecipeCardModule
  ],
})
export class RecipesPageModule {}
