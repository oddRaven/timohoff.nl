import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SkillsComponent } from './skills/skills.component';
import { PassionsComponent } from './passions/passions.component';
import { WebsiteComponent } from './website/website.component';
import { ScrollActiveDirective } from './scroll-active/scroll-active.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MenuComponent, AboutComponent, TeamComponent, SkillsComponent, PassionsComponent, WebsiteComponent, ScrollActiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'timohoff.nl';
  offset: number = 0;

  constructor (
    @Inject(PLATFORM_ID) private platformId: Object)
  {
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