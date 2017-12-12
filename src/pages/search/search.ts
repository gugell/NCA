import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PostsListService } from '../../services/posts-list.service';
import { constructor } from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
  items$: Observable<any[]>;
  size$: BehaviorSubject<string|null>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private posts: PostsListService, db: AngularFireDatabase) {
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.switchMap(size =>
      db.list('/resources', ref =>
        size ? ref.orderByChild('title').equalTo(size) : ref
      ).snapshotChanges()
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  async showInput(event) {

    await this.size$.next();    
    console.log('====================================');
    console.log('event', this.items$);
    console.log('====================================');
  }
}
