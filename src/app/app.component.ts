import { Component, Input } from '@angular/core';
import { Item } from './item';
import { Status } from './status.enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static NO_TITLE = 'No title';
  title = 'To do list';
  items: Item[] = [
    new Item('First default item.', Status.OPEN),
    new Item('Second default item.', Status.OPEN),
    new Item('Third default item.', Status.CLOSED)
  ];
  statuses = Status.statuses;
  public nextItem: Item = new Item(AppComponent.NO_TITLE, Status.UNKNOWN);
  public addItem() {
    this.items.unshift(this.nextItem);
    this.nextItem = new Item(AppComponent.NO_TITLE, Status.UNKNOWN);
  }
  public removeItem(item: Item) {
    console.log(item.title + ' removed');
    this.items = this.items.filter(i => i !== item);
  }
}
