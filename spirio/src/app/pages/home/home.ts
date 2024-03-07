import { Component } from '@angular/core';
import { CreateComponent } from '../../components/create-your-own/create.component';
import { productCard } from '../../components/productCard/productCard.component';
import { LocationsComponent } from '../../components/locations/locations.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    CreateComponent, productCard, LocationsComponent
    //import components
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css', '../../app.component.css']
})
export class HomePage {
  items = [
    { price: 599, name: 'Product 1' },
    { price: 799, name: 'Product 2' },
    { price: 499, name: 'Product 3' },
    // Add more items as needed
  ];
}