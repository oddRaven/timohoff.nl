import { Component, Input } from '@angular/core';

import { NoteDirective } from '../note/note.directive';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [ NoteDirective ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  @Input() h2?: string;
  @Input() noteText?: string;
}
