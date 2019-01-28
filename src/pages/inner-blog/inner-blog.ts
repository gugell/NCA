import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InnerBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inner-blog',
  templateUrl: 'inner-blog.html',
})
export class InnerBlogPage {
  post: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.data; 
  }
}
