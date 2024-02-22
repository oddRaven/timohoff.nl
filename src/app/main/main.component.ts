import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { MainSectionComponent } from '../main-section/main-section.component';
import { TeamComponent } from '../team/team.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { PassionsComponent } from '../passions/passions.component';
import { WebsiteComponent } from '../website/website.component';
import { ContactComponent } from '../contact/contact.component';
import { ScrollActiveDirective } from '../scroll-active/scroll-active.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainSectionComponent, TeamComponent, ExperiencesComponent, PassionsComponent, WebsiteComponent, ContactComponent, ScrollActiveDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  offset: number = 0;
  aboutNote = $localize`:@@aboutNote:about`;
  experiencesNote = $localize`:@@experiencesNote:experiences`;
  teamNote = $localize`:@@teamNote:team`;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  ngOnInit(): void {
    this.initializeOffset();
  }

  initializeOffset () {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    if (window.innerWidth <= 500) {
      this.offset = 40;
    }
  }
}
