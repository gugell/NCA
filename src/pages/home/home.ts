import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';
import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cards: Array<{title: string, img: string}>;
  videosList$: Observable<any[]>;
  resourcesList$: Observable<any[]>;
  recipesList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private posts: PostsListService) {
  }

  ngOnInit() {

  }
  
  async postsList(category) {
    this.showSpinner = false; 
    this.loader.present();  
    
    this[`${category}List$`] = this.posts
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
    console.log('ionViewDidLoad HomePage');
    this.postsList('resources');
    this.postsList('recipes');
    this.postsList('videos')
    .then( () => {
      this.loader.dismiss();
    });
    this.showSpinner = false;
  }

  handleClick($event, params) {
    console.log(params);
    this.navCtrl.push('InnerVideoPage', params);
  }
}
