import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  pages: Array<{title: string, component: any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'MeetTheExpertsPage', component: 'MeetTheExpertsPage' },
      { title: 'ExpertsQaPage', component: 'ExpertsQaPage' },
      { title: 'ContactsPage', component: 'ContactsPage' },
      { title: 'AboutCnaPage', component: 'AboutCnaPage' }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
