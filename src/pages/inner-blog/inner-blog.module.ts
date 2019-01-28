import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnerBlogPage } from './inner-blog';

@NgModule({
  declarations: [
    InnerBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(InnerBlogPage),
  ],
})
export class InnerBlogPageModule {}
