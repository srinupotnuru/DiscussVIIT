import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  data:any={};
  
   constructor(
    public auth: AngularFireAuth,
    private app: AppComponent,
    private firestore: AngularFirestore,
    private route:Router,
    private loc:Location
  ) {
    this.data=sessionStorage.getItem("item");
        this.data=JSON.parse(this.data);
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

  ngOnInit(): void {
  }
}
