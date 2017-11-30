import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credential';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { ResourcesPage } from '../pages/resources/resources';
import { MenuPage } from '../pages/menu/menu';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeadToolbarComponent } from '../components/head-toolbar/head-toolbar';
import { RecipeCardComponent } from '../components/recipe-card/recipe-card';
import { InnerVideoPage } from '../pages/inner-video/inner-video';
import { PostsListService } from '../services/posts-list.service';
import { PagesContentService } from '../services/pages-content';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule }   from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    RecipesPage,
    ResourcesPage,
    MenuPage,
    VideoPage,
    HeadToolbarComponent,
    RecipeCardComponent,
    InnerVideoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),    
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      // tabsHideOnSubPages: true,
    }),
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HeadToolbarComponent, 
    RecipeCardComponent,   
    HomePage,
    RecipesPage,
    ResourcesPage,
    MenuPage,
    VideoPage,
    InnerVideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsListService,
    HttpClient,
    PagesContentService,
    StreamingMedia,
    HTTP
  ]
})
export class AppModule {}
