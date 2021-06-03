import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  display(item)
  {
    let data={};
    data['category']=item;

    //console.log(data);
    sessionStorage.setItem("data",JSON.stringify(data));
    this.route.navigate(["catdiscuss"]);
  }
}
