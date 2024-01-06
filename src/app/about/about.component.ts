import { Component } from '@angular/core';

import { NoteDirective } from '../note/note.directive'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NoteDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutNote = $localize`:@@aboutNote:about`
}
