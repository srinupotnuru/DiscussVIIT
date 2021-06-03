import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase/app';
import { AppComponent } from '../app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router'
@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.css']
})
export class MyarticlesComponent implements OnInit {
 discussion=[];
  constructor(
    public auth: AngularFireAuth,
    private app: AppComponent,
    private fire: AngularFirestore,
    private route:Router) {
    this.auth.authState.subscribe((res) => {
      console.log(res);
    });
    this.setUser();
    app.user.subscribe((go) => {
      this.setUser();
    });
    this.getdiscussion();


  }
  getdiscussion()
  {
    
    this.fire.collection('questions', ref => 
  ref.where("uid", "==", this.user.email)).snapshotChanges().subscribe((docs)=>{
    this.discussion=docs;
    this.discussion=this.discussion.reverse();
    
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
  display(item)
  {
    sessionStorage.setItem("item",JSON.stringify(item));
    this.route.navigate(["show"]);
  }
  ngOnInit(): void {
  }

}
