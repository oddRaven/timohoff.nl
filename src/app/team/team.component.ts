import { Component } from '@angular/core';

import { Profile } from '../models/profile';
import { ProfilesComponent } from '../profiles/profiles.component';
import { NoteDirective } from '../note/note.directive';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ProfilesComponent, NoteDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamNote = $localize`:@@teamNote:team`

  profiles : Profile[] = [
    {
      imageUrl: 'https://file.timohoff.nl/mozes.jpg',
      imageAlt: $localize`:@@mozesAlt:alt`,
      name: 'Mozes',
      emoji: '',
      description: $localize`:@@mozesDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/timo.jpg',
      imageAlt: $localize`:@@timoAlt:alt`,
      name: 'Timo',
      emoji: '',
      description: $localize`:@@timoDescription:description`
    },
    {
      imageUrl: 'https://file.timohoff.nl/aiko.jpg',
      imageAlt: $localize`:@@aikoAlt:alt`,
      name: 'Aiko',
      emoji: '',
      description: $localize`:@@aikoDescription:description`
    }
  ];
}
