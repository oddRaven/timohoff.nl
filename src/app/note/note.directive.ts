import { DOCUMENT, isPlatformServer } from '@angular/common';
import { Directive, ElementRef, OnInit, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appNote]',
  standalone: true,
})
export class NoteDirective implements OnInit {
  @Input() text = '';

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
      .querySelectorAll('.note')
      .forEach(e => e.remove());

    let paragraph = this.document.createElement("p");
    paragraph.textContent = "Note: " + this.text;
    paragraph.classList.add('note');

    let textElement = this.document.createElement("div");
    textElement.classList.add('note-container');

    textElement.append(paragraph);
    this.elementRef.nativeElement.after(textElement);
  }
}
