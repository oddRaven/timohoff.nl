import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { NgClass, NgIf, NgFor, isPlatformServer } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Timeline } from './timeline';
import { IWaypoint } from './waypoint';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ NgClass, NgIf, NgFor ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  animations: [
    trigger('moveLeft', [
      state('start', style({
        left: '{{ startPosition }}px' // Use interpolation for dynamic value
      }), {params: {startPosition: -150}}),
      state('end', style({
        left: '{{ endPosition }}px' // Use interpolation for dynamic value
      }), {params: {endPosition: -150}}),
      transition('start => end', [
        animate('500ms ease-out')
      ]),
      transition('end => start', [])
    ])
  ]
})
export class TimelineComponent implements AfterViewInit {
  @Input() timeline!: Timeline;
  @Output() selectWaypoint = new EventEmitter<IWaypoint>();

  state = 'start';
  startPosition = -150;
  endPosition = -150;

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

    this.startPosition = this.endPosition;
    this.state = 'start';
    this.endPosition = 8 + index * 130;
    window.setTimeout(() => {
      this.state = 'end';
    });
  }

  private showCurrent(){
    let element = this.elementRef.nativeElement;
    element.scroll(element.scrollWidth, element.scrollHeight);
    element.classList.add('visible');
  }
}
