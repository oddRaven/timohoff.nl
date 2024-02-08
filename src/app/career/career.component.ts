import { Component } from '@angular/core';

import { TimelineComponent } from '../timeline/timeline.component';
import { Timeline } from '../timeline/timeline';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  timeline : Timeline = {
    phases : [
      {
        title: 'Elementary',
        color: 'orange',
        waypoints: [
          {
            title: 'Montessori school',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/montessori 2011 white.png'
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
            imageSrc: 'http://file.timohoff.nl/lek en linge white.png'
          },
          {
            title: 'Krantenbezorger',
            isBound: false,
            imageSrc: ''
          },
          {
            title: 'Logistiek-medewerker 2010',
            isBound: false,
            imageSrc: 'http://file.timohoff.nl/centraal boekhuis white.png'
          },
          {
            title: 'Logistiek-medewerker 2011',
            isBound: false,
            imageSrc: 'http://file.timohoff.nl/centraal boekhuis white.png'
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
            imageSrc: 'http://file.timohoff.nl/kw1c logo 2011.jpeg'
          },
          {
            title: 'Development internship',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/stb logo squared.jpeg'
          },
          {
            title: 'Web development iternship',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/safira 2014 white.png'
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
            imageSrc: 'http://file.timohoff.nl/avans.png'
          },
          {
            title: 'Logistiek-medewerker',
            isBound: false,
            imageSrc: 'http://file.timohoff.nl/blokker wrap logo.png'
          },
          {
            title: 'Software engineer internship',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/cordis suite.png'
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
            imageSrc: 'http://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'Soulve scaleup',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'C++ game engine development',
            isBound: false,
            imageSrc: ''
          },
          {
            title: '.NET migration',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'Soulve scaledown',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/medimapp.png'
          },
          {
            title: 'C# game engine development',
            isBound: false,
            imageSrc: ''
          },
          {
            title: 'Soulve end',
            isBound: true,
            imageSrc: 'http://file.timohoff.nl/medimapp.png'
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