import { Component, ViewChild } from '@angular/core';
import { App, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MeetTheExpertsPage } from '../pages/meet-the-experts/meet-the-experts';
import { ExpertsQaPage } from '../pages/experts-qa/experts-qa';
import { ContactsPage } from '../pages/contacts/contacts';
import { AboutCnaPage } from '../pages/about-cna/about-cna';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor( public app: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {

    this.pages = [
      { title: 'MeetTheExpertsPage', component: MeetTheExpertsPage },
      { title: 'ExpertsQaPage', component: ExpertsQaPage },
      { title: 'ContactsPage', component: ContactsPage },
      { title: 'AboutCnaPage', component: AboutCnaPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    console.log('Page', page);
    this.app.getActiveNavs()[0].push(page.component);
  }
}
