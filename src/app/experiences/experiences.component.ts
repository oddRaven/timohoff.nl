import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { Experience } from './experience';
import { TimelineComponent } from '../timeline/timeline.component';
import { ExperienceOverviewComponent } from '../experience-overview/experience-overview.component';
import { Timeline } from '../timeline/timeline';
import { IWaypoint } from '../timeline/waypoint';
import { IExperience } from '../experience-overview/iexperience';
import { StickyScrollDirective } from '../sticky-scroll/sticky-scroll.directive';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ ExperienceOverviewComponent, StickyScrollDirective, TimelineComponent, NgIf ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  selectedExperience? : IExperience;

  timeline : Timeline = {
    phases : [
      {
        title: 'Elementary',
        color: 'orange',
        waypoints: [
          new Experience({
            title: 'Montessori school',
            imageSrc: 'https://file.timohoff.nl/montessori 2011 white.png'
          })
        ]
      },
      {
        title: 'Secondary',
        color: 'red',
        waypoints: [
          new Experience({
            title: 'VMBO-TL',
            imageSrc: 'https://file.timohoff.nl/lek en linge white.png'
          }),
          new Experience({
            title: 'Krantenbezorger',
            isBound: false,
          }),
          new Experience({
            title: 'Logistiek-medewerker 2010',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
          }),
          new Experience({
            title: 'Logistiek-medewerker 2011',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
          })
        ]
      },
      {
        title: 'MBO',
        color: 'lime',
        waypoints: [
          new Experience({
            title: 'Application Development',
            imageSrc: 'https://file.timohoff.nl/kw1c logo 2011.jpeg'
          }),
          new Experience({
            title: 'Development internship',
            imageSrc: 'https://file.timohoff.nl/stb logo squared.jpeg'
          }),
          new Experience({
            title: 'Web development iternship',
            imageSrc: 'https://file.timohoff.nl/safira 2014 white.png'
          }),
          new Experience({
            title: 'PHP development timohoff.nl',
            isBound: false,
          }),
          new Experience({
            title: 'Java game development',
            isBound: false,
          })
        ]
      },
      {
        title: 'HBO',
        color: 'aqua',
        waypoints: [
          new Experience({
            title: 'Informatica - Software Engineering',
            imageSrc: 'https://file.timohoff.nl/avans.png'
          }),
          new Experience({
            title: 'Logistiek-medewerker',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/blokker wrap logo.png'
          }),
          new Experience({
            title: 'Software engineer internship',
            imageSrc: 'https://file.timohoff.nl/cordis suite.png'
          }),
        ]
      },
      {
        title: 'MediMapp',
        color: 'c31e5f',
        waypoints: [
          new Experience({
            title: 'Junior Software Engineer',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Experience({
            title: 'Soulve scaleup',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Experience({
            title: 'C++ game engine development',
            isBound: false,
          }),
          new Experience({
            title: '.NET migration',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Experience({
            title: 'Soulve scaledown',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Experience({
            title: 'C# game engine development',
            isBound: false,
          }),
          new Experience({
            title: 'Soulve end',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          })
        ]
      },
      {
        title: 'Career transition',
        color: 'grey',
        waypoints: [
          new Experience({
            title: 'Angular development timohoff.nl',
            location: 'Utrecht',
            description: 'It was time to sharpen my Angular skills and update my website to show my capabilities and experiences.',
            skills: ['Angular', 'TypeScript']
          }),
        ]
      }
    ]
  }

  public selectExperience (waypoint : IWaypoint) {
    this.selectedExperience = waypoint as Experience;
  }
}