import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
import { Observable } from 'rxjs/Observable';

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
  mealPlansList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait...",
              duration: 3000
            });
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.postsList('/mealPlans/');
  }

  postsList(category) {
    this.showSpinner = false; 
    this.loader.present();  
    
    this.mealPlansList$ = this.posts
    .getPostList(category)
    .snapshotChanges()
    .map( changes => {
      return changes.map( c => ({
        key: c.payload.key, 
        ...c.payload.val() 
    }));
    }, () => {this.loader.dismiss()});

  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  handleClick(event, item) {
    this.navCtrl.push("InnerMealPlansPage", item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPlansPage');
  }

}
