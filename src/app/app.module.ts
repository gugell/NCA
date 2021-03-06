import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credential';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostsListService } from '../services/posts-list.service';
import { PagesContentService } from '../services/pages-content';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule }   from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { EmailService } from '../services/email-service';
import { FoodService } from '../services/food-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Network } from '@ionic-native/network';
import { FoodDetailsPage } from "../pages/food-details/food-details";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    FoodDetailsPage,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FoodDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsListService,
    HttpClient,
    PagesContentService,
    StreamingMedia,
    HTTP,
    EmailComposer,
    EmailService,
    FoodService,
    Network
  ]
})
export class AppModule {}
