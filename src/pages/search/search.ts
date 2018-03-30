import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { PostsListService } from '../../services/posts-list.service';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase } from 'angularfire2/database';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {

  }

  ngOnInit() {
  }

  firequery(category, start, end) {
    return this.db.list(`/${category}`, ref => ref.orderByChild('html')).valueChanges();
  }
  ionViewWillEnter() {
    this.startAt.next(this.searchInput);
    this.endAt.next(this.searchInput);
  }
  ionViewDidLoad() {
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(this.categories, value[0], value[1]).subscribe((res) => {
        console.log(res)
        if(value[0] !== '') {
          this.result$ = res.filter((item) => {
            return item["html"].toUpperCase().indexOf(this.searchInput.toUpperCase()) > 0;
          });
        } else {
          this.result$ = res;
        }
      });
    });

    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery('resources', value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          let result = res.filter((item) => {
            return item["html"].toUpperCase().indexOf(this.searchInput.toUpperCase()) > 0;
          });
          setTimeout(() => {
            this.resourcesLength = result.length;
          }, 0)
        } else {
          this.resourcesLength = res.length;
        }
      });
    });

    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery('recipes', value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          let result = res.filter((item) => {
            return item["html"].toUpperCase().indexOf(this.searchInput.toUpperCase()) > 0;
          });
          setTimeout(() => {
            this.recipesLength = result.length;
          }, 0)
        } else {
          this.recipesLength = res.length;
        }
      });
    });

    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery('videos', value[0], value[1]).subscribe((res) => {
        if(value[0] !== '') {
          let result = res.filter((item) => {
            return item["html"].toUpperCase().indexOf(this.searchInput.toUpperCase()) > 0;
          });
          setTimeout(() => {
            this.videosLength = result.length;
          }, 0)
        } else {
          this.videosLength = res.length;
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
    this.startAt.next(this.searchInput);
    this.endAt.next(this.searchInput);
  }

  handleClick($event, params) {
    this.navCtrl.push('InnerVideoPage', params);
  }

  handleKeyboard(event) {
    event.target.blur();
  }
}
