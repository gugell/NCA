import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';

@Injectable()
export class EmailService {


    constructor(private emailComposer: EmailComposer) { }

    sendEmail(data) {
           
        let email = {
            to: 'mq-9@outlook.com',
            cc: '',
            attachments: [],
            subject: 'Message from CNA: ' + data.title,
            body: data.body,
            isHtml: true
        };

        // Send a text message using default options
        this.emailComposer.open(email);
    }
}

