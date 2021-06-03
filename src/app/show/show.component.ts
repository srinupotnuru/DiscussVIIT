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
  comments:any=[];
  
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
    this.comments=this.data.comments;
    console.log(this.comments);
    
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

  updatecomments()
  {
    let cmt:any=document.getElementById("cmt");
    cmt=cmt.value
    let comment_complete={};
    comment_complete['pic']=this.user.pic;
    comment_complete['comment']=cmt;
    comment_complete['name']=this.user.name;
    let date: Date = new Date(); 
    let d=date.toString(); 
    comment_complete['datetime']=d;
    this.comments.push(comment_complete);
    let ref=this.firestore.collection('questions').doc(this.data.qid);
    ref.update({
      comments: this.comments
  })
  .then(() => {
      console.log("Document successfully updated!");
  })
  .catch((error) => {
     
      console.error("Error updating document: ", error);
  });
  this.route.navigate(["show"]);
  }
  ngOnInit(): void {
  }

}
