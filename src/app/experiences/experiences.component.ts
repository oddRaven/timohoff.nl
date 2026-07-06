import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Experience } from '../models/experience';
import { TimelineComponent } from '../timeline/timeline.component';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';
import { ITimeline } from '../models/timeline';
import { IWaypoint } from '../models/waypoint';
import { TimelineService } from '../services/timeline/timeline.service';
import { StickyScrollDirective } from '../sticky-scroll/sticky-scroll.directive';
import { NoteDirective } from '../note/note.directive'

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ExperienceOverviewComponent, StickyScrollDirective, TimelineComponent, NoteDirective],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  selectedExperience? : Experience;
  timeline = signal<ITimeline>({ phases: [] });

  constructor (
    private timelineService: TimelineService,
    private router: Router)
  {
    this.timelineService
      .get(1)
      .then((timeline) => this.timeline.set(timeline));
  }

  public selectExperience (waypoint : IWaypoint) {
    this.selectedExperience = waypoint as Experience;

    if(window.innerWidth <= 500)
    {
      this.router.navigate(['experience', this.selectedExperience.id]);
    }
  }
}