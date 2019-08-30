import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = true;

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  onSignOut() {
    this.authentificationService.signOutUser();
    this.router.navigate(['/']);
  }

}
