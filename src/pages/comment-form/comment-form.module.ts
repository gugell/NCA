import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentFormPage } from './comment-form';

@NgModule({
  declarations: [
    CommentFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentFormPage),
  ],
})
export class CommentFormPageModule {}
