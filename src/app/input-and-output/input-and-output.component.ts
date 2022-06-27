import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-and-output',
  templateUrl: './input-and-output.component.html',
  styleUrls: ['./input-and-output.component.css']
})
export class InputAndOutputComponent implements OnInit {

  
  currentItem = 'Television';
  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];

  constructor() {
  }

  ngOnInit() {
    console.log('constructor of CustomersComponent.ts in CustomersModule.ts')
  }

  addItem(newItem: any) {
    this.items.push(newItem);
  }

  crossOffItem(item: any) {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item: any) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item: any) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }

}
