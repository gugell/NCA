import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams, 
  LoadingController  
} from 'ionic-angular';

import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {
  pageCounter: number = 10;
  pageNumber = new Subject();
  categoryId = new Subject();
  categories: string = 'all';
  cards: Array<{title: string, img: string}>;
  postsList$ = [];
  // postsList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait...",
            });
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private posts: PostsListService) {
    // this.postsList('resources', 'categoryId', undefined)
    //     .then(() => { this.loader.dismiss() });
    this.getPosts();
  }

  ngOnInit() {
     this.pageNumber.next(this.pageCounter);
     this.categoryId.next(undefined);
  }

  getPosts() {
    this.loader.present(); 
    Observable.combineLatest(this.pageNumber, this.categoryId).subscribe((value) => {
      this.posts.getData('resources', value[0], value[1],  undefined, undefined).subscribe( (value) => {
        this.postsList$ = value;        
      })
    });
    setTimeout(() => this.loader.dismiss(), 0);
  }

  // async postsList(category, filterName, categoryId) {
  //   this.showSpinner = false; 
  //   this.loader.present();  
    
  //   this.postsList$ = this.posts
  //   .getPostList(category, filterName, categoryId )
  //   .valueChanges()
  //   .map( changes => {
  //     return changes
  //       // return changes.map( c => ({
  //       //   key: c.payload.key, 
  //       //   ...c.payload.val() 
  //       // }));
  //   });
  // }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }

  selectedAll() {
    this.categoryId.next(undefined);
  }

  selectedInfographics() {
    this.categoryId.next(3);
  }
  
  selectedReference() {
    this.pageNumber.next(this.pageCounter);
    this.categoryId.next(1);
  }

  selectedEducation() {
    this.categoryId.next(2);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.pageNumber.next(this.pageCounter += 10);
    
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  handleClick($event, params) {
    this.navCtrl.push('InnerVideoPage', params);
  }
}
