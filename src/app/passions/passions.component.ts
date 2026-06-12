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
      title: $localize`:@@Swimming:Swimming`,
      emoji: '🏊‍♂️',
      text: $localize`:@@swimmingDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/van-gogh-the-sower.jpg',
      imageAlt: $localize`:@@paintingAlt:alt`,
      title: $localize`:@@Painting:Painting`,
      emoji: '🎨',
      text: $localize`:@@paintingDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/bricks.jpg',
      imageAlt: $localize`:@@legoAlt:alt`,
      title: $localize`:@@Lego_design:Lego design`,
      emoji: '👷‍♂️',
      text: $localize`:@@legoDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/earth.jpg',
      imageAlt: $localize`:@@geopoliticsAlt:alt`,
      title: $localize`:@@Geopolitics:Geopolitics`,
      emoji: '🌍',
      text: $localize`:@@geopoliticsDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/ancient-rome-model.jpg',
      imageAlt: $localize`:@@historyAlt:alt`,
      title: $localize`:@@History:History`,
      emoji: '📜',
      text: $localize`:@@historyDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/c-sharp.png',
      imageAlt: $localize`:@@gameEnginesAlt:alt`,
      title: $localize`:@@Game_engines:Game engines`,
      emoji: '💻‍',
      text: $localize`:@@gameEnginesDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/beer.png',
      imageAlt: $localize`:@@drinksAlt:alt`,
      title: $localize`:@@Drinks:Drinks`,
      emoji: '🍻',
      text: $localize`:@@drinksDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/lost-in-random.png',
      imageAlt: $localize`:@@gamingAlt:alt`,
      title: $localize`:@@Video_games:Video games`,
      emoji: '🕹️',
      text: $localize`:@@gamingDescription:description`
    }
  ];
}