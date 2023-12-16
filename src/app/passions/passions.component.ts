import { Component } from '@angular/core';

import { NoteComponent } from '../note/note.component'
import { Profile } from '../profile'
import { ProfilesComponent } from '../profiles/profiles.component'

@Component({
  selector: 'app-passions',
  standalone: true,
  imports: [NoteComponent, ProfilesComponent],
  templateUrl: './passions.component.html',
  styleUrl: './passions.component.scss'
})
export class PassionsComponent {
  profiles : Profile[] = [
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Swimming'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Painting'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Lego Design'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Geopolitics'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'History'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Game Engines'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Drinks'
    },
    {
      imageUrl: '/assets/placeholder-square.jpg',
      name: 'Mario Kart'
    }
  ];
}