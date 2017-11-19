import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PostsListService } from '../../services/posts-list.service';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the AboutCnaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-cna',
  templateUrl: 'about-cna.html',
})
export class AboutCnaPage {
  page$: any;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait...",
            });
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public navParams: NavParams,  public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.page$ = db.object('pageAbout').valueChanges();
  }

  ngOnInit() {
    console.log(this.page$);

  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }
}
