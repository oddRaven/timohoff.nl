import { Component } from '@angular/core';

import { CollapsibleTableComponent } from '../collapsible-table/collapsible-table.component';
import { Table } from '../collapsible-table/table';

@Component({
  selector: 'app-requirements',
  standalone: true,
  imports: [CollapsibleTableComponent],
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss'
})
export class RequirementsComponent {
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
      },
      {
        class: 'background-orange',
        cells: ['3', 'The website should be accesible.', ''],
        subItems: [
          {
            class: 'background-yellow',
            cells: ['3.1', 'The website could support multiple languages.', '\u2713'],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-orange',
            cells: ['3.2', 'The website should support screen readers.', ''],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-orange',
            cells: ['3.3', 'The website should support keyboard navigation.', '\u2713'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: 'background-red',
        cells: ['4', 'The website must have editor notes for further explanation.', '\u2713'],
        subItems: [
          {
            class: 'background-orange',
            cells: ['4.1', 'The website should have an option to collapse editor notes.', '\u2713'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: 'background-red',
        cells: ['5', 'The website content must be complete.', ''],
        subItems: [
          {
            class: 'background-red',
            cells: ['5.1', 'The website introduction content must be filled.', '\u2713'],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['5.2', 'The website about content must be filled.', '\u2713'],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['5.3', 'The website team content must be complete.', ''],
            subItems: [
              {
                class: 'background-orange',
                cells: ['5.3.1', 'The website team profiles should have a respective picture.', '\u2713'],
                subItems: [],
                isHidden: true
              },
              {
                class: 'background-red',
                cells: ['5.3.2', 'The website team profiles must have a default picture.', ''],
                subItems: [],
                isHidden: true
              },
              {
                class: 'background-orange',
                cells: ['5.3.3', 'The website team profiles should have a respective description.', ''],
                subItems: [],
                isHidden: true
              }
            ],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['5.4', 'The website skills content must be complete.', ''],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['5.5', 'The website passions content must be filled.', ''],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['5.6', "The website meta 'website' content must be complete.", ''],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: 'background-red',
        cells: ['6', 'The website changes must be tracked by a git repository.', '\u2713'],
        subItems: [
          {
            class: 'background-orange',
            cells: ['6.1', 'The website repository should be hosted on Github, as backup.', ''],
            subItems: [],
            isHidden: true
          },
          {
            class: 'background-red',
            cells: ['6.2', 'The website repository must not be responsible for tracking sensitive personal information.', '\u2713'],
            subItems: [],
            isHidden: true
          },
        ],
        isHidden: false
      },
      {
        class: 'background-red',
        cells: ['7', 'The website uses Angular for seperation of concerns.', '\u2713'],
        subItems: [],
        isHidden: false
      }
    ]
  }
}
