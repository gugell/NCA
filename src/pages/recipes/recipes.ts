import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';
import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

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
  finished: boolean = false;
  cards: Array<{title: string, img: string}>;
  postsList$ = [];
  // postsList$: Observable<any[]>;
  showSpinner: boolean;
  pageCounter: number = 10;
  pageNumber = new Subject();
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    private posts: PostsListService,
    private db: AngularFireDatabase
  ) {
    // this.pageNumber.subscribe((pageNumber) => {
    //   this.postsList('recipes', pageNumber)
    //   .then(() => { this.loader.dismiss()});
    // });
    this.getPosts();
      
  }

  ngOnInit() {
    this.pageNumber.next(this.pageCounter);
  }


  getPosts() {
    this.loader.present(); 
    this.pageNumber.subscribe((pageNumber) => {
      this.posts.getData('recipes', pageNumber, undefined, undefined, 'position').subscribe( (value) => {
        console.log('====================================');
        console.log('value:::', value);
        console.log('====================================');
        this.postsList$ = value;       
      })
    });
    setTimeout(() => this.loader.dismiss(), 0);
  }


  // async postsList(category, pageNumber) {
  //   this.showSpinner = false; 
  //   this.loader.present();  
    
  //   this.postsList$ = await this.posts
  //   .getPostList(category, 'categoryId', null, pageNumber)
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
    console.log('ionViewDidLoad RecipesPage');
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
