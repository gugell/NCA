import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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

    getData(category, limit, categoryId, type, position) {
        console.log(category, limit , categoryId);
        if(position !== undefined) {
            return this.postListRef.list(`/${category}/`, ref => 
                    ref.orderByChild(position).limitToFirst(limit)
                    ).valueChanges();
        } else if(type !== undefined) {
            return this.postListRef.list(`/${category}/`, ref => 
                    ref.orderByChild('videoType').equalTo(type).limitToFirst(limit)
                    ).valueChanges();
        } else if(!categoryId) {
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