import { DOCUMENT, isPlatformServer } from '@angular/common';
import { Directive, ElementRef, OnInit, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appNote]',
  standalone: true,
})
export class NoteDirective implements OnInit {
  @Input() noteText = '';

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
    divElement.textContent = "💡";
    divElement.classList.add('note-lightbulb');
    divElement.addEventListener('click', (e) => this.clickNote());
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

    let containerElement = this.document.createElement("div");
    containerElement.classList.add('note-container');
    this.positionElement(containerElement);
    containerElement.append(paragraph);

    this.elementRef.nativeElement.after(containerElement);
    this.elementRef.nativeElement.classList.add('active-note');
  }

  positionElement(containerElement : HTMLDivElement) {
    let isPositionAbsolute = this.isPositionAsbsolute();

    if (isPositionAbsolute) {
      containerElement.style.position = "absolute";

      let rect = this.elementRef.nativeElement.getBoundingClientRect();
      containerElement.style.top = rect.bottom + 'px';
    }
  }

  isPositionAsbsolute() {
    const nativeElement = this.elementRef.nativeElement;

    // Use Renderer2 to get the computed style
    const computedStyle = window.getComputedStyle(nativeElement);

    // Get the computed position property
    const position = computedStyle.getPropertyValue('position');

    return position == 'absolute';
  }
}
