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
      emoji: '🏊‍♂️'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Painting',
      emoji: '🎨'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Lego Design',
      emoji: '👷‍♂️'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Geopolitics',
      emoji: '🌍'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'History',
      emoji: '📜'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Game Engines',
      emoji: '💻‍'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Drinks',
      emoji: '🍻'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Mario Kart',
      emoji: '🏎️'
    }
  ];
}