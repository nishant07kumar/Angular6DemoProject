import * as firebase from 'firebase';


export class AuthenticationService {


  logOnUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
  }
}