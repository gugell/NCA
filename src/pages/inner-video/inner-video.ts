import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/do';
/**
 * Generated class for the InnerVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inner-video',
  templateUrl: 'inner-video.html',
})
export class InnerVideoPage {
  context: any;
  video: boolean = false;
  videoUrl: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    // public http: HttpClient, 
    private streamingMedia: StreamingMedia,
    private http: HTTP
  ) {
    this.context = this.navParams.data;
  }

  playVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: () => { console.log('Error streaming') },
      orientation: 'landscape'
    };

    if(this.context.card.link) {
      let splitedUrl = this.context.card.link.split('/');
      let videoID = splitedUrl[+splitedUrl.length - 1].replace('watch?v=', '');

      this.http.get(`https://www.youpak.com/watch?v=${videoID}`, { responseType: 'text' }, {})
          .then( (res) => {
            
              let html = res.data.match(/<source .+ \/>/i);
              this.videoUrl = document.createRange().createContextualFragment(html[0]).querySelector('source').getAttribute('src');
              console.log('this.context.card.link', this.context.card.link);
          })
          .then( (res) => { this.streamingMedia.playVideo(this.videoUrl, options);});
    }
  }

  ionViewDidLoad() {

    this.context.card.link ? this.video = true : this.video = false;

  }

}
