import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';
import { AppComponent } from '../app.component';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private app: AppComponent,
    private fire: AngularFirestore
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
  submitForm()
  {
    let info: any = {};

    let title : any=document.getElementById("title");
    let des:any=document.getElementById("desc");
    let cat:any=document.getElementById("cat");
    console.log(title.value,des.value,cat.value);
    
    info['title'] = title.value;
    info['uid'] = this.user.email;
    info['category']=cat.value;
    info['description']=des.value;
    info['qlikes']=0;
    info['pic']=this.user.pic;
    console.log(info);
    let date: Date = new Date(); 
    let d=date.toString(); 
    info['datetime']=d;
    d=d+this.user.email;
    this.fire.collection('questions').doc(d).set(info);
  }

  ngOnInit(): void {
  }

}
