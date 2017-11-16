import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Observable } from 'rxjs/Observable';
import { PostsListService } from '../../services/posts-list.service';
/**
 * Generated class for the MeetTheExpertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meet-the-experts',
  templateUrl: 'meet-the-experts.html',
})
export class MeetTheExpertsPage {
  expertsList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait...",
              duration: 3000
            });
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.postsList('/experts/');
  }

  postsList(category) {
    this.expertsList$ = this.posts
    .getPostList(category)
    .snapshotChanges()
    .map( changes => {
      return changes.map( c => ({
        key: c.payload.key, 
        ...c.payload.val() })
      )
    });
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  handleClick(event, item) {
    this.navCtrl.push("InnerMealPlansPage", item);
  }
}
