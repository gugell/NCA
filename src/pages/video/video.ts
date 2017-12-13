import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';
import { Observable } from 'rxjs/Observable';
import { PostsListService } from '../../services/posts-list.service';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  cards: Array<{title: string, img: string}>;
  postsList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private posts: PostsListService) {

  }

  ngOnInit() {
     
  }

  async postsList(category) {
    this.showSpinner = false; 
    this.loader.present();  
    
    this.postsList$ = this.posts
    .getPostList(category, 'categoryId', undefined)
    .snapshotChanges()
    .map( changes => {
        return changes.map( c => ({
          key: c.payload.key, 
          ...c.payload.val() 
        }));
    });
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
    this.postsList('videos')
    .then(() => {
      this.loader.dismiss();
    });
  }

  handleClick($event, params) {
    console.log(params);
    this.navCtrl.push('InnerVideoPage', params);
  }

}
