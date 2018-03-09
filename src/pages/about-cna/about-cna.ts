import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-about-cna',
  templateUrl: 'about-cna.html',
})
export class AboutCnaPage {
  page$: any;
  showSpinner: boolean;
  loader = this.loadingCtrl.create({
              content: "Please wait...",
            });

  constructor(
    public navCtrl: NavController, 
    public db: AngularFireDatabase, 
    public navParams: NavParams,  
    public loadingCtrl: LoadingController
  ) {
  }

  ngOnInit() {
    this.page$ = this.db.object('pageAbout').valueChanges();    
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    loader.present();
  }
}
