import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  comments: Array<{author: string, body: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comments = [{
      author: 'Mike',
      body: 'Lorem ipsum ich lugyned by map state to props.'
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
