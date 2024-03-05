import { Component } from '@angular/core';
import { Inventory } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, CardComponent, ReactiveFormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  inventorylist: Inventory[] = [
    {
      id: 1,
      name: "html",
      category: "markup",
      icon: "assets/html.png",
      description: "Building blocks of the web",
      amount: 4

    },
    {
      id: 2,
      name: "CSS",
      category: "styling",
      icon: "assets/css.png",
      description: "makes the web look good",
      amount: 10
    },
    {
      id: 3,
      name: "js",
      category: "programming",
      icon: "assets/js.png",
      description: "makes the website smart",
      amount: 15

    }

  ]

  //form variables
  newInventoryItem = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  addNewInventory() {
    console.warn(this.newInventoryItem.value)

    var newItem: Inventory = {

      name: this.newInventoryItem.value.name!,
      category: this.newInventoryItem.value.category!,
      icon: "assets/html.png",
      description: this.newInventoryItem.value.description!,
      amount: 10

    }
    this.inventorylist.push(newItem)

    this.newInventoryItem.reset()

  }

}
