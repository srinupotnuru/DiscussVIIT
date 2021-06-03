import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent} from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import {AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MyarticlesComponent } from './myarticles/myarticles.component';
import { ShowComponent } from './show/show.component';
import { CatDiscussionsComponent } from './cat-discussions/cat-discussions.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    MyarticlesComponent,
    ShowComponent,
    CatDiscussionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    AngularFireAuthModule,
    MatButtonModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDVcWfJcmHdqxTdTaCjtnpbAPVL46LIbEk",
        authDomain: "discussviit-cd500.firebaseapp.com",
        projectId: "discussviit-cd500",
        storageBucket: "discussviit-cd500.appspot.com",
        messagingSenderId: "682058077917",
        appId: "1:682058077917:web:d4ea8645d44a6b459ead34"
      }
    ),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    
    
    
  ],
  exports:[BsDropdownModule,TooltipModule,ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
