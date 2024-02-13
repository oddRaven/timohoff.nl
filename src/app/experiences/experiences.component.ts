import { Component } from '@angular/core';

import { TimelineComponent } from '../timeline/timeline.component';
import { Timeline } from '../timeline/timeline';
import { StickyScrollDirective } from '../sticky-scroll/sticky-scroll.directive';
import { Waypoint } from '../timeline/waypoint';

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
          new Waypoint({
            title: 'Montessori school',
            imageSrc: 'https://file.timohoff.nl/montessori 2011 white.png'
          })
        ]
      },
      {
        title: 'Secondary',
        color: 'red',
        waypoints: [
          new Waypoint({
            title: 'VMBO-TL',
            imageSrc: 'https://file.timohoff.nl/lek en linge white.png'
          }),
          new Waypoint({
            title: 'Krantenbezorger',
            isBound: false,
          }),
          new Waypoint({
            title: 'Logistiek-medewerker 2010',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
          }),
          new Waypoint({
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
          new Waypoint({
            title: 'Application Development',
            imageSrc: 'https://file.timohoff.nl/kw1c logo 2011.jpeg'
          }),
          new Waypoint({
            title: 'Development internship',
            imageSrc: 'https://file.timohoff.nl/stb logo squared.jpeg'
          }),
          new Waypoint({
            title: 'Web development iternship',
            imageSrc: 'https://file.timohoff.nl/safira 2014 white.png'
          }),
          new Waypoint({
            title: 'PHP development timohoff.nl',
            isBound: false,
          }),
          new Waypoint({
            title: 'Java game development',
            isBound: false,
          })
        ]
      },
      {
        title: 'HBO',
        color: 'aqua',
        waypoints: [
          new Waypoint({
            title: 'Informatica - Software Engineering',
            imageSrc: 'https://file.timohoff.nl/avans.png'
          }),
          new Waypoint({
            title: 'Logistiek-medewerker',
            isBound: false,
            imageSrc: 'https://file.timohoff.nl/blokker wrap logo.png'
          }),
          new Waypoint({
            title: 'Software engineer internship',
            imageSrc: 'https://file.timohoff.nl/cordis suite.png'
          }),
        ]
      },
      {
        title: 'MediMapp',
        color: 'c31e5f',
        waypoints: [
          new Waypoint({
            title: 'Junior Software Engineer',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Waypoint({
            title: 'Soulve scaleup',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Waypoint({
            title: 'C++ game engine development',
            isBound: false,
          }),
          new Waypoint({
            title: '.NET migration',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Waypoint({
            title: 'Soulve scaledown',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          }),
          new Waypoint({
            title: 'C# game engine development',
            isBound: false,
          }),
          new Waypoint({
            title: 'Soulve end',
            imageSrc: 'https://file.timohoff.nl/medimapp.png'
          })
        ]
      },
      {
        title: 'Career transition',
        color: 'grey',
        waypoints: [
          new Waypoint({
            title: 'Angular development timohoff.nl',
          }),
        ]
      }
    ]
  }
}