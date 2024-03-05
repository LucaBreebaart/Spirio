import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/404';
import { TestComponent } from './components/test/test.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CraftingComponent } from './components/crafting/crafting.component';

export const routes: Routes = [

  { path: 'crafting', component: CraftingComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'test', component: TestComponent },
  {path: '', redirectTo: "inventory", pathMatch:"full"},
  {path: "**", component: PageNotFoundComponent}

];
