import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsListService } from '../../services/posts-list.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ExpertsQaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experts-qa',
  templateUrl: 'experts-qa.html',
})
export class ExpertsQaPage {
  page$: any;
  email: object = {};
  loader = this.loadingCtrl.create({
    content: "Please wait...",
  });

  constructor(
    public navCtrl: NavController, 
    public db: AngularFireDatabase, 
    public navParams: NavParams, 
    private posts: PostsListService, 
    public loadingCtrl: LoadingController,
    public emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpertsQaPage');
    this.loader.present();
    let that = this;
    async function getContent() {
      that.page$ = await that.db.object('askTheExperts').valueChanges();      
      that.loader.dismiss();
    }
    getContent();
  }

  sendMail() {
    let email = {
      to: 'mq-9@outlook.com',
      cc: '',
      attachments: [],
      subject: 'New question from CNA.',
      body: `Sender email: ${this.email["email"]} <hr> ${this.email["body"]}`
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }

  navback() {
    this.navCtrl.popToRoot();
  }
}
