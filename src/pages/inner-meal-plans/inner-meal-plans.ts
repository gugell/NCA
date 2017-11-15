import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InnerMealPlansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inner-meal-plans',
  templateUrl: 'inner-meal-plans.html',
})
export class InnerMealPlansPage {
  plan: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.plan = this.navParams.data;
    console.log('this.navParams', this.navParams.data);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerMealPlansPage');
  }

}
