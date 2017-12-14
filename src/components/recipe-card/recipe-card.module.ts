import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RecipeCardComponent } from './recipe-card';

@NgModule({
  declarations: [
    RecipeCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    RecipeCardComponent
  ]
})
export class RecipeCardModule {}
