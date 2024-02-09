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

  constructor (private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object){
  }

  ngAfterViewInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    let element = this.elementRef.nativeElement;
    let startTime = Date.now();
    let endScroll = element.scrollWidth - element.clientWidth;

    let interval = setInterval(() => {
      let timePassed = Date.now() - startTime;

      if(timePassed >= endScroll) {
        element.scrollLeft = endScroll;
        clearInterval(interval);
        return;
      }
      else {
        element.scrollLeft = timePassed;
      }
    }, 10);
  }
}
