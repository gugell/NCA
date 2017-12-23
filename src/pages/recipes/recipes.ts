import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
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
        this.postsList$ = value;       
      })
    });
    setTimeout(() => this.loader.dismiss(), 0);
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
