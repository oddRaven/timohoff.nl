import { Component, Input, OnChanges } from '@angular/core';
import { NgFor } from '@angular/common';

import { IExperience } from './iexperience';
import { ExperienceService } from '../services/experience/experience.service';

@Component({
  selector: 'app-experience-overview',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience-overview.component.html',
  styleUrl: './experience-overview.component.scss'
})
export class ExperienceOverviewComponent implements OnChanges {
  @Input() experience?: IExperience;

  constructor (private experienceService : ExperienceService)
  {}

  ngOnChanges(): void {
    if (!this.experience || this.experience.article) {
      return;
    }

    this.experienceService
      .get(this.experience!.id)
      .then((experience) => this.experience!.article = experience.article);
  }
}
