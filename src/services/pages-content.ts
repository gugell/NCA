import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PagesContentService {

    private postListRef = this.db;

    constructor(private db: AngularFireDatabase) { }

    getPagesContent(name) {
        return this.postListRef.object(`${name}`);
    }

}

