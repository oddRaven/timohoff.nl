import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { IExperience } from './iexperience';

@Component({
  selector: 'app-experience-overview',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience-overview.component.html',
  styleUrl: './experience-overview.component.scss'
})
export class ExperienceOverviewComponent {
  @Input() experience?: IExperience;
}
