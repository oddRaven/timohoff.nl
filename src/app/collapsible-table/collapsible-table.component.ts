import { Component, Input, OnInit } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Item } from './item';
import { Table } from './table';

@Component({
  selector: 'app-collapsible-table',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './collapsible-table.component.html',
  styleUrl: './collapsible-table.component.scss'
})
export class CollapsibleTableComponent implements OnInit {
  @Input() table!: Table;

  flatItems: Item[] = [];

  ngOnInit() {
    if(this.table == null){
      return;
    }

    this.flattenItems(this.table.items);
  }

  flattenItems(items: Item[]) {
    if (items == null || items.length == 0) {
      return;
    }

    for (let item of items) {
      this.flatItems.push(item);

      this.flattenItems(item.subItems);
    }
  }

  itemClick(item: Item) {
    if (item.subItems.length == 0) {
      return;
    }

    let isHidden = !item.subItems[0].isHidden;

    this.toggleSubItems(item, isHidden);
  }

  toggleSubItems(item: Item, isHidden: boolean) {
    for(let subItem of item.subItems) {
      subItem.isHidden = isHidden;

      this.toggleSubItems(subItem, isHidden);
    }
  }
}
