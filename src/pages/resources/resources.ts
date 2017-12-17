import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams, 
  LoadingController  
} from 'ionic-angular';

import { InnerVideoPage } from '../inner-video/inner-video';
import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Post } from '../../models/post.model';
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
      this.posts.getData('resources', value[0], value[1]).subscribe( (value) => {
        console.log(value);
        
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
    // this.showSpinner = true;    
    // this.postsList$ = this.posts
    // .getPostList('resources', 'categoryId', undefined)
    // .snapshotChanges()
    // .map( changes => {
    //     this.showSpinner = false;
    //     return changes.map( c => ({
    //       key: c.payload.key, 
    //       ...c.payload.val() 
    //     }));
    // })
    // .do(() => {
    //   this.showSpinner = false; 
    // });
    this.categoryId.next(undefined);
  }

  selectedInfographics() {
    // this.showSpinner = true; 
    // this.postsList$ = this.posts
    // .getPostList('resources', 'categoryId', 2)
    // .snapshotChanges()
    // .map( changes => {
    //     this.showSpinner = false;      
    //     return changes.map( c => ({
    //       key: c.payload.key, 
    //       ...c.payload.val() 
    //     }));
    // })
    // .do(() => {
    //   this.showSpinner = false; 
    // });
    this.categoryId.next(2);
  }
  
  selectedHandouts() {
    // this.showSpinner = true; 
    // this.postsList$ = this.posts
    // .getPostList('resources', 'categoryId', 1)
    // .snapshotChanges()
    // .map( changes => {
    //     return changes.map( c => ({
    //       key: c.payload.key, 
    //       ...c.payload.val() 
    //     }));
    // })
    // .do(() => {
    //   this.showSpinner = false; 
    // });
    this.pageNumber.next(this.pageCounter);
    this.categoryId.next(1);
  }

  selectedResearch() {
    // this.showSpinner = true; 
    // this.postsList$ = this.posts
    // .getPostList('resources', 'categoryId', 3)
    // .snapshotChanges()
    // .map( changes => {
    //     this.showSpinner = false;      
    //     return changes.map( c => ({
    //       key: c.payload.key, 
    //       ...c.payload.val() 
    //     }));
    // })
    // .do(() => {
    //   this.showSpinner = false; 
    // });
    this.categoryId.next(3);
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
