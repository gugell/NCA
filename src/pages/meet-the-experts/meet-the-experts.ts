import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the MeetTheExpertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meet-the-experts',
  templateUrl: 'meet-the-experts.html',
})
export class MeetTheExpertsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController ) {
  }

  ionViewWillLoad() {
    // this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetTheExpertsPage');
  }

}
