import { Component, OnInit, PLATFORM_ID, Inject, signal } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MenuComponent } from './menu/menu.component';
import { PopUpService } from './services/pop-up/pop-up.service';
import { SectionService } from './services/section/section.service';
import { ISection } from './models/section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, PopUpComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'timohoff.nl';
  sections = signal<ISection[]>([]);

  constructor (
    private popUpService: PopUpService,
    private sectionService: SectionService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ){
  }

  ngOnInit(): void {
    this.sectionService
      .getAll()
      .then((sections: ISection[]) => this.sections.set(sections));

    this.router.events.subscribe(this.fragmentNavigationFallback);
  }

  closePopUp () {
    this.popUpService.close();
  }

  private fragmentNavigationFallback (event: Event) {
    if (event instanceof NavigationEnd == false || isPlatformServer(this.platformId)) {
      return;
    }

    let navigationend = event as NavigationEnd;
    let regex = /#(.*)$/;
    let match = navigationend.urlAfterRedirects.match(regex);

    if (!match) {
      return;
    }

    let fragment = match[0];

    window.setTimeout(() => scrollIntoView(fragment));
  }
}

function scrollIntoView (fragment: string) {
    const targetelement = document.querySelector(fragment!);

    if (!targetelement) {
      return;
    }

    targetelement.scrollIntoView();

    // account for mobile top bar.
    if (window.innerWidth <= 500){
      window.scrollBy(0, -40);
    }
}