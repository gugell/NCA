import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PostsListService } from '../../services/posts-list.service';
import { constructor } from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  videos;
  startAt = new Subject();
  endAt = new Subject();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private posts: PostsListService, db: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    this.posts.searchPosts('videos', this.startAt, this.endAt)
              .valueChanges()
              .subscribe(videos => this.videos = videos);
    console.log('ionViewDidLoad SearchPage');
  }

  showInput(event) {
    console.log('this.videos', this.videos);
  }
}
