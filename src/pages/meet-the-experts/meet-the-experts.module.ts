import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetTheExpertsPage } from './meet-the-experts';

@NgModule({
  declarations: [
    MeetTheExpertsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetTheExpertsPage),
  ],
  exports: [
    MeetTheExpertsPage
  ]
})
export class MeetTheExpertsPageModule {}
