import { Component } from '@angular/core';

import { NoteComponent } from '../note/note.component'
import { CollapsibleTableComponent } from '../collapsible-table/collapsible-table.component'
import { Item } from '../collapsible-table/item'
import { Table } from '../collapsible-table/table'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CollapsibleTableComponent, NoteComponent ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  table : Table = {
    header: ['Skill', 'State'],
    items: [
      {
        class: '',
        cells: ['Programming Language', 'Active'],
        isHidden: false,
        subItems: [
          {
            class: '',
            cells: ['Razor', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['C++', 'Known'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['HTML', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['PHP', 'Known'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['ASP', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['JavaScript', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Java', 'Known'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['T-SQL', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Swift', 'Known'],
            subItems: [],
            isHidden: true
          }
        ]
      },
      {
        class: '',
        cells: ['Frameworks', 'Known'],
        isHidden: false,
        subItems: [
          {
            class: '',
            cells: ['Cordova', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['.NET Framework', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['.NET Core', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['AngularJs', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Angular', 'Active'],
            subItems: [],
            isHidden: true
          }
        ]
      }
    ]
  };
}
