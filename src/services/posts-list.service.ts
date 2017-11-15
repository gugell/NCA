import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../models/post.model';

@Injectable()
export class PostsListService {

    private postListRef = this.db;

    constructor(private db: AngularFireDatabase) { }

    getPostList(category) {
        return this.postListRef.list(`/${category}/`);
    }

}