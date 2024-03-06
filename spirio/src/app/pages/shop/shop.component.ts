import { Component } from '@angular/core';
import { CreateComponent } from '../../components/create-your-own/create.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CreateComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopPage {

}