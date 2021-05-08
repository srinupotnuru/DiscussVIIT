import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import {CategoriesComponent} from './categories/categories.component'
import {CreateComponent} from './create/create.component'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { routes}
