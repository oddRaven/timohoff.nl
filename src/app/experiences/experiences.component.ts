import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { Experience } from './experience';
import { TimelineComponent } from '../timeline/timeline.component';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';
import { ITimeline } from '../timeline/timeline';
import { IWaypoint } from '../timeline/waypoint';
import { ExperiencesService } from '../services/experiences/experiences.service';
import { StickyScrollDirective } from '../sticky-scroll/sticky-scroll.directive';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ ExperienceOverviewComponent, StickyScrollDirective, TimelineComponent, NgIf ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  selectedExperience? : Experience;
  timeline : ITimeline;

  constructor (
    private experiencesService: ExperiencesService,
    private router: Router)
  {
    this.timeline = this.experiencesService.getTimeline();
  }

  public selectExperience (waypoint : IWaypoint) {
    this.selectedExperience = waypoint as Experience;

    if(window.screen.width <= 500)
    {
      this.router.navigate(['experience', this.selectedExperience.id]);
    }
  }
}