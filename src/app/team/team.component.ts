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
  profiles : Profile[] = [
    {
      imageUrl: 'http://file.timohoff.nl/mozes.jpg',
      name: 'Mozes',
      emoji: '',
      descriptions: {
        'en': "<p>I am Mozes the male cat. I live together with Timo and Aiko. I love most to sit on a lap the whole day.</p>",
        'nl': "<p>Ik ben Mozes de kater. Ik woon samen met Timo en Aiko. Ik houdt er het meest van om op schoot te zitten de hele dag.</p>"
      }
    },
    {
      imageUrl: 'http://file.timohoff.nl/timo.jpg',
      name: 'Timo',
      emoji: '',
      descriptions: {
        'en': "<p>I am a software developer located in the City of Utrecht.</p>",
        'nl': "<p>Ik ben een software ontwikkelaar wonende in de stad Utrecht.</p>"
      }
    },
    {
      imageUrl: 'http://file.timohoff.nl/aiko.jpg',
      name: 'Aiko',
      emoji: '',
      descriptions: {
        'en': "<p>I am Aiko the female cat. I live together with Timo and Mozes. I love most to eat food.</p>",
        'nl': "<p>Ik ben Aiko de poes. Ik woon samen met Timo en Mozes. Ik houdt er het meest van om te eten.</p>"
      }
    }
  ];
}
