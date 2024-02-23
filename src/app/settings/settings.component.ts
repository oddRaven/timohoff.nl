import { Component, ElementRef, OnInit } from '@angular/core';

import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { NoteDirective } from '../note/note.directive';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ LanguageSelectorComponent, NoteDirective ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  flagsNote = $localize`:@@flagsNote:flags`
  popoverElement? : HTMLElement;
  isPopoverActive : boolean = false;
  eventListener = (event : any) => click(this, event);

  constructor (private elementRef : ElementRef)
  {
  }

  ngOnInit(): void {
    this.popoverElement = this.elementRef.nativeElement.querySelector('.popover');
  }

  public activatePopUp () {
    if (this.isPopoverActive) {
      return;
    }

    this.popoverElement?.classList.add('active');
    this.isPopoverActive = true;

    setTimeout(() => document.addEventListener('click', this.eventListener));
  }
}

function click (context: SettingsComponent, event: any) {
  if(!context.popoverElement?.contains(event.target)){
    deactivatePopUp(context, event);
  }
}

function deactivatePopUp (context: SettingsComponent, event: any) {
  context.popoverElement?.classList.remove('active');
  document.removeEventListener('click', context.eventListener);

  setTimeout(() => context.isPopoverActive = false);
}