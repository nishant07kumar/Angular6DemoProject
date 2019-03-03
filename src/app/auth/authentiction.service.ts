import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  authToken: string;

  constructor(private router: Router) {

  }

  logOnUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.authToken = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getAuthenticationToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.authToken = token
      )
    return this.authToken;
  }

  isAuthenticated() {
    return this.authToken != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.authToken = null;
  }
}
