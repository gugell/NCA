import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InnerVideoPage } from '../inner-video/inner-video';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  cards: Array<{title: string, img: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.cards = [{
      title: 'Lorem ipsum lorem agies interos 1',
      img: 'https://picsum.photos/160/100/?image=111'
    },{
      title: 'Lorem ipsum lorem agies interos 2',
      img: 'https://picsum.photos/160/100/?image=122'
    },{
      title: 'Lorem ipsum lorem agies interos 3',
      img: 'https://picsum.photos/160/100/?image=162'
    },{
      title: 'Lorem ipsum lorem agies interos 4',
      img: 'https://picsum.photos/160/100/?image=183'
    },{
      title: 'Lorem ipsum lorem agies interos 5',
      img: 'https://picsum.photos/160/100/?image=159'
    },{
      title: 'Lorem ipsum lorem agies interos 6',
      img: 'https://picsum.photos/160/100/?image=115'
    },{
      title: 'Lorem ipsum lorem agies interos 7',
      img: 'https://picsum.photos/160/100/?image=167'
    },{
      title: 'Lorem ipsum lorem agies interos 8',
      img: 'https://picsum.photos/160/100/?image=175'
    },{
      title: 'Lorem ipsum lorem agies interos 9',
      img: 'https://picsum.photos/160/100/?image=187'
    },{
      title: 'Lorem ipsum lorem agies interos 10',
      img: 'https://picsum.photos/160/100/?image=198'
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
    this.presentLoading();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
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

  handleClick($event, params) {
    console.log(params);
    this.navCtrl.push(InnerVideoPage, params);
  }

}
