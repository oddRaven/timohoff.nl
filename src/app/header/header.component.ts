import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { NoteDirective } from '../note/note.directive';
import { PopUpService } from '../services/pop-up/pop-up.service';

@Component({
  selector: '[app-header]',
  standalone: true,
  imports: [ LanguageSelectorComponent, NoteDirective, RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  wipNote = $localize`:@@wipNote:wip`
  flagsNote = $localize`:@@flagsNote:flags`


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private popUpService: PopUpService)
  {}

  openMobileMenu () {
    this.popUpService.open();
  }
}
