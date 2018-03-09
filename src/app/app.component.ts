import { Component } from '@angular/core';
import { App, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { DatePipe } from '@angular/common';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'TabsPage';
  pages: Array<{title: string, component: any}>;

  constructor( 
    public app: App, 
    platform: Platform, 
    statusBar: StatusBar, 
    private menuCtrl: MenuController, 
    splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private network: Network
  ) {
    this.pages = [
      { title: 'Meal Plans', component: 'MealPlansPage' },      
      { title: 'MeetTheExpertsPage', component: 'MeetTheExpertsPage' },
      { title: 'ExpertsQaPage', component: 'ExpertsQaPage' },
      { title: 'ContactsPage', component: 'ContactsPage' },
      { title: 'AboutCnaPage', component: 'AboutCnaPage' },
      { title: 'Search', component: 'SearchPage' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.connectionObserver();
    });
  }

  connectionObserver() {
    let timerId = null;

    let alert = this.alertCtrl.create({
      title: 'Connection Problems',
      subTitle: 'Please, check your internet connection!',
      buttons: ['OK']
    });

    this.network.onDisconnect().subscribe(() => {
      timerId = setTimeout(() => ( alert.present() ), 6000);
    });

    this.network.onConnect().subscribe(() => {
      clearTimeout(timerId);
    })
  }

  pageOpen(page) {
    this.app.getRootNav().push(page);
    this.menuCtrl.toggle();    
  }
}
