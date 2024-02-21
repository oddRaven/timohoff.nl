import { Directive, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appStickyScroll]',
  standalone: true
})
export class StickyScrollDirective implements AfterViewInit {
  previousScrollY = 0;
  isUserScrolling = false;

  constructor (
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object)
  {
  }

  ngAfterViewInit(): void {
    if (isPlatformServer(this.platformId) || window.screen.width > 500) {
      return;
    }

    let element = this.elementRef.nativeElement;
    element.style.height = window.innerHeight - 40 + 'px';

    element.onscroll = (event: any) => this.onScroll(event, element);

    element.addEventListener("wheel", () => this.setUserScrolling());
    element.addEventListener("touchstart", () => this.setUserScrolling());
    element.addEventListener("touchend", () => this.setUserNotScrolling());
    element.addEventListener("mouseup", () => this.setUserNotScrolling());

    this.previousScrollY = element.scrollTop;
  }

  private onScroll(event: any, element: HTMLElement) {
    const currentScrollY = event.target.scrollTop;
    const deltaScroll = currentScrollY - this.previousScrollY;
    const elementTop = element.getBoundingClientRect().top;

    if (this.isUserScrolling == false){
      this.previousScrollY = currentScrollY;
      return;
    }

    if (elementTop < 40 && deltaScroll < 0 || elementTop > 40 && deltaScroll > 0) {
      event.preventDefault();
      event.target.scrollTop = this.previousScrollY;
      window.scrollBy(0, deltaScroll);
    }
    else if(elementTop < 40 && deltaScroll > 0 || elementTop > 40 && deltaScroll < 0){
      event.preventDefault();
      this.previousScrollY = currentScrollY;
      window.scrollBy(0, -deltaScroll);
    }
    else {
      this.previousScrollY = currentScrollY;
    }
  }

  private setUserScrolling() {
    this.isUserScrolling = true;
  }

  private setUserNotScrolling() {
      this.isUserScrolling = false;
  }
}
