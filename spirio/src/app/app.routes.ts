import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/404';
import { TestComponent } from './components/test/test.component';

// Pages
import { createPage } from './pages/create-your-own/create';
import { homePage } from './pages/home/home';

export const routes: Routes = [

  { path: 'test', component: TestComponent },
  { path : '', component: homePage},
  { path : 'create-your-own', component: createPage},
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: "**", component: PageNotFoundComponent}

];
