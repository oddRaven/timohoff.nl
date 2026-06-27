import { Component, Input, Inject, LOCALE_ID, ElementRef, ViewContainerRef, ViewChildren, QueryList, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ProfileComponent } from '../profile/profile.component'
import { ProfileDescriptionComponent } from '../profile-description/profile-description.component'
import { Profile } from '../models/profile'
import { ElementService } from '../element/element.service'

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent {
  @ViewChildren('profileElement', { read: ViewContainerRef }) profileViews!: QueryList<ViewContainerRef>;

  @Input() profiles!: Profile[];

  componentRef?: ComponentRef<ProfileDescriptionComponent>;
  toDestroyComponentRef?: ComponentRef<ProfileDescriptionComponent>;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private elementService: ElementService)
  {
  }

  selectProfile (event: Event, profile: Profile) {
    if (this.toDestroyComponentRef != null) {
      this.toDestroyComponentRef.destroy();
    }

    if (this.componentRef != null && this.componentRef.instance.visible == true) {
      this.componentRef.instance.visible = false;
      this.toDestroyComponentRef = this.componentRef;
    }

    if (
      event.target == null ||
      profile.text == null ||
      profile.text.trim() == ''
    ) {
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

    let profileViewsArr = this.profileViews.toArray();
    let lastProfileElement = this.elementService.getLastFromRow(profileElement);

    let profileElements = Array.from(this.elementRef.nativeElement.querySelectorAll('app-profile'));
    let lastProfileIndex = profileElements.indexOf(lastProfileElement);

    this.componentRef = profileViewsArr[lastProfileIndex].createComponent(ProfileDescriptionComponent);
    this.componentRef.instance.description = profile.text;

    profileElement?.classList.add('active');
  }
}