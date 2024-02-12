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

  constructor (
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object)
  {
  }

  ngAfterViewInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    window.setTimeout(() => this.showCurrent());
  }

  private showCurrent(){
    let element = this.elementRef.nativeElement;
    element.scroll(element.scrollWidth, element.scrollHeight);
    element.classList.add('visible');
  }
}
