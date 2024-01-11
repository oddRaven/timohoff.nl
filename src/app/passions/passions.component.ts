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
  passionsNote = $localize`:@@passionsNote:passions`;

  profiles : Profile[] = [
    {
      imageUrl: 'http://file.timohoff.nl/zwembad-de-kwakel.jpg',
      name: 'Swimming',
      emoji: '🏊‍♂️',
      description: $localize`:@@swimmingDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/van-gogh-the-sower.jpg',
      name: 'Painting',
      emoji: '🎨',
      description: $localize`:@@paintingDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/bricks.jpg',
      name: 'Lego Design',
      emoji: '👷‍♂️',
      description: $localize`:@@legoDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/earth.jpg',
      name: 'Geopolitics',
      emoji: '🌍',
      description: $localize`:@@geopoliticsDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/ancient-rome-model.jpg',
      name: 'History',
      emoji: '📜',
      description: $localize`:@@historyDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/c-sharp.png',
      name: 'Game Engines',
      emoji: '💻‍',
      description: $localize`:@@gameEnginesDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/beer.png',
      name: 'Drinks',
      emoji: '🍻',
      description: $localize`:@@drinksDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/lost-in-random.png',
      name: 'Gaming',
      emoji: '🕹️',
      description: $localize`:@@gamingDescription:description`
    }
  ];
}