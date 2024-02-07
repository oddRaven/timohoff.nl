import { Component } from '@angular/core';

import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

}
