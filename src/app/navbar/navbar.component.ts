import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';
import { AppComponent } from '../app.component';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private app: AppComponent,
    private firestore: AngularFirestore
  ) {
    this.auth.authState.subscribe((res) => {
      console.log(res);
    });
    this.setUser();
    app.user.subscribe((go) => {
      this.setUser();
    });
  }
  authState: boolean = false;
  user: any;
  setUser() {
    let userOB = JSON.parse(sessionStorage.getItem('user'));
    if (userOB != null) {
      this.user = userOB;
      this.authState = true;
    } else {
      this.user = null;
      this.authState = false;
    }
  }
  async login() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.setUser();
     
  }
  logout() {
    sessionStorage.clear();
    this.auth.signOut();
    this.setUser();
    window.location.reload();
  }

  ngOnInit(): void {}
}
