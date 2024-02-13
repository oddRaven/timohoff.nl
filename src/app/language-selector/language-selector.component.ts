import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, NgClass, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  protected isEnglish: boolean = false; 
  protected isDutch: boolean = false; 

  protected dutch: string = $localize`:@@dutch:dutch`;
  protected english: string = $localize`:@@english:english`;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document)
  {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.isEnglish = $localize.locale == 'en';
    this.isDutch = $localize.locale == 'nl';
  }

  navigateToEnglish() {
    this.document.location.href = 'https://timohoff.nl/en';
  }

  navigateToDutch() {
    this.document.location.href = 'https://timohoff.nl/';
  }
}
