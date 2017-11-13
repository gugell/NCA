import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  videos: any[] = [
    {
      title: 'Lorem ipsume 1',
      date: '12/11/41'
    },
    {
      title: 'Lorem ipsume 2',
      date: '30/07/91'
    },
    {
      title: 'Lorem ipsume 3',
      date: '01/11/11'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  handleClick($event, params) {
    console.log(params);
    this.navCtrl.push(InnerVideoPage, params);
  }
}
