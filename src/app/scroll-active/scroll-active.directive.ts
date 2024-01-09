import { Directive, ElementRef, Inject, Input, PLATFORM_ID, HostListener } from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appScrollActive]',
  standalone: true
})
export class ScrollActiveDirective {
  @Input() selector: string = '';

  constructor(
    private elementRef: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document)
  { 
  } 

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    let rect : DOMRect = this.elementRef.nativeElement.getBoundingClientRect();
    let isActive = rect.top <= 0 && rect.bottom >= 0;
    let elements = this.document.querySelectorAll(this.selector);

    if (isActive) {
      if (!this.elementRef.nativeElement.classList.contains('active')) {
        this.elementRef.nativeElement.classList.add('active');

        elements.forEach((element) => element.classList.add('active'));
      }
    }
    else if (this.elementRef.nativeElement.classList.contains('active')) {
      this.elementRef.nativeElement.classList.remove('active');

      elements.forEach((element) => element.classList.remove('active'));
    }
  }
}
