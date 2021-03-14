import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AngularFireAuth , private app: AppComponent) {
    this.auth.authState.subscribe(res=>{console.log(res)});
    this.setUser();
    app.user.subscribe((go) => {
      this.setUser();
    });
  }
  authState: boolean = false;
  user;
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
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authState=true;
  }
  logout() {
    this.auth.signOut();
    this.authState=false;
  }

  ngOnInit(): void {
  }

}
