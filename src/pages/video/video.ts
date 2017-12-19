import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';
import { Observable } from 'rxjs/Observable';
import { PostsListService } from '../../services/posts-list.service';
import { Subject } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  categories: string = 'q&a';
  categoryObs = new Subject();
  pageCounter: number = 10;
  pageNumber = new Subject();
  cards: Array<{title: string, img: string}>;
  postsList$ = [];
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private posts: PostsListService) {
    // this.postsList('videos')
    //     .then(() => { this.loader.dismiss() })  
    this.getPosts();
  }

  ngOnInit() {
    this.categoryObs.next(this.categories);
    this.pageNumber.next(this.pageCounter);
  }

  getPosts() {
    this.loader.present(); 
    Observable.combineLatest(this.pageNumber, this.categoryObs).subscribe((variable) => {
      this.posts.getData('videos', variable[0], undefined).subscribe( (value) => {
        this.postsList$ = value;        
      })
    });
    setTimeout(() => this.loader.dismiss(), 0);
  }

  changeCategory(category) {
    this.categoryObs.next(category);    
  }
  // async postsList(category) {
  //   this.showSpinner = false; 
  //   this.loader.present();  
    
  //   this.postsList$ = await this.posts
  //   .getPostList(category, 'categoryId', undefined)
  //   .valueChanges()
  //   .map( changes => {
  //     return changes;
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
    console.log('ionViewDidLoad VideoPage');
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
