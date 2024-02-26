import { Component } from '@angular/core';

import { Profile } from '../models/profile'
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
      imageUrl: 'https://file.timohoff.nl/zwembad-de-kwakel.jpg',
      imageAlt: $localize`:@@swimmingAlt:alt`,
      name: $localize`:@@Swimming:Swimming`,
      emoji: '🏊‍♂️',
      description: $localize`:@@swimmingDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/van-gogh-the-sower.jpg',
      imageAlt: $localize`:@@paintingAlt:alt`,
      name: $localize`:@@Painting:Painting`,
      emoji: '🎨',
      description: $localize`:@@paintingDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/bricks.jpg',
      imageAlt: $localize`:@@legoAlt:alt`,
      name: $localize`:@@Lego_design:Lego design`,
      emoji: '👷‍♂️',
      description: $localize`:@@legoDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/earth.jpg',
      imageAlt: $localize`:@@geopoliticsAlt:alt`,
      name: $localize`:@@Geopolitics:Geopolitics`,
      emoji: '🌍',
      description: $localize`:@@geopoliticsDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/ancient-rome-model.jpg',
      imageAlt: $localize`:@@historyAlt:alt`,
      name: $localize`:@@History:History`,
      emoji: '📜',
      description: $localize`:@@historyDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/c-sharp.png',
      imageAlt: $localize`:@@gameEnginesAlt:alt`,
      name: $localize`:@@Game_engines:Game engines`,
      emoji: '💻‍',
      description: $localize`:@@gameEnginesDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/beer.png',
      imageAlt: $localize`:@@drinksAlt:alt`,
      name: $localize`:@@Drinks:Drinks`,
      emoji: '🍻',
      description: $localize`:@@drinksDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/lost-in-random.png',
      imageAlt: $localize`:@@gamingAlt:alt`,
      name: $localize`:@@Video_games:Video games`,
      emoji: '🕹️',
      description: $localize`:@@gamingDescription:description`
    }
  ];
}