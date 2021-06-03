import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import {CategoriesComponent} from './categories/categories.component'
import {CreateComponent} from './create/create.component'
import {MyarticlesComponent} from './myarticles/myarticles.component';
import {ShowComponent} from './show/show.component';
import {CatDiscussionsComponent} from './cat-discussions/cat-discussions.component'
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'myarticle',
    component:MyarticlesComponent
  },
  {
    path:'show',
    component:ShowComponent
  },
  {
    path:'catdiscuss',
    component:CatDiscussionsComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { routes}
