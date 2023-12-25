import { Component, Input, Inject, LOCALE_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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

  defaultDescriptions: Record<string, string> = {
    'en': 'No description.',
    'nl': 'Geen beschrijving.',
  };

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DOCUMENT) private document: Document)
  {
  }

  clickProfile (event: Event, profile: Profile) {
    this.document
      .querySelectorAll('app-profiles .description')
      .forEach(e => e.remove());

    this.document
      .querySelectorAll('app-profiles .active')
      .forEach(e => e.classList.remove('active'));

    if (event.target == null) {
      return;
    }

    let descriptionElement = this.document.createElement("div");
    descriptionElement.classList.add('description');
    descriptionElement.innerHTML = this.getDescription(profile);

    let targetElement = event.target as HTMLElement;
    let profileElement = targetElement.closest('app-profile');
    profileElement?.after(descriptionElement);

    let imageElement = profileElement?.querySelector('.profile');
    imageElement?.classList.add('active');
  }

  getDescription (profile: Profile) {
    if (this.locale in profile.descriptions) {
      return profile.descriptions[this.locale];
    }

    return this.defaultDescriptions[this.locale];
  }
}