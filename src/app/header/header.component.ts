import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SettingsComponent } from '../settings/settings.component';
import { PopUpService } from '../services/pop-up/pop-up.service';
import { ISection } from '../models/section';

@Component({
  selector: '[app-header]',
  standalone: true,
  imports: [ SettingsComponent, RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() sections: ISection[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private popUpService: PopUpService)
  {}

  openMobileMenu () {
    this.popUpService.open();
  }
}