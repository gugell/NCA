import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { PostsListService } from '../../services/posts-list.service';
import { constructor } from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { InnerVideoPage } from '../inner-video/inner-video';

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
  categories: string = 'resources';
  result$ = [];
  searchInput = '';
  startAt = new Subject();
  endAt = new Subject();
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private posts: PostsListService, private db: AngularFireDatabase) {

  }

  ngOnInit() {
  }

  firequery(category, start, end) {
    return this.db.list(`/${category}`, ref => ref.orderByChild('title').startAt(start).endAt(end)).valueChanges();
  }

  ionViewDidLoad() {
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(this.categories, value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          this.result$ = res;
        } else {
          this.result$ = [];
        }
      });
    });
  }

  changeCategory(category) {
    this.categories = category;
    this.startAt.next(this.searchInput.toUpperCase());
    this.endAt.next(this.searchInput.toUpperCase() + '\uf8ff');
  }

  showInput(event) {
    this.startAt.next(this.searchInput.toUpperCase());
    this.endAt.next(this.searchInput.toUpperCase() + '\uf8ff');
  }

  handleClick($event, params) {
    this.navCtrl.push(InnerVideoPage, params);
  }

}
