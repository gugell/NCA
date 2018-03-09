import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ResourcesPage';
  tab3Root = 'RecipesPage';
  tab4Root = 'VideoPage';
  tab5Root = 'MenuPage';

  constructor( public navCtrl: NavController, public navParams: NavParams ) {
    MenuController
  }

  ionViewDidLoad() {
    // let tab4 = document.querySelector('#tab-t0-4');
  }

}
