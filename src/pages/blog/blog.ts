import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  postsList$ = [];
  pageCounter: number = 10;
  pageNumber = new Subject();
  loader = this.loadingCtrl.create({
              content: "Please wait..."
            });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    private posts: PostsListService
  ) {

    this.getPosts();
      
  }

  ngOnInit() {
    this.pageNumber.next(this.pageCounter);
  }

  getPosts() {
    this.loader.present(); 
    this.pageNumber.subscribe(pageNumber => {
      this.posts
      .getData('blog', pageNumber, undefined, undefined, undefined)
      .subscribe(posts => this.postsList$ = posts)
    });
    setTimeout(() => this.loader.dismiss(), 0);
  }

  doInfinite(infiniteScroll) {
    this.pageNumber.next(this.pageCounter += 10);
    
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  handleClick($event, params) {
    this.navCtrl.push('InnerBlogPage', params);
  }
}
