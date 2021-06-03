import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from '../app.component';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  discussions = [];
  tempDiscussions = [];
  constructor(public auth: AngularFireAuth,
    private app: AppComponent,
    private fire: AngularFirestore,
    private route:Router
    ) {
      fire
      .collectionGroup('questions')
      .snapshotChanges()
      .subscribe((docs) => {
        this.discussions = docs;
        this.discussions=this.discussions.reverse();
        
      });
      //console.log("discuss",this.discussions);
     
   }
  display(item)
  {
    sessionStorage.setItem("item",JSON.stringify(item));
    this.route.navigate(["show"]);
  }
  ngOnInit(): void {
  }

}