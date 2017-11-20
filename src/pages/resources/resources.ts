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
import { Post } from '../../models/post.model';

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {
  categories: string = 'all';
  cards: Array<{title: string, img: string}>;
  postsList$: Observable<any[]>;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait...",
            });
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private posts: PostsListService) {
    this.postsList('resources');
  }

  ngAfterViewInit() {
    this.loader.dismiss();    
  }

  async postsList(category) {
    this.showSpinner = false; 
    this.loader.present();  
    
    this.postsList$ = this.posts
    .getPostList(category)
    .snapshotChanges()
    .map( changes => {
        return changes.map( c => ({
          key: c.payload.key, 
          ...c.payload.val() 
        }));
    }, () => {this.loader.dismiss()});

    // this.postsList$.subscribe( () => this.loader.dismiss());
  }
  
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
    this.showSpinner = true;    
    this.postsList$ = this.posts
    .getPostList('resources')
    .snapshotChanges()
    .map( changes => {
        this.showSpinner = false;
        return changes.map( c => ({
          key: c.payload.key, 
          ...c.payload.val() 
        }));
    });
  }

  selectedInfographics() {
    this.showSpinner = true; 
    this.postsList$ = this.posts
    .getPostList('recipes')
    .snapshotChanges()
    .map( changes => {
        this.showSpinner = false;      
        return changes.map( c => ({
          key: c.payload.key, 
          ...c.payload.val() 
        }));
    });
  }

  selectedHandouts() {
    this.showSpinner = true; 
    this.postsList$ = this.posts
    .getPostList('videos')
    .snapshotChanges()
    .map( changes => {
        this.showSpinner = false;      
        return changes.map( c => ({
          key: c.payload.key, 
          ...c.payload.val() 
        }));
    });
  }

  selectedResearch() {
    this.showSpinner = true; 
    this.postsList$ = this.posts
    .getPostList('meal')
    .snapshotChanges()
    .map( changes => {
        this.showSpinner = false;      
        return changes.map( c => ({
          key: c.payload.key, 
          ...c.payload.val() 
        }));
    });
  }

  handleClick($event, params) {
    this.navCtrl.push(InnerVideoPage, params);
  }
}
