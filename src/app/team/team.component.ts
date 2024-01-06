import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
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
      imageUrl: 'http://file.timohoff.nl/mozes.jpg',
      name: 'Mozes',
      emoji: '',
      description: $localize`:@@mozesDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/timo.jpg',
      name: 'Timo',
      emoji: '',
      description: $localize`:@@timoDescription:description`
    },
    {
      imageUrl: 'http://file.timohoff.nl/aiko.jpg',
      name: 'Aiko',
      emoji: '',
      description: $localize`:@@aikoDescription:description`
    }
  ];
}
