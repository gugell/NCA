import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ExpertsQaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experts-qa',
  templateUrl: 'experts-qa.html',
})
export class ExpertsQaPage {
  page$: any;
  loader = this.loadingCtrl.create({
    content: "Please wait...",
  });

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public navParams: NavParams, private posts: PostsListService, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpertsQaPage');
    this.page$ = this.db.object('askTheExperts').valueChanges();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  navback() {
    this.navCtrl.popToRoot();
  }
}
