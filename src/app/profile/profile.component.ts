import { Component, Input } from '@angular/core';

import { Profile } from './profile'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() profile!: Profile;
}
