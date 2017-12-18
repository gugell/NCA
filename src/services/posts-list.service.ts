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

    getResourcesList(category, limit) {
        return this.postListRef.list('/resources', ref =>
        category ? ref.orderByChild('category').equalTo(category).limitToFirst(2) : ref
      )
    }

    getData(category, limit, categoryId) {
        console.log(category, limit , categoryId);
        
        if(!categoryId) {
            return this.postListRef.list(`/${category}/`, ref => 
                ref.limitToFirst(limit)
            ).valueChanges();
        } else {
            return this.postListRef.list(`/${category}/`, ref => 
                ref.orderByChild('categoryId').equalTo(categoryId).limitToFirst(limit)
            ).valueChanges();
        }
    }

    searchPosts(category, start): AngularFireList<any> {
        return this.db.list(`/${category}`, ref => 
        ref.orderByChild('title').limitToFirst(2).startAt(start)
    )}

}