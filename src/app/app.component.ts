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
      apiKey: 'AIzaSyBDm7nNUgbol4if8EZGSgs7eZcBRbXs0Ys',
      authDomain: 'masuperagence-8d8da.firebaseapp.com',
      databaseURL: 'https://masuperagence-8d8da.firebaseio.com',
      projectId: 'masuperagence-8d8da',
      storageBucket: '',
      messagingSenderId: '786507518394',
      appId: '1:786507518394:web:3469b63598f62b3e'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
