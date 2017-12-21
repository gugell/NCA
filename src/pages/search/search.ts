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
  resourcesLength: number;
  recipesLength: number;
  videosLength: number;
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
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery('resources', value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          this.resourcesLength = res.length;
        } else {
          this.resourcesLength = 0;
        }
      });
    });
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery('recipes', value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          this.recipesLength = res.length;
        } else {
          this.recipesLength = 0;
        }
      });
    });
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery('videos', value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          this.videosLength = res.length;
        } else {
          this.videosLength = 0;
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
    this.navCtrl.push('InnerVideoPage', params);
  }

}
