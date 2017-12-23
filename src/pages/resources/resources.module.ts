import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResourcesPage } from './resources';
import { RecipeCardModule } from '../../components/recipe-card/recipe-card.module';

@NgModule({
  declarations: [
    ResourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(ResourcesPage),
    RecipeCardModule
  ],
})
export class ResourcesPageModule {}
