import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  check:boolean;
  token: string;
  checkerror: boolean;
  constructor(public router: Router, private dataservice: DataService) { }

  signUpuser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log(response);
        this.router.navigate(['/signin']);
      }
    )
    .catch(
      (error) => console.log(error)
    )
  }

  signInuser(email:string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/home']);
        this.check = true;
        this.dataservice.updatedata.next(this.check);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      (error) => {
        console.log(error);
        this.checkerror = false;
        this.dataservice.checkdata.next(this.checkerror);
      }
    );
  }

  getToken() {
     firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    );
    return this.token;
  }
}
