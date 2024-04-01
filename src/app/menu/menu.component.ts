import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SectionService } from '../services/section/section.service';
import { ISection } from '../models/section';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  sections: ISection[] = [];

  constructor(
    private sectionService: SectionService,
  ){
    sectionService
      .getAll()
      .then((sections: ISection[]) => this.sections = sections);
  }
}
