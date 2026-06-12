import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { MainSectionComponent } from '../main-section/main-section.component';
import { TeamComponent } from '../team/team.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { PassionsComponent } from '../passions/passions.component';
import { WebsiteComponent } from '../website/website.component';
import { ContactComponent } from '../contact/contact.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { ScrollActiveDirective } from '../scroll-active/scroll-active.directive';
import { SectionService } from '../services/section/section.service';
import { ISection } from '../models/section';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainSectionComponent, TeamComponent, ExperiencesComponent, PassionsComponent, WebsiteComponent, ContactComponent, ProfilesComponent, ScrollActiveDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  offset: number = 0;
  sections: ISection[] = [];

  aboutTitle = $localize`:@@about:About`;
  contactTitle = $localize`:@@contact:Contact`;
  experiencesTitle = $localize`:@@experiences:Experiences`;
  passionsTitle = $localize`:@@passions:Passions`;
  teamTitle = $localize`:@@team:Team`;
  websiteTitle = $localize`:@@website:Website`;

  aboutNote = $localize`:@@aboutNote:about`;
  experiencesNote = $localize`:@@experiencesNote:experiences`;
  teamNote = $localize`:@@teamNote:team`;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sectionService: SectionService,
  ){
    sectionService
      .getAllWithItems()
      .then((sections: ISection[]) => this.sections = sections);
  }

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
