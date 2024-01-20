import { Component } from '@angular/core';

import { Profile } from '../profile/profile'
import { ProfilesComponent } from '../profiles/profiles.component'
import { NoteDirective } from '../note/note.directive'

@Component({
  selector: 'app-passions',
  standalone: true,
  imports: [ProfilesComponent, NoteDirective],
  templateUrl: './passions.component.html',
  styleUrl: './passions.component.scss'
})
export class PassionsComponent {
  profiles : Profile[] = [
    {
      imageUrl: 'http://file.timohoff.nl/zwembad-de-kwakel.jpg',
      imageAlt: $localize`:@@swimmingAlt:alt`,
      name: 'Swimming',
      emoji: '🏊‍♂️',
      description: $localize`:@@swimmingDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/van-gogh-the-sower.jpg',
      imageAlt: $localize`:@@paintingAlt:alt`,
      name: 'Painting',
      emoji: '🎨',
      description: $localize`:@@paintingDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/bricks.jpg',
      imageAlt: $localize`:@@legoAlt:alt`,
      name: 'Lego Design',
      emoji: '👷‍♂️',
      description: $localize`:@@legoDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/earth.jpg',
      imageAlt: $localize`:@@geopoliticsAlt:alt`,
      name: 'Geopolitics',
      emoji: '🌍',
      description: $localize`:@@geopoliticsDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/ancient-rome-model.jpg',
      imageAlt: $localize`:@@historyAlt:alt`,
      name: 'History',
      emoji: '📜',
      description: $localize`:@@historyDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/c-sharp.png',
      imageAlt: $localize`:@@gameEnginesAlt:alt`,
      name: 'Game Engines',
      emoji: '💻‍',
      description: $localize`:@@gameEnginesDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/beer.png',
      imageAlt: $localize`:@@drinksAlt:alt`,
      name: 'Drinks',
      emoji: '🍻',
      description: $localize`:@@drinksDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/lost-in-random.png',
      imageAlt: $localize`:@@gamingAlt:alt`,
      name: 'Gaming',
      emoji: '🕹️',
      description: $localize`:@@gamingDescription:description`
    }
  ];
}