import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ResourcesPage } from '../resources/resources';
import { RecipesPage } from '../recipes/recipes';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ResourcesPage;
  tab3Root = RecipesPage;

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController ) {

  }

  ionViewDidLoad() {
    let tab3 = document.querySelector('#tab-t0-3');
    tab3.addEventListener('click', () => {
      this.menuCtrl.toggle();
      // this.app.getActiveNavs()[0].push(MenuPage);
    });
  }

}
