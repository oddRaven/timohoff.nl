import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { AboutComponent } from '../about/about.component';
import { TeamComponent } from '../team/team.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { PassionsComponent } from '../passions/passions.component';
import { WebsiteComponent } from '../website/website.component';
import { ContactComponent } from '../contact/contact.component';
import { ScrollActiveDirective } from '../scroll-active/scroll-active.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutComponent, TeamComponent, ExperiencesComponent, PassionsComponent, WebsiteComponent, ContactComponent, ScrollActiveDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  offset: number = 0;

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
