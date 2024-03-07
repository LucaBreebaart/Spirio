import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/404';
import { TestComponent } from './components/test/test.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


// Pages
import { CreatePage } from './pages/create-your-own/create.component';
import { HomePage } from './pages/home/home';
import { ShopPage } from './pages/shop/shop.component';

// Components

import { NavbarCompnent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, PageNotFoundComponent,
  RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, //import any components
  CreatePage, HomePage, ShopPage,//import pages
  NavbarCompnent, FooterComponent //import components
], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}

