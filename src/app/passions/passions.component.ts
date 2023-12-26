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
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Swimming',
      emoji: '🏊‍♂️',
      description: $localize`:@@swimmingDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Painting',
      emoji: '🎨',
      description: $localize`:@@paintingDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Lego Design',
      emoji: '👷‍♂️',
      description: $localize`:@@legoDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Geopolitics',
      emoji: '🌍',
      description: $localize`:@@geopoliticsDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'History',
      emoji: '📜',
      description: $localize`:@@historyDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Game Engines',
      emoji: '💻‍',
      description: $localize`:@@gameEnginesDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Drinks',
      emoji: '🍻',
      description: $localize`:@@drinksDescription:description`
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Mario Kart',
      emoji: '🏎️',
      description: $localize`:@@marioKartDescription:description`
    }
  ];
}