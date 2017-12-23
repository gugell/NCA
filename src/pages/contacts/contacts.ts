import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailService } from '../../services/email-service';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  title: string = '';
  body: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public emailService: EmailService,
    public emailComposer: EmailComposer
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  sendMail() {
    let email = {
      to: 'emailtestprojects@gmail.com',
      cc: '',
      attachments: [],
      subject: 'Message from CNA.',
      body: ''
    };

    // Send a text message using default options
    this.emailComposer.open(email);

  }

  navback() {
    this.navCtrl.popToRoot();
  }
}
