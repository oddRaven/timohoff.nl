import { Component } from '@angular/core';

import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { NoteDirective } from '../note/note.directive';

@Component({
  selector: '[app-header]',
  standalone: true,
  imports: [LanguageSelectorComponent, NoteDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  wipNote = $localize`:@@wipNote:wip`
  flagsNote = $localize`:@@flagsNote:flags`
}
