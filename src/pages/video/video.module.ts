import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import { RecipeCardModule } from '../../components/recipe-card/recipe-card.module';

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
    RecipeCardModule
  ],
})
export class VideoPageModule {}
