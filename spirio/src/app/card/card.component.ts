import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Inventory } from '../models/inventory.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //Behaviou and variable to be used in html
  @Input() item: Inventory = {
    id: 1,
    name: "ts",
    category: "//",
    icon: "assets/ts.png",
    description: "Building blocks of the web",
    amount: 6
  }
}
