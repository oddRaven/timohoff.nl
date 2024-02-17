import { Component, OnInit } from '@angular/core';

import { Experience } from '../experiences/experience';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceOverviewComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  public experience: Experience;

  constructor() {
    this.experience = new Experience ({
      title: 'title',
      imageSrc: 'https://file.timohoff.nl/medimapp.png',
      description: 'woop woop',
      location: 'Culemborg'
    });
  }

  ngOnInit(): void {
  }
}
