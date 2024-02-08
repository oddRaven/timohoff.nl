import { Component, Input } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';

import { Timeline } from './timeline';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ NgClass, NgIf, NgFor ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() timeline!: Timeline;
}
