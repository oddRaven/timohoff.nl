import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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


  constructor(
    @Inject(DOCUMENT) private document: Document)
  {}

  openMobileMenu () {
    this.document.body.classList.add('overflow-hidden');
    let container = this.document.querySelector('.container');
    container?.classList.add('disabled');
    let popUp = this.document.querySelector('app-pop-up');
    popUp?.classList.add('active');
  }
}
