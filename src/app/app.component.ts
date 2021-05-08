import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DiscussVIIT';
  call: Subject<Object> = new Subject<Object>();
  public user: Observable<Object> = this.call.asObservable();
  constructor(private auth: AngularFireAuth, private fire: AngularFirestore,private route:Router) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        sessionStorage.setItem('reload', 'false');
        this.setSession(user);
      }
      document.getElementById('loading').style.display = 'none';
      document.getElementById('all').style.filter = 'blur(0px)';
    });
    
  }

  async setSession(user) {
    let info: any = {};

    info['name'] = user.displayName;
    info['email'] = user.email;
    info['pic'] = user.photoURL;
    info['uid'] = user.uid;
    info['qlist'] = [];

    let flag = await this.fire
      .collection('users')
      .doc(user.email)
      .get()
      .toPromise();
    console.log(flag.exists);
    if (flag.exists == false) {
      this.fire.collection('users').doc(user.email).set(info);
    }

    info = JSON.stringify(info);
    sessionStorage.setItem('user', info);
    this.call.next('reload');
    this.route.navigate(['home']);
  }
}
