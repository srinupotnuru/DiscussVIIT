import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';
import { AppComponent } from '../app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private app: AppComponent,
    private firestore: AngularFirestore,
    private route:Router
  ) {
    this.auth.authState.subscribe((res) => {
      
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
   login() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(obj=>{
    });
    this.route.navigate(["categories"]);
   
     
  }
  logout() {

    sessionStorage.clear();
    this.auth.signOut();
    this.setUser();
    this.route.navigate(["home"]);
   
  }

  ngOnInit(): void {}
}
