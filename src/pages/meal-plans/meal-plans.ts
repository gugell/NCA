import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the MealPlansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meal-plans',
  templateUrl: 'meal-plans.html',
})
export class MealPlansPage {
  pageCounter: number = 5;
  pageNumber = new Subject();
  postsList$ = [];
  // mealPlansList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.getPosts();
  }

  ngOnInit() {
    this.pageNumber.next(this.pageCounter);

    // this.postsList('/mealPlans/')
    // .then(() => {
    //   this.loader.dismiss();
    // });
  }

  getPosts() {
    this.loader.present(); 
    this.pageNumber.subscribe((pageNumber) => {
      this.posts.getData('mealPlans', pageNumber, undefined, undefined, undefined).subscribe( (value) => {
        this.postsList$ = value;
      })
    });
    setTimeout(() => this.loader.dismiss(), 0);
  }

  // async postsList(category) {
  //   this.showSpinner = false; 
  //   this.loader.present();  
    
  //   this.mealPlansList$ = this.posts
  //   .getPostList(category, 'categoryId', undefined)
  //   .snapshotChanges()
  //   .map( changes => {
  //     return changes.map( c => ({
  //       key: c.payload.key, 
  //       ...c.payload.val() 
  //     }));
  //   });
  // }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  handleClick(event, item) {
    this.navCtrl.push('InnerMealPlansPage', item);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.pageNumber.next(this.pageCounter += 5);
    
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPlansPage');
  }

}
