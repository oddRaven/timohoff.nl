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
      image_name: 'zwembad-de-kwakel.jpg',
      title: $localize`:@@Swimming:Swimming`,
      emoji: '🏊‍♂️',
      text: $localize`:@@swimmingDescription:description`
    },
    {
      image_name: 'van-gogh-the-sower.jpg',
      title: $localize`:@@Painting:Painting`,
      emoji: '🎨',
      text: $localize`:@@paintingDescription:description`
    },
    {
      image_name: 'bricks.png',
      title: $localize`:@@Lego_design:Lego design`,
      emoji: '👷‍♂️',
      text: $localize`:@@legoDescription:description`
    },
    {
      image_name: 'earth.png',
      title: $localize`:@@Geopolitics:Geopolitics`,
      emoji: '🌍',
      text: $localize`:@@geopoliticsDescription:description`
    },
    {
      image_name: 'ancient-rome-model.png',
      title: $localize`:@@History:History`,
      emoji: '📜',
      text: $localize`:@@historyDescription:description`
    },
    {
      image_name: 'c-sharp.png',
      title: $localize`:@@Game_engines:Game engines`,
      emoji: '💻‍',
      text: $localize`:@@gameEnginesDescription:description`
    },
    {
      image_name: 'beer.png',
      title: $localize`:@@Drinks:Drinks`,
      emoji: '🍻',
      text: $localize`:@@drinksDescription:description`
    },
    {
      image_name: 'lost-in-random.png',
      title: $localize`:@@Video_games:Video games`,
      emoji: '🕹️',
      text: $localize`:@@gamingDescription:description`
    }
  ];
}