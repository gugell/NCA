import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InnerVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inner-video',
  templateUrl: 'inner-video.html',
})
export class InnerVideoPage {
  context: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.context = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerVideoPage', this. context);
  }

}
