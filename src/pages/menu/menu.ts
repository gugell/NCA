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
      { title: 'Meal Plans', component: 'MealPlansPage' },      
      { title: 'CNA Experts', component: 'MeetTheExpertsPage' },
      { title: 'Ask the Experts', component: 'ExpertsQaPage' },
      { title: 'About', component: 'AboutCnaPage' },
      { title: 'Contact', component: 'ContactsPage' }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  pageOpen(page) {
  //  this.navCtrl.pop();
   this.navCtrl.push(page); 
  }
}
