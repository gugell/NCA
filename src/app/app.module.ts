import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { ResourcesPage } from '../pages/resources/resources';

import { MeetTheExpertsPage } from '../pages/meet-the-experts/meet-the-experts';
import { ExpertsQaPage } from '../pages/experts-qa/experts-qa';
import { ContactsPage } from '../pages/contacts/contacts';
import { AboutCnaPage } from '../pages/about-cna/about-cna';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    RecipesPage,
    ResourcesPage,
    MeetTheExpertsPage,
    ExpertsQaPage,
    ContactsPage,
    AboutCnaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    RecipesPage,
    ResourcesPage,
    MeetTheExpertsPage,
    ExpertsQaPage,
    ContactsPage,
    AboutCnaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
