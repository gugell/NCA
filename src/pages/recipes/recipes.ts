import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';
import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  cards: Array<{title: string, img: string}>;
  postsList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.postsList('recipes')
        .then(() => { this.loader.dismiss() });  
  }

  ngOnInit() {

  }

  async postsList(category) {
    this.showSpinner = false; 
    this.loader.present();  
    
    this.postsList$ = await this.posts
    .getPostList(category, 'categoryId', undefined)
    .valueChanges()
    .map( changes => {
      return changes;
        // return changes.map( c => ({
        //   key: c.payload.key, 
        //   ...c.payload.val() 
        // }));
    });
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  handleClick($event, params) {
    this.navCtrl.push('InnerVideoPage', params);
  }

}
