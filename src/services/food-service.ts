import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FOOD_API, FOOD_DATA_SOURCE } from '../app/constants';

@Injectable()
export class FoodService {

    constructor(private http: Http) { }

    private get(uriPath: string, params: object) {
        const url = `${FOOD_API.BASE_URL}/${uriPath}`;
        return this.http
            .get(url, {
                params: {
                    format: 'json',
                    api_key: FOOD_API.KEY,
                    ...params,
                }
            })
            .map(res => res.json())
    }

    search(q = '', params?: object) {
        return this.get('search', {
            q,
            max: 10,
            ds: FOOD_DATA_SOURCE.STANDARD,
            ...params
        })
    }

    getDetails(id: string) {
      return this.get('reports', {
        ndbno: id,
        type: 'b'
      })
    }
}

