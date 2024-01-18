import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformServer, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SkillsComponent } from './skills/skills.component';
import { PassionsComponent } from './passions/passions.component';
import { WebsiteComponent } from './website/website.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollActiveDirective } from './scroll-active/scroll-active.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, PopUpComponent, MenuComponent, AboutComponent, TeamComponent, SkillsComponent, PassionsComponent, WebsiteComponent, ContactComponent, ScrollActiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'timohoff.nl';
  offset: number = 0;

  constructor (
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document)
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

  closePopUp () {
    this.document.body.classList.remove('overflow-hidden');
    let container = this.document.querySelector('.container');
    container?.classList.remove('disabled');
    let popUp = this.document.querySelector('app-pop-up');
    popUp?.classList.remove('active');
  }
}