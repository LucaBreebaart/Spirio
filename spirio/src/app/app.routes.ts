import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/404';
import { TestComponent } from './components/test/test.component';

// Pages
import { CreatePage } from './pages/create-your-own/create.component';
import { HomePage } from './pages/home/home';
import { ShopPage } from './pages/shop/shop.component';



export const routes: Routes = [

  { path: 'test', component: TestComponent },
  { path : '', component: HomePage},
  { path : 'create-your-own', component: CreatePage},
  { path : 'shop', component: ShopPage},
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: "**", component: PageNotFoundComponent}

];
