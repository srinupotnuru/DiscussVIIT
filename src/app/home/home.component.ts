import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from '../app.component';
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
    private fire: AngularFirestore) {
      fire
      .collectionGroup('questions')
      .snapshotChanges()
      .subscribe((docs) => {
        this.discussions = docs;
        
      });
     
   }

  ngOnInit(): void {
  }

}
