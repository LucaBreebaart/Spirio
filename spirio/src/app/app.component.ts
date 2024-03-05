import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CraftingComponent } from './components/crafting/crafting.component';
import { PageNotFoundComponent } from './components/page-not-found/404';
import { TestComponent } from './components/test/test.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoryComponent, CraftingComponent, PageNotFoundComponent, TestComponent,
  RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule], //import any components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'luca';
}

