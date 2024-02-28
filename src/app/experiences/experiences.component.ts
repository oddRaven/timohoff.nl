import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { Experience } from '../models/experience';
import { TimelineComponent } from '../timeline/timeline.component';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';
import { ITimeline } from '../timeline/timeline';
import { IWaypoint } from '../timeline/waypoint';
import { TimelineService } from '../services/timeline/timeline.service';
import { StickyScrollDirective } from '../sticky-scroll/sticky-scroll.directive';
import { NoteDirective } from '../note/note.directive'

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ ExperienceOverviewComponent, StickyScrollDirective, TimelineComponent, NgIf, NoteDirective ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  selectedExperience? : Experience;
  timeline? : ITimeline;

  constructor (
    private timelineService: TimelineService,
    private router: Router)
  {
    this.timelineService
      .get(1)
      .then((timeline) => this.timeline = timeline);
  }

  public selectExperience (waypoint : IWaypoint) {
    this.selectedExperience = waypoint as Experience;

    if(window.innerWidth <= 500)
    {
      this.router.navigate(['experience', this.selectedExperience.id]);
    }
  }
}