import { Component, Input, Inject, LOCALE_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ProfileComponent } from '../profile/profile.component'
import { Profile } from '../profile/profile'

const cat = `timoDescription`;

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent {
  @Input() profiles!: Profile[];

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DOCUMENT) private document: Document)
  {
  }

  clickProfile (event: Event, profile: Profile) {
    this.document
      .querySelectorAll('app-profiles .description')
      .forEach(e => e.remove());

    if (event.target == null) {
      return;
    }

    let targetElement = event.target as HTMLElement;
    let profileElement = targetElement.closest('app-profile');
    let imageElement = profileElement?.querySelector('.profile');
    let isDeactivating = imageElement?.classList.contains('active');

    this.document
      .querySelectorAll('app-profiles .active')
      .forEach(e => e.classList.remove('active'));

    if (isDeactivating) {
      return;
    }

    let descriptionElement = this.document.createElement("div");
    descriptionElement.classList.add('description');
    descriptionElement.innerHTML = profile.description;

    profileElement?.after(descriptionElement);

    imageElement?.classList.add('active');
  }
}