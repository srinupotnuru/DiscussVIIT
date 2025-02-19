import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-cat-discussions',
  templateUrl: './cat-discussions.component.html',
  styleUrls: ['./cat-discussions.component.css']
})
export class CatDiscussionsComponent implements OnInit {

  data:any={};
  discuss=[];
  temp=[];
  constructor(
    public auth: AngularFireAuth,
    private app: AppComponent,
    private firestore: AngularFirestore,
    private route:Router,
    private loc:Location
  ) {

    this.data=sessionStorage.getItem("data");
        this.data=JSON.parse(this.data);
    this.auth.authState.subscribe((res) => {
      
    });
    
    firestore
      .collectionGroup('questions')
      .snapshotChanges()
      .subscribe((docs) => {
        this.temp = docs;
        this.discuss = this.temp.filter((value) => {
          return value.payload.doc.data().category == this.data['category'];
        });
        this.temp = this.discuss;
        
      });
     
   }
   display(item)
  {
    sessionStorage.setItem("item",JSON.stringify(item));
    this.route.navigate(["show"]);
  }

  ngOnInit(): void {
  }

}
