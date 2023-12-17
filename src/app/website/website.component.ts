import { Component } from '@angular/core';

import { CollapsibleTableComponent } from '../collapsible-table/collapsible-table.component';
import { Item } from '../collapsible-table/item';
import { Table } from '../collapsible-table/table';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CollapsibleTableComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {
  table : Table = {
    header: ['Number', 'Definition', 'Completed'],
    items: [
      {
        class: 'background-red',
        cells: ['1', 'The website must be available', '\u2713'],
        isHidden: false,
        subItems: [
          {
            class: 'background-red',
            cells: ['1.1', 'The website must be available on mobile web browsers.', '\u2713'],
            subItems: [
              {
                class: 'background-orange',
                cells: ['1.1.1', 'The website should be responsive.', '\u2713'],
                subItems: [],
                isHidden: true
              }
            ],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['1.2', 'The website must be available on desktop web browsers.', '\u2713'],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['1.3', 'The website must be available on web browsers without javascript.', '\u2713'],
            subItems: [],
            isHidden: true
          }
        ]
      },
      {
        class: 'background-red',
        cells: ['2', 'The website must have an one-page design.', '\u2713'],
        subItems: [],
        isHidden: false
      }
    ]
  }
}