import { Component, Input, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { NgClass, NgIf, NgFor, isPlatformServer } from '@angular/common';

import { Timeline } from './timeline';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ NgClass, NgIf, NgFor ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements AfterViewInit {
  @Input() timeline!: Timeline;
  previousScrollY = 0;
  isUserScrolling = false;

  constructor (
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object)
  {
  }

  ngAfterViewInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    let element = this.elementRef.nativeElement;

    if (window.screen.width <= 500) {
      element.style.height = window.screen.height - 40 + 'px';

      element.onscroll =  (event: any) => {
        const currentScrollY = event.target.scrollTop;
        const deltaScroll = currentScrollY - this.previousScrollY;
        const elementTop = element.getBoundingClientRect().top;

        if (this.isUserScrolling == true &&
        (elementTop < 40 && deltaScroll < 0
        || elementTop > 40 && deltaScroll > 0)) {
          event.preventDefault();
          event.target.scrollTop = this.previousScrollY;
          window.scrollBy(0, deltaScroll);
        }
        else {
          this.previousScrollY = currentScrollY;
        }
      };

      element.addEventListener("wheel", () => {
        this.isUserScrolling = true;
      });

      element.addEventListener("touchstart", () => {
        this.isUserScrolling = true;
      });

      element.addEventListener("touchend", () => {
        this.isUserScrolling = false;
      });

      element.addEventListener("mouseup", () => {
        this.isUserScrolling = false;
      });

      this.previousScrollY = element.scrollTop;
    }

    element.scroll(element.scrollWidth, element.scrollHeight);
    element.classList.add('visible');
  }
}
