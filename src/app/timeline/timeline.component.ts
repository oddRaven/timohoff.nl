import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { NgClass, isPlatformServer } from '@angular/common';

import { Timeline } from '../models/timeline';
import { IWaypoint } from '../models/waypoint';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements AfterViewInit {
  @Input() timeline!: Timeline;
  @Output() selectWaypoint = new EventEmitter<IWaypoint>();

  selectorLeft = -150;

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

  public select (waypoint: IWaypoint){
    this.selectWaypoint.emit(waypoint);

    let index = 0;
    loop: for (let phase of this.timeline.phases){
      for (let phaseWaypoint of phase.waypoints){
        if(waypoint == phaseWaypoint){
          break loop;
        }

        index++;
      }
    }

    this.selectorLeft = 8 + index * 130;
  }

  private showCurrent() {
    let element = this.elementRef.nativeElement;
    element.scroll(element.scrollWidth, element.scrollHeight);
    element.classList.add('visible');
  }
}