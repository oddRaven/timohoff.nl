import { Component } from '@angular/core';

import { CollapsibleTableComponent } from '../collapsible-table/collapsible-table.component'
import { NoteDirective } from '../note/note.directive'
import { Table } from '../collapsible-table/table'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CollapsibleTableComponent, NoteDirective ],
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
        cells: ['Frameworks', 'Active'],
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
      },
      {
        class: '',
        cells: ['Package Managers', 'Active'],
        isHidden: false,
        subItems: [
          {
            class: '',
            cells: ['npm', 'Active'],
            isHidden: true,
            subItems: []
          },
          {
            class: '',
            cells: ['apt', 'Active'],
            isHidden: true,
            subItems: []
          },
          {
            class: '',
            cells: ['brew', 'Active'],
            isHidden: true,
            subItems: []
          },
          {
            class: '',
            cells: ['cordova', 'Active'],
            isHidden: true,
            subItems: []
          },
        ]
      },
      {
        class: '',
        cells: ['Web Tech', 'Active'],
        subItems: [
          {
            class: '',
            cells: ['Sass', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['ReactiveX', 'Known'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: '',
        cells: ['Web Servers', 'Active'],
        subItems: [
          {
            class: '',
            cells: ['Apache2', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['IIS', 'Known'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: '',
        cells: ['Editors', 'Active'],
        subItems: [
          {
            class: '',
            cells: ['Vim', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Visual Studio', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Visual Studio Code', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Xcode', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Android Studio', 'Active'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: '',
        cells: ['Operating Systems', 'Active'],
        subItems: [
          {
            class: '',
            cells: ['Windows', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Ubuntu', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['MacOS', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Android', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['iOS', 'Active'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: '',
        cells: ['Command Languages', 'Active'],
        subItems: [
          {
            class: '',
            cells: ['Bash', 'Known'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Powershell', 'Known'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
      {
        class: '',
        cells: ['Practice', 'Active'],
        subItems: [
          {
            class: '',
            cells: ['Scrum', 'Known'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['UI/UX', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Test Coverage', 'Active'],
            subItems: [],
            isHidden: true
          },
          {
            class: '',
            cells: ['Regex', 'Active'],
            subItems: [],
            isHidden: true
          }
        ],
        isHidden: false
      },
    ]
  };
}