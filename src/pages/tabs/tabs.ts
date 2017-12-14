import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ResourcesPage } from '../resources/resources';
import { RecipesPage } from '../recipes/recipes';
import { VideoPage } from '../video/video';
import { MenuPage } from '../menu/menu';

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

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController ) {
MenuController
  }

  ionViewDidLoad() {
    let tab4 = document.querySelector('#tab-t0-4');
  }

}
