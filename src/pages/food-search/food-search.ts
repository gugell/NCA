import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { FoodService } from '../../services/food-service';
import { Subject } from 'rxjs/Subject';
import { FoodDetailsPage } from "../food-details/food-details";

/**
 * Generated class for the FoodSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calorie-counter-search',
  templateUrl: 'food-search.html',
})
export class FoodSearchPage {

  searchResults = [];
  isFetching: boolean = false;
  hasError: boolean = false;
  totalResults: number = null;
  searchQuery: string;
  pageCounter: number = 0;
  perPage: number = 25;
  pageOffset = new Subject();

  constructor(public foodService: FoodService, private modalController: ModalController) {
  }

  ngOnInit() {
    this.searchSubscribe();
  }

  onSearch(query: string) {
    if (query != '') {
      this.isFetching = true;
      this.searchQuery = query;
      this.pageOffset.next(0)
    }
    this.totalResults = null;
    this.searchResults = [];
    this.pageCounter = 0;
  }

  searchSubscribe() {
    this.pageOffset.subscribe(offset => {
      this.hasError = false;
      this.foodService.search(this.searchQuery, {offset, max: this.perPage}).subscribe(data => {
        if (data.list && data.list.item.length) {
          if (!this.totalResults) {
            this.totalResults = data.list.total;
          }
          this.searchResults = this.searchResults.concat(data.list.item);

        } else {
          this.hasError = true;
        }
        this.isFetching = false;
      })
    })
  }

  doInfinite(infiniteScroll) {
    if (this.totalResults && this.searchResults.length < this.totalResults) {
      this.pageOffset.next(this.pageCounter += this.perPage);
    }

    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  async onFoodSelect(item: any) {
    await this.modalController.create(FoodDetailsPage, {
      id: item.ndbno,
    }).present();
  }
}
