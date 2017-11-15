import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams, 
  LoadingController  
} from 'ionic-angular';

import { InnerVideoPage } from '../inner-video/inner-video';

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {
  categories: string = 'all';
  cards: Array<{title: string, img: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.cards = [{
      title: 'Lorem ipsum lorem agies interos 1',
      img: 'https://picsum.photos/160/100/?image=141'
    },{
      title: 'Lorem ipsum lorem agies interos 2',
      img: 'https://picsum.photos/160/100/?image=152'
    },{
      title: 'Lorem ipsum lorem agies interos 3',
      img: 'https://picsum.photos/160/100/?image=142'
    },{
      title: 'Lorem ipsum lorem agies interos 4',
      img: 'https://picsum.photos/160/100/?image=143'
    },{
      title: 'Lorem ipsum lorem agies interos 5',
      img: 'https://picsum.photos/160/100/?image=154'
    },{
      title: 'Lorem ipsum lorem agies interos 6',
      img: 'https://picsum.photos/160/100/?image=144'
    },{
      title: 'Lorem ipsum lorem agies interos 7',
      img: 'https://picsum.photos/160/100/?image=145'
    },{
      title: 'Lorem ipsum lorem agies interos 8',
      img: 'https://picsum.photos/160/100/?image=156'
    },{
      title: 'Lorem ipsum lorem agies interos 9',
      img: 'https://picsum.photos/160/100/?image=146'
    },{
      title: 'Lorem ipsum lorem agies interos 10',
      img: 'https://picsum.photos/160/100/?image=147'
    }];
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }
  selectedFriends() {
    console.log('selectedFriends');
    this.cards = this.cards.reverse();
  }
  selectedEnemies() {
    console.log('selectedEnemies');
    this.cards = this.cards.reverse();    
  }
  handleClick($event, params) {
    console.log(params);
    this.navCtrl.push(InnerVideoPage, params);
  }
}
