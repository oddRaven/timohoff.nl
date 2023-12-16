import { Component } from '@angular/core';

import { NoteComponent } from '../note/note.component'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ NoteComponent ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
