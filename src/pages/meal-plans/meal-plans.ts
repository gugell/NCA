import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-meal-plans',
  templateUrl: 'meal-plans.html',
})
export class MealPlansPage {
  pageCounter: number = 5;
  pageNumber = new Subject();
  postsList$ = [];
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.getPosts();
  }

  ngOnInit() {
    this.pageNumber.next(this.pageCounter);
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
    this.pageNumber.next(this.pageCounter += 5);
    
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPlansPage');
  }

}
