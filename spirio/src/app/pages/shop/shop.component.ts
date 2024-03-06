import { Component } from '@angular/core';
import { CreateComponent } from '../../components/create-your-own/create.component';
import { LocationsComponent } from '../../components/locations/locations.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CreateComponent, LocationsComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopPage {

}