import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  data:any={};
  constructor(private loc:Location) {
        this.data=sessionStorage.getItem("item");
        this.data=JSON.parse(this.data);
        
       
   }

  ngOnInit(): void {
  }
}
