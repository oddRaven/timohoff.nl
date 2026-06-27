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
  profiles : Profile[] = [
    {
      image_name: 'mozes.jpg',
      title: 'Mozes',
      emoji: '',
      text: $localize`:@@mozesDescription:description`
    },
    {
      image_name: 'timo.jpg',
      title: 'Timo',
      emoji: '',
      text: $localize`:@@timoDescription:description`
    },
    {
      image_name: 'aiko.jpg',
      title: 'Aiko',
      emoji: '',
      text: $localize`:@@aikoDescription:description`
    }
  ];
}
