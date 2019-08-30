import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: 'key',
      authDomain: 'superagence-dbbed.firebaseapp.com',
      databaseURL: 'https://superagence-dbbed.firebaseio.com',
      projectId: 'superagence-dbbed',
      storageBucket: '',
      messagingSenderId: 'msgId',
      appId: '1:425656949671:web:595481a44b641a89'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
