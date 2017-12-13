import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsListService {

    private postListRef = this.db;

    constructor(private db: AngularFireDatabase) { }

    getPostList(category,filterName, categoryId) {
        return this.postListRef.list(`/${category}/`, ref =>
        categoryId ? ref.orderByChild(filterName).equalTo(categoryId) : ref );
    }

    getResourcesList(category) {
        return this.postListRef.list('/resources', ref =>
        category ? ref.orderByChild('category').equalTo(category) : ref
      )
    }

    searchPosts(category, start, end): AngularFireList<any> {
        return this.db.list(`/${category}`, ref => 
        ref.orderByChild('title').limitToFirst(2).startAt(start).endAt(end)
    )}

}