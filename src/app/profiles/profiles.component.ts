import { Component, Input, Inject, LOCALE_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ProfileComponent } from '../profile/profile.component'
import { Profile } from '../profile/profile'
import { ElementService } from '../element/element.service'

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
    @Inject(DOCUMENT) private document: Document,
    private elementService: ElementService)
  {
  }

  selectProfile (event: Event, profile: Profile) {
    this.document
      .querySelectorAll('app-profiles .description')
      .forEach(e => e.remove());

    if (event.target == null) {
      return;
    }

    let targetElement = event.target as HTMLElement;
    let profileElement = targetElement.closest('app-profile') as Element;
    let isDeactivating = profileElement?.classList.contains('active');

    this.document
      .querySelectorAll('app-profiles .active')
      .forEach(e => e.classList.remove('active'));

    if (isDeactivating) {
      return;
    }

    let descriptionElement = this.elementService.createDiv('description', profile.description);
    let lastProfileElement = this.elementService.getLastFromRow(profileElement);
    lastProfileElement?.after(descriptionElement);

    profileElement?.classList.add('active');
  }
}