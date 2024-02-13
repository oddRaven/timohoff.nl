import { Component } from '@angular/core';

import { TimelineComponent } from '../timeline/timeline.component';
import { Timeline } from '../timeline/timeline';
import { StickyScrollDirective } from '../sticky-scroll/sticky-scroll.directive';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ StickyScrollDirective, TimelineComponent ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  timeline : Timeline = {
    phases : [
      {
        title: 'Elementary',
        color: 'orange',
        waypoints: [
          {
            title: 'Montessori school',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/montessori 2011 white.png'
          }
        ]
      },
      {
        title: 'Secondary',
        color: 'red',
        waypoints: [
          {
            title: 'VMBO-TL',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/lek en linge white.png'
          },
          {
            title: 'Krantenbezorger',
            isBound: false,
            imageSrc: ''
          },
          {
            title: 'Logistiek-medewerker 2010',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
          },
          {
            title: 'Logistiek-medewerker 2011',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
          }
        ]
      },
      {
        title: 'MBO',
        color: 'lime',
        waypoints: [
          {
            title: 'Application Development',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/kw1c logo 2011.jpeg'
          },
          {
            title: 'Development internship',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/stb logo squared.jpeg'
          },
          {
            title: 'Web development iternship',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/safira 2014 white.png'
          },
          {
            title: 'PHP development timohoff.nl',
            isBound: false,
            imageSrc: ''
          },
          {
            title: 'Java game development',
            isBound: false,
            imageSrc: ''
          }
        ]
      },
      {
        title: 'HBO',
        color: 'aqua',
        waypoints: [
          {
            title: 'Informatica - Software Engineering',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/avans.png'
          },
          {
            title: 'Logistiek-medewerker',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/blokker wrap logo.png'
          },
          {
            title: 'Software engineer internship',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/cordis suite.png'
          },
        ]
      },
      {
        title: 'MediMapp',
        color: 'c31e5f',
        waypoints: [
          {
            title: 'Junior Software Engineer',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'Soulve scaleup',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'C++ game engine development',
            isBound: false,
            imageSrc: ''
          },
          {
            title: '.NET migration',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'Soulve scaledown',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'C# game engine development',
            isBound: false,
            imageSrc: ''
          },
          {
            title: 'Soulve end',
            isBound: true,
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }
        ]
      },
      {
        title: 'Career transition',
        color: 'grey',
        waypoints: [
          {
            title: 'Angular development timohoff.nl',
            isBound: true,
            imageSrc: ''
          },
        ]
      }
    ]
  }
}