import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from '../status.enum';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item = new Item('default title', Status.OPEN);
  @Output() remove = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  public onRemove() {
    console.log('remove called');
    this.remove.emit(this.item);
  }

}
