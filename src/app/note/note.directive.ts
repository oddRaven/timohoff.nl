import { DOCUMENT, isPlatformServer } from '@angular/common';
import { Directive, ElementRef, OnInit, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appNote]',
  standalone: true,
})
export class NoteDirective implements OnInit {
  @Input() noteText = '';
  @Input() isPositionFixed = false;

  constructor(
    private elementRef: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document)
  {
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    let divElement = this.document.createElement("div");
    divElement.setAttribute('tabindex', '0');
    let noteText = $localize`:@@note:note`;
    divElement.setAttribute('title', noteText);
    divElement.textContent = "💡";
    divElement.classList.add('note-lightbulb');
    divElement.addEventListener('click', (e) => this.clickNote());
    divElement.addEventListener('keypress', (e) => e.key == 'Enter' && this.clickNote());
    this.elementRef.nativeElement.appendChild(divElement);
  }

  clickNote () {
    this.document
      .querySelectorAll('.note-container')
      .forEach(e => e.remove());

    let isDeactivating = this.elementRef.nativeElement.classList.contains('active-note');

    this.document
      .querySelectorAll('[appnote]')
      .forEach(e => e.classList.remove('active-note'));

    if (isDeactivating) {
      return;
    }

    let paragraph = this.document.createElement("p");
    let noteLabel = $localize`:@@note:note`;
    paragraph.textContent = noteLabel + ": " + this.noteText;
    paragraph.classList.add('note');

    let exit = this.document.createElement("div");
    exit.setAttribute('tabindex', '0');
    let noteText = $localize`:@@close:close`;
    exit.setAttribute('title', noteText);
    exit.textContent = '\u274c';
    exit.classList.add('exit');
    exit.addEventListener('click', (e) => this.closeNotes());
    exit.addEventListener('keypress', (e) => e.key == 'Enter' && this.closeNotes());

    let containerElement = this.document.createElement("div");
    containerElement.classList.add('note-container');

    containerElement.append(paragraph);
    containerElement.append(exit);

    if(this.isPositionFixed == true){
      containerElement.classList.add('position-fixed');
      this.document.body.prepend(containerElement);
    }
    else{
      this.elementRef.nativeElement.after(containerElement);
    }

    exit.focus();

    this.elementRef.nativeElement.classList.add('active-note');
  }

  // In reality there will only be one note to be closed, but for convience and assurence this method closes all notes.
  closeNotes () {
    this.document
      .querySelectorAll('.note-container')
      .forEach(e => e.remove());

    let lightbulbElement = this.document.querySelector('[appnote].active-note .note-lightbulb') as HTMLElement;
    if(lightbulbElement != null){
      lightbulbElement.focus();
    }

    this.document
      .querySelectorAll('[appnote]')
      .forEach(e => e.classList.remove('active-note'));
  }
}