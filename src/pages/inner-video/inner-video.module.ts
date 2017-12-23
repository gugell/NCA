import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnerVideoPage } from './inner-video';

@NgModule({
  declarations: [
    InnerVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(InnerVideoPage),
  ]
})
export class InnerVideoPageModule {}
