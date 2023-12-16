import { Component } from '@angular/core';

import { Profile } from '../profile';
import { ProfilesComponent } from '../profiles/profiles.component';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NoteComponent, ProfilesComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  profiles : Profile[] = [
    {
      imageUrl: 'http://file.timohoff.nl/mozes.jpg',
      name: 'Mozes'
    },
    {
      imageUrl: 'http://file.timohoff.nl/timo.jpg',
      name: 'Timo'
    },
    {
      imageUrl: 'http://file.timohoff.nl/aiko.jpg',
      name: 'Aiko'
    }
  ];
}
