import { Component, Input } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component'
import { Profile } from '../profile/profile'

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent {
  @Input() profiles!: Profile[];
}
